import React from 'react'
import logo from '../../assets/logo.png'
import { CiHeart } from "react-icons/ci";
import { IoBagAddOutline } from "react-icons/io5";

const CardItem = () => {
    const mockupData = [
        {
            tittle: 'Ốc Ngọc',
            url: 'https://lh4.googleusercontent.com/proxy/U8ZYkPoNwSnbDTRyQdCfA6pT4Err-DitAQJH1s1QYpKQgOZ_LIDEVS5wHZTXuv-MkWEsDENyyJPi3XHBXMVtLVrIFusgjcTGxsvYS7RanUsDJ_WSPSeo4IvjDwqo6FgVpCvL3hb-51Rg7SG-n-bwD9_DUC8',
            price: '300000'
        },
        {
            tittle: 'Mì Gõ Thái',
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaUw4QPC3LTLF9fOl85fS3fKgSEOID6KvSTw&s',
            price: '160000 VND'
        },
        {
            tittle: 'KFC',
            url: 'https://img.mservice.com.vn/common/u/2e02fb5fe4f64fb55bc713540643c6f8eae702d101cea8c59afc49cfc505fc37/b0893c11-c95c-4810-bdd6-fd0fe0ce76a2u_xrdyur.jpeg',
            price: '260000 VND'
        },
    ]
    return (
        <>
            {mockupData.map((item) => (
                <div key={item.tittle} className='card p-4 bg-white border border-[#f2f2f2] shadow-xl rounded-xl'>
                    <div className='cardImage max-h-[150px]'>
                        <img className='w-full max-h-[150px] object-cover' src={item.url} />
                    </div>
                    {/* Card Info */}
                    <div className='cardInfo my-2 flex justify-between items-center'>
                        <div className="cardText">
                            <p className='font-bold'>{item.tittle}</p>
                            <p className='font-thin'>{item.price}</p>
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