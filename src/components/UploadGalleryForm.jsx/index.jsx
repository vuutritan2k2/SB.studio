import React, { useState } from 'react';
import axios from 'axios';
import useZustand from '../../zustand/useZustand';
import axiosClient from '../../apis/axiosClient';
import { useGetGallery } from '../../services/galleryService';

function UploadGalleryForm() {
    const userId = useZustand((state) => state.userInfo?._id);
    const [title, setTitle] = useState('');
    const [image, setImage] = useState(null);
    const [message, setMessage] = useState('');

    const { refetch } = useGetGallery()

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('userId', userId);
        formData.append('image', image); // 'file' phải trùng với tên dùng trong middleware multer

        try {
            const res = await axiosClient.post('/api/gallery/createImage', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            setMessage('Tải ảnh thành công!');
            refetch()
        } catch (err) {
            setMessage('Tải ảnh thất bại: ' + (err.response?.data?.message || err.message));
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-4 border rounded shadow">
            <h2 className="text-xl font-semibold mb-4">Tải ảnh lên</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    placeholder="Tiêu đề ảnh"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full p-2 border rounded"
                />
                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setImage(e.target.files[0])}
                    className="w-full"
                    required
                />
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                >
                    Upload
                </button>
                {message && <p className="text-center mt-2 text-sm">{message}</p>}
            </form>
        </div>
    );
}

export default UploadGalleryForm;
