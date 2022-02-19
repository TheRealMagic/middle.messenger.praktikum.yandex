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
import {render} from "../../utils/render";
import {ProfilePage} from "../newprofile/profile";
import {Chat} from "../../modules/chat/chat";
import {ChatController} from "../../controllers/ChatController";
import {Form} from "../../components/form/form";
import {Label} from "../../components/label/label";


import "./style.scss";


export class ChatsPage extends Block {
  
  controller: ChatController;
  
  chatListContainer: Container;
  
  chatContainer: Container;
  
  chatMessagesContainer: Container;
  
  chatMessages: Block;
  
  sendForm: Form;
  
  constructor() {
    const profileLink: Block = new Block("a", {
      classes: ["left-container__profile-link", "base-link"],
      href: "#",
      textContent: "Профиль ❯",
      listeners: {
        click: (e: Event) => {
          e.preventDefault();
          render("body", new ProfilePage());
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
    
    const chatListContainer: Container = new Container({
      classes: ["chat-list-container"]
    }, chatContainerListTemplate);
    const leftContainer: Container = new Container({
      classes: ["left-container"],
      chatListContainer,
      chatSearchField,
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
    
    this.controller = new ChatController(this);
    this.chatListContainer = chatListContainer;
    this.chatContainer = chatContainer;
    const chats: Chat[] = this.controller.getChats();
    this.chatListContainer.setProps({chats});
    this.eventBus().on("chatActivated", this.onChatActivated.bind(this));
    chatSearchField.setProps({
      listeners: {
        keyup: this.searchChats.bind(this)}
    });
  }
  
  searchChats(e: KeyboardEvent) {
    if (e.code === "Enter") {
      const searchValue: string = (e.target as HTMLInputElement).value || "";
      this.chatListContainer.setProps({chats: this.controller.getChats(searchValue)});
    }
  }
  
  onChatItemClick(e: Event): void {
    const target: HTMLElement = (e.target as HTMLElement);
    const targetChat: HTMLElement | null = target.closest<HTMLElement>(".chat-item");
    if (targetChat) {
      const activeChatClass = "chat-item__active";
      const activeItem: HTMLElement | null = this.element.querySelector(`.${activeChatClass}`);
      if (activeItem) {
        activeItem.classList.remove(activeChatClass);
      }
      targetChat.classList.add(activeChatClass);
      const chatNumber: string | undefined = targetChat.dataset.chatNumber;
      this.eventBus().emit("chatActivated", chatNumber);
    }
  }
  
  onChatActivated(chatNumber: string = ""): void {
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
      this.chatContainer.setProps({sendForm});
      this.chatMessagesContainer = this.getChatMessagesContainer();
      this.eventBus().on("addMessage", this.addMessageHandler.bind(this));
      this.chatContainer.setProps({classes: ["chat-container"], textContent: ""});
    }
    const messages: Container[] = this.getStoreMessages(chatNumber);
    this.chatMessagesContainer.setProps({messages});
    this.chatContainer.setProps({chatMessagesContainer: this.chatMessagesContainer});
  }
  
  getChatMessagesContainer(): Container {
    return new Container({
      classes: [
        "chat-messages-container",
      ],
    }, chatMessagesContainerTemplate);
  }
  
  getMessages(chatNumber: string): Container[] {
    return this.chatMessagesContainer.props.messages || this.getStoreMessages(chatNumber);
  }
  
  getStoreMessages(chatNumber: string = ""): Container[] {
    const messages: { isMine: boolean, message: string }[] = this.controller.getChatMessages(chatNumber);
    const messageBlocks: Block[] = [];
    messages.forEach((mes) => {
      messageBlocks.push(this.getChatItem(mes));
    });
    return messageBlocks;
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
      this.eventBus().emit("addMessage", {isMine: true, message: text});
    }
  }
  
  addMessageHandler(message: { isMine: boolean, message: string }) {
    const currentMessages: Container[] = this.getMessages("");
    currentMessages.push(this.getChatItem(message));
    const chatMessagesContainer: Container = this.getChatMessagesContainer();
    chatMessagesContainer.setProps({messages: currentMessages});
    this.chatContainer.setProps({chatMessagesContainer});
  }
  
}
