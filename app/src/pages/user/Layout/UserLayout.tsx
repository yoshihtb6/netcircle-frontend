import { Outlet } from "react-router-dom";
import { Header } from "../../headerMenu/header";

export const UserLayout = () => {
  return (
    <div className="h-screen flex flex-col">
      {/* ユーザー向けヘッダー */}
      <Header />
      <div className="flex-1 overflow-y-auto p-4">
        <Outlet />
      </div>
    </div>
  );
};