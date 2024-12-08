import { Navigate, Outlet } from "react-router-dom";
import { useAtom } from "jotai";
import { isUserLoginAtom } from "@/atoms/authAtom";

export const GuestProtectedRoute = () => {
  const [isGuestLoggedIn] = useAtom(isUserLoginAtom);

  if (!isGuestLoggedIn) {
    // 認証されていない場合、ユーザーログインページへリダイレクト
    return <Navigate to="/login" />;
  }

  return (
    <>
      <Outlet /> {/* 子ルートをレンダリング */}
    </>
  )
};