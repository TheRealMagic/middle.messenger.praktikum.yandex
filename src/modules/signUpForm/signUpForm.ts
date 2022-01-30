import {Form, getDefaultTextInputClasses} from "../../components/form/form";
import {ContaineredInput} from "../../components/containeredInput/containeredInput";
import {actionsContainerTemplate, template} from "./template";
import {Container} from "../../components/container/container";
import {blockProperty} from "../../components/block/types";

export class SignUpForm extends Form {
  
  constructor(props: blockProperty) {
  
    const confirmPass = getSignUpFormField("password_confirmation", "password", "Подтвердите пароль");
    const pass = getSignUpFormField("password", "password", "Пароль");
    const phone = getSignUpFormField("phone", "text", "Телефон");
    const secName = getSignUpFormField("second_name", "text", "Фамилия");
    const firstName = getSignUpFormField("first_name", "text", "Имя");
    const login = getSignUpFormField("login", "text", "Логин");
    const email = getSignUpFormField("email", "text", "Email");
    const actionContainer = new Container(
      {classes: ["sign-in-form__action-container", "sign-action-container"], link: props.link, btn: props.btn },
      actionsContainerTemplate);
  
    super({classes: ["base-form", "sign-form", "login-form"], actionContainer, email,login, firstName, secName, phone,
      pass, confirmPass, listeners: props.listeners}, template);
  }
}

function getSignUpFormField(name: string, type: string, placeholder: string): ContaineredInput {
  let instanse: ContaineredInput;
  const props: blockProperty = {
    name: name,
    type: type,
    placeholder: placeholder,
    classes: getDefaultTextInputClasses(),
    listeners: {
      focus: (e: Event): void => {
        instanse.setProps({value: (e.target as HTMLInputElement).value, focused: true});
      },
      blur: (e: Event): void => {
        instanse.setProps({focused: false});
        e.stopPropagation();
        e.preventDefault();
      }
    }
  };
  instanse = new ContaineredInput(props);
  return instanse;
}
