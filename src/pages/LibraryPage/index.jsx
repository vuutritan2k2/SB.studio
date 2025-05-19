import React from 'react'
import CardImage from '../../components/CardImage'
import { useGetGallery } from '../../services/galleryService';
import UploadGalleryForm from '../../components/UploadGalleryForm.jsx';

const LibraryPage = () => {
    const { galleryList, loadingGalleryList } = useGetGallery()

    if (loadingGalleryList) {
        return <p className="text-center my-5">Đang tải hình ảnh...</p>
    }

    return (
        <>
            <UploadGalleryForm/>
            <section className='flex justify-center uppercase font-bold my-5'>
                <p>Thư Viện Ảnh</p>
            </section>
            <section className='grid grid-cols-1 xl:grid-cols-5 gap-4 my-5'>
                {galleryList && galleryList.length > 0 ? (
                    galleryList.map((item, index) => (
                        <CardImage key={index} image={item} />
                    ))
                ) : (
                    <p className="col-span-full text-center">Không có hình ảnh.</p>
                )}
            </section>
        </>
    )
}

export default LibraryPage