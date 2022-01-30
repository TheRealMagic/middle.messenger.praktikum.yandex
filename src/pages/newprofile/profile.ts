import {Block} from "../../components/block/block";
import {Container} from "../../components/container/container";
import {
  actionsContainerTemplate,
  avatarWrapperTemplate,
  backButtonContainerTemplate, changePassFormTemplate,
  contentWrapperTemplate,
  profileContainerTemplate,
  profileFormTemplate,
  template
} from "./template";
import {imgTemplate} from "../../components/block/template";
import {render} from "../../utils/render";
import {ChatsPage} from "../chats/chats";
import {Form} from "../../components/form/form";
import {blockProperty} from "../../components/block/types";
import {ContaineredInput} from "../../components/containeredInput/containeredInput";
import {ProfilePageController, ProfileStates} from "../../controllers/ProfilePageController";
import {Input} from "../../components/Input/input";
import LoginPage from "../login";

export class ProfilePage extends Block {
  
  private contentWrapper: Container;
  
  private profileForm: Form;
  
  private changePassForm: Form;
  
  private profileFormItems: Record<string, ContaineredInput>;
  
  private changePassFormItems: Record<string, ContaineredInput>;
  
  private controller: ProfilePageController;
  
  constructor() {
    const backButton: Container = new Container({
      classes: ["back-btn-container__back-btn"],
      textContent: "❮",
      listeners: {
        click: () => {
          render("body", new ChatsPage());
        }
      }
    });
    const backBtnContainer: Container = new Container({
      classes: ["back-btn-container"],
      backButton
    }, backButtonContainerTemplate);
    
    //#region avatar
    const img: Block = new Block("img", {classes: ["avatar"]}, imgTemplate);
    const newAvatar: Container = new Container({classes: ["new-avatar"], textContent: "Изменить аватар"});
    const avatarWrapper: Container = new Container({classes: ["avatar-wrapper"], img, newAvatar},
      avatarWrapperTemplate);
    //#endregion avatar
    
    const nameLabel: Container = new Container({classes: ["name-label"], textContent: "Иван"});
    
    const {form, items: profileFormItems}: Record<string, any> = getProfileForm(false);
    
    const contentWrapper: Container = new Container({
      classes: ["content-wrapper"],
      avatarWrapper,
      nameLabel,
      profileForm: form
    }, contentWrapperTemplate);
    
    const profileContainer: Container = new Container({
      classes: ["profile-container"],
      contentWrapper
    }, profileContainerTemplate);
    
    
    super("div", {
      classes: ["page-wrapper"],
      backBtnContainer,
      profileContainer
    }, template);
    
    this.profileFormItems = profileFormItems;
    this.contentWrapper = contentWrapper;
    this.controller = new ProfilePageController();
    const actionsContainer = this.getActionContainer(this.getPreviewActionContainerItems());
    this.profileForm = form;
    this.profileForm.setProps({actionsContainer});
  }
  
  getActionContainer(actions: Record<string, Input>): Container {
    return new Container({
      classes: [
        "profile-form__action-container",
        "profile-action-container"
      ], ...actions
    }, actionsContainerTemplate);
  }
  
  getPreviewActionContainerItems(): Record<string, Input> {
    const changeDataButton = this.getProfileActionButton("Изменить данные",
      [
        "main-profile-btn",
        "action-container__change-data-btn"
      ],
      this.onChangeDataClick);
    
    const changePassButton = this.getProfileActionButton("Изменить пароль",
      [
        "main-profile-btn",
        "action-container__change-password-btn"
      ],
      this.onChangePassButtonClick);
    
    const exitButton = this.getProfileActionButton("Выйти",
      [
        "main-profile-btn",
        "action-container__exit-btn"
      ],
      () => {
        render("body", new LoginPage());
      });
    return {
      changeDataButton,
      changePassButton,
      exitButton
    };
  }
  
  getChangeDataActionsContainer(): Record<string, Input> {
    const saveDataButton: Input = this.getProfileActionButton(
      "Сохранить",
      ["sign-btn", "action-container__save-data-btn"],
      this.onSaveDataButtonClick);
    return {saveDataButton};
  }
  
  getChangePassActionsContainer(): Record<string, Input> {
    const saveDataButton: Input = this.getProfileActionButton(
      "Сохранить",
      ["sign-btn", "action-container__save-data-btn"],
      this.onSavePassButtonClick);
    return {saveDataButton};
  }
  
