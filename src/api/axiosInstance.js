import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://afe5-58-77-32-216.ngrok-free.app',
  // baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: true,
  headers: {
    'ngrok-skip-browser-warning': '1233123',
  },
});

// axiosInstance.interceptors.request.use(
//     (config) => {
//         const token = document.cookie
//         .split('; ')
//         .find(row => row.startsWith('token='))
//         ?.split('=')[1];
//
//         if(token) {
//             config.headers['Authorization'] = token;
//         }
//
//         return config;
//     },
//     (error) => {
//         return Promise.reject(error);
//     }
// );

export const authRequest = async ({ method, url, data, navigate }) => {
  try {
    const response = await axiosInstance({
      method,
      url,
      data,
    });
    return response.data;
  } catch (error) {
    if (error.response?.status === 400) {
      const goToLogin = window.confirm('로그인이 필요합니다. 로그인하시겠습니까?');
      if (goToLogin) navigate('/login');
    }
    throw error;
  }
};

export default axiosInstance
