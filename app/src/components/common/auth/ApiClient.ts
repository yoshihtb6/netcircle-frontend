import axios from 'axios';
import Cookies from 'js-cookie';

// Axiosインスタンス作成
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_APP_BACKEND_URL, // ベースURL
  timeout: 5000, // タイムアウト
});

// リクエストインターセプター
apiClient.interceptors.request.use(
  (config) => {
    const token = Cookies.get('access_token'); // Cookieからアクセストークンを取得
    if (token && config.headers) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// レスポンスインターセプター
apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = Cookies.get('refresh_token');
        if (!refreshToken) throw new Error('リフレッシュトークンがありません');

        // 新しいアクセストークンを取得
        const refreshResponse = await axios.post(import.meta.env.VITE_APP_BACKEND_URL + "/auth/refresh", {
          refresh_token: refreshToken,
        });

        const newAccessToken = refreshResponse.data.access_token;

        // 新しいアクセストークンをCookieに保存
        Cookies.set('access_token', newAccessToken, { expires: 7, secure: true, sameSite: 'Strict' });

        // 再リクエストのためにヘッダーを更新
        originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
        return axios(originalRequest);
      } catch (error) {
        console.error('トークンの更新に失敗しました', error);
        
        // ログアウト処理
        Cookies.remove('access_token');
        Cookies.remove("is_user_logged_in");
        Cookies.remove("is_admin_logged_in");
      }
    }
    return Promise.reject(error);
  }
);

export default apiClient;
