import {Block} from "../../components/block/block";
import {hiddenAdd, render} from "../../utils/render"
import {TextInput} from "../../components/Input/Input"
import {inputProperty} from "../../components/Input/types"
import {ExtendedTextInputConfig} from "../../components/block/types";

const BLOCK_CLASS: string = "sign-in-block",
  FORM_CLASS: string = "sign-in-form",
  ACTION_CONTAINER_CLASS: string = `${FORM_CLASS}__action-container`;


const mainBlock: Block = new Block("main", {
  classes: [
    BLOCK_CLASS,
    "main-block"
  ]
});

function addContent(): void {
  addLabel();
  addForm();
  addFormItems();
  addActionContainer();
  addAutorizeButton()
  addSignInLink();
  render("body", mainBlock);
}

function addLabel(): void {
  const label: Block = new Block("div", {
    textContent: `Регистрация`,
    classes: [
      "form-header"
    ]
  });
  hiddenAdd(mainBlock, label);
}

const signUpForm: Block = new Block("div", {
  classes: [
    FORM_CLASS,
    "sign-form",
    "base-form"
  ]
});

function addForm(): void {
  hiddenAdd(mainBlock, signUpForm);
}

function addFormItems(): void {
  const config: inputProperty[] = getFormItemsConfiguration();
  config.forEach((fieldConfig: inputProperty): void => addFormField(fieldConfig))
}

function getFormItemsConfiguration() {
  return [
    {
      placeholder: "Почта",
      name: "email"
    },
    {
      placeholder: "Логин",
      name: "login"
    },
    {
      placeholder: "Имя",
      name: "first_name"
    },
    {
      placeholder: "Фамилия",
      name: "second_name"
    },
    {
      placeholder: "Телефон",
      name: "phone"
    },
    {
      placeholder: "Пароль",
      name: "password",
      type: "password"
    },
    {
      placeholder: "Подтвердите пароль",
      name: "password-confirmation",
      type: "password"
    }
  ];
}

function addFormField(inputConfig: inputProperty) {
  let inputBlock: TextInput;
  inputConfig.classes = getDefaultInputClasses();
  inputConfig.listeners = {
    change: (event: Event): void => {
      inputBlock.setProps({value: (event.target as HTMLInputElement).value});
    }
  }
  inputBlock = new TextInput("input", inputConfig, getInputExtendedConfig());
  hiddenAdd(signUpForm, inputBlock);
}

function getInputExtendedConfig(): ExtendedTextInputConfig  {
  return {
    containerConfig: getInputContainerConfig(),
    labelConfig: {
      classes: getDefaultInputLabelClasses(),
    },
    validateConfig: {
      textContent: "Неправильно заполнено",
      classes: [...getDefaultInputLabelClasses(),
        "warning-label"
      ]
    }
  }
}

function getInputContainerConfig(): { [key:string]: string[] } {
  return {
    classes: ["input-container",
      "sign-input-container"]
  }
}

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

const actionsContainer = new Block("div", {
  classes: [
    ACTION_CONTAINER_CLASS,
    "sign-action-container"
  ],
});

function addActionContainer() {
  hiddenAdd(signUpForm, actionsContainer);
}

function addAutorizeButton() {
  const autorizeBtn = new Block("input", {
    type: "button",
    value: "Зарегистрироваться",
    listeners: {
      click: function () {
        const dummy: any = document.createElement("a");
        dummy.href = "../Chats/Chats.html";
        dummy.click();
      }
    },
    classes: [
      "base-input",
      "base-input-button",
      "sign-btn",
      "action-container__sign-up-btn"
    ]
  });
  hiddenAdd(actionsContainer, autorizeBtn);
}

function addSignInLink() {
  const regiterLink = new Block("a", {
    textContent: "Войти",
    href: "/static/index.html",
    classes: [
      "base-link",
      "sign-link",
      "action-container__sign-in-link"
    ]
  });
  hiddenAdd(actionsContainer, regiterLink);
}

addContent();
