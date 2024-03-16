// 'use client'
// import React, { useEffect } from 'react';
// import Image from 'next/image';
// import Card from './card';
// import axios from 'axios';
// import TestimonialCard from './testimonialCard';
// import homeImg from '../../../images/home.png';
// import Easyfind from '../../../images/easyfind.jpg';
// import Easystay from '../../../images/easystay.jpg';
// import ProfileDemo from '../../../images/AmiColo_Profile.png';
// import { useUserContext } from '@/context/context';
// import GetStart from '../(Components)/getStart/getStart';

// const Home = () => {

//     const { user, setUser } = useUserContext();

//     const easyfind = [
//         {
//             Img: Easyfind,
//             heading: "Kind to Your Wallet,",
//             subheading: "Gentle on Your Thoughts",
//             feature: [
//                 "AI Powered Roommate Recommendations",
//                 "Housekeeping Amenities",
//                 "AI Powered 24 x 7 Support",
//                 "Zero Brokerage",
//                 "AmiColo Community Recommends",
//                 "Housekeeping Membership",

//             ]
//         }
//     ]
//     const easystay = [
//         {
//             Img: Easystay,
//             heading: "Perfect for Matches,",
//             subheading: "More so for unwinding after",
//             feature: [
//                 "Personalized Matching",
//                 "Clean Environment",
//                 "App Based Issue Resolution",
//                 "Pure Fiber Internet",
//                 "Hassle Free Payments"
//             ]
//         }
//     ]
//     const handleSubmitForm = async (data) => {
//         try {
//             const formData = new FormData();
//             // Append form data
//             formData.append("smoker", data.smoker);
//             formData.append("occupation", data.occupation);
//             formData.append("nationality", data.nationality);
//             formData.append("languages", data.languages);
//             formData.append("diet", data.diet);
//             formData.append("bedtime", data.bedtime);
//             formData.append("login", true);

//             const res = await axios.post(`/api/user/update_profile`, formData, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data'
//                 },
//             });
//             console.log("res", res.data.getUser[0])
//             // Handle response
//             setUser(res.data?.getUser[0])
//             if (res.data.success) {
//                 toast.success("Well done we get your recode")
//             }
//         } catch (e) {
//             // Handle errors here
//             console.error(e);
//         }
//     };

//     return (
//         <>
//             <header id="header" className="py-28 text-center md:pt-36 lg:text-left xl:pt-44 xl:pb-32 bg-gradient-to-b from-blue-300 to-white">
//                 {user && !user?.login && <GetStart handleSubmitForm={handleSubmitForm} />}

//                 <div className="px-4 sm:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
//                     <div className="mb-16 lg:mt-32 xl:mt-40 xl:mr-12">
//                         <h1 className="text-5xl max-sm:text-4xl font-extrabold mb-5">Your New City, <span>Your New Home</span></h1>
//                         <p className="mb-8 text-stone-500">We are Canada’s most Awaited Coiling Platform</p>
//                         <span className='flex gap-2 justify-center lg:justify-start'>
//                             <a className=" bg-blue-500 px-6 transition-all duration-300 ease-linear text-white border-2 border-transparent hover:bg-transparent hover:text-blue-500 hover:border-blue-500 py-2 rounded-2xl" href="#your-link">Explore</a>
//                             <a className=" bg-pink-500 px-6 transition-all duration-300 ease-linear text-white border-2 border-transparent hover:bg-transparent hover:text-pink-500 hover:border-pink-500 py-2 rounded-2xl" href="#your-link">Match</a>
//                         </span>

//                     </div>
//                     <div className="flex items-center justify-center">
//                         <Image
//                             className=''
//                             src={homeImg}
//                             alt="alternative"
//                         />
//                     </div>
//                 </div>
//             </header>

