import React from 'react'
import Room from '@/app/(Components)/RoomRequetsCard/paage'
const Roomrequest = () => {
    return (
        <div className=' flex-1 p-2 flex flex-col items-center'>
            <p className=' w-4/5 text-center text-3xl text-white font-extrabold py-3 max-lg:w-11/12' style={{ backgroundImage: "linear-gradient(#EF8463, #7170F5 )", clipPath: "polygon(3% 0%, 97% 0%, 100% 50%, 97% 100%, 3% 100%, 0% 50%)" }}>Room Request</p>
            <div className=" mt-16 w-3/5 flex flex-col justify-center items-center gap-5 max-xl:w-4/5 ">
                <Room />
            </div>
        </div>
    )
}

export default Roomrequest
