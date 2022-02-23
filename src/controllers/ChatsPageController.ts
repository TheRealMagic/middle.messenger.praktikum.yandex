import {BaseController} from "./BaseController";
import {Chat} from "../modules/chat/chat";
import {ChatsPage} from "../pages/Chats/chats";
import {ChatPageApi} from "../utils/API/ChatPageApi";
import ApplicationStore, {StoreEvents} from "../modules/ApplicationState/ApplicationStore";
import {Input} from "../components/Input/input";
import {Container} from "../components/container/container";
import {Popup} from "../modules/popup/popup";
import {Label} from "../components/label/label";
import {addChatTemplate, deleteChatTemplate} from "../pages/Chats/template";
import get from "../utils/get";
import {ReceivedMessage} from "../pages/Chats/types";

const chatPageApi = new ChatPageApi();

export enum ChatEvents {
  GET_CHATS = "getChats",
  REFRESH_CHATS = "refreshChatList",
  ADD_CHAT = "addChatClick",
  DELETE_CHAT = "deleteChatClick",
  ON_CHAT_DESELECTED = "onChatChatDeselected",
  ON_CHAT_ACTIVATED = "chatActivated",
  ADD_CHAT_USER = "addChatUser",
  DELETE_CHAT_USER = "deleteChatUser",
  SEND_MESSAGE = "sendMessage",
  RECEIVE_MESSAGE = "receiveMessage"
}

export class ChatsPageController extends BaseController {
  
  private sockets: Record<string, any> = {};
  
  constructor() {
    super(new ChatsPage());
    this.subscribe();
    this.publish();
  }
  
  subscribe() {
    ApplicationStore.on(StoreEvents.Updated, (path: string, value: any) => this.onApplicationStoreUpdate(path, value));
    this.view.eventBus.on(ChatEvents.GET_CHATS, () => this.getChats());
    this.view.eventBus.on(ChatEvents.ON_CHAT_ACTIVATED, (chatId: number) => this.onChatActivated(chatId));
    this.view.eventBus.on(ChatEvents.ADD_CHAT, () => this.onAddChatClick());
    this.view.eventBus.on(ChatEvents.DELETE_CHAT, (chatId: number) => this.onDeleteChatClick(chatId));
    this.view.eventBus.on(ChatEvents.ADD_CHAT_USER, (chatId: number) => this.showUserActionPopup(chatId, false));
    this.view.eventBus.on(ChatEvents.DELETE_CHAT_USER, (chatId: number) => this.showUserActionPopup(chatId, true));
    this.view.eventBus.on(ChatEvents.SEND_MESSAGE, (chanId: number, message: string) => this.sendMessage(chanId, message));
  }
  
  publish() {
    this.view.eventBus.emit(ChatEvents.GET_CHATS);
  }
  
  getChats(): void {
    chatPageApi.getChats();
  }
  
  sendMessage(chatId: number, message: string) {
    const socket: WebSocket = this.sockets[chatId];
    if (socket) {
      socket.send(JSON.stringify({
        content: message,
        type: "message"}));
    }
  }
  
  onApplicationStoreUpdate(path: string, value: any): void {
    if (path === "chats") {
      this.onChatsUpdated(value);
    }
    if (/tokens.*/.test(path)) {
      this.onTokensChanged(value);
    }
    if (path === "activeChatNewMessagesCount") {
      this.onNewMessagesCountCHanged();
    }
  }
  
  onNewMessagesCountCHanged() {
    const activeChatId = (this.view as ChatsPage).activeChatId;
    this.sockets[activeChatId].send(JSON.stringify(  {
      content: "0",
      type: "get old"
    }));
  }
  
  onChatsUpdated(chats: Chat[]) {
    this.view.eventBus.emit(ChatEvents.REFRESH_CHATS, chats);
  }
  
  onTokensChanged(value: any) {
    const token = value.token;
    if (!token) {
      return;
    }
    const activeChatId: number = (this.view as ChatsPage).activeChatId;
    if (!this.sockets[activeChatId]) {
      this.createSocket(activeChatId, token);
    } else {
      chatPageApi.getNewMessagesCount(activeChatId);
    }
  }
  
  createSocket(chatId: number, token: string) {
    if (!chatId) {
      return;
    }
    const userId = get(ApplicationStore.getState(), "user.id");
    if (!userId) {
      return;
    }
    const socketTemplate: string = `wss://ya-praktikum.tech/ws/chats/${userId}/${chatId}/${token}`;
    const socket: WebSocket = this.sockets[chatId] = new WebSocket(socketTemplate);
    this.applySocketListeners(socket, chatId);
  }
  
