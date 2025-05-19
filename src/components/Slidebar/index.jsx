import React from 'react'
import logo from '../../assets/logo.png'
import { FaHome } from "react-icons/fa";
import { IoFastFoodOutline } from "react-icons/io5";
import { CiImageOn } from "react-icons/ci";
import { NavLink } from 'react-router-dom'
import useZustand from '../../zustand/useZustand';

const SlideBar = () => {

  const userInfo = useZustand((state) => state.userInfo); // Lấy ra user id từ fetchUserInfo ở Zustand

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
        <div className='infoAccount font-thin absolute bottom-10 left-2 w-[95%]'>
          <div className='part1 flex gap-3'>
            <div className="avatar">
              <div className="w-12 rounded-full">
                <img src={userInfo?.avatar} />
              </div>
            </div>
            <div className="div">
              <p>{userInfo?.name}</p>
              <p>{userInfo?.phone}</p>
            </div>
          </div>
          <div className="part2 mt-5">
            <button className="btn w-full" onClick={() => {
              localStorage.clear(); // hoặc localStorage.removeItem('key') nếu chỉ muốn xóa 1 mục cụ thể
              window.location.reload(); // reload lại trang
            }}>Đăng Xuất</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default SlideBar