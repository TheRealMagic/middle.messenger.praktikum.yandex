import "./Profile.css";

import { getContainerHTML } from "../../components/container/container";
import { getFormHTML } from "../../components/form/form";
import { getInputHTML } from "../../components/inputElement/inputElement";

import { formItemConfig as getPreviewFormConfig, actionsConfig as getPreviewActionConfig } from "./forms/preview";
import { formItemConfig as getCahngeDataFormConfig, actionsConfig as getCahngeDataActionConfig } from "./forms/changedata";
import { formItemConfig as getChangePassFormConfig, actionsConfig as getChangePassActionConfig } from "./forms/changepassword";

const PROFILE_CONTAINER_CLASS = `profile-container`,
  BACK_BUTTON_CONTAINER_CLASS = `back-btn-container`,
  BACK_BUTTON_CLASS = `back-btn`,
  FORM_CLASS = `profile-form`,
  CONTENT_WRAPPER_CONTAINER_CLASS = `content-wrapper`,
  ACTION_CONTAINER_CLASS = `${FORM_CLASS}__action-container`;

const modes = [
  "preview",
  "changeData",
  "changePassword"
]

let mode;

const EmptyFn = function () { };

function addContent() {
  addBackButtonContainer();
  addBackButton();
  addProfileContainer();
  addContentWrapper();
  addAvatartContent();
  addNameLabel();
  addFormContent();
}

function addAvatartContent() {
  addAvatarWrapper();
  addAvatar();
  addNewAvatar();
}

function addFormContent() {
  addForm();
  changeModeHandlers();
  addFormItems();
  addActionBtnsListeners();
}

function addBackButtonContainer() {
  const context = {
    tag: "div",
    classes: BACK_BUTTON_CONTAINER_CLASS,
  };
  const container = document.querySelector(`body`),
    block = getContainerHTML(context);
  container.insertAdjacentHTML("beforeend", block);
}

function addBackButton() {
  const context = {
    tag: "div",
    classes: `${BACK_BUTTON_CONTAINER_CLASS}__${BACK_BUTTON_CLASS}`,
    textContent: '\u276e'
  };
  const container = document.querySelector(`.${BACK_BUTTON_CONTAINER_CLASS}`),
    block = getContainerHTML(context);
  container.insertAdjacentHTML("beforeend", block);
  addBackButtonListener();
}

function addBackButtonListener() {
  const btn = document.querySelector(`.${BACK_BUTTON_CONTAINER_CLASS}__${BACK_BUTTON_CLASS}`);
  btn && btn.addEventListener("click", onBackButtonClick);
}

function onBackButtonClick(e) {
  let dummy = document.createElement("a");
  dummy.href = "../Chats/Chats.html"
  dummy.click();
}

function addProfileContainer() {
  const context = {
    tag: "div",
    classes: PROFILE_CONTAINER_CLASS
  };
  const container = document.querySelector(`body`),
    block = getContainerHTML(context);
  container.insertAdjacentHTML("beforeend", block);
}

function addContentWrapper() {
  const context = {
    tag: "main",
    classes: CONTENT_WRAPPER_CONTAINER_CLASS
  };
  const container = document.querySelector(`.${PROFILE_CONTAINER_CLASS}`),
    block = getContainerHTML(context);
  container.insertAdjacentHTML("beforeend", block);
}

function addAvatarWrapper() {
  const context = {
    tag: "div",
    classes: "avatar-wrapper"
  };
  const container = document.querySelector(`.${CONTENT_WRAPPER_CONTAINER_CLASS}`),
    block = getContainerHTML(context);
  container.insertAdjacentHTML("beforeend", block);
}

function addAvatar() {
  const context = {
    tag: "img",
    classes: "avatar"
  };
  const container = document.querySelector(`.avatar-wrapper`),
    block = getContainerHTML(context);
  container.insertAdjacentHTML("beforeend", block);
}

