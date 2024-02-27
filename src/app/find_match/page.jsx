'use client'
import React, { useEffect, useState } from 'react'
import Roomate from '../(Components)/Roomate/Roomate'
import axios from 'axios'
import { toast, Toaster } from "react-hot-toast";
const roommate = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('/api/user/fetchusers');
                setUsers(response.data.data);

            } catch (error) {
                console.error('Error fetching users:', error);

            }
        };

        fetchUsers();


    }, []);

    return (
        <>
            <Toaster />
            <div className=' flex-1 p-2 flex flex-col items-center'>
                <p className=' w-4/5 text-center text-3xl text-white font-extrabold py-3' style={{ backgroundImage: "linear-gradient(#EF8463, #7170F5 )", clipPath: "polygon(3% 0%, 97% 0%, 100% 50%, 97% 100%, 3% 100%, 0% 50%)" }}>My Roommates</p>
                <div className="mt-5 w-4/5 grid grid-cols-2 md:grid-cols-3 gap-4 justify-center items-center">
                    {
                        users.map((user) => (
                            <Roomate key={user.id} data={user} />
                        )

                        )
                    }
                </div>
                <div className='w-4/5 mt-3'>
                    <button className=' w-1/5 max-w-52 float-right text-center text-3xl text-white font-extrabold py-3' style={{ backgroundImage: "linear-gradient(#EF8463, #7170F5 )", clipPath: "polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 25% 50%)" }}> Next</button>
                </div>
            </div>
        </>
    )
}

export default roommate
