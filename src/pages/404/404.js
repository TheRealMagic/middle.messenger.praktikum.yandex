import { getContainerHTML } from "../../components/container/container.js";
import { getLinkHTML } from "../../components/link/link.js";

const ERROR_NUMBER = "404",
  ERROR_TEXT = "Не туда попали",
  LINK_TEXT = "Назад к чатам";

const MAIN_CONTAINER_CLASS = "main-container";

function addContent() {
  addMainBlock();
  addErrorNumberContainer();
  addErrorTextContainer();
  addBackLink();
}

function addMainBlock() {
  const context = {
    tag: "main",
    classes: MAIN_CONTAINER_CLASS
  };
  const block = document.querySelector(`body`),
    container = getContainerHTML(context);
    block.insertAdjacentHTML("beforeend", container);
}

function addErrorNumberContainer() {
  const context = {
    tag: "div",
    classes: "error-number",
    textContent: ERROR_NUMBER
  };
  const block = document.querySelector(`.${MAIN_CONTAINER_CLASS}`),
    container = getContainerHTML(context);
    block.insertAdjacentHTML("beforeend", container);
}

function addErrorTextContainer() {
  const context = {
    tag: "div",
    classes: "error-text",
    textContent: ERROR_TEXT
  };
  const block = document.querySelector(`.${MAIN_CONTAINER_CLASS}`),
    container = getContainerHTML(context);
    block.insertAdjacentHTML("beforeend", container);
}

function addBackLink() {
  const context = {
    textContent: LINK_TEXT,
    classes: "base-link sign-link error-link",
    path: "../"
  };
  const block = document.querySelector(`.${MAIN_CONTAINER_CLASS}`),
    link = getLinkHTML(context);
    block.insertAdjacentHTML("beforeend", link);
}

addContent();