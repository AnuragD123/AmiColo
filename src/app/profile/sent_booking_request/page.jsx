'use client'
import React, { useEffect, useState } from 'react'
import Room from '@/app/(Components)/Room/Room'
import axios from 'axios';
const Listing = () => {

    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        fetchRooms();
    }, []);


    const fetchRooms = async () => {
        try {
            const response = await axios.get('/api/room/requestroom');
            setRooms(response.data.data);
            console.log('*************data',response.data.data)

        } catch (error) {
            console.error('Error fetching rooms:', error);

        }
    };

    return (
        <div className=' flex-1 p-2 flex flex-col items-center'>
            <p className=' w-4/5 text-center text-3xl text-white font-extrabold py-3' style={{ backgroundImage: "linear-gradient(#EF8463, #7170F5 )", clipPath: "polygon(3% 0%, 97% 0%, 100% 50%, 97% 100%, 3% 100%, 0% 50%)" }}>Sent Booking Requests</p>
            <div className="mt-5 w-4/5 flex flex-col justify-center items-center gap-5">
                {
                    rooms.map((room) => (
                        <Room key={room.id} data={room} booking_req_id={room.booking_req_id} Callback={() => fetchRooms}/>
                    )

                    )
                }
            </div>
        </div>
    )
}

export default Listing
