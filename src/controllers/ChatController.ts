import {BaseController} from "./BaseController";
import {Chat} from "../modules/chat/chat";

export class ChatController extends BaseController {
  
  getChats(filter?: string): Chat[] {
    let chats = [];
    let number: number = 0;
    chats.push(new Chat({
      chatName: "Test",
      isMineLastMessage: true,
      lastMessage: "Messageдфыво олдфв волдфвлд жфвлд жфывлд жфывлд жфывлд жфвлд жфвлд жфывлд жфвлд жksdjflskdjflsdkfjlsdkfj",
      lastMessageTime: "12:12",
      newMessagesCount: "3",
      number: ++number,
    }));
    
    chats.push(new Chat({
      chatName: "Test 2",
      isMineLastMessage: true,
      lastMessage: "Messageдфыво ",
      lastMessageTime: "14:88",
      number: ++number,
    }));
    chats.push(new Chat({
      chatName: "Test 3",
      lastMessage: "123321 ",
      lastMessageTime: "13:13",
      newMessagesCount: "1",
      number: ++number,
    }));
    if (filter) {
      chats = chats.filter((chat) => chat.chatName.includes(filter));
    }
    return chats;
  }
  
  getChatMessages(chatNumber: string): { isMine: boolean, message: string }[] {
    const data: Record<string, { isMine: boolean, message: string }[]> = {
      1: [
        {
          isMine: true,
          message: "a"
        },
        {
          isMine: false,
          message: "b"
        },
        {
          isMine: true,
          message: "a"
        },
        {
          isMine: true,
          message: "a"
        },
        {
          isMine: true,
          message: "a"
        },
        {
          isMine: false,
          message: "b"
        }
      ],
      
      
      2: [
        {
          isMine: true,
          message: "aasdasd"
        },
        {
          isMine: false,
          message: "as,.dm.as,dmas,ldmaasd.m ;lkas ;dl a;sd lasj dklaj sdjaklsjdkjasdj"
        },
        {
          isMine: true,
          message: "a;sldk"
        }
      ],
      3: [
        {
          isMine: false,
          message: "a"
        },        {
          isMine: true,
          message: "b"
        }
      ],
    };
    return data[chatNumber] || [];
  }
}
