import { useMutation, useQuery } from "@tanstack/react-query";
import axiosClient from "../apis/axiosClient";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// API: Thêm món mới
const addFood = async (formData) => {
  const response = await axiosClient.post(`/api/food/create`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
  return response
}

// Hook: Thêm món mới
export function useAddFood() {

  return useMutation({
    mutationKey: ['addFood'],
    mutationFn: addFood,
    onSuccess: (data) => {
      toast.success('Đăng món thành công !', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'colored',
      });
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || 'Đăng món thất bại !', {
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

// API: Lấy danh sách món ăn
const getAllFood = async () => {
  const response = await axiosClient.get(`/api/food/all`);
  return response.data.foods;
};

// Hook: Lấy danh sách hình ảnh
export const useGetAllFood = () => {
  const { data, isLoading: loadingFoodList, refetch } = useQuery({
    queryKey: ['foodList'],
    queryFn: () => getAllFood(),
    keepPreviousData: true,
  });

  return {
    foodList: data,
    loadingFoodList,
    refetch
  };
};