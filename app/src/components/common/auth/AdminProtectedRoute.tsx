import { Navigate, Outlet } from "react-router-dom";
import { useAtom } from "jotai";
import { isAdminLoggedInAtom } from "@/atoms/authAtom";

export const AdminProtectedRoute = () => {
  const [isAdminLoggedIn] = useAtom(isAdminLoggedInAtom);

  if (!isAdminLoggedIn) {
    // 認証されていない場合、管理者ログインページへリダイレクト
    return <Navigate to="/admin/login" />;
  }

  return (
    <>
      <Outlet /> {/* 子ルートをレンダリング */}
    </>
  )
};