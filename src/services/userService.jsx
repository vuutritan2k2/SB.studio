import axiosClient from "../apis/axiosClient";
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useZustand from "../zustand/useZustand";

// API đăng nhập
export const login = async (values) => {
  const response = await axiosClient.post(`/api/user/login`, values, {
    withCredentials: true,
  });
  return response.data.user;
};

// Hook đăng nhập
export function useLogin() {
  const navigate = useNavigate();
  const getInfo = useZustand((state) => state.getInfo);

  return useMutation({
    mutationKey: ['login'],
    mutationFn: login,
    onSuccess: (data) => {
      getInfo(data)
      toast.success('Đăng nhập thành công !', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'colored',
      });
      navigate('/');
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || 'Đăng nhập thất bại !', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'colored',
      });
    },
  });
}

// API lấy thông tin người dùng
export const getUserInfo = async () => {
  const response = await axiosClient.get('/api/user/userInfo');
  return response.data.data;
};

