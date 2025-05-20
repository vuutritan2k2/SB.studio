import React from 'react'
import CardItem from '../../components/CardItem'
import UploadFoodForm from '../../components/UploadFoodForm/index.jsx'
import { useGetAllFood } from '../../services/foodService.jsx'

const FoodPage = () => {
    const today = new Date().toLocaleDateString('vi-VN')

    const { foodList, loadingFoodList } = useGetAllFood()
    console.log(foodList)
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
            {/* Đăng món mới */}
            <div className='my-5'><UploadFoodForm /></div>

            {/* Tất cả món */}
            <div className='flex my-5 justify-center'>
                <p className='font-bold'>ALL THỰC ĐƠN</p>
            </div>
            <div className='grid grid-cols-2 xl:grid-cols-4 my-5 gap-4'>
                {foodList && foodList.length > 0 ? (
                    foodList.map((item, index) => (
                        <CardItem key={index} item={item} />
                    ))
                ) : (
                    <p className="col-span-full text-center">Không có hình ảnh.</p>
                )}
            </div>
        </section>
    )
}

export default FoodPage