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


export class Chat extends Block {
  
  chatLastMessageLabel: Block;
  
  lastMessageTimeLabel: Block;
  
  newMessageCountLabel: Block;
  
  number: number;
  
  isActive: boolean;
  
  chatName: string;

  constructor(props: blockProperty) {
    
    const imageContainer: Container = new Container({classes: ["chat-item__image-container"]},
      imageContainerTemplate);
  
    const chatNameLabel: Label = new Label({
      textContent: props.chatName,
      classes: ["chat-item__name-label"]
    });
    const chatLastMessageLabel: Label = new Label({
      textContent: (props.isMineLastMessage ? "Вы: " : "") + props.lastMessage,
      classes: ["chat-item__last-message-label"]
    });
    const centerContainer: Container = new Container({
      classes: ["chat-item__center-container"],
      chatNameLabel,
      chatLastMessageLabel
    }, centerContainerTemplate);
  
  
    const lastMessageTimeLabel: Block = new Label({
      classes: ["chat-item__last-message-time-label"],
      textContent: props.lastMessageTime
    });
    const newMessageCountLabel: Block = new Label({
      classes: ["chat-item__new-message-label"],
      textContent: props.newMessagesCount
    });
    if (!props.newMessagesCount) {
      newMessageCountLabel.hide();
    }
  
    const rightContainer: Container = new Container({
      classes: ["chat-item__right-container"],
      newMessageCountLabel,
      lastMessageTimeLabel
    }, rightContainerTemplate);
    
    super("div", {
      classes: ["chat-item"],
      marker: `data-chat-number='${props.number || "0"}'`,
      imageContainer,
      centerContainer,
      rightContainer
    }, template);
    
    this.chatLastMessageLabel = chatLastMessageLabel;
    this.lastMessageTimeLabel = lastMessageTimeLabel;
    this.newMessageCountLabel = newMessageCountLabel;
    
    this.number = props.number;
    this.chatName = props.chatName;
  
    this.eventBus().on("newMessage", this.handleNewMessageEvent);
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
