import {Block} from "../../components/block/block";
import {Container} from "../../components/container/container";
import {
  actionsContainerTemplate,
  avatarWrapperTemplate,
  backButtonContainerTemplate,
  changeAvatarTemplate,
  changePassFormTemplate,
  contentWrapperTemplate,
  profileContainerTemplate,
  profileFormTemplate,
  template
} from "./template";
import {imgTemplate} from "../../components/block/template";
import {Form} from "../../components/form/form";
import {blockProperty} from "../../components/block/types";
import {ContaineredInput} from "../../components/containeredInput/containeredInput";
import {ProfilePageEvents, ProfileStates} from "../../controllers/ProfilePageController";
import {Input} from "../../components/Input/input";
import {Popup} from "../../modules/popup/popup";
import {Label} from "../../components/label/label";
import {ValidatorFactory} from "../../utils/Validators/ValidatorFactory";

import "./style.scss";
import {Router} from "../../utils/RouteUtils/Router";
import ApplicationStore, {StoreEvents} from "../../modules/ApplicationState/ApplicationStore";
import get from "../../utils/get";

const baseYaUrl: string = "https://ya-praktikum.tech/api/v2";

export class ProfilePage extends Block {
  
  private contentWrapper: Container;
  
  private profileForm: Form;
  
  private changePassForm: Form;
  
  private avatarImg: Container;
  
  private profileFormItems: Record<string, ContaineredInput>;
  
  constructor() {
    const state = ApplicationStore.getState();
    const backButton: Container = new Container({
      classes: ["back-btn-container__back-btn"],
      textContent: "❮",
      listeners: {
        click: () => {
          const router = new Router("body");
          router.go("/messenger");
        }
      }
    });
    const backBtnContainer: Container = new Container({
      classes: ["back-btn-container"],
      backButton
    }, backButtonContainerTemplate);
    
    //region AvatarPopups
    const changeAvatarTitle: Label = new Label({
      textContent: "Загрузите файл"
    });
    const changeAvatarLink = new Input({
      textContent: "Выбрать файл на компьютере",
      type: "file",
      name: "avatar",
      classes: ["popup-link"],
      listeners: {
        click: (e: Event) => {
          e.cancelBubble = true;
        }
      }
    });
    const changeAvatarButton = new Input({
      value: "Изменить аватар",
      type: "submit",
      classes: [
        "popup-button",
        "base-input-button",
        "sign-btn"
      ],
      listeners: {
        click: (e: Event) => {
          e.cancelBubble = true;
        }
      }
    });
    const changeAvaparPopupContainer: Form = new Form({
      classes: [
        "main-block",
        "change-avatar-popup"
      ],
      listeners: {
        click: (e: Event) => {
          e.cancelBubble = true;
        },
        submit: (e: Event) => {
          e.cancelBubble = true;
          e.preventDefault();
          let data = new FormData(e.target as HTMLFormElement);
          const newAv = data.get("avatar");
          if ((newAv as File).size) {
            this.eventBus.emit(ProfilePageEvents.CHANGE_AVATAR, data);
          }
        }
      },
      changeAvatarTitle,
      changeAvatarLink,
      changeAvatarButton
    }, changeAvatarTemplate);
    //endregion AvatarPopups
    
    //region avatar
    const img: Block = new Block("img", {classes: ["avatar"]}, imgTemplate);
    
    const avatarSrc = get(state, "user.avatar");
    if (avatarSrc) {
      img.setProps({src: baseYaUrl + avatarSrc});
    }
    const newAvatar: Container = new Container({
      classes: ["new-avatar"], textContent: "Изменить аватар",
      listeners: {
        click: () => {
          const changeAvatarPopup = new Popup({popupContainer: changeAvaparPopupContainer});
          changeAvatarPopup.show();
        }
      }
    });
    const avatarWrapper: Container = new Container({classes: ["avatar-wrapper"], img, newAvatar},
      avatarWrapperTemplate);
    //endregion avatar
    const displayName = get(state, "user.display_name");
    const nameLabel: Container = new Container({classes: ["name-label"], textContent: displayName || "" });
    
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
    const actionsContainer = this.getActionContainer(this.getPreviewActionContainerItems());
    form.setProps({
      listeners: {
        submit: function (e: Event) {
          const items: Record<string, string> = Array.prototype.reduce.call((e.target as HTMLFormElement).elements,
            (res: Record<string, string>, {name, value}: { name: string, value: string }) => {
              if (name && value) {
                res[name] = value;
              }
              return res;
            }, {});
          const isNotValid = form.validate();
          if (true) {//(!isNotValid) {
            this.eventBus.emit(ProfilePageEvents.CHANGE_DATA, items);
            const actionsContainer: Container = this.getActionContainer(this.getPreviewActionContainerItems());
            this.setInputsDisable(true);
            this.profileForm.setProps({actionsContainer});
          }
          e.preventDefault();
        }.bind(this)
      }
    });
    this.profileForm = form;
    this.profileForm.setProps({actionsContainer});
    this.avatarImg = img;
    this.submit();
  }
  
  submit() {
    ApplicationStore.on(StoreEvents.Updated, (path: string, value: any) => this.onChangeUserData(path, value));
  }
  
