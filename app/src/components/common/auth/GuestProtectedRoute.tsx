import { Navigate, Outlet } from "react-router-dom";
import { useAtom } from "jotai";
import { isGuestLoggedInAtom } from "@/atoms/authAtom";

export const GuestProtectedRoute = () => {
  const [isGuestLoggedIn] = useAtom(isGuestLoggedInAtom);

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