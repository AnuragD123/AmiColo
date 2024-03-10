'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Card from './card';
import TestimonialCard from './testimonialCard';
import homeImg from '../../../images/home.png';
import Easyfind from '../../../images/easyfind.jpg';
import Easystay from '../../../images/easystay.jpg';
import ProfileDemo from '../../../images/profileDemo.png';

import GetStart from '../(Components)/getStart/getStart';

const Home = () => {

    const [closeModel, setCloseModle] = useState(true);
    const easyfind = [
        {
            Img: Easyfind,
            heading: "Kind to Your Wallet,",
            subheading: "Gentle on Your Thoughts",
            feature: [
                "AI Powered Roommate Recommendations",
                "Housekeeping Amenities",
                "AI Powered 24 x 7 Support",
                "Zero Brokerage",
                "AmiColo Community Recommends",
                "Housekeeping Membership",

            ]
        }
    ]
    const easystay = [
        {
            Img: Easystay,
            heading: "Perfect for Matches,",
            subheading: "More so for unwinding after",
            feature: [
                "Personalized Matching",
                "Clean Environment",
                "App Based Issue Resolution",
                "Pure Fiber Internet",
                "Hassle Free Payments"
            ]
        }
    ]
    const Reviews = [
        {
            Img: ProfileDemo,
            name: "Jude Thorn - Designer",
            review: "It's been so fun to work with Pavo, I've managed to integrate it properly into my business flow and it's great"
        },
        {
            Img: ProfileDemo,
            name: "Roy Smith - Developer",
            review: "We were so focused on launching as many campaigns as possible that we've forgotten to target our loyal customers"
        },
        {
            Img: ProfileDemo,
            name: "Marsha Singer - Marketer",
            review: "I've been searching for a tool like Pavo for so long. I love the reports it generates and the amazing high accuracy"
        },
    ]
    const handleSubmitForm = (data) => {
        setCloseModle(false)
        console.log("DATA", data)
    }
    return (
        <>
            <header id="header" className="py-28 text-center md:pt-36 lg:text-left xl:pt-44 xl:pb-32 bg-gradient-to-b from-blue-300 to-white">
                {closeModel && <GetStart handleSubmitForm={handleSubmitForm} />}

                <div className="px-4 sm:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
                    <div className="mb-16 lg:mt-32 xl:mt-40 xl:mr-12">
                        <h1 className="text-5xl max-sm:text-4xl font-extrabold mb-5">Your New City, <span>Your New Home</span></h1>
                        <p className="mb-8 text-stone-500">We are Canada’s most Awaited Coiling Platform</p>
                        <span className='flex gap-2 justify-center lg:justify-start'>
                            <a className=" bg-blue-500 px-6 transition-all duration-300 ease-linear text-white border-2 border-transparent hover:bg-transparent hover:text-blue-500 hover:border-blue-500 py-2 rounded-2xl" href="#your-link">Explore</a>
                            <a className=" bg-pink-500 px-6 transition-all duration-300 ease-linear text-white border-2 border-transparent hover:bg-transparent hover:text-pink-500 hover:border-pink-500 py-2 rounded-2xl" href="#your-link">Match</a>
                        </span>

                    </div>
                    <div className="flex items-center justify-center">
                        <Image
                            className=''
                            src={homeImg}
                            alt="alternative"
                        />
                    </div>
                </div>
            </header>

            <div className="pt-4 pb-14 text-center">
                <div className="px-4 sm:px-8 xl:px-4">
                    <p className="mb-4 text-gray-800 text-3xl max-sm:text-xl leading-10 lg:max-w-5xl lg:mx-auto"> Team management mobile apps don’t get better than Amicolo. It’s probably the best website in the world for this purpose. Don’t hesitate to give it a try today and you will fall in love with it</p>
                </div>
            </div>
            <Card data={easyfind} dir={"right"} />
            <Card data={easystay} dir={"left"} />
            <Card data={easyfind} dir={"right"} />

            <div className='flex flex-wrap items-center justify-evenly'>
                <div className="text-center">
                    <div className="text-5xl max-sm:text-2xl font-extrabold text-blue-700" data-count="">50+</div>
                    <p className="text-base max-sm:text-xs font-medium text-slate-500">Happy Users</p>
                </div>
                <div className="text-center">
                    <div className="text-5xl max-sm:text-2xl font-extrabold text-blue-700" data-count="">10+</div>
                    <p className="text-base max-sm:text-xs font-medium text-slate-500">Targeted Customers</p>
                </div>
                <div className="text-center">
                    <div className="text-5xl max-sm:text-2xl font-extrabold text-blue-700" data-count="">10+</div>
                    <p className="text-base max-sm:text-xs font-medium text-slate-500">Delighted Customers</p>
                </div>
                <div className="text-center">
                    <div className="text-5xl max-sm:text-2xl font-extrabold text-blue-700" data-count="">5+</div>
                    <p className="text-base max-sm:text-xs font-medium text-slate-500">Cities & Counting</p>
                </div>
                <div className="text-center">
                    <div className="text-5xl max-sm:text-2xl font-extrabold text-blue-700" data-count="">20+</div>
                    <p className="text-base max-sm:text-xs font-medium text-slate-500">Good Reviews</p>
                </div>
            </div>

            {/* Testimonial */}
            <div className="slider-1 py-32 bg-gray">
                <div className="w-full flex flex-col items-center justify-center px-4">
                    <h2 className="mb-12 text-center text-4xl font-bold lg:max-w-xl lg:mx-auto">What do users think about AmiColo</h2>
                    <TestimonialCard data={Reviews} />
                </div>
            </div>
        </>




    )
}

export default home;
