import get from "./get";
import ApplicationStore from "../modules/ApplicationState/ApplicationStore";
import {ChatEvents, ChatsPageController} from "../controllers/ChatsPageController";
import {ChatPageApi} from "./API/ChatPageApi";

const chatPageApi = new ChatPageApi();

export class SocketUtils {
  
  static createSocket(chatId: number, token: string) {
    if (!chatId) {
      return;
    }
    const userId = get(ApplicationStore.getState(), "user.id");
    if (!userId) {
      return;
    }
    const socketTemplate: string = `wss://ya-praktikum.tech/ws/chats/${userId}/${chatId}/${token}`;
    return new WebSocket(socketTemplate);
  }
  
  static applySocketListeners(socket: WebSocket, chatId: number, controller: ChatsPageController) {
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
      delete controller.sockets[chatId];
    });
    socket.addEventListener("message", event => {
      const message: any = JSON.parse((event as any).data);
      if (Array.isArray(message)) {
        controller.view.eventBus.emit(ChatEvents.RECEIVE_MESSAGE, message);
      }
      if (message.type === "message") {
        controller.view.eventBus.emit(ChatEvents.RECEIVE_MESSAGE, [message]);
      }
    });
    
    socket.addEventListener("error", event => {
      console.log("Ошибка", (event as any).message);
    });
    
    setInterval(() => {
      console.log("ping");
      socket.send(JSON.stringify({type: "ping"}));
    },  30 * 1000);
  }
  
  static sendMessage(socket: WebSocket, message: string, type: string = "message") {
    socket.send(JSON.stringify({
      content: message,
      type: type
    }));
  }
}
