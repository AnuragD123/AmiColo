'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import {toast,Toaster} from 'react-hot-toast'
import {
    Star,
    Share2,
} from 'lucide-react';
import axios from 'axios';

const Room = ({ key, data,booking_req_id, Callback, booked }) => {

    const [requests,setRequests] = useState([]);
    
   
    useEffect(()=>{
        const fetchSentRoomReq = async () => {
            console.log('*************ROOM PAGE',booking_req_id);
            try {
                const res = await axios.post(`/api/room/fetch_sent_room_req`, { booking_req_id});
                setRequests(res.data.data);
               
                Callback;
            } catch (e) {
                console.error(e);
            }
        };
        fetchSentRoomReq();

    },[])
    const Decline = async (id) => {
        try {
            const res = await axios.post(`/api/room/Decline`, JSON.stringify({ id: id }))
            if(res.data.status==='success'){toast.success(res.data.msg)}
            else{ toast.error(res.data.msg)}
            Callback;
        } catch (e) {
            console.error(e);
        }
    };

    const BookNow = async (id) => {
        try {
            const res = await axios.post(`/api/room/book`, JSON.stringify({ id: id }))
            if (!res.ok) throw new Error(await res.text());
            Callback;
        } catch (e) {
            console.error(e);
        }
    };
    return (
        <div
            className="w-full bg-white  rounded-lg shadow-md  hover:bg-gray-100  dark:bg-gray-800 dark:hover:bg-gray-700 flex flex-col md:flex-row"
        >
            <Toaster/>
            <img
                className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                src="/images/room.jpg"
                alt="room photo"
            />
            <div className="p-4 flex flex-col justify-between" style={{ width: '100%' }}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-green-600 dark:text-white">
                    ${data.price}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    ***Roommate Immediately needed***
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-200">
                    Parking: {data.parking === 'yes' ? 'Available' : 'Not Available'} | Gym: {data.gym === 'yes' ? 'Available' : 'Not Available'}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-200">
                    Room Type is {data.type} and area is {data.area}. it has {data.rooms} bedrooms and {data.washrooms} bathrooms
                </p>
                {requests && requests.length > 0 && (
                    <div className="flex flex-col gap-2 my-5">
                        <h5 className="text-lg font-bold text-green-600 dark:text-white">Booking Requests</h5>
                        {requests.map((request,index) => (
                            <div key={index} className="bg-white p-4 shadow-md rounded-md">
                                <div className="flex items-center">
                                    <img
                                        src={`https://placekitten.com/50/50?image=${request.id}`} // Replace with your actual requests avatar
                                        alt={`Avatar of ${request.first_name}`}
                                        className="rounded-full h-10 w-10 object-cover"
                                    />
                                    <div className="flex items-center" style={{ justifyContent: 'space-between', width: '100%' }}>
                                        <div className="ml-4">
                                            <h2 className="text-lg font-semibold">
                                                {request.first_name} {request.last_name}
                                            </h2>
                                            <p className="text-gray-500">{request.email}</p>
                                        </div>

                                        <div className="mt-4">
                                            <div
                                                className="text-black ml-2 px-2 rounded-xl" style={{ border: '1px solid black', fontSize: 10 }}>
                                                {request.invitation_status}
                                            </div>
                                        </div>

                                        <div className="mt-4">
                                            <button
                                                onClick={() => Decline(request.invitation_id)}
                                                className="bg-gray-300 text-gray-700 ml-2 px-3 py-1 rounded-md">
                                                withdraw request
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                {!booked && <div className='w-full'>
                    <button
                        onClick={() => { BookNow(booking_req_id) }}
                        className=" float-right rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-orange-400 text-white px-4 py-2">
                        Book Now
                    </button>
                </div>}
                <div className="flex justify-start items-center text-xs text-gray-500 dark:text-gray-200 space-x-4">


                    <div className="share-favorite flex justify-center items-center space-x-4">
                        <button className="flex justify-center items-center">
                            <Share2 className="w-4" />
                            <p className="hidden md:inline">Share</p>
                        </button>
                        <button className="flex justify-center items-center">
                            <Star className="w-4" />
                            <p className="hidden md:inline">
                                Add to Favorites
                            </p>
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Room;
