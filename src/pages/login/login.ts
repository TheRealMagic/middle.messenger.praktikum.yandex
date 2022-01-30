import {Block} from "../../components/block/block";
import {template} from "./template";
import {Label} from "../../components/label/label";
import {Container} from "../../components/container/container";
import LoginPageController from "../../controllers/LoginPageController";
import {LoginForm} from "../../modules/loginForm/loginForm";
import {SignUpForm} from "../../modules/signUpForm/signUpForm";
import {Templator} from "../../utils/Templator/Templator";
import {authLinkTemplate} from "./template";
import {Input} from "../../components/Input/input";

export default class LoginPage extends Block {
  
  private controller: LoginPageController;
  
  private mainBlock: Container;
  
  private formLink: Block;
  
  private label: Label;
  
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
    this.controller = new LoginPageController();
    this.mainBlock = mainBlock;
    this.label = label;
    this.formLink = link;
    this.formLink.setProps({listeners: this.getLinkListener()});
    //this.btn.setProps({listeners: this.getBtnListeners()});
    form.setProps({listeners: {submit: this.onLoginSubmit}});
  }
  
  render(): HTMLElement {
    const templator: Templator = new Templator(this.template || "");
    return templator.compile(this.props);
  }
  
  getLink(): Block {
    return new Block("a", {
      classes: [
        "base-link",
        "sign-link"
      ],
      href: "/",
      textContent: this.controller.currentState === "login" ? "Нет аккаунта?" : "Войти",
      listeners: this.getLinkListener()
    }, authLinkTemplate);
  }
  
  getLinkListener(): Record<string, (e: Event) => void> {
    return {
      click: (e: Event) => {
        this.controller.changeState();
        const currentState = this.controller.currentState;
        this.setProps({state: currentState});
        this.label.setProps({textContent: currentState === "login" ? "Вход" : "Регистрация"});
        const link: Block = this.formLink = this.getLink();
        const btn: Input = this.getBtn();
        this.mainBlock.setProps({
          form: currentState === "login"
            ? new LoginForm({link, btn, listeners: {submit: this.onLoginSubmit}})
            : new SignUpForm({link, btn, listeners: {submit: this.onSignUpSubmit}}),
          classes: currentState === "login"
            ? this.mainBlock.toggleClasses(["login-block"], ["sign-in-block"])
            : this.mainBlock.toggleClasses(["sign-in-block"], ["login-block"])
        });
        e.preventDefault();
      }
    };
  }
  
  getBtn(): Input {
    return new Input({
      type: "submit",
      value: "Авторизоваться",
      //listeners: this.getBtnListeners(),
      classes: [
        "base-input",
        "base-input-button",
        "sign-btn",
        this.controller.currentState === "login"? "action-container__autorize-btn" : "action-container__sign-up-btn"
      ]
    });
  }
  
  onLoginSubmit(e: Event): void{
    const form: HTMLFormElement = e.target as HTMLFormElement;
    console.log(JSON.stringify({login: form.login.value, password: form.password.value}));
    e.preventDefault();
  }
  
  onSignUpSubmit(e: Event) {
    const form: HTMLFormElement = e.target as HTMLFormElement;
    console.log(JSON.stringify({
      email: form.email.value,
      login: form.login.value,
      first_name: form.first_name.value,
      second_name: form.second_name.value,
      phone: form.first_name.value,
      password: form.first_name.value,
      password_confirmation: form.password_confirmation.value
    }));
    e.preventDefault();
    e.preventDefault();
  }
}
