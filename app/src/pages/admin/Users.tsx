import { usersActionAtom } from "@/atoms/usersAtom";
import { Button } from "@/components/ui/button";
import { PostUser, PutUser } from "@/types/users";
import { useAtom } from "jotai";
import { useEffect } from "react";

export const Users = () => {
  const [users, setUsersAction] = useAtom(usersActionAtom);

  // 初回データ取得
  useEffect(() => {
    const fetchData = async () => {
      try {
        await setUsersAction({ type: "get" });
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    };
    fetchData();
  }, [setUsersAction]);

  // ユーザーを追加する処理
  const handleCreateUser = async () => {
    const postData: PostUser = {
      name: "sample1",
      handle_name: "sample1",
      role: "admin",
      password: "test1234"
    };
    try {
      await setUsersAction({ type: "post", payload: postData });
    } catch (error) {
      console.error("Failed to create user:", error);
    }
  };

  // ユーザーを更新する処理
  const handleUpdateUser = async (userId: number) => {
    const putData: PutUser = {
      id: userId,
      name: "sample2",
      handle_name: "sample2",
      role: "admin",
      password: "test1234",
      icon: "sample2",
      profile: "sample2"
    };
    try {
      await setUsersAction({ type: "put", payload: putData });
    } catch (error) {
      console.error("Failed to update user:", error);
    }
  };

  return (
    <div>
      <h1>User List</h1>
      {users.map((user) => (
        <Button key={user.id} onClick={() => handleUpdateUser(user.id)}>
          {user.handle_name}
        </Button>
      ))}

      <Button onClick={handleCreateUser} style={{ marginTop: "20px" }}>
        Add User
      </Button>
    </div>
  );
};
