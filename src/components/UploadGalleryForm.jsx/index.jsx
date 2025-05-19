import React, { useState } from 'react';
import { IoCloudUploadOutline } from "react-icons/io5";
import useZustand from '../../zustand/useZustand';
import { useCreateGallery, useGetGallery } from '../../services/galleryService';

function UploadGalleryForm() {
    const userId = useZustand((state) => state.userInfo?._id);
    const [title, setTitle] = useState('');
    const [image, setImage] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);

    const { mutate: createImage, isPending, isSuccess } = useCreateGallery()

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('userId', userId);
        formData.append('image', image); // 'file' phải trùng với tên dùng trong middleware multer

        createImage(formData)
        setImage(null)
        setPreviewUrl(null)
    };

    return (
        <div className="max-w-md mx-auto p-4 border border-[#ccc] rounded">
            <h2 className="text-xl font-semibold mb-4">Tải ảnh lên</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className='w-full relative bg-[#f1f1f1] text-[16px] place-items-center p-4 rounded-md'>
                    <IoCloudUploadOutline />
                    <p>Nhấp dô để chọn ảnh</p>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                            const file = e.target.files[0];
                            setImage(file);
                            if (file) {
                                setPreviewUrl(URL.createObjectURL(file));
                            } else {
                                setPreviewUrl(null);
                            }
                        }}
                        className="w-full h-full opacity-0 cursor-pointer absolute top-0 left-0"
                        required
                    />
                </div>
                {previewUrl && (
                    <>
                        <div className='flex justify-center bg-[#f1f1f1] rounded-md'>
                            <img
                                src={previewUrl}
                                alt="Xem trước ảnh"
                                className="w-64 h-64 object-cover"
                            />
                        </div>
                        <input
                            type="text"
                            placeholder="Tiêu đề ảnh"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="input w-full"
                        />
                    </>
                )}

                <button
                    type="submit"
                    className="btn w-full"
                >
                    {isPending ? 'Đang tải' : 'Đăng Ảnh'}
                </button>
            </form>
        </div>
    );
}

export default UploadGalleryForm;
