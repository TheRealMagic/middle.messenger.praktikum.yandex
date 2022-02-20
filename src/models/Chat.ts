import {User} from "./User";

export type Chat =
{
  "id": number,
  "title": string,
  "avatar": string,
  "unread_count": number,
  "last_message": {
    "user": User,
    "time": string,
    "content": string
  }
}
