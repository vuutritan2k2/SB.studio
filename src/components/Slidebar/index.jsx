import React from 'react'
import logo from '../../assets/logo.png'

const SlideBar = () => {
  return (
    <>
      <div className='slideBar p-4 relative h-screen'>
        {/* Logo */}
        <div className='logoSlidebar flex items-center justify-between bg-white p-2 rounded-md shadow-xl'>
          <h1 className='font-thin'>Sb.Studio</h1>
          <img className='w-16 h-16 rounded-md' src={logo} />
        </div>
        {/* Tabs */}
        <ul className='flex flex-col w-full gap-2 my-4'>
          <h1>Menu Sunben</h1>
          <li className='p-2 rounded-md bg-[#fff] shadow-md'>Trang Chu</li>
          <li className='p-2 rounded-md bg-[#fff] shadow-md'>Thuc Don</li>
        </ul>
        {/* Info Account */}
        <div className='infoAccount font-thin absolute bottom-5 left-5'>
          <p>Sb.studio Account</p>
          <p>0704539076</p>
        </div>
      </div>
    </>
  )
}

export default SlideBar