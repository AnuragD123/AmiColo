'use client'
import Filter from "../(Components)/Filter/Filter";
import { useState, useEffect } from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
export default function ProfileLayout({ children }) {
  const [sidebartoggle, setSidebartoggle] = useState(false);
  return (

    <div className='flex flex-row gap-2 w-full h-full relative'>
      <div className={` w-72 bg-gradient-to-r from-cyan-200 to-blue-200  px-5 relative py-8 transition-all duration-300 ease-linear ${sidebartoggle ? "max-sm:w-60" : "max-sm:w-0"} max-sm:fixed top-0 h-full max-sm:px-0 z-10`} style={{ backgroundImage: "linear-gradient(to right, #BBEEE0 , #B6D0FE)" }}>
        <div className="w-full overflow-hidden">
          <Filter />

        </div>
        <div className="text-white flex items-center pl-2 pr-1 sm:hidden h-14 rounded-tr-xl rounded-br-xl absolute top-1/2 -right-6 bg-gray-500" onClick={() => setSidebartoggle(!sidebartoggle)}>{sidebartoggle ? <FaAngleLeft /> : <FaAngleRight />}</div>
      </div>
      {/* All the other pages gets displayed here */}
      <div className="w-4/5 mx-auto mt-10 max-md:w-3/5 max-sm:w-11/12 ">
        {children}

      </div>
    </div>
  );
}
