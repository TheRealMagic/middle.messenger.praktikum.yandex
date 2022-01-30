import {Block} from "../../components/block/block";
import {Container} from "../../components/container/container";
import {linkTemplate} from "../../components/block/template";
import {Input} from "../../components/Input/input";
import {leftContainerTemplate, template} from "./template";
import {render} from "../../utils/render";
import {ProfilePage} from "../newprofile/profile";

export class ChatsPage extends Block {
  
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
      classes: ["chat-list-container"],
      textContent: "Нет чатов"
    });
    const leftContainer: Container = new Container({
      classes: ["left-container"],
      chatListContainer,
      chatSearchField,
      profileLink
    }, leftContainerTemplate);
    const chatContainer: Container = new Container({
      classes: ["chat-container"],
      textContent: "Выберите чат чтобы отправить сообщение"
    });
    super("div", {
      classes: ["page-wrapper"],
      leftContainer,
      chatContainer
    }, template);
  }
}
