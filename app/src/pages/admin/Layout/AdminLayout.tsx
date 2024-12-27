import { Header } from "@/pages/headerMenu/header";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../Sidebar/Sidebar";

export const AdminLayout = () => {
  return (
    <div className="h-screen flex flex-col">
      <Header />

      <div className="flex flex-1">
        {/* サイドバー */}
        <Sidebar />

        {/* メインコンテンツ */}
        <div className="flex-1 overflow-y-auto p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};