//             <div className="pt-4 pb-14 text-center">
//                 <div className="px-4 sm:px-8 xl:px-4">
//                     <p className="mb-4 text-gray-800 text-3xl max-sm:text-xl leading-10 lg:max-w-5xl lg:mx-auto"> Team management mobile apps don’t get better than Amicolo. It’s probably the best website in the world for this purpose. Don’t hesitate to give it a try today and you will fall in love with it</p>
//                 </div>
//             </div>
//             <Card data={easyfind} dir={"right"} />
//             <Card data={easystay} dir={"left"} />
//             <Card data={easyfind} dir={"right"} />

//             <div className='flex flex-wrap items-center justify-evenly'>
//                 <div className="text-center">
//                     <div className="text-5xl max-sm:text-2xl font-extrabold text-blue-700" data-count="">50+</div>
//                     <p className="text-base max-sm:text-xs font-medium text-slate-500">Happy Users</p>
//                 </div>
//                 <div className="text-center">
//                     <div className="text-5xl max-sm:text-2xl font-extrabold text-blue-700" data-count="">50+</div>
//                     <p className="text-base max-sm:text-xs font-medium text-slate-500">Targeted Customers</p>
//                 </div>
//                 <div className="text-center">
//                     <div className="text-5xl max-sm:text-2xl font-extrabold text-blue-700" data-count="">100+</div>
//                     <p className="text-base max-sm:text-xs font-medium text-slate-500">Delighted Customers</p>
//                 </div>
//                 <div className="text-center">
//                     <div className="text-5xl max-sm:text-2xl font-extrabold text-blue-700" data-count="">5+</div>
//                     <p className="text-base max-sm:text-xs font-medium text-slate-500">Cities & Counting</p>
//                 </div>
//                 <div className="text-center">
//                     <div className="text-5xl max-sm:text-2xl font-extrabold text-blue-700" data-count="">20+</div>
//                     <p className="text-base max-sm:text-xs font-medium text-slate-500">Good Reviews</p>
//                 </div>
//             </div>

//             {/* Testimonial */}
//             <div className="slider-1 py-32 bg-gray">
//                 <div className="w-full flex flex-col items-center justify-center px-4">
//                     <h2 className="mb-12 text-center text-4xl font-bold lg:max-w-xl lg:mx-auto">What do users think about AmiColo</h2>
//                     <TestimonialCard data={Reviews} />
//                 </div>
//             </div>
//         </>




//     )
// }

// export default Home;

