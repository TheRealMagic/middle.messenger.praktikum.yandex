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

const chatPageApi = new ChatPageApi();

export enum ChatEvents {
  GET_CHATS = "getChats",
  REFRESH_CHATS = "refreshChatList",
  ADD_CHAT = "addChatClick",
  DELETE_CHAT = "deleteChatClick"
}

export class ChatsPageController extends BaseController {
  
  constructor() {
    super(new ChatsPage());
    this.subscribe();
    this.publish();
  }
  
  subscribe() {
    ApplicationStore.on(StoreEvents.Updated, (path: string, value: any) => this.onApplicationStoreUpdate(path, value));
    this.view.eventBus.on(ChatEvents.GET_CHATS, () => this.getChats());
    this.view.eventBus.on(ChatEvents.ADD_CHAT, () => this.onAddChatClick());
    this.view.eventBus.on(ChatEvents.DELETE_CHAT, () => this.onDeleteChatClick());
  }
  
  publish() {
    this.view.eventBus.emit(ChatEvents.GET_CHATS);
  }
  
  getChats(): void {
    chatPageApi.getChats();
  }
  
  onApplicationStoreUpdate(path: string, value: any): void {
    if (path === "chats") {
      this.onChatsUpdated(value);
    }
  }
  
  onChatsUpdated(chats: Chat[]) {
    this.view.eventBus.emit(ChatEvents.REFRESH_CHATS, chats);
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
  
  onDeleteChatClick() {
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
          debugger
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
      label,
      button
    }, deleteChatTemplate);
    const popup = new Popup({popupContainer: popupContainer});
    popup.show();
  }
  
  getChatMessages() {

  }
}
