import {Block} from "../../components/block/block";
import {hiddenAdd, render} from "../../utils/render";

import {
  actionsConfig as getCahngeDataActionConfig,
  formItemConfig as getCahngeDataFormConfig
} from "./forms/changedata";
import {
  actionsConfig as getChangePassActionConfig,
  formItemConfig as getChangePassFormConfig
} from "./forms/changepassword";
import {actionsConfig as getPreviewActionConfig, formItemConfig as getPreviewFormConfig} from "./forms/preview";
import {inputProperty} from "../../components/Input/types";
import {TextInput} from "../../components/Input/Input";
import {blockProperty, ExtendedTextInputConfig} from "../../components/block/types";

const PROFILE_CONTAINER_CLASS = `profile-container`,
  BACK_BUTTON_CONTAINER_CLASS = `back-btn-container`,
  BACK_BUTTON_CLASS = `back-btn`,
  FORM_CLASS = `profile-form`,
  CONTENT_WRAPPER_CONTAINER_CLASS = `content-wrapper`,
  ACTION_CONTAINER_CLASS = `${FORM_CLASS}__action-container`;

/*const modes: string[] = [
  "preview",
  "changeData",
  "changePassword"
]*/

let mode: string;

const EmptyFn: () => void = function () {
};

function addContent(): void {
  addBackButtonContainer();
  addContentWrapper();
  addAvatarWrapper();
  addNameLabel();
  render("body", profileContainer);
  addForm();
}

function addBackButtonContainer(): void {
  const backButtonContainer: Block = new Block("div", {
    classes: [BACK_BUTTON_CONTAINER_CLASS]
  });
  addBackButton(backButtonContainer);
  render("body", backButtonContainer);
}

function addBackButton(backButtonContainer: Block): void {
  const backButton: Block = new Block("div", {
    classes: [`${BACK_BUTTON_CONTAINER_CLASS}__${BACK_BUTTON_CLASS}`],
    textContent: '\u276e',
    listeners: {
      click: onBackButtonClick
    }
  });
  hiddenAdd(backButtonContainer, backButton);
}

function onBackButtonClick(): void {
  let dummy: any = document.createElement("a");
  dummy.href = "../Chats/Chats.html"
  dummy.click();
}

const profileContainer: Block = new Block("div", {
  classes: [PROFILE_CONTAINER_CLASS]
});

const contentWrapper: Block = new Block("main", {
  classes: [CONTENT_WRAPPER_CONTAINER_CLASS]
});

function addContentWrapper() {
  hiddenAdd(profileContainer, contentWrapper)
}

function addAvatarWrapper() {
  const avatarWrapper = new Block("div", {
    classes: ["avatar-wrapper"]
  });
  hiddenAdd(contentWrapper, avatarWrapper);
  addAvatar(avatarWrapper);
  addNewAvatar(avatarWrapper);
}

function addAvatar(avatarWrapper: Block) {
  const avatar = new Block("img", {
    classes: ["avatar"]
  });
  hiddenAdd(avatarWrapper, avatar);
}

function addNewAvatar(avatarWrapper: Block): void {
  const newAvatar = new Block("div", {
    classes: ["new-avatar"],
    textContent: "Изменить аватар"
  });
  hiddenAdd(avatarWrapper, newAvatar);
}

function addNameLabel(): void {
  const nameLabel = new Block("div", {
    classes: ["name-label"],
    textContent: "Иван"
  });
  hiddenAdd(contentWrapper, nameLabel);
}

function addForm(): void {
  const form = new Block("div", {
    classes: [FORM_CLASS]
  });
  hiddenAdd(contentWrapper, form);
  changeModeHandlers();
  addFormItems(form);
  addActionBtnsListeners();
}

let getFormItemsConfig: Function = EmptyFn,
  getActionsConfig: Function = EmptyFn

function changeModeHandlers(): void {
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

function addFormItems(form: Block): void {
  const formConfig: inputProperty = getFormItemsConfig();
  formConfig.forEach((item: inputProperty) => addFormField(form, item));
  addActionContainer(form);
}

function addFormField(form: Block, inputConfig: inputProperty) {
  let inputBlock: TextInput;
  let extendedConfig: ExtendedTextInputConfig = {};
  extendedConfig.containerConfig = getInputContainerConfig();
  extendedConfig.labelConfig = inputConfig.extendedConfig.labelConfig;
  inputBlock = new TextInput("input", inputConfig.props, extendedConfig);
  hiddenAdd(form, inputBlock);
}

function getInputContainerConfig(): {[key: string]: string[] } {
  return {
    classes: [
      "input-container",
      "profile-input-container"
    ]
  }
}

function addActionContainer(form: Block): void {
  const actionContainer = new Block("div", {
    classes: [
      `${ACTION_CONTAINER_CLASS}`,
      "profile-action-container"
    ],
  });
  hiddenAdd(form, actionContainer);
  addActions(actionContainer);
}

function addActions(actionContainer: Block): void {
  const actions = getActionsConfig();
  actions.forEach((item: blockProperty) => addAction(actionContainer, item));
}

function addAction(actionContainer: Block, actionConfig: blockProperty) {
  const actionBlock: Block = new Block("input", actionConfig);
  hiddenAdd(actionContainer, actionBlock);
}

const CHANGE_DATA_BTN_CLASS: string = `action-container__change-data-btn`,
  CHANGE_PASS_BTN_CLASS: string = `action-container__change-password-btn`,
  EXIST_BTN_CLASS: string = `action-container__exit-btn`;

function addActionBtnsListeners() {
  debugger
  const btnsSelector: string = `.profile-action-container .base-input-button`,
    btns: NodeList = document.querySelectorAll(btnsSelector);
  if (btns && btns.length) {
    btns.forEach((item: Node) => addBtnListener(item));
  }
}

function addBtnListener(item: Node) {
  item.addEventListener("click", onActionBtnClick);
}

function onActionBtnClick(e: Event) {
  const target = e.target as HTMLInputElement;
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
  
}

function deleteForm() {
  const form = document.querySelector(`.profile-form`);
  if (form) {
    form.remove();
    addForm();
  }
}

function exit() {
  let dummy = document.createElement("a");
  dummy.href = "/";
  dummy.click();
}

addContent();