import React from 'react'
import logo from '../../assets/logo.png'
import { LuHeart } from "react-icons/lu";

const CardImage = () => {
  return (
    <div className='cardImage rounded-xl group bg-white border border-[#f1f1f1] p-5'>
      <div className="flex mb-5 items-center gap-4">
        <div className="w-12 rounded-full">
          <img src={logo} />
        </div>
        <p>Sunsun</p>
      </div>
      <div className='relative flex justify-center'>
        <img className='w-full max-h-64 object-cover rounded-xl' src='https://i.pinimg.com/736x/45/2a/52/452a527f99de8a49377b57b830053fd8.jpg' />
        <div className='opacity-0 absolute rounded-3xl translate-y-10 h-full w-full top-0 backdrop-blur place-items-center place-content-center duration-1000 group-hover:opacity-100 group-hover:translate-y-0'>
          <p className='text-white'>14/05/2025</p>
        </div>
      </div>
      <div className='flex justify-center my-5'>
        <button className='btn rounded-full !py-5'><LuHeart /></button>
      </div>
    </div>
  )
}

export default CardImage