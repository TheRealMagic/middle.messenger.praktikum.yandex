import {Block} from "../../components/block/block";
import {Container} from "../../components/container/container";
import {blockProperty} from "../../components/block/types";
import {
  centerContainerTemplate,
  imageContainerTemplate,
  rightContainerTemplate,
  template
} from "./template";
import {Label} from "../../components/label/label";
import ApplicationStore from "../ApplicationState/ApplicationStore";


export class Chat extends Block {
  
  chatLastMessageLabel: Block;
  
  lastMessageTimeLabel: Block;
  
  newMessageCountLabel: Block;
  
  id: number;
  
  isActive: boolean;
  
  title: string;

  constructor(props: blockProperty) {
    
    const imageContainer: Container = new Container({classes: ["chat-item__image-container"]},
      imageContainerTemplate);
  
    const chatNameLabel: Label = new Label({
      textContent: props.title,
      classes: ["chat-item__name-label"]
    });
    const isMyLastMessage = ApplicationStore.getState().user!.login === props.last_message?.user.login;
    let lastMessageText = "<Нет сообщений>";
    if (props.last_message?.content) {
      lastMessageText = (isMyLastMessage ? "Вы: " : "") + props.last_message?.content;
    }
    const chatLastMessageLabel: Label = new Label({
      textContent: lastMessageText,
      classes: ["chat-item__last-message-label"]
    });
    const centerContainer: Container = new Container({
      classes: ["chat-item__center-container"],
      chatNameLabel,
      chatLastMessageLabel
    }, centerContainerTemplate);
  
    const lastMessageTimeLabel: Block = new Label({
      classes: ["chat-item__last-message-time-label"]
    });
    if (props.last_message?.time) {
      const lastMEssageDateString: string = new Date(Date.parse(props.last_message?.time)).toLocaleDateString();
      lastMessageTimeLabel.setProps({textContent: lastMEssageDateString});
    } else {
      lastMessageTimeLabel.hide();
    }
    
    const newMessageCountLabel: Block = new Label({
      classes: ["chat-item__new-message-label"],
      textContent: props.unread_count
    });
    if (!props.unread_count) {
      newMessageCountLabel.hide();
    }
  
    const rightContainer: Container = new Container({
      classes: ["chat-item__right-container"],
      newMessageCountLabel,
      lastMessageTimeLabel
    }, rightContainerTemplate);
    
    super("div", {
      classes: ["chat-item"],
      marker: `data-chat-id='${props.id || "0"}'`,
      imageContainer,
      centerContainer,
      rightContainer
    }, template);
    
    this.chatLastMessageLabel = chatLastMessageLabel;
    this.lastMessageTimeLabel = lastMessageTimeLabel;
    this.newMessageCountLabel = newMessageCountLabel;
    
    this.id = props.id;
    this.title = props.chatName;
  
    this.eventBus.on("newMessage", this.handleNewMessageEvent);
  }
  
  // eslint-disable-next-line max-params
  handleNewMessageEvent(lastMessage: string, lastMessageTime: string, newMessageCount?: number, isMine?: boolean): void {
    isMine ? this.chatLastMessageLabel.props.isMine.show() : this.chatLastMessageLabel.props.isMine.hide();
    this.chatLastMessageLabel.setProps({textContent: lastMessage});
    this.lastMessageTimeLabel.setProps({textContent: lastMessageTime});
    if (newMessageCount) {
      this.newMessageCountLabel.setProps({textContent: "" + newMessageCount});
      this.newMessageCountLabel.show();
    } else {
      this.newMessageCountLabel.hide();
    }
  }
}
