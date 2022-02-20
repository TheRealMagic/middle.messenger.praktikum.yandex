export type SignInRequest = {
  login: string,
  password: string
}

export type SignInResponse = {
  reason?: string
}

export type SignUpRequest = {
  first_name: string,
  second_name: string,
  login: string,
  email: string,
  password: string,
  phone: string
}

export type SingUpResponse = {
  id?: string,
  reason?: string
}

export type usersRequest = {
  users?: number[],
  chatId?: number
}
