import {Block} from "../../components/block/block";
import {authLinkTemplate, template} from "../login/template";
import {Label} from "../../components/label/label";
import {Container} from "../../components/container/container";
import {SignUpForm} from "../../modules/signUpForm/signUpForm";
import {Input} from "../../components/Input/input";
import {Router} from "../../utils/RouteUtils/Router";
import {Form} from "../../components/form/form";
import {SignUpRequest} from "../../utils/API/types";
import ErrorPopup from "../../modules/popup/errorPopup";

export default class SignUpPage extends Block {
  
  form: Form;
  
  constructor() {
    const label = new Label({classes: ["form-header"], textContent: "Регистрация"});
    const link = new Block("a", {
      classes: [
        "base-link",
        "sign-link"
      ],
      href: "/",
      textContent: "Войти"
    }, authLinkTemplate);
    
    const btn = new Input({
      type: "submit",
      value: "Авторизоваться",
      listeners: {
        click: function () {
        }
      },
      classes: [
        "base-input",
        "base-input-button",
        "sign-btn",
        "action-container__sign-up-btn"
      ]
    });
    const form = new SignUpForm({link, btn});
    const mainBlock: Container = new Container({classes: ["sign-in-block", "main-block"], label, form});
    
    super("div", {mainBlock}, template);
  
    link.setProps({listeners: this.getLinkListener()});
    form.setProps({listeners: {submit: this.onSignUpSubmit.bind(this)}});
    this.form = form;
    this.eventBus.on("signUpError", (errorText: string) => this.onSignUpError(errorText));
  }
  
  getLinkListener(): Record<string, (e: Event) => void> {
    return {
      click: (e: Event) => {
        e.preventDefault();
        const router = new Router("body");
        router.go("/");
      }
    };
  }
  
  onSignUpSubmit(e: Event) {
    e.preventDefault();
    const form: HTMLFormElement = e.target as HTMLFormElement;
    const data: SignUpRequest = {
      email: form.email.value,
      login: form.login.value,
      first_name: form.first_name.value,
      second_name: form.second_name.value,
      phone: form.phone.value,
      password: form.password.value,
    };
    const isNotValid = this.form.validate();
    if (!isNotValid || true) {
      this.eventBus.emit("formSubmit", data);
    }
  }
  
  onSignUpError(errorText: string) {
    ErrorPopup.showErrorPopup(errorText);
  }
}
