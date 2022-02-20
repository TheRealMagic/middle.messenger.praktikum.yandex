import {BaseController} from "./BaseController";

import {ProfilePage} from "../pages/newprofile/profile";

export const enum ProfileStates {
  Preview = "preview",
  ChangeInfo = "changeInfo",
  ChangePass = "changePass"
}

export class ProfilePageController extends BaseController {
  
  currentState: string;
  
  constructor() {
    
    super(new ProfilePage());
    this.currentState = ProfileStates.Preview;
  }
  
  setState(state: ProfileStates) {
    this.currentState = state;
  }
  
  get state() {
    return this.currentState;
  }
}
