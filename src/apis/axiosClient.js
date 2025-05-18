import axios from 'axios';
import queryString from 'querystring';

export const baseURL = 'https://sb-studio-backend.onrender.com/'; // Địa chỉ API của bạn

const axiosClient = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // quan trọng để gửi cookie refreshToken
  paramsSerializer: (params) => queryString.stringify(params),
});


export default axiosClient;