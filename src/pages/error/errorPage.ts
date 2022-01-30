import {Block} from "../../components/block/block";
import {blockProperty} from "../../components/block/types";
import {Container} from "../../components/container/container";
import {mainContainerTemplate, template} from "./template";
import {linkTemplate} from "../../components/block/template";


class ErrorPage extends Block {
  
  constructor(props: blockProperty) {
    const errorNumber = new Container({classes: "error-number", textContent: props.errorNumber});
    const errorText = new Container({classes: "error-text", textContent: props.errorText});
    const link = new Block("a", {
      classes: ["base-link", "sign-link", "error-link"], href: "/",
      textContent: "Назад к чатам"
    }, linkTemplate);
    const mainContainer = new Container({classes: ["main-container"], link, errorText, errorNumber}, mainContainerTemplate);
    super("div", {mainContainer}, template);
  }
}

export class NotFoundPage extends ErrorPage {
  constructor() {
    super({errorNumber: "404", errorText: "Не туда попали"});
  }
}

export class ServerErrorPage extends ErrorPage {
  constructor() {
    super({errorNumber: "500", errorText: "Мы уже фиксим"});
  }
}
  
  