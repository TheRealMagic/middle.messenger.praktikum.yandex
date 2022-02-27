import {BaseAPI} from "./BaseApi";
import {HTTPTransport} from "../XHR";
import {SignUpRequest} from "./types";
import {UserApi} from "./UserApi";
import ApplicationStore from "../../modules/ApplicationState/ApplicationStore";

const HTTP = new HTTPTransport("https://ya-praktikum.tech/api/v2/");

export class SignUpPageApi extends BaseAPI {
  public register(user: SignUpRequest) {
    return HTTP.post("auth/signup",
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
        ApplicationStore.set("signUpError", JSON.parse(result.responseText).reason);
      });
  }
}
