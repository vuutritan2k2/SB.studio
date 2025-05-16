import React from 'react'
import CardImage from '../../components/CardImage'

const LibraryPage = () => {
    return (
        <>
            <section className='flex justify-center uppercase font-bold my-5'>
                <p>Thư Viện Ảnh</p>
            </section>
            <section className='grid grid-cols-2 xl:grid-cols-5 gap-4 my-5'>
                <CardImage />
                <CardImage />
                <CardImage />
                <CardImage />
            </section>
        </>
    )
}

export default LibraryPage