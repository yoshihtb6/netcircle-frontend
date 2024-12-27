import { usersActionAtom } from "@/atoms/usersAtom";
import { format } from "date-fns";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { EditButton } from "@/components/common/button/EditButton";
import toast from "react-hot-toast";
import { DeleteButton } from "@/components/common/button/DeleteButton";
import { PopupModal } from "@/components/common/modal/PopupModal";
import { EditedData } from "@/types/users";

export const Users = () => {
  const [users, setUsersAction] = useAtom(usersActionAtom);
  const [editingUserId, setEditingUserId] = useState<number | null>(null);
  const [editedData, setEditedData] = useState<EditedData>({
    handle_name: "",
    role: "",
    profile: "",
  }); // 編集データの一時保存用
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null); // 削除対象のユーザーID
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const handleEdit = (userId: number) => {
    setEditingUserId(userId);
    const user = users.find((user) => user.id === userId);
    if (user) {
      setEditedData({ ...user });
    }
  };

  const handleCancel = () => {
    setEditingUserId(null);
    setEditedData({
      handle_name: "",
      role: "",
      profile: "",
    });
  };

  const handleSave = async (userId: number) => {
    try {
      const putData = { ...editedData, id: userId };
      await setUsersAction({ type: "put", payload: putData });
      setEditingUserId(null);
    } catch (error) {
      console.error("Failed to update user:", error);
      toast.error('更新に失敗しました：' + error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>, field: string) => {
    setEditedData({
      ...editedData,
      [field]: e.target.value,
    });
  };

  // ユーザーを追加する処理
  const handleCreateUser = async () => {
    // const postData: PostUser = {
    //   name: "sample1",
    //   handle_name: "sample1",
    //   role: "admin",
    //   password: "test1234"
    // };
    // try {
    //   await setUsersAction({ type: "post", payload: postData });
    // } catch (error) {
    //   console.error("Failed to create user:", error);
    // }
  };

  const openDeleteModal = (userId: number) => {
    setSelectedUserId(userId);
    setIsModalOpen(true);
  };

  // ユーザーを削除する処理
  const handleDeleteUser = async () => {
    if (selectedUserId !== null) {
      try {
        await setUsersAction({ type: "delete", payload: selectedUserId });
        setIsModalOpen(false);
        setSelectedUserId(null);
      } catch (error) {
        console.error("Failed to delete user:", error);
      }
    }
  };

  return (
    <div>
      <h1>User List</h1>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">ID</th>
              <th scope="col" className="px-6 py-3">Name</th>
              <th scope="col" className="px-6 py-3">Role</th>
              <th scope="col" className="px-6 py-3">Profile</th>
              <th scope="col" className="px-6 py-3">Created_At</th>
              <th scope="col" className="px-6 py-3">Updated_At</th>
              <th scope="col" className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                {editingUserId === user.id ? (
                  <>
                    <td className="px-6 py-4">{user.id}</td>
                    <td className="px-6 py-4">
                      <input
                        type="text"
                        value={editedData.handle_name || ""}
                        onChange={(e) => handleInputChange(e, "handle_name")}
                        className="w-full p-2 border rounded"
                      />
                    </td>
                    <td className="px-6 py-4">
                      <select
                        value={editedData.role || ""}
                        onChange={(e) => handleInputChange(e, "role")}
                        className="w-full p-2 border rounded"
                      >
                        <option value="admin">Admin</option>
                        <option value="user">User</option>
                      </select>
                    </td>
                    <td className="px-6 py-4">
                      <input
                        type="text"
                        value={editedData.profile || ""}
                        onChange={(e) => handleInputChange(e, "profile")}
                        className="w-full p-2 border rounded"
                      />
                    </td>
                    <td className="px-6 py-4">{format(new Date(user.created_at), "yyyy/MM/dd HH:mm:ss")}</td>
                    <td className="px-6 py-4">{format(new Date(user.updated_at), "yyyy/MM/dd HH:mm:ss")}</td>
                    <td className="px-6 py-4 flex space-x-2">
                      <button onClick={() => handleSave(user.id)} className="px-4 py-2 bg-green-500 text-white rounded">Save</button>
                      <button onClick={handleCancel} className="px-4 py-2 bg-red-500 text-white rounded">Cancel</button>
                    </td>
                  </>
                ) : (
                  <>
                    <td className="px-6 py-4">{user.id}</td>
                    <td className="px-6 py-4">
                      <div className="text-base font-semibold">{user.handle_name}</div>
                      <div className="text-gray-500">{user.name}</div>
                    </td>
                    <td className="px-6 py-4">{user.role}</td>
                    <td className="px-6 py-4">{user.profile}</td>
                    <td className="px-6 py-4">{format(new Date(user.created_at), "yyyy/MM/dd HH:mm:ss")}</td>
                    <td className="px-6 py-4">{format(new Date(user.updated_at), "yyyy/MM/dd HH:mm:ss")}</td>
                    <td className="px-6 py-4">
                      <div className="flex space-x-2">
                        <EditButton className="bg-green-100" onClick={() => handleEdit(user.id)} />
                        {user.name != "admin" && (
                          <DeleteButton className="bg-red-100" onClick={() => openDeleteModal(user.id)} />
                        )}
                      </div>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isModalOpen && (
        <PopupModal
          onClick={handleDeleteUser} // 削除アクション
          onCancel={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};
