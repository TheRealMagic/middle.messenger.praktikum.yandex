export default class LoginPageController {
  currentState: string = "login";
  
  changeState() {
    this.currentState === "login" ? this.currentState = "signUp" : this.currentState = "login";
  }
  
  get state() {
    return this.currentState;
  }
}