'use client'
import React, { useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import axios from 'axios';
import ProfileDemo from '../../../images/AmiColo_Profile.png';
import Card from './card';
import { MoveRight } from "lucide-react";
import { Carousel } from "flowbite-react";
import TestimonialCard from './testimonialCard';
import { useUserContext } from '@/context/context';
import GetStart from '../(Components)/getStart/getStart';

export default function Home() {
    const Reviews = [
        {
            Img: ProfileDemo,
            name: "Maria, International Student from Brazil",
            review: "Arriving in Montreal was overwhelming, but AmiColo simplified my housing search. The platform's social media integration helped match me with a roommate who shares my love for music and Brazilian cuisine. Our home feels like a little piece of Brazil here in Canada. I couldn't be happier!"
        },
        {
            Img: ProfileDemo,
            name: "Jake, Canadian Graduate Student",
            review: "As a grad student, I needed a quiet, study-friendly environment. Thanks to Ami Colo, I found a roommate with similar academic goals and schedules. Our shared respect for study times and mutual support during exams has been invaluable. Ami Colo really understood what I was looking for."
        },
        {
            Img: ProfileDemo,
            name: "Anika, Young Professional from India",
            review: "Moving to Montreal for work was exciting yet daunting. AmiColo's user-friendly platform connected me with a roommate who not only became a great friend but also introduced me to the city's culture and social scene. Finding a compatible roommate has made my transition to Canadian life seamless and fun."
        },
    ]

    const { user, setUser } = useUserContext();

    const handleSubmitForm = async (data) => {
        try {
            const formData = new FormData();
            // Append form data
            formData.append("smoker", data.smoker);
            formData.append("occupation", data.occupation);
            formData.append("nationality", data.nationality);
            formData.append("languages", data.languages);
            formData.append("diet", data.diet);
            formData.append("bedtime", data.bedtime);
            formData.append("login", true);

            const res = await axios.post(`/api/user/update_profile`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
            });
            console.log("res", res.data.getUser[0])
            // Handle response
            setUser(res.data?.getUser[0])
            if (res.data.success) {
                toast.success("Well done we get your recode")
            }
        } catch (e) {
            // Handle errors here
            console.error(e);
        }
    };

    return (
        <main className="">
            {user && !user?.login && <GetStart handleSubmitForm={handleSubmitForm} />}
            <div className="relative flex flex-wrap">
                <div className="w-full lg:w-1/2 h-auto hidden lg:inline text-white cursor-pointer transform hover:scale-110 transition-transform">
                    <Carousel
                        leftControl="."
                        rightControl="."
                        className="w-full h-full object-cover">
                        <img
                            src="/images/room0.jpg"
                            alt="Room 0"
                            className="w-full h-full object-cover"
                        />
                        <img
                            src="/images/room1.jpg"
                            alt="Room 1"
                            className="w-full h-full object-cover"
                        />
                        <img
                            src="/images/room2.jpg"
                            alt="Room 2"
                            className="w-full h-full object-cover"
                        />
                        <img
                            src="/images/room3.jpg"
                            alt="Room 3"
                            className="w-full h-full object-cover"
                        />
                        <img
                            src="/images/room4.jpg"
                            alt="Room 4"
                            className="w-full h-full object-cover"
                        />
                    </Carousel>
                </div>
                <div className="w-full lg:w-1/2 h-auto cursor-pointer transform hover:scale-110 transition-transform">
                    <img
                        src="/images/room5.jpg"
                        alt="Friends sitting in a room"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-50">
                    <p className="text-lg lg:text-4xl text-white font-bold" style={{ filter: "drop-shadow(2px 2px 5px #dedede97)" }}>
                        Your <span className="text-red-600">New City</span>,{" "}
                        <br />
                        Your <span className="text-blue-600">
                            New Home
                        </span>. <br />
                        <span className="block mt-4 lg:mt-6 text-3xl md:text-6xl lg:text-8xl ">
                            With Your{" "}
                            <span className="text-red-600">Amicolo</span>
                        </span>
                    </p>
                    {/* <p className="text-lg lg:text-xl text-white font-bold">This is a dummy web page plz not booking a room</p> */}
                    <Link
                        className="text-white focus:bg-slate-200 focus:bg-opacity-10 hover:bg-slate-200 hover:bg-opacity-10 py-2 px-4 mt-2 rounded-full flex"
                        href={"/find_room"}>
                        <p className="pr-2">Explore Room Near Me</p>
                        <MoveRight />
                    </Link>
                </div>
            </div>

            <div
                id="section-2"
                className="relative z-30 my-16 mx-2">
                <p className="text-4xl mb-2 font-semibold text-center">
                    We are Canada’s most Awaited Co - Living Platform
                </p>
                <div className="plus-card-content flex justify-evenly">
                    <div className="plus-card">
                        <p className="text-7xl text-blue-800 font-extrabold max-sm:text-5xl">
                            100+
                        </p>
                        <p className="text-bold">Targeted Customers</p>
                    </div>
                    <div className="plus-card">
                        <p className="text-7xl text-blue-800 font-extrabold max-sm:text-5xl">
                            10+
                        </p>
                        <p className="text-bold">Delighted Customers</p>
                    </div>
                    <div className="plus-card">
                        <p className="text-7xl text-blue-800 font-extrabold max-sm:text-5xl">
                            5+
                        </p>
                        <p className="text-bold">Cities & Counting</p>
                    </div>
                </div>
            </div>
            <div
                id="section-3"
                className="flex flex-col lg:flex-row justify-between content-center">
                <img
                    className="w-[100vw] lg:w-[50vw]"
                    src="/images/find-easy.png"
                    alt="find-and-easy"
                />
                <div className="content m-2">
                    <h5 className="heading text-2xl font-bold  text-start mx-8 mb-3">
                        Kind to Your Wallet,
                        <br />
                        <span className="text-2xl">
                            Gentle on Your Thoughts
                        </span>
                    </h5>
                    <div className="flex flex-wrap justify-start max-lg:justify-around max-sm:justify-start">
                        <div className="vertical-heading text-start text-lg">
                            <p className="my-3 mx-2 lg:mx-8">
                                AI Powered RoomMate
                                <br />
                                <span>Recommendations</span>
                            </p>
                            <p className="my-3 mx-2 lg:mx-8">
                                Housekeeping <br />
                                <span>Amenities</span>
                            </p>
                        </div>
                        <div className="vertical-heading text-start text-lg">
                            <p className="my-3 mx-2 lg:mx-8">
                                AI Powered
                                <br />
                                <span>24 x 7 Support</span>
                            </p>
                            <p className="my-3 mx-2 lg:mx-8">
                                Zero
                                <br />
                                <span>Brokerage</span>
                            </p>
                        </div>
                        <div className="vertical-heading text-start text-lg">
                            <p className="my-3 mx-2 lg:mx-8">
                                Live Roommate
                                <br />
                                <span>Chat</span>
                            </p>
                            <p className="my-3 mx-2 lg:mx-8">
                                AmiColo Community <br />
                                <span>Membership</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div
                id="section-4"
                className="flex flex-col-reverse lg:flex-row justify-around max-sm:justify-start">
                <div className="content m-2">
                    <h5 className="heading text-2xl font-bold text-start mx-8 mb-3">
                        Perfect for Matches,
                        <br />
                        <span className="font-bold text-2xl">
                            More so for unwinding after
                        </span>
                    </h5>
                    <div className="flex flex-wrap justify-around max-sm:justify-start">
                        <div className="vertical-heading text-start text-lg">
                            <p className="my-3 mx-2 lg:mx-8">
                                Personalized <br />
                                <span>Matching</span>
                            </p>
                            <p className="my-3 mx-2 lg:mx-8">
                                Clean <br />
                                <span>Environment</span>
                            </p>
                        </div>
                        <div className="vertical-heading text-start">
                            <p className="my-3 mx-2 lg:mx-8">
                                App Based Issue <br />
                                <span>Resolution</span>
                            </p>
                            <p className="my-3 mx-2 lg:mx-8">
                                Pure Fiber <br />
                                <span>Internet</span>
                            </p>
                        </div>
                        <div className="vertical-heading">
                            <p className="my-3 mx-2 lg:mx-8">
                                Hassle Free <br />
                                <span>Payments</span>
                            </p>
                        </div>
                    </div>
                </div>
                <img
                    className="w-[100vw] lg:w-[50vw]"
                    src="/images/stay-easy.png"
                    alt="stay-easy"
                />
            </div>
            <div
                id="section-5"
                className="flex flex-col lg:flex-row justify-around max-sm:justify-start">
                <img
                    className="w-[100vw] lg:w-[50vw]"
                    src="/images/bond-easy.png"
                    alt="bond-easy"
                />
                <div className="content m-2">
                    <h5 className="heading text-2xl font-bold text-start mx-8 mb-3">
                        Connect and Flourish <br />
                        <span className="font-bold text-2xl">
                            in a Lively community
                        </span>
                    </h5>
                    <div className="flex flex-wrap justify-around max-sm:justify-start">
                        <div className="vertical-heading text-start text-lg">
                            <p className="my-3 mx-2 lg:mx-8">
                                Choose Your <br />
                                <span>Coving Mates</span>
                            </p>
                            <p className="my-3 mx-2 lg:mx-8">
                                Events, Celebrations <br />
                                <span>& Pop Ups</span>
                            </p>
                        </div>
                        <div className="vertical-heading text-start text-lg">
                            <p className="my-3 mx-2 lg:mx-8">
                                Social <br />
                                <span>Calendar</span>
                            </p>
                            <p className="my-3 mx-2 lg:mx-8">
                                Network &
                                <br />
                                <span>Collaborate</span>
                            </p>
                        </div>
                        <div className="vertical-heading text-start text-lg">
                            <p className="my-3 mx-2 lg:mx-8">
                                Career
                                <br />
                                <span>Fairs</span>
                            </p>
                            <p className="my-3 mx-2 lg:mx-8">
                                Get Mentored
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div
                id="section-6"
                className="flex flex-col lg:flex-row-reverse mt-[30px] justify-around max-sm:justify-start">
                <img
                    className="w-[100vw] lg:w-[50vw]"
                    src="/images/mapc.png"
                    alt="map"
                />
                <div className="content m-2">
                    <h5 className="heading text-2xl font-bold text-start mx-8 mb-3">
                        There's an Amicolo around. Always.,
                        <br />
                        <span className="font-bold text-2xl">
                            More Destinations. More Ease. More Affordable.
                        </span>
                    </h5>
                    <div className="flex flex-wrap justify-start max-lg:justify-around max-sm:justify-start">
                        <div className="vertical-heading text-start text-lg">
                            <p className="my-3 mx-2 lg:mx-8">
                                Toronto, Ontario
                                <br />
                                <span>Vancouver, British Columbia</span>
                            </p>
                            <p className="my-3 mx-2 lg:mx-8">


                                <span>Halifax, Nova Scotia</span>
                            </p>

                        </div>

                        <div className="vertical-heading text-start text-lg">
                            <p className="my-3 mx-2 lg:mx-8">
                                Montréal, Québec
                                <br />
                                <span>Ottawa, Ontario</span>
                            </p>

                        </div>


                        <div className="vertical-heading text-start text-lg">
                            <p className="my-3 mx-2 lg:mx-8">
                                Calgary, Alberta
                                <br />
                                <span>Edmonton, Alberta</span>
                            </p>

                        </div>

                    </div>
                </div>
            </div>
            <div
                id="section-7"
                className="flex bg-gradient-to-b from-green-200 to-sky-200 my-16">
                <img
                    className="w-[50vw]"
                    src="/images/two-girl.png"
                    alt="two-girl"
                />
                <div className="content text-center my-auto">
                    <div className="flex flex-col justify-center items-center">
                        <h5 className="text-md md:text-4xl lg:text-7xl font-bold">
                            Let’s make some
                        </h5>
                        <h5 className="text-sm md:text-6xl lg:text-9xl font-bold">
                            Memories!
                        </h5>
                        <Link
                            href="https://www.youtube.com/@ColoTales"
                            className="text-white py-2 px-6 lg:px-8 mt-4 lg:mt-6 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-orange-400">
                            Colo-Tales
                        </Link>
                    </div>
                </div>

            </div>
            {/* Testimonial */}
            <div className="slider-1 py-32 bg-gray">
                <div className="w-full flex flex-col items-center justify-center px-4">
                    <h2 className="mb-12 text-center text-4xl font-bold  lg:mx-auto">What do users think about AmiColo</h2>
                    <TestimonialCard data={Reviews} />
                    <Link
                        href="https://amicolo.almaconnect.com?via=share&via_token=65d56113d42580000fe0154e&invited_at=1710575299"
                        target='_blank'
                        className="text-white py-2 px-6 lg:px-8 mt-4 lg:mt-6 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-orange-400">
                        Join AmiColo Community Page
                    </Link>
                    <p className='pt-2'> Please signup using the same email address used on AmiColo website.</p>
                </div>
            </div>
        </main>
    );
}

