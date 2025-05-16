import React from 'react'
import logo from '../../assets/logo.png'
import story1 from '../../assets/story-1.png'
import CardItem from '../../components/CardItem'
import { IoAdd } from "react-icons/io5";
import Banner3D from '../../components/Banner3D/banner3d';
import CardImage from '../../components/CardImage';

const HomePage = () => {
  // Bước 1: Ngày bắt đầu
  const startDateString = "12/02/2024";
  const [day, month, year] = startDateString.split("/").map(Number);
  const startDate = new Date(year, month - 1, day); // chú ý: tháng bắt đầu từ 0

  // Bước 2: Ngày hiện tại (hôm nay)
  const today = new Date();

  // Bước 3: Tính số mili-giây giữa 2 ngày
  const diffTime = today - startDate;

  // Bước 4: Đổi mili-giây thành số ngày (1 ngày = 86400000ms)
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)).toLocaleString().split("");

  return (
    <>
      <Banner3D />
      <section className='flex items-center justify-center my-5 gap-2'>
        <div className='flex gap-2'>
          {diffDays.map((item) => (
            <p key={item} className='rounded-md bg-[#f1f1f1] px-4 py-2 xl:text-[50px]'>{item}</p>
          ))}
        </div>
        <p>ngày</p>
      </section>
      {/* Story Image */}
      {/* <section>
        <h1 className='mb-5 text-center uppercase font-bold'>Story Story</h1>
        <div className='popularStory my-5 rounded-xl'>
          <div className='my-5 flex flex-nowrap justify-center items-center gap-3 w-full overflow-x-auto'>
            <IoAdd className='text-[60px]' />
            <div className='part2 flex gap-3'>
              <img className='w-20 h-20 rounded-full p-1 border-4 border-[#3d3d3d]' src={story1} />
              <img className='w-20 h-20 rounded-full p-1 border-4 border-[#3d3d3d]' src={story1} />
              <img className='w-20 h-20 rounded-full p-1 border-4 border-[#3d3d3d]' src={story1} />
              <img className='w-20 h-20 rounded-full p-1 border-4 border-[#3d3d3d]' src={story1} />
              <img className='w-20 h-20 rounded-full p-1 border-4 border-[#3d3d3d]' src={story1} />
              <img className='w-20 h-20 rounded-full p-1 border-4 border-[#3d3d3d]' src={story1} />
              <img className='w-20 h-20 rounded-full p-1 border-4 border-[#3d3d3d]' src={story1} />
              <img className='w-20 h-20 rounded-full p-1 border-4 border-[#3d3d3d]' src={story1} />
              <img className='w-20 h-20 rounded-full p-1 border-4 border-[#3d3d3d]' src={story1} />
              <img className='w-20 h-20 rounded-full p-1 border-4 border-[#3d3d3d]' src={story1} />
            </div>
          </div>
        </div>
        <div className='grid grid-cols-2 xl:grid-cols-5 gap-4'>
          <CardImage/>
          <CardImage/>
          <CardImage/>
          <CardImage/>
        </div>
      </section> */}
      {/* Popular Thuc Don */}
      {/* <div className='my-5'>
        <h1 className='mb-5 text-center uppercase font-bold'>Thực Đơn Sb.studio có gì...</h1>
        <div className='grid grid-cols-2 xl:grid-cols-4 gap-4'>
          <CardItem />
        </div>
      </div> */}
    </>
  )
}

export default HomePage