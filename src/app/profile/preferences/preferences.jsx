import React from 'react'
import { FaRegHeart } from "react-icons/fa";
const Preference = () => {
  return (
    <div>
      {Array.from({ length: 3 }, (_, index) => (
        <div className='leading-10'>
          <p className=' font-semibold'>What best describes your food preferences?</p>
          <div className='flex items-center justify-around'>
            {Array.from({ length: 5 }, (_, index) => (
              <span className='flex flex-col items-center gap-3' key={index}>
                <img className=' w-24 h-20' src="https://www.cityguide-dubai.com/fileadmin/_processed_/3/3/csm_img-worlds-of-adventures-teaser_40e4184da1.jpg" alt="img" />
                <p><FaRegHeart /></p>
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Preference
