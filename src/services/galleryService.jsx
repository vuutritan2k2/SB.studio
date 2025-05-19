import { useMutation, useQuery } from "@tanstack/react-query";
import axiosClient from "../apis/axiosClient";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// API: Thêm ảnh mới
const createGallery = async (formData) => {
  const response = await axiosClient.post(`/api/gallery/createImage`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
  return response
}

// Hook đăng nhập
export function useCreateGallery() {
  const { refetch : refetchAllGallery } = useGetGallery()

  return useMutation({
    mutationKey: ['createGallery'],
    mutationFn: createGallery,
    onSuccess: (data) => {
      refetchAllGallery()
      toast.success('Đăng ảnh thành công !', {
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
      toast.error(error.response?.data?.message || 'Đăng ảnh thất bại !', {
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


// API: Lấy tất cả hình ảnh
const getGallery = async () => {
  const response = await axiosClient.get(`/api/gallery/all`);
  return response.data.galleries;
};

// Hook: Lấy danh sách hình ảnh
export const useGetGallery = () => {
  const { data, isLoading: loadingGalleryList, refetch } = useQuery({
    queryKey: ['galleryList'],
    queryFn: () => getGallery(),
    keepPreviousData: true,
  });

  return {
    galleryList: data,
    loadingGalleryList,
    refetch
  };
};

// API: Lấy tất cả hình ảnh của người dùng hiện tại
const getGalleryById = async (userId) => {
  const response = await axiosClient.get(`/api/gallery/${userId}`);
  return response.data.galleries;
};

// Hook: Lấy tất cả hình của người dùng hiện tại
export const useGetGalleryById = (userId) => {
  const { data, isLoading: loadingGalleryList, refetch } = useQuery({
    queryKey: ['galleryList'],
    queryFn: () => getGalleryById(userId),
    keepPreviousData: true,
  });

  return {
    galleryList: data,
    loadingGalleryList,
    refetch
  };
};