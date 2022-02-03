import {Form, getDefaultTextInputClasses} from "../../components/form/form";
import {ContaineredInput} from "../../components/containeredInput/containeredInput";
import {actionsContainerTemplate, template} from "./template";
import {Container} from "../../components/container/container";
import {blockProperty} from "../../components/block/types";
import {ValidatorFactory} from "../../utils/Validators/ValidatorFactory";

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
    containerClasses: getDefaultInputContainerClasses(),
    labelClasses: [
      "base-label"
    ],
    validator: ValidatorFactory.getValidator(name)
  };
  instanse = new ContaineredInput(props);
  return instanse;
}

function getDefaultInputContainerClasses(): string[] {
  return ["sign-input-container"];
}
