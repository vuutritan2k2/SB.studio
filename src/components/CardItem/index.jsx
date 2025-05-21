import React from 'react'
import logo from '../../assets/logo.png'
import { CiHeart } from "react-icons/ci";
import { IoBagAddOutline } from "react-icons/io5";

function formatVND(amount) {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
}

const CardItem = ({ item }) => {
    const modalId = `modal_${item?._id}`; // Tạo ID duy nhất

    return (
        <>
            <div key={item.tittle} className='card p-4 bg-white border border-[#f2f2f2] shadow-xl rounded-xl'>
                <div className='cardImage max-h-[150px] relative'>
                    <img className='w-full max-h-[150px] object-cover' src={item.imgUrl} />
                    <label htmlFor={modalId} className="btn w-full h-full absolute inset-0 opacity-0">open modal</label>
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
                {/* Put this part before </body> tag */}
                <input type="checkbox" id={modalId} className="modal-toggle" />
                <div className="modal" role="dialog">
                    <div className="modal-box flex gap-3 items-center">
                        <div className='imageFood w-[30%]'>
                            <img className="w-25 h-25 rounded-full" src={item.imgUrl}/>
                        </div>
                        <div className='infoFood w-[70%]'>
                            <h1 className='font-bold text-[18px]'>{item.foodName}</h1>
                            <p className='font-thin'>{item.address}</p>
                        </div>
                    </div>
                    <label className="modal-backdrop" htmlFor={modalId}>Close</label>
                </div>
            </div>
        </>
    )
}

export default CardItem