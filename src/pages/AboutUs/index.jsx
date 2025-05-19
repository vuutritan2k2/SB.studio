import React from 'react'
import sunbenbanner from '../../../public/sunben-banner.png'

const AboutUsPage = () => {
  const couple = [
    {
      name: 'Sunsun Hơmm',
      imgUrl: 'https://i.pinimg.com/736x/1c/0d/c7/1c0dc753721fbaef7b24bbd3b903ee31.jpg',
      date: '26.12.2002'
    },
    {
      name: 'Benben Húii',
      imgUrl: 'https://i.pinimg.com/736x/1d/c6/3e/1dc63ec2ef83048a075a171d1dbae0b5.jpg',
      date: '27.08.2002'
    },
  ]

  return (
    <section className='my-5'>
      <div className='flex flex-col justify-center'>
        <div className='image bg-[#f1f1f1] relative'>
          <img className='w-full max-h-200 object-cover rounded-xl' src={sunbenbanner} />
          <div className='backdrop-blur-3xl w-[100%] h-[100px] bottom-0 left-0 absolute place-content-center place-items-center text-white rounded-b-xl'>
            <p className='font-bold text-[40px]'>About Us</p>
          </div>
        </div>
        <div className='infoCouple my-5 grid grid-cols-2 gap-4'>
          {Array.isArray(couple) && couple.map((items) => (

            <div key={items.name} className='flex justify-center flex-col'>
              <img src={items.imgUrl} />
              <p className='font-bold'>{items.name}</p>
              <p className='font-thin'>{items.date}</p>
            </div>

          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutUsPage