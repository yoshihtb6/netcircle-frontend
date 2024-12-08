export interface LoginFormItem {
  username: string;
  password: string;
}

export interface JWTDecodeToken {
  id: number;
  username: string;
  role: string;
  exp: number;
}

export interface LoginResponseData {
  access_token: string;
  token_type: string;
  refresh_token: string;
}