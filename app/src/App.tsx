import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { NotFound } from "./components/common/auth/NotFound";
import { GuestProtectedRoute } from "./components/common/auth/GuestProtectedRoute";
import { UserHome } from "./pages/user/MainContents/Home";
import { Image } from "./pages/user/MainContents/Image";
import { AdminHome } from "./pages/admin/MainContents/Home";
import { AdminProtectedRoute } from "./components/common/auth/AdminProtectedRoute";
import { LoginFormLayout } from "./pages/auth/LoginFormLayout";
import { Toaster } from 'react-hot-toast';
import { Users } from "./pages/admin/MainContents/Users";
import { UserLayout } from "./pages/user/Layout/UserLayout";
import { Tmp } from "./pages/admin/MainContents/Tmp";
import { AdminLayout } from "./pages/admin/Layout/AdminLayout";
import { Video } from "./pages/user/MainContents/Video";

export const App = () => {

  return (
    <>
      <Router>
        <Routes>
          {/* 404 ページ */}
          <Route path="*" element={<NotFound />} />

          {/* ログインページ */}
          <Route path="/login" element={<LoginFormLayout />} />

          {/* ユーザー向け認証ルート */}
          <Route path="/" element={<GuestProtectedRoute />}>
            <Route element={<UserLayout />}>
              <Route index element={<UserHome />} />
              <Route path="image" element={<Image />} />
              <Route path="video" element={<Video />} />
            </Route>
          </Route>

          {/* 管理者向け認証ルート */}
          <Route path="/admin" element={<AdminProtectedRoute />}>
            <Route element={<AdminLayout />}>
              <Route index element={<AdminHome />} />
              <Route path="users" element={<Users />} />
              <Route path="tmp" element={<Tmp />} />
            </Route>
          </Route>
        </Routes>
      </Router>
      <Toaster position="top-right" />
    </>
  );
};