  onChangeDataClick(): void {
    this.controller.setState(ProfileStates.ChangeInfo);
    this.setInputsDisable(false);
    const actionsContainer: Container = this.getActionContainer(this.getChangeDataActionsContainer());
    this.profileForm.setProps({actionsContainer});
  }
  
  onChangePassButtonClick(): void {
    debugger
    this.controller.setState(ProfileStates.ChangePass);
    if (!this.changePassForm) {
      const {form, items} = getChangePasswordForm();
      form.setProps({actionsContainer: this.getActionContainer(this.getChangePassActionsContainer())});
      this.changePassForm = form;
      this.changePassFormItems = items;
      this.contentWrapper.setProps({changePassForm: this.changePassForm});
    }
    this.profileForm.hide();
    this.changePassForm.show();
  }
  
  onSavePassButtonClick(): void {
    this.controller.setState(ProfileStates.Preview);
    this.changePassForm.hide();
    this.profileForm.show();
  }
  
  setInputsDisable(disabled: boolean): void {
    if (this.profileFormItems) {
      Object.values(this.profileFormItems).forEach((item => item.input.setProps({disabled: disabled ? "disabled" : "false"})));
    }
  }
  
  onSaveDataButtonClick(): void {
    this.controller.setState(ProfileStates.Preview);
    const actionsContainer: Container = this.getActionContainer(this.getPreviewActionContainerItems());
    this.setInputsDisable(true);
    this.profileForm.setProps({actionsContainer});
  }
  
  getProfileActionButton(value: string, additionalClasses: string[], clickHandler: () => void): Input {
    return new Input({
      type: "button",
      value: value,
      classes: [
        "base-input-button",
        "base-input",
        ...additionalClasses
      ],
      listeners: {
        click: clickHandler.bind(this)
      }
    });
  }
}

function getProfileForm(enabled: boolean): {form: Form, items: Record<string, ContaineredInput>} {
  const email: ContaineredInput = getFormItem("email", "string", "Почта", enabled);
  const login: ContaineredInput = getFormItem("login","string", "Логин", enabled);
  const firstName: ContaineredInput = getFormItem("first_name","string", "Имя", enabled);
  const secondName: ContaineredInput = getFormItem("second_name","string", "Фамилия", enabled);
  const displayName: ContaineredInput = getFormItem("display_name","string", "Имя в чате", enabled);
  const phone: ContaineredInput = getFormItem("phone","string", "Телефон", enabled);
  const form: Form = new Form({
    classes: [
      "profile-form",
      "base-form"
    ],
    email,
    login,
    firstName,
    secondName,
    displayName,
    phone,
  }, profileFormTemplate);
  return {
    form,
    items: {email, login, firstName, secondName, displayName, phone}
  };
}

function getChangePasswordForm(): { form: Form, items: Record<string, ContaineredInput>} {
  const oldPass: ContaineredInput = getFormItem("email","password", "Старый пароль", true);
  const newPass: ContaineredInput = getFormItem("login","password", "Новый пароль", true);
  const newPassConfirmation: ContaineredInput = getFormItem("login", "password","Повторите пароль", true);
  const form: Form = new Form({
    classes: [
      "profile-form",
      "base-form"
    ],
    oldPass,
    newPass,
    newPassConfirmation
  }, changePassFormTemplate);
  return {
    form,
    items: {oldPass, newPass, newPassConfirmation}
  };
}

// eslint-disable-next-line max-params
function getFormItem(name: string, type: string,  placeholder: string, enabled: boolean = true, value: string = "") {
  let instance: ContaineredInput;
  const config: blockProperty = {
    containerClasses: getDefaultInputContainerClasses(),
    labelClasses: getDefaultInputLabelClasses(),
    alwaysShowlabel: true,
    name: name,
    type: type,
    placeholder: placeholder,
    classes: [
      "profile-text-input",
      "base-input",
      "base-input-text"
    ],
    listeners: {
      change: (e: Event) => {
        instance.setProps({value: (e.target as HTMLInputElement).value});
      }
    }
  };
  if (value) {
    Object.assign(config, {value: value});
  }
  if (!enabled) {
    Object.assign(config, {disabled: "disabled"});
  }
  instance = new ContaineredInput(config);
  return instance;
}

function getDefaultInputContainerClasses() {
  return [
    "input-container",
    "profile-input-container"
  ];
}

function getDefaultInputLabelClasses() {
  return [
    "profile-input-label"
  ];
}
