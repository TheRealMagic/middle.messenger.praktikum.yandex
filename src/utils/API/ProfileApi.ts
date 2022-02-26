import {BaseAPI} from "./BaseApi";
import {HTTPTransport} from "../XHR";
import {UserApi} from "./UserApi";
import {User} from "../../models/User";
import {changePasswordRequest} from "./types";

const HTTP = new HTTPTransport("https://ya-praktikum.tech/api/v2/");

export class ProfilePageApi extends BaseAPI {
  public changeData(user: User) {
    return HTTP.put("user/profile",
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
  
  public changhePassword(passwordRequest: changePasswordRequest) {
    return HTTP.put("user/password",
      {
        credentials: "include",
        mode: "cors",
        headers: {
          "content-type": "application/json",
        },
        data: passwordRequest
      });
  }
  
  public changeAvatar(avatar: FormData) {
    return HTTP.put("user/profile/avatar",
      {
        credentials: "include",
        mode: "cors",
        form: avatar
      });
  }
}
  

