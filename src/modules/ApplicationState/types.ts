import {User} from "../../models/User";
import {Chat} from "../../models/Chat";

export type ApplicationStateConfig = {
  user?: User,
  chats?: Chat[],
  loginError?: string,
  signUpError?: string
}