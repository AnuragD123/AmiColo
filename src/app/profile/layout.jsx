'use client'
import Sidebar from "../(Components)/Profile/Sidebar/Sidebar";
import { useState, useEffect } from "react";
import axios from 'axios'
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import { useUserContext } from '@/context/context';
export default function ProfileLayout({ children }) {
  const [userData, setUserdata] = useState('');
  const [sidebartoggle, setSidebartoggle] = useState(false);
  const { user, socket } = useUserContext();
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get('/api/user/getdata');
        console.log(response.data.data[0]);
        // setUser(response.data.data[0]);
        setUserdata(response.data.data[0]);

      } catch (error) {
        console.log(error.message)
      }
    }
    getData();
  }, [])
  useEffect(() => {
    if (user) {
      console.log("ENter In Add User")
      socket?.emit('addUser', user?.id)
    }

    socket?.on('getUsers', users => {
      console.log("ActiveUSers=>", users)
    })
  }, [socket, user]);
  return (

    <div className="flex flex-row gap-2 relative">

      {/* Sidebar for all profile routes */}
      <div className={`w-64 bg-white px-5 relative py-8 transition-all duration-300 ease-linear ${sidebartoggle ? "max-sm:w-64" : "max-sm:w-0"} max-sm:fixed top-0 h-full max-sm:px-0 z-10`}>
        <Sidebar data={userData} />
        <div className="text-white flex items-center pl-2 pr-1 sm:hidden h-14 rounded-tr-xl rounded-br-xl absolute top-1/2 -right-6 bg-gray-500" onClick={() => setSidebartoggle(!sidebartoggle)}>{sidebartoggle ? <FaAngleLeft /> : <FaAngleRight />}</div>
      </div>

      {/* All the other pages gets displayed here */}
      <div className="w-2/4 mx-auto mt-10 max-md:w-3/5 max-sm:w-11/12 ">
        {children}

      </div>

    </div>



  );
}
