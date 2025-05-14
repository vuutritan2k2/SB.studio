import React from 'react'
import CardItem from '../../components/CardItem'

const FoodPage = () => {
    const today = new Date().toLocaleDateString('vi-VN')
    return (
        <section>
            <div className="hero bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">{today}</h1>
                        <p className="py-6">
                            Chọn món gòi gét gô đi bà thơ !
                        </p>
                    </div>
                </div>
            </div>
            {/* Tất cả món */}
            <div className='flex my-5 justify-center'>
                <p className='font-bold'>ALL THỰC ĐƠN</p>
            </div>
            <div className='grid grid-cols-2 xl:grid-cols-4 my-5 gap-4'>
                <CardItem />
            </div>
            <div className='flex justify-center my-5'>
                <button className='btn'>Load More...</button>
            </div>
        </section>
    )
}

export default FoodPage