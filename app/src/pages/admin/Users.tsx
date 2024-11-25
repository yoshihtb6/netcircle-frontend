import { updateUsersAtom } from "@/atoms/usersAtom";
import { Button } from "@/components/ui/button";
import { PostUser, PutUser } from "@/types/users";
import { useAtom } from "jotai";
import { useEffect } from "react";

export const Users = () => {
  const [users, dispatch] = useAtom(updateUsersAtom);

  // 初回データ取得
  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch({ type: "get" });
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    };
    fetchData();
  }, [dispatch]);

  // ユーザーを追加する処理
  const handleCreateUser = async () => {
    const postData: PostUser = {
      name: "sample1",
      handle_name: "sample1",
      role: "admin",
    };
    try {
      await dispatch({ type: "post", payload: postData });
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
      icon: "sample2",
      profile: "sample2",
      token: "sample2"
    };
    try {
      await dispatch({ type: "put", payload: putData });
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
