import {BaseAPI} from "./BaseApi";
import {HTTPTransport} from "../XHR";
import {LoginFormModel} from "../../pages/login/types";
import {UserApi} from "./UserApi";

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
      .then((result: XMLHttpRequest) => {
        if (result.status === 200) {
          UserApi.getUser();
        }
      });
  }
}