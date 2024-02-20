import React from 'react'
import { HiOutlineIdentification } from "react-icons/hi2";
import { IoFingerPrint } from "react-icons/io5";
import IDverfication from '../../../../images/Id_verfication.png'
import Image from 'next/image';

const Verfication = () => {
    return (
        <div className='w-full flex flex-col items-center justify-center' style={{ backgroundImage: "linear-gradient(to right, #8272FA , #5DDEE6)" }}>
            <HiOutlineIdentification className=' fill-white' style={{ fontSize: "200px" }} />
            <div className='relative'>
                <Image
                    src={IDverfication}
                    alt="Verfication Img"
                />
                <button className=' absolute bottom-5 right-1/2 max-w-52 float-right text-center text-3xl px-3 rounded-xl text-white font-extrabold py-3' style={{ backgroundImage: "linear-gradient(#EF8463, #7170F5 )", transform: "translate(50%, 5%)" }}>Proceed</button>
            </div>

        </div>
    )
}

export default Verfication
