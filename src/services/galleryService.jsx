import { useQuery } from "@tanstack/react-query";
import axiosClient from "../apis/axiosClient";

// API: Lấy tất cả sản phẩm
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