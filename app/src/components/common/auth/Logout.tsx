import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

export const Logout = () => {
  const navigate = useNavigate();

  return () => {
    Cookies.remove('access_token');
    Cookies.remove("is_user_logged_in");
    Cookies.remove("is_admin_logged_in");

    navigate("/login");
  }
}