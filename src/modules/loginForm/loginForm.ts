import {Form, getDefaultTextInputClasses} from "../../components/form/form";
import {ContaineredInput} from "../../components/containeredInput/containeredInput";
import {actionsContainerTemplate, template} from "./template";
import {Container} from "../../components/container/container";
import {blockProperty} from "../../components/block/types";
import {ValidatorFactory} from "../../utils/Validators/ValidatorFactory";

export class LoginForm extends Form {
  
  constructor(props: blockProperty) {
    const nameInput = new ContaineredInput({
      name: "login",
      type: "text",
      placeholder: "Логин",
      classes: getDefaultTextInputClasses(),
      containerClasses: getDefaultInputContainerClasses(),
      labelClasses: [
        "base-label",
        "login-label"
      ],
      validator: ValidatorFactory.getValidator("login")
    });
    const passInput = new ContaineredInput({
      name: "password",
      type: "password",
      placeholder: "Пароль",
      classes: getDefaultTextInputClasses(),
      containerClasses: getDefaultInputContainerClasses(),
      labelClasses: [
        "base-label",
        "login-label"
      ],
      validator: ValidatorFactory.getValidator("password")
    });
    const actionContainer = new Container(
      {classes: ["login-form__action-container", "sign-action-container"], link: props.link, btn: props.btn},
      actionsContainerTemplate);
    super({classes: ["base-form", "sign-form", "login-form"], actionContainer, passInput, nameInput,
      listeners: props.listeners}, template);
  }
}

function getDefaultInputContainerClasses(): string[] {
  return ["sign-input-container"];
}
