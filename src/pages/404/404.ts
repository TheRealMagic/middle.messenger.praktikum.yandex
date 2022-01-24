import {render, hiddenAdd} from "../../utils/render";
import {Block} from "../../components/block/block";


const ERROR_NUMBER = "404",
  ERROR_TEXT = "Не туда попали",
  LINK_TEXT = "Назад к чатам";

const MAIN_CONTAINER_CLASS = "main-container";

const mainBlock: Block = new Block("main", {
  classes: [
    MAIN_CONTAINER_CLASS
  ]
});

function addContent() {
  addErrorNumberContainer();
  addErrorTextContainer();
  addBackLink();
  render("body", mainBlock);
}

function addErrorNumberContainer() {
   const errorNumberContainer = new Block("div", {
    classes: ["error-number"],
    textContent: ERROR_NUMBER
  });
   hiddenAdd(mainBlock, errorNumberContainer);
}

function addErrorTextContainer() {
  const errorTextContainer = new Block("div", {
    classes: ["error-text"],
    textContent: ERROR_TEXT
  });
  hiddenAdd(mainBlock, errorTextContainer);
}

function addBackLink() {
  const errorTextContainer = new Block("a", {
    href: "../Chats/Chats.html",
    classes: [
      "base-link",
      "sign-link",
      "error-link"
    ],
    textContent: LINK_TEXT
  });
  hiddenAdd(mainBlock, errorTextContainer);
}

addContent();