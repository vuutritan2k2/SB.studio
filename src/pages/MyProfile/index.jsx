import React from 'react'
import useZustand from '../../zustand/useZustand';

const MyProfilePage = () => {
    const userInfo = useZustand((state) => state.userInfo); // Lấy ra user id từ fetchUserInfo ở Zustand
    console.log(userInfo)
    return (
        <section className='!my-5 container'>
            <div className='w-full relative bg-[#f1f1f1] rounded-t-2xl'>
                <img className='w-full h-40 md:h-60 xl:h-100 max-h-100 object-cover rounded-t-2xl' src={userInfo?.avatar} />
                <div className='backdrop-blur absolute top-0 w-full h-40 md:h-60 xl:h-100 left-0 rounded-t-2xl'></div>
                <div className='userInfo flex flex-col gap-3 items-center p-4 absolute bottom-10'>
                    <div className='avatar w-24 h-24'>
                        <img className='rounded-full border-3 border-white' src={userInfo?.avatar} />
                    </div>
                </div>
                <div className='py-5 px-2'>
                    <p className='font-bold text-[20px]'>{userInfo?.name}</p>
                </div>
            </div>
        </section>
    )
}

export default MyProfilePage
