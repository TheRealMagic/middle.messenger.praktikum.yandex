import {BaseController} from "./BaseController";
import SignUpPage from "../pages/signUp/signUp";
import {SignUpPageApi} from "../utils/API/SignUpPageApi";
import {SignUpRequest} from "../utils/API/types";
import ApplicationStore, {StoreEvents} from "../modules/ApplicationState/ApplicationStore";
import {Router} from "../utils/RouteUtils/Router";
const signUpPageApi = new SignUpPageApi();

export default class SignUpPageController extends BaseController{
  
  constructor() {
    super(new SignUpPage());
    this.view.eventBus.on("formSubmit", (data: SignUpRequest) => this.onFormSubmit(data));
    ApplicationStore.on(StoreEvents.Updated, (path: string, value: any) => this.onApplicationStoreUpdate(path, value));
  }
  
  onFormSubmit(data: SignUpRequest): void {
    try {
      signUpPageApi.register(data);
    } catch (e) {
      this.view.eventBus.emit("singUpError");
    }
  }
  
  onApplicationStoreUpdate(path: string, value: any) {
    if (path === "user" && value && value.id) {
      this.onChangeUser();
    }
    if (path === "signUpError") {
      this.view.eventBus.emit("signUpError", value);
    }
  }
  
  onChangeUser() {
    const router = new Router("body");
    router.go("/messenger");
  }
}
