import React from 'react'
import { Link } from 'react-router';
import dayjs from 'dayjs';

const CardImage = ({ image, isProfilePage }) => {
  const modalId = `modal_${image?._id}`; // Tạo ID duy nhất
  return (
    <>
      <div className='card rounded-xl group bg-white border border-[#f1f1f1] p-5'>
        {!isProfilePage ?
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
          <div className='opacity-0 absolute rounded-3xl h-full w-full top-0 backdrop-blur place-items-center place-content-center'>
            {/* The button to open modal */}
            <label htmlFor={modalId} className="btn w-full h-full">open modal</label>
          </div>
        </div>
        {/* Put this part before </body> tag */}
        <input type="checkbox" id={modalId} className="modal-toggle" />
        <div className="modal" role="dialog">
          <div className="modal-box">
            <h3 className="text-lg font-bold">Ngày {dayjs(image?.createdAt).format("DD/MM/YYYY")}</h3>
            <p>{image?.title}</p>
            <img src={image?.imgUrl} className='my-5 rounded-xl' />
          </div>
          <label className="modal-backdrop" htmlFor={modalId}>Close</label>
        </div>
      </div>
    </>
  )
}

export default CardImage