import { LoginFormItem, LoginResponseData } from "@/types/auth";
import axios from "axios";
import { atom } from "jotai";
import Cookies from 'js-cookie';

// ログイン状態を管理するatom
export const refreshTokenAtom = atom<string>("");

// ユーザーログイン状態
export const isUserLoginAtom = atom<boolean>(() => {
  // Cookieからログイン状態を読み込む
  return Cookies.get("is_user_logged_in") === "true";
});

// 管理者ログイン状態
export const isAdminLoginAtom = atom<boolean>(() => {
  return Cookies.get("is_admin_logged_in") === "true";
});

export const getJwtToken = async (loginFormData: LoginFormItem): Promise<LoginResponseData> => {
  const url = import.meta.env.VITE_APP_BACKEND_URL;
  const response = await axios.post(url + "/auth/login",
    loginFormData,
    {
      headers: {
        "Content-Type": "multipart/form-data", // 必要なヘッダーを設定
      },
    }
  );
  return response.data;
};

export const tokenActionAtom = atom(
  (get) => get(refreshTokenAtom), // 現在の状態を取得
  async (_get, set, action: { type: "get" | "post" | "put"; payload?: any }) => {

    switch (action.type) {
      case "post":
        if (action.payload) {
          const response = await getJwtToken(action.payload);
          set(refreshTokenAtom, response.refresh_token); 
          return response;
        }
        break;

      default:
        console.error("Unsupported action type");
        break;
    }
  }
);
