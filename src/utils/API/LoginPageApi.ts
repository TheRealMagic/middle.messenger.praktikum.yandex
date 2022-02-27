import {BaseAPI} from "./BaseApi";
import {HTTPTransport} from "../XHR";
import {LoginFormModel} from "../../pages/login/types";
import {UserApi} from "./UserApi";
import ApplicationStore from "../../modules/ApplicationState/ApplicationStore";
import get from "../get";

const HTTP = new HTTPTransport("https://ya-praktikum.tech/api/v2/");

export class LoginPageApi extends BaseAPI {
  public login(user: LoginFormModel) {
    return HTTP.post("auth/signin",
      {
        credentials: "include",
        mode: "cors",
        headers: {
          "content-type": "application/json",
        },
        data: user,
      })
      .then(() => {
        UserApi.getUser();
      }).catch((result: XMLHttpRequest) => {
        if (get(ApplicationStore.getState(), "user")) {
          ApplicationStore.set("user", null);
        }
        ApplicationStore.set("loginError", JSON.parse(result.responseText).reason);
      });
  }
}
