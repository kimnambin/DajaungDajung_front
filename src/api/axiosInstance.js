import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://64c8-222-232-138-33.ngrok-free.app',
  withCredentials: true,
  headers: {
    'ngrok-skip-browser-warning': '1233123',
  },
});

export const authRequest = async ({method, url, data, navigate}) => {
  try {
    const response = await axiosInstance({
      method,
      url,
      data,
    });
    return response.data;
  } catch (error) {
    if (error.response?.status === 400) {
      const goToLogin = window.confirm(
        '로그인이 필요합니다. 로그인하시겠습니까?',
      );
      if (goToLogin) navigate('/signin');
    }
    throw error;
  }
};

export default axiosInstance;
