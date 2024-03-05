"use client"
import React, { useState, useEffect } from 'react';
import { Phone, Mail } from 'lucide-react';
import Link from 'next/link';
import { getDataFromToken } from "@/helper/getDataFromToken";
import Cookies from "js-cookie";

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const token = Cookies.get('token'); // this is always giving undefined
    useEffect(() => {
        console.log("token =>",token);
        if (token == null) {
            setIsLoggedIn(false);
        } else {
            setIsLoggedIn(true);
        }
    }, [token,Cookies]);

    return (
        <div className="flex flex-col lg:flex-row bg-gradient-to-r from-indigo-500 via-purple-500 to-orange-400 p-2 lg:px-8 items-center justify-between">
            <div className="flex items-center">
                <Link href="/">
                    <img
                        src="/images/navbar-logo.png"
                        alt="logo of AmiColo"
                        className="w-32 h-auto ml-4 lg:ml-0"
                    />
                </Link>
            </div>
            <div className="flex flex-col sm:flex-row items-center text-white mt-4 lg:mt-0">
                <div className="flex items-center ml-4 lg:ml-0 lg:mr-8">
                    <Phone
                        className="mr-2"
                        size={18}
                    />
                    <p className="sm:inline">+1 514-586-4586</p>
                </div>
                <div className="flex items-center ml-4 lg:ml-0 lg:mr-8 py-2">
                    <Mail
                        className="mr-2"
                        size={18}
                    />
                    <p className="sm:inline">info@amicolo.com</p>
                </div>
                <Link href={isLoggedIn ? "/logout" : "/login"}>
                    <button className="bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-400 hover:to-cyan-400 px-5 py-2 rounded-full ml-4 lg:ml-0 text-white">
                        {isLoggedIn ? "Sign Out" : "Sign In"}
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
