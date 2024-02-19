import React from 'react';
import Link from 'next/link';
import {
    MapPin,
    Car,
    Bath,
    Building,
    ParkingCircle,
    PawPrint,
    Star,
    Share2,
} from 'lucide-react';

const Room = () => {
    return (
        <div className="min-h-screen flex justify-center items-center">
            <Link
                href="#"
                className="bg-white border border-gray-200 rounded-lg shadow-md md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 flex flex-col md:flex-row"
            >
                <img
                    className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                    src="/images/room.jpg"
                    alt="room photo"
                />
                <div className="p-4 flex flex-col justify-between">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-green-600 dark:text-white">
                        $2,500.00
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        ***Roommate Immediately needed***
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-200">
                        Montreal | 11 hours ago
                    </p>
                    <p className="border rounded-md px-[0.3rem] py-[0.1rem] w-3 border-gray-700 text-xs min-w-fit text-gray-500 dark:text-gray-200">
                        TOP Ad
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-200">
                        Lorem ipsum dolor sit abet, consectetur advising edit...
                    </p>
                    <div className="features flex flex-wrap gap-2 mt-2 text-xs text-gray-500 dark:text-gray-200">
                        <div className="flex items-center location">
                            <MapPin className="w-4 mr-1" /> <p>Rue Denoville</p>
                        </div>
                        <div className="flex items-center vehicle">
                            <Car className="w-4 mr-1" /> <p>4</p>
                        </div>
                        <div className="flex items-center bathroom">
                            <Bath className="w-4 mr-1" /> <p>1.5</p>
                        </div>
                        <div className="flex items-center building">
                            <Building className="w-4 mr-1" />{' '}
                            <p>Duplex/Triplex</p>
                        </div>
                        <div className="flex items-center parking">
                            <ParkingCircle className="w-4 mr-1" /> <p>0</p>
                        </div>
                        <div className="flex items-center pet">
                            <PawPrint className="w-4 mr-1" /> <p>Yes</p>
                        </div>
                    </div>
                    <div className="flex justify-start items-center text-xs text-gray-500 dark:text-gray-200 space-x-4">
                        <button className="rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-orange-400 text-white px-4 py-2">
                            Book Now
                        </button>
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
            </Link>
        </div>
    );
};

export default Room;