  applySocketListeners(socket: WebSocket, chatId: number) {
    socket.addEventListener("open", () => {
      chatPageApi.getNewMessagesCount(chatId);
      console.log("Соединение установлено " + chatId);
    });
    socket.addEventListener("close", event => {
      if (event.wasClean) {
        console.log("Соединение закрыто чисто");
      } else {
        console.log("Обрыв соединения");
      }
      console.log(chatId + ` Код: ${event.code} | Причина: ${event.reason}`);
      delete this.sockets[chatId];
    });
    socket.addEventListener("message", event => {
      const message: any = JSON.parse((event as any).data);
      if (Array.isArray(message)) {
        this.view.eventBus.emit(ChatEvents.RECEIVE_MESSAGE, message);
      }
      if (message.type === "message") {
        this.view.eventBus.emit(ChatEvents.RECEIVE_MESSAGE, [message]);
      }
    });
  
    socket.addEventListener("error", event => {
      console.log("Ошибка", (event as any).message);
    });
    
    setInterval(() => {
      socket.send(JSON.stringify({type: "ping"}));
    },  1 * 60 * 1000);
  }
  
  onReceiveMessage(message: ReceivedMessage) {
    this.view.eventBus.emit(ChatEvents.RECEIVE_MESSAGE, message);
  }
  
  onAddChatClick() {
    const input: Input = new Input({
      classes: [
        "base-input",
        "base-input-text",
        "sign-text-input"
      ],
      placeholder: "Название чата"
    });
    const button = new Input({
      value: "Создать",
      classes: [
        "popup-btn",
        "base-input-button",
        "sign-btn"
      ],
      listeners: {
        click: (e: Event) => {
          e.cancelBubble = true;
          e.preventDefault();
          const inputValue = (input.element as HTMLInputElement).value;
          if (inputValue) {
            chatPageApi.createChat(inputValue);
            this.view.eventBus.emit(ChatEvents.ON_CHAT_DESELECTED);
          }
          popup.hide();
        }
      }
    });
    const popupContainer: Container = new Container({
      classes: [
        "main-block",
        "change-avatar-popup"
      ],
      listeners: {
        click: (e: Event) => {
          e.cancelBubble = true;
        }
      },
      input,
      button
    }, addChatTemplate);
    const popup = new Popup({popupContainer: popupContainer});
    popup.show();
  }
  
  onDeleteChatClick(chatId: number) {
    const label: Label = new Label({
      textContent: "Вы уверены что хотите удалить чат?"
    });
    const button = new Input({
      value: "Удалить",
      classes: [
        "popup-btn",
        "base-input-button",
        "sign-btn"
      ],
      listeners: {
        click: (e: Event) => {
          e.cancelBubble = true;
          e.preventDefault();
          popup.hide();
          chatPageApi.deleteChat(chatId);
          this.view.eventBus.emit(ChatEvents.ON_CHAT_DESELECTED);
        }
      }
    });
    const popupContainer: Container = new Container({
      classes: [
        "main-block",
        "change-avatar-popup"
      ],
      listeners: {
        click: (e: Event) => {
          e.cancelBubble = true;
        }
      },
      label,
      button
    }, deleteChatTemplate);
    const popup = new Popup({popupContainer: popupContainer});
    popup.show();
  }
  
  showUserActionPopup(chatId: number, isDelete: boolean) {
    const input: Input = new Input({
      classes: [
        "base-input",
        "base-input-text",
        "sign-text-input"
      ],
      placeholder: "Id пользователей"
    });
    const button = new Input({
      value: isDelete ? "Удалить" : "Добавить",
      classes: [
        "popup-btn",
        "base-input-button",
        "sign-btn"
      ],
      listeners: {
        click: (e: Event) => {
          e.cancelBubble = true;
          e.preventDefault();
          const inputValue = (input.element as HTMLInputElement).value;
          if (inputValue) {
            const data = {
              users: inputValue.split(",").map(item => Number.parseInt(item)),
              chatId: chatId
            };
            if (!isDelete) {
              chatPageApi.addChatUsers(data);
            } else {
              chatPageApi.deleteChatUsers(data);
            }
          }
          popup.hide();
        }
      }
    });
    const popupContainer: Container = new Container({
      classes: [
        "main-block",
        "change-avatar-popup"
      ],
      listeners: {
        click: (e: Event) => {
          e.cancelBubble = true;
        }
      },
      input,
      button
    }, addChatTemplate);
    const popup = new Popup({popupContainer: popupContainer});
    popup.show();
  }
  
  onChatActivated(chatId: number) {
    const state = ApplicationStore.getState();
    const token = get(state, `tokens.${chatId}.token`);
    if (!token) {
      chatPageApi.getChatToken(chatId);
    } else {
      chatPageApi.getNewMessagesCount(chatId);
    }
  }
  
}
