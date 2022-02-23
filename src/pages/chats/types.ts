export type MessageServerRespone = {
  chat_id: "number",
  time: "string",
  type: "string",
  user_id: "string",
  content: "string",
  file?: MessageFile
}

export type MessageFile = {
  id: "number",
  user_id: "number",
  path: "string",
  filename: "string",
  content_type: "string",
  content_size: "number",
  upload_date: "string",
}

export type SendMessage = {
  content: "string",
  type: "message"
}

export type ReceivedMessage = {
  id: "string",
  time: "string",
  user_id: "string",
  content: "string",
  type: "message"
}
