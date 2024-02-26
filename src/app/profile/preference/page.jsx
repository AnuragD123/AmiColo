import Link from "next/link";
import React from "react";
import { FaRegHeart } from "react-icons/fa";

const Preference = () => {
    return (
        <div className="w-2/4 mx-auto mt-10 leading-10">
            <div className="w-full flex items-center justify-between mb-4 gap-2">
                <Link href="/profile/edit" className="w-1/2 text-center bg-gray-300 text-2xl font-bold px-3 py-2 rounded-3xl">
                    Edit Profile
                </Link>
                <Link href="/profile/preference" className="w-1/2 text-center bg-gray-300 text-2xl font-bold px-3 py-2 rounded-3xl">
                    Your Preferences
                </Link>
            </div>
            <div>
                {Array.from({ length: 3 }, (_, index) => (
                    <div
                        className="leading-10"
                        key={index}
                    >
                        <p className="font-semibold">
                            What best describes your food preferences?
                        </p>
                        <div className="flex items-center justify-around">
                            {Array.from({ length: 5 }, (_, index) => (
                                <span
                                    className="flex flex-col items-center gap-3"
                                    key={index}
                                >
                                    <img
                                        className="w-24 h-20"
                                        src="https://www.cityguide-dubai.com/fileadmin/_processed_/3/3/csm_img-worlds-of-adventures-teaser_40e4184da1.jpg"
                                        alt="img"
                                    />
                                    <FaRegHeart />
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Preference;
