import axios from 'axios';
import queryString from 'querystring';

export const baseURL = 'https://sb-studio-backend.onrender.com/'; // http://localhost:3001/ https://sb-studio-backend.onrender.com/

const axiosClient = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // quan trọng để gửi cookie refreshToken
  paramsSerializer: (params) => queryString.stringify(params),
});


// 2. Request interceptor: thêm access token vào header
axiosClient.interceptors.request.use(
  config => {
    const token = localStorage.getItem('accesstoken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error)
);

export default axiosClient;