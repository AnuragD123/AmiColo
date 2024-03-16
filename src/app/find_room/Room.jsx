// 'use client'
// import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import {
    Star,
    Share2,
} from 'lucide-react';
import axios from 'axios';

const Room = ({ key, data }) => {
    // const [showAlert, setShowAlert] = useState(false);

    // const handleVisitButtonClick = () => {
    //     setShowAlert(true);
    // };

    return (
        <div
            className="w-full bg-white  rounded-lg shadow-md  hover:bg-gray-100  dark:bg-gray-800 dark:hover:bg-gray-700 flex flex-col md:flex-row"
        >
            {/* {showAlert ?
                <div className='fixed top-0 left-0 w-screen h-screen bg-black flex items-center justify-center'>
                    <div className='bg-white w-3/4 h-56'>
                        <h1 className=''>Hello</h1>
                        <button onClick={() => setShowAlert(false)}>Close</button>
                    </div>
                </div> : null} */}
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
                <div className='w-full'>

                    <Link href={`/booking/${data.id}`}>
                        <button className="float-right rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-orange-400 text-white px-4 py-2"
                        // onClick={handleVisitButtonClick} // Pass function reference here
                        >
                            Visit
                        </button>
                    </Link>
                </div>
                <div className="flex justify-start items-center text-xs text-gray-500 dark:text-gray-200 space-x-4">


                    <div className="share-favorite flex justify-center items-center space-x-4">
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
