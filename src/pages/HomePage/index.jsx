import React from 'react'
import logo from '../../assets/logo.png'
import story1 from '../../assets/story-1.png'
import CardItem from '../../components/CardItem'

const HomePage = () => {
  return (
    <>
      <div className='heroSlider'>
        <img className='w-full h-[500px] object-cover rounded-xl shadow-md' src={logo} />
      </div>
      {/* Story Image */}
      <div className='my-5 p-5'>
        <img className='w-20 h-20 rounded-full p-1 border-4 border-[#3d3d3d]' src={story1} />
      </div>
      {/* Popular Thuc Don */}
      <div className='my-5'>
        <h1 className='mb-5 text-center uppercase font-bold'>Thực Đơn Sb.studio có gì...</h1>
        <div className='grid grid-cols-2 xl:grid-cols-4 gap-4'>
          <CardItem />
        </div>
      </div>
    </>
  )
}

export default HomePage