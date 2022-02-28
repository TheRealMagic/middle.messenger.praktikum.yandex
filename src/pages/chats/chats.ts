import {Block} from "../../components/block/block";
import {Container} from "../../components/container/container";
import {linkTemplate} from "../../components/block/template";
import {Input} from "../../components/Input/input";
import {
  chatContainerListTemplate,
  chatContainerTemplate,
  chatMessagesContainerTemplate,
  leftContainerTemplate,
  messageSpanTemplate,
  messageWrapTemplate,
  sendFormTemplate,
  template
} from "./template";
import {Chat} from "../../modules/chat/chat";
import {Form} from "../../components/form/form";
import {Label} from "../../components/label/label";


import "./style.scss";
import {ChatEvents} from "../../controllers/ChatsPageController";
import {Router} from "../../utils/RouteUtils/Router";
import ApplicationStore from "../../modules/ApplicationState/ApplicationStore";
import get from "../../utils/get";
import {ReceivedMessage} from "./types";


const activeChatClass = "chat-item__active";

export class ChatsPage extends Block {
  
  chatListContainer: Container;
  
  chatContainer: Container;
  
  chatMessagesContainer: Container;
  
  chatMessages: Block;
  
  sendForm: Form;
  
  search: Input;
  
  deleteChatButton: Container;
  
  addUserButton: Container;
  
  deleteUserButton: Container;
  
  activeChatId: number;
  
  constructor() {
    const profileLink: Block = new Block("a", {
      classes: ["left-container__profile-link", "base-link"],
      href: "#",
      textContent: "Профиль ❯",
      listeners: {
        click: (e: Event) => {
          e.preventDefault();
          const router = new Router("body");
          router.go("/settings");
        }
      }
    }, linkTemplate);
    const chatSearchField: Input = new Input({
      classes: [
        "left-container__search",
        "left-container__search_empty",
        "base-input",
        "base-input-text"
      ],
      placeholder: "🔎 Поиск"
    });
    
    const addChatButton: Container = new Container({
      classes: [
        "chat-list-action-button",
        "add-chat-button"
      ],
      textContent: "Добавить чат"
    });
    const deleteChatButton: Container = new Container({
      classes: [
        "chat-list-action-button",
        "delete-chat-button"
      ],
      textContent: "Удалить чат"
    });
    const addUserButton: Container = new Container({
      classes: [
        "chat-list-action-button",
        "add-chat-button"
      ],
      textContent: "Добавить пользователя в чат"
    });
    const deleteUserButton: Container = new Container({
      classes: [
        "chat-list-action-button",
        "delete-chat-button"
      ],
      textContent: "Удалить пользователя из чата"
    });
    
    const chatListContainer: Container = new Container({
      classes: ["chat-list-container"],
      textContent: "Загрузка чатов..."
    }, chatContainerListTemplate);
    const leftContainer: Container = new Container({
      classes: ["left-container"],
      chatListContainer,
      chatSearchField,
      deleteChatButton,
      addChatButton,
      addUserButton,
      deleteUserButton,
      profileLink
    }, leftContainerTemplate);
    
    const chatContainer: Container = new Container({
      classes: ["chat-container__empty"],
      textContent: "Выберите чат чтобы отправить сообщение"
    }, chatContainerTemplate);
    
    super("div", {
      classes: ["page-wrapper"],
      leftContainer,
      chatContainer,
    }, template);
    
    chatListContainer.setProps({
      listeners: {
        click: this.onChatItemClick.bind(this)
      }
    });
    
    this.chatListContainer = chatListContainer;
    this.chatContainer = chatContainer;
    this.submit();
    chatSearchField.setProps({
      listeners: {
        keyup: this.searchChats.bind(this)
      }
    });
    this.search = chatSearchField;
    addChatButton.setProps({
      listeners: {
        click: () => this.eventBus.emit(ChatEvents.ADD_CHAT)
      }
    });
    deleteChatButton.setProps({
      listeners: {
        click: () => this.eventBus.emit(ChatEvents.DELETE_CHAT, this.activeChatId)
      }
    });
    addUserButton.setProps({
      listeners: {
        click: () => this.eventBus.emit(ChatEvents.ADD_CHAT_USER, this.activeChatId)
      }
    });
    deleteUserButton.setProps({
      listeners: {
        click: () => this.eventBus.emit(ChatEvents.DELETE_CHAT_USER, this.activeChatId)
      }
    });
    deleteChatButton.hide();
    addUserButton.hide();
    deleteUserButton.hide();
    this.deleteChatButton = deleteChatButton;
    this.addUserButton = addUserButton;
    this.deleteUserButton = deleteUserButton;
    this.deleteUserButton = deleteUserButton;
  }
  
  submit() {
    this.eventBus.on(ChatEvents.ON_CHAT_ACTIVATED, this.onChatActivated.bind(this));
    this.eventBus.on(ChatEvents.REFRESH_CHATS, (chats: Chat[]) => this.refreshChatList(chats));
    this.eventBus.on(ChatEvents.ON_CHAT_DESELECTED, () => this.onChatDeselected());
    this.eventBus.on(ChatEvents.RECEIVE_MESSAGE, (messages: ReceivedMessage[]) => {
      const config = messages.map( message  => {
        return {
          isMine: get(ApplicationStore.getState(), "user.id") === message.user_id,
          message: message.content
        };
      });
      this.addMessageHandler(config);
    });
  }
  
