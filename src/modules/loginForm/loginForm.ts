import {Form, getDefaultTextInputClasses} from "../../components/form/form";
import {ContaineredInput} from "../../components/containeredInput/containeredInput";
import {actionsContainerTemplate, template} from "./template";
import {Container} from "../../components/container/container";
import {blockProperty} from "../../components/block/types";

export class LoginForm extends Form {
  
  constructor(props: blockProperty) {
    const nameInput = new ContaineredInput({
      name: "login",
      type: "text",
      placeholder: "Логин",
      classes: getDefaultTextInputClasses(),
      listeners: {
        focus: (e: Event): void => {
          nameInput.setProps({value: (e.target as HTMLInputElement).value, focused: true});
        },
        blur: (e: Event): void => {
          nameInput.setProps({focused: false});
          e.stopPropagation();
          e.preventDefault();
        }
      }
    });
    const passInput = new ContaineredInput({
      name: "password",
      type: "password",
      placeholder: "Пароль",
      classes: getDefaultTextInputClasses(),
      listeners: {
        focus: (e: Event): void => {
          passInput.setProps({value: (e.target as HTMLInputElement).value, focused: true});
        },
        blur: (e: Event): void => {
          passInput.setProps({focused: false});
          e.stopPropagation();
          e.preventDefault();
        }
      }
    });
    const actionContainer = new Container(
      {classes: ["login-form__action-container", "sign-action-container"], link: props.link, btn: props.btn},
      actionsContainerTemplate);
    super({classes: ["base-form", "sign-form", "login-form"], actionContainer, passInput, nameInput,
      listeners: props.listeners}, template);
  }
}
