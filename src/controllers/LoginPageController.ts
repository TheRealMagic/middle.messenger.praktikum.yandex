import {BaseController} from "./BaseController";
import LoginPage from "../pages/login/login";
import {LoginFormModel} from "../pages/login/types";
import {LoginPageApi} from "../utils/API/LoginPageApi";
import ApplicationStore, {StoreEvents} from "../modules/ApplicationState/ApplicationStore";
import {Router} from "../utils/RouteUtils/Router";

const loginPageApi = new LoginPageApi();

export default class LoginPageController extends BaseController{
  
  currentState: string = "login";
  
  constructor() {
    super(new LoginPage());
    this.view.eventBus.on("formSubmit", (data: LoginFormModel) => this.onFormSubmit(data));
    ApplicationStore.on(StoreEvents.Updated, (path: string, value: any) => this.onApplicationStoreUpdate(path, value));
  }
  
  onApplicationStoreUpdate(path: string, value: any) {
    if (path === "user" && value && value.id) {
      this.onChangeUser();
    }
    if (path === "loginError") {
      this.view.eventBus.emit("loginError", value);
    }
  }
  
  onChangeUser() {
    const router = new Router("body");
    router.go("/messenger");
  }
  
  onFormSubmit(data: LoginFormModel): void {
    try {
      loginPageApi.login(data);
    } catch (e) {
      ApplicationStore.set("loginError", e);
    }
  }
}
