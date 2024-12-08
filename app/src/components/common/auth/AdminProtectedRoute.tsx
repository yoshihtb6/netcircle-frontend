import { Navigate, Outlet } from "react-router-dom";
import { useAtom } from "jotai";
import { isAdminLoginAtom } from "@/atoms/authAtom";

export const AdminProtectedRoute = () => {
  const [isAdminLoggedIn] = useAtom(isAdminLoginAtom);

  if (!isAdminLoggedIn) {
    // 認証されていない場合、ユーザールートへリダイレクト
    return <Navigate to="/" />;
  }

  return (
    <>
      <Outlet /> {/* 子ルートをレンダリング */}
    </>
  )
};