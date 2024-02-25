"use client";
import { useState } from "react";
import {
    MapPin,
    Car,
    Bath,
    Building,
    ParkingCircle,
    PawPrint,
    Star,
    Share2,
    MessageCircle,
    Send,
} from "lucide-react";

import ImageGrid from "../(Components)/ImageGrid/ImageGrid";
import Invite from "../(Components)/invite/invite";

export default function Home() {
    const [showInvite, setShowInvite] = useState(false);

    return (
        <div className=" flex my-2 justify-center items-center lg:flex-row flex-col mx-4 md:mx-12">
            <div className="image-container md:mx-auto max-w-2xl lg:max-w-3xl">
                {/* <Image
                    src="/images/room.jpg"
                    alt="room-photo"
                    className="rounded-lg"
                    height={500}
                    width={500}
                /> */}
                <ImageGrid />
            </div>
            <div className="content">
                <div className="p-4">
                    <h5 className="mb-2 text-2xl font-bold text-green-600 dark:text-white">
                        $2,500.00
                    </h5>
                    <p className="text-sm font-normal text-gray-700 dark:text-gray-400">
                        Lava Agni 2 5G (Glass Iron, 8GB RAM, 256GB Storage)
                        |2.6GHz Dimensity 7050 6nm Processor | Curved Amoled
                        Display| 13 5G Bands | Superfast 66W Charger | Clean
                        Android (No Bloatware, No Ads)
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-200">
                        Montreal | 11 hours ago
                    </p>
                    <p className="text-sm max-h-64 text-gray-500 dark:text-gray-200">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Reprehenderit aut ratione nulla officiis expedita natus
                        facilis labore at beatae et tempora facere nostrum quae,
                        illum error laudantium deleniti mollitia!
                    </p>
                    <div className="ratings flex items-center my-5">
                        <p className="bg-blue-100 text-blue-800 text-sm font-semibold inline-flex items-center p-1.5 rounded dark:bg-blue-200 dark:text-blue-800">
                            8.7
                        </p>
                        <p className="ms-2 font-medium text-gray-900 dark:text-white">
                            Excellent
                        </p>
                        <span className="divider"></span>
                        <p className="ml-4 text-sm font-medium text-gray-500 dark:text-gray-400">
                            376 reviews
                        </p>
                    </div>
                    <div className="gap-8 sm:grid sm:grid-cols-2">
                        <div>
                            <dl>
                                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                    Society Committee
                                </dt>
                                <dd className="flex items-center mb-3">
                                    <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 me-2">
                                        <div
                                            className="bg-blue-600 h-2.5 rounded dark:bg-blue-500"
                                            style={{ width: "80%" }}
                                        ></div>
                                    </div>
                                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                        8.8
                                    </span>
                                </dd>
                            </dl>
                            <dl>
                                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                    Comfort
                                </dt>
                                <dd className="flex items-center mb-3">
                                    <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 me-2">
                                        <div
                                            className="bg-blue-600 h-2.5 rounded dark:bg-blue-500"
                                            style={{ width: "89%" }}
                                        ></div>
                                    </div>
                                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                        8.9
                                    </span>
                                </dd>
                            </dl>
                            <dl>
                                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                    Free WiFi
                                </dt>
                                <dd className="flex items-center mb-3">
                                    <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 me-2">
                                        <div
                                            className="bg-blue-600 h-2.5 rounded dark:bg-blue-500"
                                            style={{ width: "80%" }}
                                        ></div>
                                    </div>
                                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                        8.8
                                    </span>
                                </dd>
                            </dl>
                            <dl>
                                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                    Facilities
                                </dt>
                                <dd className="flex items-center">
                                    <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 me-2">
                                        <div
                                            className="bg-blue-600 h-2.5 rounded dark:bg-blue-500"
                                            style={{ width: "54%" }}
                                        ></div>
                                    </div>
                                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                        5.4
                                    </span>
                                </dd>
                            </dl>
                        </div>
                        <div>
                            <dl>
                                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                    Value for money
                                </dt>
                                <dd className="flex items-center mb-3">
                                    <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 me-2">
                                        <div
                                            className="bg-blue-600 h-2.5 rounded dark:bg-blue-500"
                                            style={{ width: "89%" }}
                                        ></div>
                                    </div>
                                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                        8.9
                                    </span>
                                </dd>
                            </dl>
                            <dl>
                                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                    Cleanliness
                                </dt>
                                <dd className="flex items-center mb-3">
                                    <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 me-2">
                                        <div
                                            className="bg-blue-600 h-2.5 rounded dark:bg-blue-500"
                                            style={{ width: "70%" }}
                                        ></div>
                                    </div>
                                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                        7.0
                                    </span>
                                </dd>
                            </dl>
                            <dl>
                                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                    Location
                                </dt>
                                <dd className="flex items-center">
                                    <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 me-2">
                                        <div
                                            className="bg-blue-600 h-2.5 rounded dark:bg-blue-500"
                                            style={{ width: "89%" }}
                                        ></div>
                                    </div>
                                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                        8.9
                                    </span>
                                </dd>
                            </dl>
                            <dl>
                                <dt className="text-sm font-medium mt-3 text-gray-500 dark:text-gray-400">
                                    matching
                                </dt>
                                <dd className="flex items-center">
                                    <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 me-2">
                                        <div
                                            className="bg-blue-600 h-2.5 rounded dark:bg-blue-500"
                                            style={{ width: "75%" }}
                                        ></div>
                                    </div>
                                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                        7.5
                                    </span>
                                </dd>
                            </dl>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center w-full md:w-auto lg:mx-4 my-2">
                        <button className="md:mr-2 mb-2 md:mb-0 md:float-none rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-orange-400 text-white px-4 py-2">
                            Book Now
                        </button>
                        {showInvite ? (
                            <Invite />
                        ) : (
                            <>
                                <button
                                    className=" flex items-center md:mr-2 mb-2 md:mb-0 md:float-none rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-orange-400 text-white px-4 py-2"
                                    onClick={() => {
                                        setShowInvite(true);
                                    }}
                                    isVisible={showInvite}
                                >
                                    Invite
                                    <Send className="h-4 w-4 ml-2" />
                                </button>
                            </>
                        )}
                    </div>

                    <div className="social-icons flex justify-start items-center text-xs text-gray-500 dark:text-gray-200 space-x-4">
                        <button className="flex justify-center items-center">
                            <Share2 className="w-4" />
                            <p className="hidden md:inline">Share</p>
                        </button>
                        <button className="flex justify-center items-center">
                            <Star className="w-4" />
                            <p className="hidden md:inline">Add to Favorites</p>
                        </button>
                        <button className="flex justify-center items-center">
                            <MessageCircle className="w-4" />
                            <p className="hidden md:inline">Chat with Owner</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
