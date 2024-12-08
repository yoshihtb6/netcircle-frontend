import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export const LogoutButton = () => {
  const navigate = useNavigate();

  const LogoutButtonClick = () => {
    Cookies.remove('access_token');
    Cookies.remove("is_user_logged_in");
    Cookies.remove("is_admin_logged_in");

    navigate("/login");
  }

  return (
    <Button onClick={LogoutButtonClick}>ログアウト</Button>
  )
}