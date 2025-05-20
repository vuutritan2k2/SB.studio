import React, { use, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { useGetGalleryById } from '../../services/galleryService'
import CardImage from '../../components/CardImage'
import useZustand from '../../zustand/useZustand'

const YourProfilePage = () => {
    const userId = useParams().id
    const { galleryList, loadingGalleryList, refetch: refetchGetGalleryById } = useGetGalleryById(userId)
    const [userInfo, setUserInfo] = useState(null)
    const accountInfo = useZustand((state) => state.userInfo); // Lấy ra user id từ fetchUserInfo ở Zustand

    useEffect(() => {
        refetchGetGalleryById(userId)
    }, [userId])

    useEffect(() => {

        if (galleryList && galleryList.length > 0) {
            setUserInfo(galleryList[0].userId)
        } else {
            setUserInfo(accountInfo)
        }

    }, [galleryList])

    return (
        <section className='!my-5 container'>
            <div className='w-full relative bg-[#f1f1f1] rounded-t-2xl'>
                <img className='w-full h-40 md:h-60 xl:h-100 max-h-100 object-cover rounded-t-2xl' src={userInfo?.avatar} />
                <div className='backdrop-blur absolute top-0 w-full h-40 md:h-60 xl:h-100 left-0 rounded-t-2xl'></div>
                <div className={`userInfo flex flex-col gap-3 items-center p-4 absolute ${accountInfo?._id === userId ? ' bottom-20' : 'bottom-5'}`}>
                    <div className='avatar w-24 h-24'>
                        <img className='rounded-full border-3 border-white' src={userInfo?.avatar} />
                    </div>
                </div>
                <div className='p-2 pt-5'>
                    <p className='font-bold text-[20px]'>{userInfo?.name}</p>
                </div>
                {accountInfo?._id === userId ?
                    <div className='border-t border-[#ccc] p-2'>
                        <button className='btn'>Chỉnh sửa trang cá nhân</button>
                    </div>
                    : ""
                }
            </div>

            <div className='grid grid-cols-2 xl:grid-cols-5 gap-3 my-5'>
                {Array.isArray(galleryList) && galleryList.length > 0 && galleryList.map((item) => (
                    <CardImage key={item._id} isProfilePage={true} image={item} />
                ))}
            </div>
        </section>
    )
}

export default YourProfilePage