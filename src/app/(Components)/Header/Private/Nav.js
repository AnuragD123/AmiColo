'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { FaRegUserCircle } from "react-icons/fa";
import { RiMenu3Fill } from "react-icons/ri";
import { AiOutlineMessage } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import { usePathname } from 'next/navigation';

const Nav = () => {
    const [navToggle, setNavToggle] = useState(false);
    const navItems = [
        { label: 'Home', href: '/home' },
        { label: 'Find Room', href: '/find_room' },
        { label: 'Find Match', href: '/find_match' },
        // { label: 'Pricing', href: '/pricing' },
    ];
    const pathname = usePathname()
    console.log(pathname)
    return (
        <nav className="navbar fixed-top px-4 py-2 border-b border-gray-300">
            <div className="sm:px-4 lg:px-8 flex flex-wrap items-center justify-between lg:flex-nowrap relative">
                <p className="inline-block mr-4 py-0.5 text-xl sm:hidden" onClick={() => setNavToggle(!navToggle)} > {navToggle ? <IoClose /> : <RiMenu3Fill />}</p>
                <Link className="text-gray-800 max-sm:text-2xl font-semibold text-3xl leading-4 no-underline" href="/home">AmiColo</Link>
                <div className={`flex items-center justify-center max-sm:absolute top-8 bg-white ${navToggle ? "h-auto" : "h-0"} max-sm:w-full max-sm:overflow-hidden transition-all duration-300 ease-linear`} >
                    <ul className="pl-0 mt-3 mb-2  flex max-sm:flex-col gap-5 list-none">

                        {navItems.map((item, index) => (
                            <li key={index}>
                                <Link className={`font-semibold text-sm ${pathname === item.href ? 'text-pink-500' : 'text-gray-700'} hover:text-pink-500`} href={item.href}>{item.label}</Link>

                            </li>
                        ))}
                    </ul>
                </div>
                <div >
                    <Link className="inline-block mr-4 py-0.5 text-xl whitespace-nowrap  hover:text-pink-500 transition-all duration-200" href="/chat"><AiOutlineMessage /></Link>
                    <Link className={`inline-block mr-4 py-0.5 text-xl whitespace-nowrap ${pathname === '/profile' ? 'text-pink-500' : 'text-gray-700'} hover:text-pink-500 transition-all duration-200`} href='/profile'><FaRegUserCircle /></Link>
                </div>

            </div>
        </nav>
    );
};

export default Nav;