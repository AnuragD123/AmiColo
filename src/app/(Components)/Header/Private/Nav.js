"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useUserContext } from "@/context/context";
import { FaRegUserCircle } from "react-icons/fa";
import { RiMenu3Fill } from "react-icons/ri";
import { AiOutlineMessage } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import { usePathname } from "next/navigation";
import Profile from "../../../../../images/AmiColo_Profile.png";

const Nav = () => {
    const [navToggle, setNavToggle] = useState(false);
    const { user, setUser } = useUserContext();
    const localUser = localStorage.getItem("user");
    const parsedData = JSON.parse(localUser);

    useEffect(() => {
        setUser(parsedData)
    }, [])

    const navItems = [
        { label: "Home", href: "/home" },
        { label: "Find Room", href: "/find_room" },
        { label: "Find Match", href: "/find_match" },
    ];
    const pathname = usePathname();

    return (
        <>
            {user && (
                <nav className="navbar fixed-top px-4 py-2 border-b border-gray-300">
                    <div className="container mx-auto flex items-center justify-between">
                        {/* <Link className="text-gray-800 text-3xl font-semibold no-underline" href="/home">
                            AmiColo
                        </Link> */}
                        <div></div>
                        <div>
                            <ul className={`lg:flex lg:space-x-6 ${navToggle ? "block" : "hidden"} lg:ml-auto`}>
                                {navItems.map((item, index) => (
                                    <li key={index}>
                                        <Link
                                            className={`font-semibold text-gray-700 hover:text-pink-500`}
                                            href={item.href}>
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex items-center">

                            <div className="ml-4">
                                <Link className="text-gray-800" href="/chat">
                                    <AiOutlineMessage className="text-3xl hover:text-pink-500" />
                                </Link>
                            </div>
                            <div className="ml-4">
                                <Link
                                    className={`inline-block ${pathname === "/profile" ? "text-pink-500" : "text-gray-700"
                                        } hover:text-pink-500`}
                                    href="/profile">
                                    {user ? (
                                        <Image
                                            className="w-10 h-10 rounded-full"
                                            src={user?.avatar ? `/uploads/${user?.avatar}` : Profile}
                                            alt="Profile Picture"
                                            width={40}
                                            height={40}
                                        />
                                    ) : (
                                        <FaRegUserCircle className="text-xl" />
                                    )}
                                </Link>
                            </div>
                        </div>
                        <div className="block lg:hidden">
                            <button
                                onClick={() => setNavToggle(!navToggle)}
                                className="text-xl text-gray-800 focus:outline-none">
                                {navToggle ? <IoClose /> : <RiMenu3Fill />}
                            </button>
                        </div>
                    </div>
                </nav>
            )}
        </>
    );
};

export default Nav;
