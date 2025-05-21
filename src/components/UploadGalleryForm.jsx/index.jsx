import React, { useState } from 'react';
import { IoCloudUploadOutline } from "react-icons/io5";
import useZustand from '../../zustand/useZustand';
import { useCreateGallery } from '../../services/galleryService';
import { IoMdClose } from "react-icons/io";

function UploadGalleryForm() {
    const userInfo = useZustand((state) => state.userInfo);
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
        setTitle(null)
        document.getElementById("my-drawer-4").checked = false;
    };

    return (
        <>
            <div className='w-full flex gap-3 items-center border border-[#f1f1f1] rounded-md p-2'>
                <img src={userInfo?.avatar} className='w-12 h-12 rounded-full' />
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content w-full flex">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-4" className="w-full">Mún đăng ảnh ó heeeee</label>
                </div>
                <div className="drawer-side z-10">
                    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                    <div className="w-full xl:w-[30%] bg-white h-screen">
                        <div className='flex items-center gap-4 w-full border-b border-[#ccc] p-4'>
                            <h2 className="text-xl font-semibold">Tải ảnh lên</h2>
                            <label htmlFor="my-drawer-4" className="drawer-overlay ml-auto"><IoMdClose className='text-xl' /></label>
                        </div>
                        <div className='flex items-center gap-4 p-4'>
                            <img src={userInfo?.avatar} className='w-12 h-12 rounded-full' />
                            <p>{userInfo?.name}</p>
                        </div>
                        <form onSubmit={handleSubmit} className="space-y-4 p-4">
                            <input
                                type="text"
                                placeholder="Ghi caption dô đây nòooo"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="w-full"
                            />
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
                </div>

            </div>
        </>
    );
}

export default UploadGalleryForm;
