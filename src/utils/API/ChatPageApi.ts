import {BaseAPI} from "./BaseApi";
import {HTTPTransport} from "../XHR";
import ApplicationStore from "../../modules/ApplicationState/ApplicationStore";
import {usersRequest} from "./types";

const HTTP = new HTTPTransport("https://ya-praktikum.tech/api/v2/");

export class ChatPageApi extends BaseAPI {
  public getChats() {
    return HTTP.get("chats",
      {
        credentials: "include",
        mode: "cors",
        headers: {
          "content-type": "application/json",
        }
      })
      .then((result: XMLHttpRequest) => {
        ApplicationStore.set("chats", JSON.parse(result.responseText));
      });
  }
  
  public createChat(title: string) {
    return HTTP.post("chats",
      {
        credentials: "include",
        mode: "cors",
        headers: {
          "content-type": "application/json",
        },
        data: {title}
      })
      .then( ()=> {
        this.getChats();
      });
  }
  
  public deleteChat(chatId: number) {
    HTTP.delete("chats",
      {
        credentials: "include",
        mode: "cors",
        headers: {
          "content-type": "application/json",
        },
        data: {chatId}
      })
      .then( ()=> {
        this.getChats();
      });
  }
  
  public addChatUsers(data: usersRequest) {
    HTTP.put("chats/users",
      {
        credentials: "include",
        mode: "cors",
        headers: {
          "content-type": "application/json",
        },
        data: {...data}
      })
      .then( ()=> {
        this.getChats();
      });
  }
  
  public deleteChatUsers(data: usersRequest) {
    HTTP.delete("chats/users",
      {
        credentials: "include",
        mode: "cors",
        headers: {
          "content-type": "application/json",
        },
        data: {...data}
      })
      .then( ()=> {
        this.getChats();
      });
  }
  
  public getChatToken(chatId: number) {
    HTTP.post("chats/token/" + chatId,
      {
        credentials: "include",
        mode: "cors",
        headers: {
          "content-type": "application/json",
        }
      })
      .then( (result: XMLHttpRequest)=> {
        ApplicationStore.set(`tokens.${chatId}`, JSON.parse(result.responseText));
      });
  }
  
  public getNewMessagesCount(chatId: number) {
    HTTP.get("chats/new/" + chatId,
      {
        credentials: "include",
        mode: "cors",
        headers: {
          "content-type": "application/json",
        }
      })
      .then( (result: XMLHttpRequest)=> {
        ApplicationStore.set("activeChatNewMessagesCount", JSON.parse(result.responseText));
      });
  }
}