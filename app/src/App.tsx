import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { NotFound } from "./components/common/auth/NotFound";
import { GuestProtectedRoute } from "./components/common/auth/GuestProtectedRoute";
import { UserHome } from "./pages/user/Home";
import { Image } from "./pages/user/Image";
import { AdminHome } from "./pages/admin/Home";
import { AdminProtectedRoute } from "./components/common/auth/AdminProtectedRoute";
import { LoginFormLayout } from "./pages/auth/LoginFormLayout";
import { Toaster } from 'react-hot-toast';

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
            <Route index element={<UserHome />} />
            <Route path="image" element={<Image />} />
          </Route>

          {/* 管理者向け認証ルート */}
          <Route path="/admin" element={<AdminProtectedRoute />}>
            <Route index element={<AdminHome />} />
          </Route>
        </Routes>
      </Router>
      <Toaster position="top-right" />
    </>
  );
};
