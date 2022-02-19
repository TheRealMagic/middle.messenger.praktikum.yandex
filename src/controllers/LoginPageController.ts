import {BaseController} from "./BaseController";

export default class LoginPageController extends BaseController{
  currentState: string = "login";
  
  changeState() {
    this.currentState === "login" ? this.currentState = "signUp" : this.currentState = "login";
  }
  
  get state() {
    return this.currentState;
  }
}
