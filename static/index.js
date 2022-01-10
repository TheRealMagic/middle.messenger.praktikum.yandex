import { getMainBlockHTML } from "../src/components/mainblock/mainblock";
import { getContainerHTML } from "../src/components/container/container";
import { getFormHTML } from "../src/components/form/form";
import { getInputHTML } from "../src/components/inputElement/inputElement";
import { getLinkHTML } from "../src/components/link/link";

import { showInputLabel, showWarning } from "../src/utils/InputUtils";

import "../static/styles.css";

function addContent() {
  addMainBlock();
  addLabel();
  addForm();
  addFormItems();
  addListeners();
}

function addFormItems() {
  addNameInput();
  addPasswordInput();
  addActionContainer();
  addAutorizeButton();
  addRegisterLink();
}

const LOGIN_BLOCK_CLASS = "login-block";
const LOGIN_FORM_CLASS = "login-form";

function addMainBlock() {
  const context = {
    tag: "div",
    classes: LOGIN_BLOCK_CLASS
  };
  const bodyEl = getUniqueElement("body"),
    mainBlockHTML = getMainBlockHTML(context);
  bodyEl.insertAdjacentHTML("afterbegin", mainBlockHTML);
}

function addLabel() {
  const context = {
    tag: "div",
    classes: "form-header",
    textContent: "Вход"
  };
  const loginBlock = getUniqueElement(`.${LOGIN_BLOCK_CLASS}`),
    label = getContainerHTML(context);
  loginBlock.insertAdjacentHTML("beforeend", label);
}

function addForm() {
  const context = {
    classes: LOGIN_FORM_CLASS + ` sign-form`
  };
  const loginBlock = getUniqueElement(`.${LOGIN_BLOCK_CLASS}`),
    formHTML = getFormHTML(context);
  loginBlock.insertAdjacentHTML("beforeend", formHTML);
}

function addNameInput() {
  const context = {
    placeholder: "Логин",
    classes: "sign-text-input",
    name: "login",
    containerConfig: getInputContainerConfig()
  };
  const loginForm = getUniqueElement(".login-form"),
    nameInput = getInputHTML(context);
  loginForm.insertAdjacentHTML("beforeend", nameInput);
}

function addPasswordInput() {
  const context = {
    placeholder: "Пароль",
    classes: "sign-text-input",
    name: "password",
    type: "password",
    containerConfig: getInputContainerConfig()
  };
  const loginForm = getUniqueElement(".login-form"),
    passInput = getInputHTML(context);
  loginForm.insertAdjacentHTML("beforeend", passInput);
}

function addActionContainer() {
  const context = {
    tag: "div",
    classes: "login-form__action-container sign-action-container",
  };
  const loginForm = getUniqueElement(`.login-form`),
    label = getContainerHTML(context);
  loginForm.insertAdjacentHTML("beforeend", label);
}

function addAutorizeButton() {
  const context = {
    type: "button",
    value: "Авторизоваться",
    classes: "sign-btn action-container__autorize-btn"
  };
  const loginForm = getUniqueElement(".login-form__action-container"),
    autorizeInput = getInputHTML(context);
  loginForm.insertAdjacentHTML("beforeend", autorizeInput);
}

function addRegisterLink() {
  const context = {
    textContent: "Нет аккаунта?",
    classes: "base-link sign-link action-container__register-link",
    path: "../src/pages/SignUp/SignUp.html"
  };
  const loginForm = getUniqueElement(".login-form__action-container"),
    registerInput = getLinkHTML(context);
  loginForm.insertAdjacentHTML("beforeend", registerInput);
}

function getInputContainerConfig() {
  return {
    tag: "div",
    classes: "input-container sign-input-container"
  }
}

function getUniqueElement(selector) {
  return document.querySelector(selector);
}

function addListeners() {
  addOnNameChangeListener();
  addShowInputLabel();
  addAutorizeBtnClick();
}

function addOnNameChangeListener() {
  const loginField = document.querySelector(`input[name=login]`);
  loginField.addEventListener("change", validateLogin);
}

function validateLogin(e) {
  showWarning(e);
}

function addShowInputLabel() {
  const inputs = document.querySelectorAll(`input:not([type=button])`);
  if (inputs && inputs.length) {
    inputs.forEach((ipt) => ipt.addEventListener("keyup", showInputLabel))
  }
}

function addAutorizeBtnClick() {
  const btn = document.querySelector(`.action-container__autorize-btn`);
  if (btn) {
    btn.addEventListener("click", onAutorizeBtnClick);
  }
}

function onAutorizeBtnClick(e) {
  let dummy = document.createElement("a");
  dummy.href = "../src/pages/Chats/Chats.html"
  dummy.click();
}

addContent();