import Image from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import { Carousel } from "flowbite-react";
export default function Home() {
    return (
        <main className="">
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
                    <div className="flex flex-wrap justify-start max-lg:justify-around max-sm:justify-start">
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
                        <div className="vertical-heading text-start text-lg">
                            <p className="my-3 mx-2 lg:mx-8">
                                App Based Issue <br />
                                <span>Resolution</span>
                            </p>
                            <p className="my-3 mx-2 lg:mx-8">
                                Pure Fiber <br />
                                <span>Internet</span>
                            </p>
                        </div>
                        <div className="vertical-heading text-start text-lg">
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
                    <div className="flex flex-wrap justify-start max-lg:justify-around max-sm:justify-start">
                        <div className="vertical-heading text-start text-lg">
                            <p className="my-3 mx-2 lg:mx-8">
                                Choose Your <br />
                                <span>Coliving Mates</span>
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
        </main>
    );
}
