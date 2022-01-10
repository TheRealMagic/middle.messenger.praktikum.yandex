import { getMainBlockHTML } from "../../components/mainblock/mainblock.js";
import { getContainerHTML } from "../../components/container/container.js";
import { getFormHTML } from "../../components/form/form.js";
import { getInputHTML } from "../../components/inputElement/inputElement.js";
import { getLinkHTML } from "../../components/link/link.js";

import { showInputLabel, showWarning } from "../../utils/InputUtils.js";

const BLOCK_CLASS = "sign-in-block",
  FORM_CLASS = "sign-in-form",
  ACTION_CONTAINER_CLASS = `${FORM_CLASS}__action-container`;

function addContent() {
  addMainBlock();
  addLabel();
  addForm();
  addFormItems();
  addActions();
  addListeners();
}

function addFormItems() {
  const config = getFormItemsConfiguration();
  config.forEach((fieldConfig) => addFormField(fieldConfig))
}

function addMainBlock() {
  const context = {
    tag: "div",
    classes: BLOCK_CLASS
  };
  const bodyEl = getUniqueElement("body"),
    mainBlockHTML = getMainBlockHTML(context);
  bodyEl.insertAdjacentHTML("afterbegin", mainBlockHTML);
}

function addLabel() {
  const context = {
    tag: "div",
    classes: "form-header",
    textContent: "Регистрация"
  };
  const loginBlock = getUniqueElement(`.${BLOCK_CLASS}`),
    label = getContainerHTML(context);
  loginBlock.insertAdjacentHTML("beforeend", label);
}

function addForm() {
  const context = {
    classes: FORM_CLASS + ` sign-form`
  };
  const loginBlock = getUniqueElement(`.${BLOCK_CLASS}`),
    formHTML = getFormHTML(context);
  loginBlock.insertAdjacentHTML("beforeend", formHTML);
}

function getFormItemsConfiguration() {
  return [
    {
      placeholder: "Почта",
      name: "email",
      classes: "sign-text-input"
    },
    {
      placeholder: "Логин",
      name: "login",
      classes: "sign-text-input"
    },
    {
      placeholder: "Имя",
      name: "first_name",
      classes: "sign-text-input"
    },
    {
      placeholder: "Фамилия",
      name: "second_name",
      classes: "sign-text-input"
    },
    {
      placeholder: "Телефон",
      name: "phone",
      classes: "sign-text-input"
    },
    {
      placeholder: "Пароль",
      name: "password",
      type: "password",
      classes: "sign-text-input"
    },
    {
      placeholder: "Подтвердите пароль",
      name: "password-confirmation",
      type: "password",
      classes: "sign-text-input"
    }
  ];
}

function addFormField(context) {
  context.containerConfig = getInputContainerConfig();
  const form = getUniqueElement(".sign-in-form"),
    input = getInputHTML(context);
    form.insertAdjacentHTML("beforeend", input);
}

function getInputContainerConfig() {
  return {
    tag: "div",
    classes: "input-container sign-input-container"
  }
}

function addActions() {
  addActionContainer();
  const actionsConfig = getActionsConfig();
  actionsConfig.forEach((field) => addAction(field));
  addSignInLink();
}

function addActionContainer() {
  const context = {
    tag: "div",
    classes: `${ACTION_CONTAINER_CLASS} sign-action-container`,
  };
  const form = getUniqueElement(`.${FORM_CLASS}`),
    container = getContainerHTML(context);
    form.insertAdjacentHTML("beforeend", container);
}

function getActionsConfig() {
  return [
    {
      type: "button",
      value: "Зарегистрироваться",
      classes: "sign-btn action-container__sign-up-btn"
    }
  ];
}

function addAction(context) {
  const container = getUniqueElement(`.${ACTION_CONTAINER_CLASS}`),
    btn = getInputHTML(context);
    container.insertAdjacentHTML("beforeend", btn);
}

function addSignInLink() {
  const context = {
    textContent: "Войти",
    classes: "base-link sign-link action-container__sign-in-link",
    path: "/index.html"
  };
  const loginForm = getUniqueElement(`.${ACTION_CONTAINER_CLASS}`),
    registerInput = getLinkHTML(context);
  loginForm.insertAdjacentHTML("beforeend", registerInput);
}

function addListeners() {
  addShowInputLabel();
}

function addShowInputLabel() {
  const inputs = document.querySelectorAll(`input:not([type=button])`);
  if (inputs && inputs.length) {
    inputs.forEach((ipt) => ipt.addEventListener("keyup", showInputLabel))
  }
}

function getUniqueElement(selector) {
  return document.querySelector(selector);
}

addContent();