function addNewAvatar() {
  const context = {
    tag: "div",
    classes: "new-avatar",
    textContent: "Изменить аватар"
  };
  const container = document.querySelector(`.avatar-wrapper`),
    block = getContainerHTML(context);
  container.insertAdjacentHTML("beforeend", block);
}

function addNameLabel() {
  const context = {
    tag: "div",
    classes: "name-label",
    textContent: "Иван"
  };
  const container = document.querySelector(`.${CONTENT_WRAPPER_CONTAINER_CLASS}`),
    block = getContainerHTML(context);
  container.insertAdjacentHTML("beforeend", block);
}

function addForm() {
  const context = {
    classes: FORM_CLASS
  };
  const loginBlock = document.querySelector(`.${CONTENT_WRAPPER_CONTAINER_CLASS}`),
    formHTML = getFormHTML(context);
  loginBlock.insertAdjacentHTML("beforeend", formHTML);
}

let getFormItemsConfig = EmptyFn,
  getActionsConfig = EmptyFn

function changeModeHandlers() {
  if (mode === "changeData") {
    getFormItemsConfig = getCahngeDataFormConfig;
    getActionsConfig = getCahngeDataActionConfig;
  } else if (mode === "changePassword") {
    getFormItemsConfig = getChangePassFormConfig;
    getActionsConfig = getChangePassActionConfig;
  } else {
    getFormItemsConfig = getPreviewFormConfig;
    getActionsConfig = getPreviewActionConfig;
  }
}

function addFormItems() {
  const formConfig = getFormItemsConfig();
  formConfig.forEach((item) => addFormField(item));
  addActionContainer();
  addActions();
}

function addFormField(context) {
  context.containerConfig = getInputContainerConfig();
  const form = document.querySelector(`.${FORM_CLASS}`),
    input = getInputHTML(context);
  form.insertAdjacentHTML("beforeend", input);
}

function getInputContainerConfig() {
  return {
    tag: "div",
    classes: "input-container profile-input-container"
  }
}

function addActionContainer() {
  const context = {
    tag: "div",
    classes: `${ACTION_CONTAINER_CLASS} profile-action-container`,
  };
  const form = document.querySelector(`.${FORM_CLASS}`),
    container = getContainerHTML(context);
  form.insertAdjacentHTML("beforeend", container);
}

function addActions() {
  const actions = getActionsConfig();
  actions.forEach((item) => addAction(item));
}

function addAction(context) {
  const container = document.querySelector(`.${ACTION_CONTAINER_CLASS}`),
    btn = getInputHTML(context);
  container.insertAdjacentHTML("beforeend", btn);
}

const CHANGE_DATA_BTN_CLASS = `action-container__change-data-btn`,
  CHANGE_PASS_BTN_CLASS = `action-container__change-password-btn`,
  EXIST_BTN_CLASS = `action-container__exit-btn`,
  SAVE_DATA_BTN_CLASS = `action-container__save-data-btn`,
  SAVE_PASS_BTN_CLASS = `action-container__save-pass-btn`;

function addActionBtnsListeners() {
  const btnsSelector = `.profile-action-container .base-input-button`,
    btns = document.querySelectorAll(btnsSelector);
  if (btns && btns.length) {
    btns.forEach((item) => addBtnListener(item))
  }
}

function addBtnListener(item) {
  item.addEventListener("click", onActionBtnClick);
}

function onActionBtnClick(e) {
  const target = e.target;
  if (target.classList.contains(CHANGE_DATA_BTN_CLASS)) {
    mode = "changeData";
  } else if (target.classList.contains(CHANGE_PASS_BTN_CLASS)) {
    mode = "changePassword";
  } else if (target.classList.contains(EXIST_BTN_CLASS)) {
    exit();
    return;
  } else {
    mode = "preview";
  }
  reloadForm();
}

function reloadForm() {
  deleteForm();
  addFormContent();
}

function deleteForm() {
  const form = document.querySelector(`.profile-form`);
  if (form) {
    form.remove();
  }
}

function exit() {
  let dummy = document.createElement("a");
  dummy.href = "/";
  dummy.click();
}

addContent();