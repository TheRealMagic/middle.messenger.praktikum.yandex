import { getContainerHTML } from "../../components/container/container.js";
import { getInputHTML } from "../../components/inputElement/inputElement.js";
import { getLinkHTML } from "../../components/link/link.js";

const LEFT_CONTAINER_CLASS = `left-container`,
  CHAT_CONTAINER_CLASS = `chat-container`,
  PROFILE_LINK_CLASS = `profile-link`,
  SEARCH_FIELD_CLASS = `search`,
  CHAT_LIST_CONTAINER_CLASS = `chat-list-container`;

function addContent() {
  addLeftContainer();
  addChatContainer();
}

function addLeftContainer() {
  const context = {
    tag: "div",
    classes: LEFT_CONTAINER_CLASS
  };
  const block = document.querySelector(`body`),
    container = getContainerHTML(context);
  block.insertAdjacentHTML("beforeend", container);
  addLeftContainerContent();
}

function addLeftContainerContent() {
  addProfileLink();
  addSearchField();
  addChatListContainer();
}

function addProfileLink() {
  const context = {
    classes: `${LEFT_CONTAINER_CLASS}__${PROFILE_LINK_CLASS}`,
    textContent: "Профиль " + '\u276f',
    path: "../Profile/Profile.html"
  };
  const block = document.querySelector(`.${LEFT_CONTAINER_CLASS}`),
    container = getLinkHTML(context);
  block.insertAdjacentHTML("beforeend", container);
}

function addSearchField() {
  const defaultClass = `${LEFT_CONTAINER_CLASS}__${SEARCH_FIELD_CLASS}`;
  const context = {
    classes: `${defaultClass} ${defaultClass}_empty`,
    placeholder:  `&#128270 Поиск`
  };
  const container = document.querySelector(`.${LEFT_CONTAINER_CLASS}`),
    input = getInputHTML(context);
    container.insertAdjacentHTML("beforeend", input);
}

function addChatListContainer() {
  const context = {
    tag: "div",
    classes: CHAT_LIST_CONTAINER_CLASS,
    textContent: "Нет чатов"
  };
  const block = document.querySelector(`.${LEFT_CONTAINER_CLASS}`),
    container = getContainerHTML(context);
  block.insertAdjacentHTML("beforeend", container);
}

function addChatContainer() {
  const context = {
    tag: "div",
    classes: CHAT_CONTAINER_CLASS,
    textContent: "Выберите чат чтобы отправить сообщение"
  };
  const block = document.querySelector(`body`),
    container = getContainerHTML(context);
  block.insertAdjacentHTML("beforeend", container);
}

addContent();