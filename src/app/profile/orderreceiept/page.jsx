import React from 'react'
import { FaRegFilePdf } from "react-icons/fa6";
import { MdOutlineCloudDownload } from "react-icons/md";
const OrderReceipt = () => {
    return (
        <div className=' flex-1 p-2 flex flex-col items-center'>
            <p className=' w-4/5 text-center text-3xl text-white font-extrabold py-3' style={{ backgroundImage: "linear-gradient(#EF8463, #7170F5 )", clipPath: "polygon(3% 0%, 97% 0%, 100% 50%, 97% 100%, 3% 100%, 0% 50%)" }}>Order Receipts</p>
            <div className='w-3/5'>
                {Array.from({ length: 3 }, (_, index) => (
                    <div className='flex items-center justify-center mt-12' key={index}>
                        <FaRegFilePdf className='fill-red-700' style={{ fontSize: "60px" }} />
                        <span className=' bg-red-500 rounded-l-xl px-5 py-3'>
                            <p className=' text-white text-2xl font-semibold'>Order No: #12005</p>
                            <p className=' text-white text-xl font-medium'>Date: 12/05/2023</p>
                            <p className=' text-white text-lg font-medium'>Size: 1 MB</p>
                        </span>
                        <span className='bg-yellow-500 px-3 py-5 rounded-r-xl flex flex-col items-center justify-center'>
                            <p className=' text-white text-2xl font-semibold'>Download</p>
                            <MdOutlineCloudDownload className='fill-white text-4xl text-center' />
                        </span>
                    </div>
                ))}

            </div>
        </div >
    )
}

export default OrderReceipt
