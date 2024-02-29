import React from 'react'
import { FaRegFileLines } from "react-icons/fa6";

const Matches = () => {
    return (
        <div className=' flex-1 p-2 flex flex-col items-center'>
            <p className=' w-4/5 text-center text-3xl text-white font-extrabold py-3' style={{ backgroundImage: "linear-gradient(#EF8463, #7170F5 )", clipPath: "polygon(3% 0%, 97% 0%, 100% 50%, 97% 100%, 3% 100%, 0% 50%)" }}>Improve My  Matches</p>
            <div className='w-3/5 h-full flex flex-col items-center justify-center gap-8'>
                <div className='w-full'>
                    <div className='text-center flex items-center py-4 rounded-2xl px-4' style={{ backgroundImage: "linear-gradient(to right, #FF6AC0, #FFD75F )" }}>
                        <FaRegFileLines className=' text-xl' />
                        <span className='w-full text-center text-3xl font-semibold'>
                            Take Quize 1
                        </span>

                    </div>
                    <p className=' text-center text-lg font-semibold'>40% Better Matches </p>
                </div>
                <div className='w-full'>
                    <div className='text-center flex items-center py-4 rounded-2xl px-4' style={{ backgroundImage: "linear-gradient(to right, #FFF6AF, #FFABF7 )" }}>
                        <FaRegFileLines className=' text-xl' />
                        <span className='w-full text-center text-3xl font-semibold'>
                            Take Quize 2
                        </span>

                    </div>
                    <p className=' text-center text-lg font-semibold'>60% Better Matches </p>
                </div>
                <div className='w-full'>
                    <div className='text-center flex items-center py-4 rounded-2xl px-4' style={{ backgroundImage: "linear-gradient(to right, #0FC0DD, #FBDE5C )" }}>
                        <FaRegFileLines className=' text-xl' />
                        <span className='w-full text-center text-3xl font-semibold'>
                            Take Quize 3
                        </span>

                    </div>
                    <p className=' text-center text-lg font-semibold'>75% Better Matches </p>
                </div>


            </div>
        </div>
    )
}

export default Matches;
