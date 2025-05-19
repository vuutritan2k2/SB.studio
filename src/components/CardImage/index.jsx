import React from 'react'
import logo from '../../assets/logo.png'
import { LuHeart } from "react-icons/lu";
import { Link } from 'react-router';

const CardImage = ({ image }) => {
  return (
    <div className='cardImage rounded-xl group bg-white border border-[#f1f1f1] p-5'>
      {image.userId ?
        <div className="flex mb-5 items-center gap-4">
          <div className="avatar">
            <div className="w-12 rounded-full">
              <img src={image?.userId?.avatar} />
            </div>
          </div>
          <Link to={`/profile/${image?.userId?._id}`}><p>{image?.userId?.name}</p></Link>
        </div>
        : ("")
      }
      <div className='relative flex justify-center'>
        <img className='w-full max-h-100 object-cover rounded-xl' src={image.imgUrl} />
        <div className='opacity-0 absolute rounded-3xl translate-y-10 h-full w-full top-0 backdrop-blur place-items-center place-content-center duration-1000 group-hover:opacity-100 group-hover:translate-y-0'>
          <p className='text-white'>{image.title}</p>
        </div>
      </div>
    </div>
  )
}

export default CardImage