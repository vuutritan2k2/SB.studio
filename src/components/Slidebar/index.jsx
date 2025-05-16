import React from 'react'
import logo from '../../assets/logo.png'
import { FaHome } from "react-icons/fa";
import { IoFastFoodOutline } from "react-icons/io5";
import { CiImageOn } from "react-icons/ci";
import { NavLink } from 'react-router-dom'

const SlideBar = () => {

  return (
    <>
      <div className='slideBar w-full'>
        {/* Logo */}
        <div className='logoSlidebar flex items-center gap-2'>
          <img className='w-16 h-16 rounded-md' src={logo} />
          <p>SB.Studio</p>
        </div>
        {/* Tabs */}
        <ul className='flex flex-col w-full gap-2 my-4'>
          <h1>Menu Sunben</h1>
          <NavLink to='/' className={({ isActive }) => `p-2 rounded-md ${isActive ? 'bg-white shadow-md' : 'hover:bg-[#ccc] hover:duration-700'}  flex gap-2 items-center`}><FaHome />Trang Chủ</NavLink>
          <NavLink to='/food' className={({ isActive }) => `p-2 rounded-md ${isActive ? 'bg-white shadow-md' : 'hover:bg-[#ccc] hover:duration-700'} flex gap-2 items-center`}><IoFastFoodOutline />Thực Đơn</NavLink>
          <NavLink to='/library' className={({ isActive }) => `p-2 rounded-md ${isActive ? 'bg-white shadow-md' : 'hover:bg-[#ccc] hover:duration-700'} flex gap-2 items-center`}><CiImageOn />Hình Ảnh</NavLink>
        </ul>
        {/* Info Account */}
        <div className='infoAccount font-thin absolute bottom-10 left-2 flex gap-3 items-center'>
          <div className="avatar">
            <div className="w-12 rounded-full">
              <img src={logo} />
            </div>
          </div>
          <div className="div">
            <p>Vưu Trí Tấn</p>
            <p>0704539076</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default SlideBar