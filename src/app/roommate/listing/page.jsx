import React from 'react'
import Room from '@/app/(Components)/Room/Room'
const listing = () => {
    return (
        <div className=' flex-1 p-2 flex flex-col items-center'>
            <p className=' w-4/5 text-center text-3xl text-white font-extrabold py-3' style={{ backgroundImage: "linear-gradient(#EF8463, #7170F5 )", clipPath: "polygon(3% 0%, 97% 0%, 100% 50%, 97% 100%, 3% 100%, 0% 50%)" }}>My Listings</p>
            <div className="mt-5 w-4/5 flex flex-col justify-center items-center gap-5">
                <Room />
                <Room />
                <Room />
                <Room />
                <Room />
                <Room />
            </div>
        </div>
    )
}

export default listing