  refreshChatList(chats: Chat[]): void {
    if (chats.length) {
      const searchValue: string = this.search.props.value;
      if (searchValue) {
        chats = chats.filter(chat => chat.title.includes(searchValue));
      }
      const chatBlocks: Chat[] = chats.map((chat) => {
        return new Chat(chat);
      });
      this.chatListContainer.setProps({chats: chatBlocks, textContent: ""});
    } else {
      this.chatListContainer.setProps({textContent: "Нет чатов", chats: []});
    }
  }
  
  onChatDeselected() {
    this.chatContainer.element.classList.remove("chat-container");
    this.chatContainer.setProps({
      classes: ["chat-container__empty"],
      textContent: "Выберите чат чтобы отправить сообщение",
      chatMessagesContainer: null,
      sendForm: null
    });
    this.deleteChatButton.hide();
    this.addUserButton.hide();
    this.deleteUserButton.hide();
  }
  
  searchChats(e: KeyboardEvent) {
    if (e.code === "Enter") {
      const searchValue: string = (e.target as HTMLInputElement).value || "";
      this.eventBus.emit("chatSearchFieldChanged", searchValue);
    }
  }
  
  onChatItemClick(e: Event): void {
    const target: HTMLElement = (e.target as HTMLElement);
    const targetChat: HTMLElement | null = target.closest<HTMLElement>(".chat-item");
    if (targetChat && Number(targetChat.dataset.chatId) !== this.activeChatId) {
      const activeItem: HTMLElement | null = this.element.querySelector(`.${activeChatClass}`);
      if (activeItem) {
        activeItem.classList.remove(activeChatClass);
      }
      targetChat.classList.add(activeChatClass);
      const chatId: string | undefined = targetChat.dataset.chatId;
      this.eventBus.emit("chatActivated", chatId);
    }
  }
  
  onChatActivated(chatId: string = ("" + this.activeChatId || "")): void {
    if (!this.sendForm) {
      const attachButton: Label = new Label({
        classes: [
          "send-item",
          "send-button"
        ],
        textContent: "+"
      });
      const message: Input = new Input({
        classes: [
          "send-item",
          "send-message"
        ],
        type: "text",
        name: "message",
        placeholder: "Введите сообщение"
      });
      const sendMessageButton: Input = new Input({
        classes: [
          "send-item",
          "send-button"
        ],
        type: "submit",
        value: "\u279c"
      });
      const sendForm: Form = new Form({
        classes: [
          "send-message-form"
        ],
        attachButton,
        message,
        sendMessageButton,
        listeners: {
          submit: this.onSendFormSubmit.bind(this)
        }
      }, sendFormTemplate);
      this.sendForm = sendForm;
      this.chatMessagesContainer = this.getChatMessagesContainer(Number(chatId));
    }
    
    this.activeChatId = Number.parseInt(chatId);
    this.deleteChatButton.show();
    this.addUserButton.show();
    this.deleteUserButton.show();
    this.chatContainer.setProps({
      classes: ["chat-container"],
      textContent: "",
      sendForm: this.sendForm,
      chatMessagesContainer: this.chatMessagesContainer
    });
  }
  
  getChatMessagesContainer(chatId: Number): Container {
    return new Container({
      chatId,
      classes: [
        "chat-messages-container",
      ],
    }, chatMessagesContainerTemplate);
  }
  
  getMessages(): Container[] {
    if (this.chatMessagesContainer.props.chatId === this.activeChatId) {
      return this.chatMessagesContainer.props.messages || [];
    } else {
      return [];
    }
    
  }
  
  getChatItem(config: { isMine: boolean, message: string }): Container {
    const cls: string[] = [
      "chat-message-item-span"
    ];
    if (config.isMine) {
      cls.push("my-message");
    }
    return new Container({
      classes: [
        "chat-message-item"
      ],
      messageSpan: new Container({textContent: config.message, classes: cls}, messageSpanTemplate),
    }, messageWrapTemplate);
  }
  
  onSendFormSubmit(e: Event): void {
    e.preventDefault();
    const text: string = (e.target as HTMLFormElement).message.value;
    if (text) {
      (e.target as HTMLFormElement).message.value = "";
      this.eventBus.emit(ChatEvents.SEND_MESSAGE, this.activeChatId, text);
    }
  }
  
  addMessageHandler(messages: { isMine: boolean, message: string }[]) {
    const currentMessages: Container[] = this.getMessages();
    for (let i = messages.length - 1; i >= 0; i--) {
      currentMessages.push(this.getChatItem(messages[i]));
    }
    this.chatMessagesContainer = this.getChatMessagesContainer(this.activeChatId);
    this.chatMessagesContainer.setProps({messages: currentMessages});
    this.chatContainer.setProps({chatMessagesContainer: this.chatMessagesContainer});
  }
  
}
