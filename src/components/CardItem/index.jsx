import React from 'react'
import logo from '../../assets/logo.png'
import { CiHeart } from "react-icons/ci";
import { IoBagAddOutline } from "react-icons/io5";

const CardItem = () => {
    const mockupData = [
        {
            tittle: 'Ngheu Hap Thai',
            url: 'https://png.pngtree.com/png-vector/20220527/ourlarge/pngtree-large-predatory-sea-snail-isolated-on-chalkboard-linear-snail-web-vector-png-image_30576252.jpg',
            description: 'Oc Ngoc - Ton Dan'
        },
        {
            tittle: 'Mi Go Thai',
            url: 'https://png.pngtree.com/png-vector/20220527/ourlarge/pngtree-large-predatory-sea-snail-isolated-on-chalkboard-linear-snail-web-vector-png-image_30576252.jpg',
            description: 'Hau Giang - Q6'
        },
    ]
    return (
        <>
        {mockupData.map((item) => (
        <div key={item.tittle} className='card p-4 bg-white border border-[#f2f2f2] shadow-xl rounded-xl'>
            <div className='cardImage'>
                <img className='max-h-[200px] w-full object-cover' src={item.url} />
            </div>
            {/* Card Info */}
            <div className='cardInfo my-2 flex justify-between items-center'>
                <div className="cardText">
                    <p className='font-bold'>{item.tittle}</p>
                    <p className='font-thin'>{item.description}</p>
                </div>
                <div className="cardButton flex gap-2">
                    <button className='shadow-md p-2 text-[20px] rounded-full border border-[#f1f1f1]'><CiHeart /></button>
                    <button className='shadow-md p-2 text-[20px] rounded-full border border-[#f1f1f1]'><IoBagAddOutline /></button>
                </div>
            </div>
        </div>
        ))}
        </>
    )
}

export default CardItem