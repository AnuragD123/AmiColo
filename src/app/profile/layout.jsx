'use client'
import Sidebar from "../(Components)/Profile/Sidebar/Sidebar";
import { useState, useEffect } from "react";
import axios from 'axios'
import { useUserContext } from '@/context/context';
export default function ProfileLayout({ children }) {
  const [userData, setUserdata] = useState('');
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

    <div className="flex flex-row gap-2">

      {/* Sidebar for all profile routes */}

      <Sidebar data={userData} />

      {/* All the other pages gets displayed here */}
      {children}

    </div>



  );
}
