// atoms/usersAtom.tsx
import { atom } from "jotai";
import axios from "axios";
import { PostUser, GetUsers, PutUser } from "../types/users";

// ユーザーリストを管理する atom
const usersAtom = atom<GetUsers[]>([]);

// ユーザーリストを取得する関数
export const getUsers = async (): Promise<GetUsers[]> => {
  const url = import.meta.env.VITE_APP_BACKEND_URL;
  const response = await axios.get<GetUsers[]>(`${url}/users`);
  return response.data;
};

// ユーザーを追加する関数
export const createUser = async (postData: PostUser): Promise<GetUsers[]> => {
  const url = import.meta.env.VITE_APP_BACKEND_URL;
  await axios.post(`${url}/users`, postData);
  return getUsers();
};

export const updateUser = async (putData: PutUser): Promise<GetUsers[]> => {
  const url = import.meta.env.VITE_APP_BACKEND_URL;
  await axios.put<Omit<PutUser, "id">>(`${url}/users/${putData.id}`, putData);
  return getUsers();
};

// 更新可能な atom: データ取得・追加・更新
export const updateUsersAtom = atom(
  (get) => get(usersAtom), // 現在の状態を取得
  async (_get, set, action: { type: "get" | "post" | "put"; payload?: any }) => {

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

      default:
        console.error("Unsupported action type");
        break;
    }
  }
);

export default usersAtom;
