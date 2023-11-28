export interface LoginPayload {
  email: string;
  password: string;
}

export interface LoginSuccess {
  token: string;
}
