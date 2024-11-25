import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { NotFound } from "./components/common/auth/NotFound";
import { GuestLogin } from "./pages/guest/auth/Login";
import { AdminLogin } from "./pages/admin/auth/Login";
import { GuestProtectedRoute} from "./components/common/auth/GuestProtectedRoute";
import { GuestHome } from "./pages/guest/Home";
import { AdminHome } from "./pages/admin/Home";
import { AdminProtectedRoute } from "./components/common/auth/AdminProtectedRoute";

export const App = () => {

  return (
    <Router>
      <Routes>
        {/* 404 ページ */}
        <Route path="*" element={<NotFound />} />

        {/* ゲストのログインページ */}
        <Route path="/login" element={<GuestLogin />} />

        {/* 管理者のログインページ */}
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* ユーザー向け認証ルート */}
        <Route path="/" element={<GuestProtectedRoute />}>
          <Route index element={<GuestHome />} />
        </Route>

        {/* 管理者向け認証ルート */}
        <Route path="/admin" element={<AdminProtectedRoute />}>
          <Route index element={<AdminHome />} />
        </Route>
      </Routes>
    </Router>
  );
};
