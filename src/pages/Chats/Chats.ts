import {Block} from "../../components/block/block";
import {hiddenAdd, render} from "../../utils/render";
import {TextInput} from "../../components/Input/Input";

const LEFT_CONTAINER_CLASS = `left-container`,
  CHAT_CONTAINER_CLASS = `chat-container`,
  PROFILE_LINK_CLASS = `profile-link`,
  SEARCH_FIELD_CLASS = `search`,
  CHAT_LIST_CONTAINER_CLASS = `chat-list-container`;

function addContent() {
  addLeftContainer();
  render("body", leftContainer);
  render("body", emptyChatsBlock);
}

const leftContainer: Block = new Block("div", {
  classes: [LEFT_CONTAINER_CLASS]
})

function addLeftContainer(): void {
  addLeftContainerContent();
}

function addLeftContainerContent(): void {
  addProfileLink();
  addSearchField();
  addChatListContainer();
}

function addProfileLink(): void {
  const profileLink = new Block("a",{
    textContent: "Профиль " + '\u276f',
    href: "../Profile/Profile.html",
    classes: [`${LEFT_CONTAINER_CLASS}__${PROFILE_LINK_CLASS}`]
  });
  hiddenAdd(leftContainer, profileLink);
}

function addSearchField(): void {
  const defaultClass: string = `${LEFT_CONTAINER_CLASS}__${SEARCH_FIELD_CLASS}`;
  const searchField = new TextInput("input", {
    classes: [
      `${defaultClass}`,
      `${defaultClass}_empty`
    ],
    placeholder: "&#128270 Поиск"
  });
  hiddenAdd(leftContainer, searchField);
}

const chatListContainer = new Block("div", {
  classes: [CHAT_LIST_CONTAINER_CLASS],
  textContent: "Нет чатов"
});

function addChatListContainer(): void {
  hiddenAdd(leftContainer, chatListContainer);
}

const emptyChatsBlock = new Block("div", {
  classes: [CHAT_CONTAINER_CLASS],
  textContent: "Выберите чат чтобы отправить сообщение"
});

addContent();