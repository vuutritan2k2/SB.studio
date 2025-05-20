import React from 'react'
import logo from '../../assets/logo.png'
import { CiHeart } from "react-icons/ci";
import { IoBagAddOutline } from "react-icons/io5";

function formatVND(amount) {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
}

const CardItem = ({item}) => {
    return (
        <>
            <div key={item.tittle} className='card p-4 bg-white border border-[#f2f2f2] shadow-xl rounded-xl'>
                <div className='cardImage max-h-[150px]'>
                    <img className='w-full max-h-[150px] object-cover' src={item.imgUrl} />
                </div>
                {/* Card Info */}
                <div className='cardInfo my-2 flex justify-between items-center'>
                    <div className="cardText">
                        <p className='font-bold'>{item.foodName}</p>
                        <p className='font-thin'>{formatVND(item.price)}</p>
                    </div>
                    <div className="cardButton flex gap-2">
                        <button className='shadow-md p-2 text-[20px] rounded-full border border-[#f1f1f1]'><CiHeart /></button>
                        <button className='shadow-md p-2 text-[20px] rounded-full border border-[#f1f1f1]'><IoBagAddOutline /></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardItem