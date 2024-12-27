// atoms/usersAtom.tsx
import { atom } from "jotai";
import { PostUser, GetUsers, PutUser } from "../types/users";
import apiClient from "@/components/common/auth/ApiClient";

// ユーザーリストを管理する atom
export const usersAtom = atom<GetUsers[]>([]);

const url = import.meta.env.VITE_APP_BACKEND_URL;

// ユーザーリストを取得する関数
export const getUsers = async (): Promise<GetUsers[]> => {
  const response = await apiClient.get<GetUsers[]>(`${url}/users`);
  return response.data;
};

// ユーザーを追加する関数
export const createUser = async (postData: PostUser): Promise<GetUsers[]> => {
  await apiClient.post(`${url}/users`, postData);
  return getUsers();
};

// ユーザーを更新する関数
export const updateUser = async (putData: PutUser): Promise<GetUsers[]> => {
  await apiClient.put<Omit<PutUser, "id">>(`${url}/users/${putData.id}`, putData);
  return getUsers();
};

// ユーザーを更新する関数
export const deleteUser = async (userId: number): Promise<GetUsers[]> => {
  await apiClient.delete(`${url}/users/${userId}`);
  return getUsers();
};

// 更新可能な atom: データ取得・追加・更新
export const usersActionAtom = atom(
  (get) => get(usersAtom), // 現在の状態を取得
  async (_get, set, action: { type: "get" | "post" | "put" | "delete"; payload?: any }) => {

    switch (action.type) {
      case "get":
        const fetchedUsers = await getUsers();
        set(usersAtom, fetchedUsers); // 新しいデータで更新
        break;

      case "post":
        if (action.payload) {
          const createdUsers = await createUser(action.payload);
          set(usersAtom, createdUsers); // 追加後のデータで更新
        }
        break;

      case "put":
        if (action.payload) {
          const updatedUsers = await updateUser(action.payload);
          set(usersAtom, updatedUsers); // 追加後のデータで更新
        }
        break;

      case "delete":
        if (action.payload) {
          const deletedUsers = await deleteUser(action.payload);
          set(usersAtom, deletedUsers); // 追加後のデータで更新
        }
        break;

      default:
        console.error("Unsupported action type");
        break;
    }
  }
);

