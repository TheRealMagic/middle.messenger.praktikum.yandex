import {Block} from "../../components/block/block";
import {authLinkTemplate, template} from "./template";
import {Label} from "../../components/label/label";
import {Container} from "../../components/container/container";
import {LoginForm} from "../../modules/loginForm/loginForm";
import {Input} from "../../components/Input/input";
import {Form} from "../../components/form/form";
import {Router} from "../../utils/RouteUtils/Router";
import {LoginFormModel} from "./types";
import ErrorPopup from "../../modules/popup/errorPopup";

import "./styles.scss";

export default class LoginPage extends Block {
  
  private form: Form;
  
  constructor() {
    const label = new Label({classes: ["form-header"], textContent: "Вход"});
    const link = new Block("a", {
      classes: [
        "base-link",
        "sign-link"
      ],
      href: "/",
      textContent: "Нет аккаунта?"
    }, authLinkTemplate);
    const btn = new Input({
      type: "submit",
      value: "Авторизоваться",
      listeners: {
        click: function () {}
      },
      classes: [
        "base-input",
        "base-input-button",
        "sign-btn",
        "action-container__autorize-btn"
      ]
    });
    const form = new LoginForm({link, btn});
    const mainBlock: Container = new Container({classes: ["login-block", "main-block"], label, form});

    super("div", {mainBlock}, template);
    
    form.setProps({listeners: {submit: this.onLoginSubmit.bind(this)}});
    link.setProps({listeners: this.getLinkListener()});
    this.form = form;
    this.eventBus.on("loginError", (errorText: string) => this.onLoginError(errorText));
  }
  
  getLinkListener(): Record<string, (e: Event) => void> {
    return {
      click: (e: Event) => {
        e.preventDefault();
        const router = new Router("body");
        router.go("/sign-up");
      }
    };
  }
  
  onLoginSubmit(e: Event): void {
    e.preventDefault();
    const form: HTMLFormElement = e.target as HTMLFormElement;
    const data:LoginFormModel = {login: form.login.value, password: form.password.value};
    const isNotValid = this.form.validate();
    if (!isNotValid) {
      this.eventBus.emit("formSubmit", data);
    }
  }
  
  onLoginError(errorText: string) {
    ErrorPopup.showErrorPopup(errorText);
  }
}
