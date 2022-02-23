import {BaseController} from "./BaseController";

import {ProfilePage} from "../pages/newprofile/profile";
import {UserApi} from "../utils/API/UserApi";
import {User} from "../models/User";
import {ProfilePageApi} from "../utils/API/ProfileApi";
import {changePasswordRequest} from "../utils/API/types";

export const enum ProfileStates {
  Preview = "preview",
  ChangeInfo = "changeInfo",
  ChangePass = "changePass"
}

export enum ProfilePageEvents {
  CHANGE_STATE = "changeState",
  CHANGE_DATA = "changeData",
  CHANGE_PASSWORD = "changePassword",
  CHANGE_AVATAR = "changeAvatar",
  LOGOUT = "logout"
}

const profilePageApi = new ProfilePageApi();

export class ProfilePageController extends BaseController {
  
  currentState: string;
  
  constructor() {
    super(new ProfilePage());
    this.currentState = ProfileStates.Preview;
    this.submit();
  }
  
  submit() {
    this.view.eventBus.on(ProfilePageEvents.CHANGE_STATE, (state: ProfileStates) => this.setState(state));
    this.view.eventBus.on(ProfilePageEvents.CHANGE_DATA, (user: User) => this.changeUserData(user));
    this.view.eventBus.on(ProfilePageEvents.CHANGE_PASSWORD, (passwordRequest: changePasswordRequest) => this.changeUserPassword(passwordRequest));
    this.view.eventBus.on(ProfilePageEvents.CHANGE_AVATAR, (changeAvatarData: FormData) => this.changeAvatar(changeAvatarData));
    this.view.eventBus.on(ProfilePageEvents.LOGOUT, () => UserApi.logout());
  }
  
  setState(state: ProfileStates) {
    this.currentState = state;
  }
  
  changeUserData(user: User) {
    profilePageApi.changeData(user);
    this.setState(ProfileStates.Preview);
  }
  
  changeUserPassword(passwordRequest: changePasswordRequest) {
    profilePageApi.changhePassword(passwordRequest);
    this.setState(ProfileStates.Preview);
  }
  
  changeAvatar(changeAvatarData: FormData) {
    profilePageApi.changeAvatar(changeAvatarData);
  }
  
  get state() {
    return this.currentState;
  }
}
