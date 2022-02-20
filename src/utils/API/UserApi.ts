import {BaseAPI} from "./BaseApi";
import {HTTPTransport} from "../XHR";
import ApplicationStore from "../../modules/ApplicationState/ApplicationStore";
import {User} from "../../models/User";

const HTTP = new HTTPTransport("https://ya-praktikum.tech/api/v2/");

export class UserApi extends BaseAPI {
  public static getUser() {
    return HTTP.get("auth/user",
      {
        credentials: "include",
        mode: "cors",
        headers: {
          "content-type": "application/json",
        }
      })
      .then((result: XMLHttpRequest) => {
        let user: User | null = null;
        if (result.status === 200) {
          user = JSON.parse(result.responseText);
        }
        ApplicationStore.set("user", user);
      });
  }
  
  public static logout() {
    return HTTP.get("auth/logout",
      {
        credentials: "include",
        mode: "cors",
        headers: {
          "content-type": "application/json",
        }
      })
      .then(() => {
        ApplicationStore.set("user", null);
      });
  }
}