  onChangeUserData(path: string, value: any) {
    if (path === "user" && value?.id) {
      const {form, items: profileFormItems}: Record<string, any> = getProfileForm(false);
      this.profileFormItems = profileFormItems;
      this.profileForm = form;
      this.contentWrapper.setProps({form: this.profileForm});
      this.contentWrapper.props.nameLabel.setProps({textContent: value.display_name || ""});
      this.avatarImg.setProps({src: baseYaUrl + value.avatar});
    }
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
      "button",
      this.onChangeDataClick);
    
    const changePassButton = this.getProfileActionButton("Изменить пароль",
      [
        "main-profile-btn",
        "action-container__change-password-btn"
      ],
      "button",
      this.onChangePassButtonClick);
    
    const exitButton = this.getProfileActionButton("Выйти",
      [
        "main-profile-btn",
        "action-container__exit-btn"
      ],
      "button",
      () => {
        this.eventBus.emit(ProfilePageEvents.LOGOUT);
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
      "submit");
    return {saveDataButton};
  }
  
  getChangePassActionsContainer(): Record<string, Input> {
    const saveDataButton: Input = this.getProfileActionButton(
      "Сохранить",
      ["sign-btn", "action-container__save-data-btn"],
      "submit");
    return {saveDataButton};
  }
  
  onChangeDataClick(): void {
    this.eventBus.emit(ProfilePageEvents.CHANGE_STATE, ProfileStates.ChangeInfo);
    this.setInputsDisable(false);
    const actionsContainer: Container = this.getActionContainer(this.getChangeDataActionsContainer());
    this.profileForm.setProps({actionsContainer});
  }
  
  onChangePassButtonClick(): void {
    this.eventBus.emit(ProfilePageEvents.CHANGE_STATE, ProfileStates.ChangePass);
    if (!this.changePassForm) {
      const {form/*, items*/} = getChangePasswordForm();
      form.setProps({
        actionsContainer: this.getActionContainer(this.getChangePassActionsContainer()),
        listeners: {
          submit: function (e: Event) {
            const items: Record<string, string> = Array.prototype.reduce.call((e.target as HTMLFormElement).elements,
              (res: Record<string, string>, {name, value}: { name: string, value: string }) => {
                if (name && value) {
                  res[name] = value;
                }
                return res;
              }, {});
            
            const isNotValid = form.validate();
            if (true) {//(!isNotValid) {
              this.eventBus.emit(ProfilePageEvents.CHANGE_PASSWORD, items);
              this.changePassForm.hide();
              this.profileForm.show();
            }
            e.preventDefault();
          }.bind(this)
        }
      });
      this.changePassForm = form;
      //this.changePassFormItems = items;
      this.contentWrapper.setProps({changePassForm: this.changePassForm});
    }
    this.profileForm.hide();
    this.changePassForm.show();
  }
  
  setInputsDisable(disabled: boolean): void {
    if (this.profileFormItems) {
      Object.values(this.profileFormItems).forEach((item => item.input.setProps({disabled: disabled ? "disabled" : "false"})));
    }
  }
  
  // eslint-disable-next-line max-params
  getProfileActionButton(value: string, additionalClasses: string[] = [], type: string = "button", clickHandler?: () => void): Input {
    let config: blockProperty = {
      type: type,
      value: value,
      classes: [
        "base-input-button",
        "base-input",
        ...additionalClasses
      ]
    };
    if (clickHandler) {
      config = Object.assign(config, {
        listeners: {
          click: clickHandler.bind(this)
        }
      });
    }
    return new Input(config);
  }
}

function getProfileForm(enabled: boolean): { form: Form, items: Record<string, ContaineredInput> } {
  const {user} = ApplicationStore.getState();
  const email: ContaineredInput = getFormItem("email", "string", "Почта", enabled, user!.email);
  const login: ContaineredInput = getFormItem("login", "string", "Логин", enabled, user!.login);
  const firstName: ContaineredInput = getFormItem("first_name", "string", "Имя", enabled, user!.first_name);
  const secondName: ContaineredInput = getFormItem("second_name", "string", "Фамилия", enabled, user!.second_name);
  const displayName: ContaineredInput = getFormItem("display_name", "string", "Имя в чате", enabled, user!.display_name);
  const phone: ContaineredInput = getFormItem("phone", "string", "Телефон", enabled, user!.phone);
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
    phone
  }, profileFormTemplate);
  return {
    form,
    items: {email, login, firstName, secondName, displayName, phone}
  };
}

function getChangePasswordForm(): { form: Form, items: Record<string, ContaineredInput> } {
  const oldPass: ContaineredInput = getFormItem("oldPassword", "password", "Старый пароль", true);
  const newPass: ContaineredInput = getFormItem("newPassword", "password", "Новый пароль", true);
  const newPassConfirmation: ContaineredInput = getFormItem("newPasswordConf", "password", "Повторите пароль", true);
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
function getFormItem(name: string, type: string, placeholder: string, enabled: boolean = true, value: string = "") {
  let instance: ContaineredInput;
  const config: blockProperty = {
    containerClasses: getDefaultInputContainerClasses(),
    labelClasses: getDefaultInputLabelClasses(),
    warningLabelClasses: getDefaultWarningLabelClasses(),
    alwaysShowlabel: true,
    name: name,
    type: type,
    placeholder: placeholder,
    classes: [
      "profile-text-input",
      "base-input",
      "base-input-text"
    ],
    validator:  ValidatorFactory.getValidator(name)
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

function getDefaultWarningLabelClasses() {
  return [
    "profile-warning-label"
  ];
}
