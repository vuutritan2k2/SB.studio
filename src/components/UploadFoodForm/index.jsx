import React, { useState } from 'react';
import { IoCloudUploadOutline } from "react-icons/io5";
import { useAddFood } from '../../services/foodService';

function UploadFoodForm() {
    const [foodName, setFoodName] = useState('');
    const [price, setPrice] = useState('');
    const [address, setAddress] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);

    const { mutate: createFood, isPending } = useAddFood()

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('foodName', foodName);
        formData.append('price', price);
        formData.append('address', address);
        formData.append('description', description);
        formData.append('image', image); // 'file' phải trùng với tên dùng trong middleware multer

        createFood(formData)
        setImage(null)
        setPreviewUrl(null)
    };

    return (
        <div className="max-w-md mx-auto p-4 border border-[#ccc] rounded">
            <h2 className="text-xl font-semibold mb-4">Đăng Món Ăn</h2>
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
                            placeholder="Tên món"
                            value={foodName}
                            onChange={(e) => setFoodName(e.target.value)}
                            className="input w-full"
                            required
                        />
                        <input
                            type="text"
                            placeholder="Giá thành"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            className="input w-full"
                            required
                        />
                        <input
                            type="text"
                            placeholder="Địa chỉ"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className="input w-full"
                            required
                        />
                        <input
                            type="text"
                            placeholder="Mô tả"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="input w-full"
                        />
                    </>
                )}

                <button
                    type="submit"
                    className="btn w-full"
                >
                    {isPending ? 'Đang Đăng Tải Món...' : 'Đăng Món'}
                </button>
            </form>
        </div>
    );
}

export default UploadFoodForm;
