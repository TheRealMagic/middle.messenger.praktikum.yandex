import {Block} from "../src/components/block/block";
import {hiddenAdd, render} from "../src/utils/render";
import {TextInput} from "../src/components/Input/Input";

const LOGIN_BLOCK_CLASS = "login-block";
const LOGIN_FORM_CLASS = "login-form";

const mainBlock: Block = new Block("main", {
  classes: [
    LOGIN_BLOCK_CLASS,
    "main-block"
  ]
});

function addContent(): void {
  addLabel();
  addForm();
  addFormItems();
  render("body", mainBlock);
}

function addFormItems() {
  addNameInput();
  addPasswordInput();
  addActionContainer();
  addAutorizeButton();
  addRegisterLink();
}

function addLabel(): void {
  const label: Block = new Block("div", {
    textContent: `Вход`,
    classes: [
      "form-header"
    ]
  });
  hiddenAdd(mainBlock, label);
}

const loginForm: Block = new Block("div", {
  classes: [
    LOGIN_FORM_CLASS,
    "sign-form",
    "base-form"
  ]
});

function addForm(): Block {
  return hiddenAdd(mainBlock, loginForm);
}

const nameInput = new TextInput("input", {
  placeholder: "Логин",
  name: "login",
  listeners: {
    change: function (e: Event) {
      nameInput.setProps({
        value: (e.target as HTMLInputElement).value
      });
    }
  },
  classes: getDefaultInputClasses(),
}, {
  containerConfig: getInputContainerConfig(),
  labelConfig: {
    classes: getDefaultInputLabelClasses(),
  },
  validateConfig: {
    textContent: "Неверный логин",
    classes: [...getDefaultInputLabelClasses(),
      "warning-label"
    ]
  }
});

function addNameInput() {
  hiddenAdd(loginForm, nameInput);
}

const passInput = new TextInput("input", {
  placeholder: "Пароль",
  name: "password",
  type: "password",
  listeners: {
    change: function (e: Event) {
      passInput.setProps({
        value: (e.target as HTMLInputElement).value
      });
    }
  },
  classes: getDefaultInputClasses(),
}, {
  containerConfig: getInputContainerConfig(),
  labelConfig: {
    classes: getDefaultInputLabelClasses(),
  },
  validateConfig: {
    textContent: "Неверный пароль",
    classes: [...getDefaultInputLabelClasses(),
      "warning-label"
    ]
  }
});

function getDefaultInputClasses(): string[] {
  return [
    "base-input",
    "base-input-text",
    "sign-text-input"
  ];
}

function getDefaultInputLabelClasses(): string[] {
  return [
    "base-label"
  ];
}

function addPasswordInput() {
  hiddenAdd(loginForm, passInput);
}

const actionContainer = new Block("div", {
  classes: [
    "login-form__action-container",
    "sign-action-container"
  ]
});

function getInputContainerConfig(): any {
  return {
    classes: ["input-container",
      "sign-input-container"]
  }
}

function addActionContainer() {
  hiddenAdd(loginForm, actionContainer);
}

function addAutorizeButton() {
  const autorizeBtn = new Block("input", {
    type: "button",
    value: "Авторизоваться",
    listeners: {
      click: function () {
        const dummy: any = document.createElement("a");
        dummy.href = "../src/pages/Chats/Chats.html";
        dummy.click();
      }
    },
    classes: [
      "base-input",
      "base-input-button",
      "sign-btn",
      "action-container__autorize-btn"
    ]
  });
  hiddenAdd(actionContainer, autorizeBtn);
}

function addRegisterLink() {
  const regiterLink = new Block("a", {
    textContent: "Нет аккаунта?",
    href: "../src/pages/SignUp/SignUp.html",
    classes: [
      "base-link",
      "sign-link",
      "action-container__register-link"
    ]
  });
  hiddenAdd(actionContainer, regiterLink);
}

addContent();
