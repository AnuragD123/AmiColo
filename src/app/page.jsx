import Image from "next/image";

export default function Home() {
    return (
        <main className="">
            <div
                id="room-friend-sitting-photo-and-maple-leaf"
                className="relative"
            >
                <p className="hidden lg:inline z-10 absolute left-[80rem] top-36   md:text-4xl">
                    Your <span className="text-red-600 ">New City</span>, <br />
                    Your <span className="text-blue-600">New Home</span>.
                </p>
                <img
                    className="w-[100vw] z-20"
                    src="/images/friends.png"
                    alt="friends sitting in a room"
                />
                <img
                    className="hidden lg:inline w-[19vw] z-10 absolute top-[64rem] left-[30.5rem]"
                    src="/images/maple.png"
                    alt="canadian-maple-leaf"
                />
            </div>
            <div
                id="section-2"
                className="relative z-30 mb-16"
            >
                <p className="text-4xl mb-2 font-semibold text-center">
                    We are <span className="lg:text-white">Canada’s mo</span>st
                    Awaited Coiling Platform
                </p>
                <div className="plus-card-content flex justify-evenly">
                    <div className="plus-card">
                        <p className="text-7xl text-blue-800 font-extrabold">
                            10+
                        </p>
                        <p className="text-bold">Targeted Customers</p>
                    </div>
                    <div className="plus-card">
                        <p className="text-7xl text-blue-800 font-extrabold">
                            10+
                        </p>
                        <p className="text-bold">Delighted Customers</p>
                    </div>
                    <div className="plus-card">
                        <p className="text-7xl text-blue-800 font-extrabold">
                            5+
                        </p>
                        <p className="text-bold">Cities & Counting</p>
                    </div>
                </div>
            </div>
            <div
                id="section-3"
                className="flex flex-col lg:flex-row justify-between content-center"
            >
                <img
                    className="w-[100vw] lg:w-[50vw]"
                    src="/images/find-easy.png"
                    alt="find-and-easy"
                />
                <div className="content m-auto">
                    <h5 className="heading text-xl text-start mx-8 mb-3">
                        Kind to Your Wallet,
                        <br />
                        <span className="font-bold text-2xl">
                            Gentle on Your Thoughts
                        </span>
                    </h5>
                    <div className="content-p flex justify-around">
                        <div className="vertical-heading text-start text-lg">
                            <p className="my-3 mx-2 lg:mx-8">
                                AI Powered Roommate
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
                                AmiColo Community
                                <br />
                                <span>Recommends</span>
                            </p>
                            <p className="my-3 mx-2 lg:mx-8">
                                Housekeeping <br />
                                <span>Membership</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div
                id="section-4"
                className="flex flex-col-reverse lg:flex-row justify-between content-center"
            >
                <div className="content m-auto">
                    <h5 className="heading text-xl text-start mx-8 mb-3">
                        Perfect for Matches,
                        <br />
                        <span className="font-bold text-2xl">
                            More so for unwinding after
                        </span>
                    </h5>
                    <div className="content-p flex justify-around">
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
                className="flex flex-col lg:flex-row justify-between content-center"
            >
                <img
                    className="w-[100vw] lg:w-[50vw]"
                    src="/images/bond-easy.png"
                    alt="bond-easy"
                />
                <div className="content m-auto">
                    <h5 className="heading text-xl text-start mx-8 mb-3">
                        Connect and Flourish <br />
                        <span className="font-bold text-2xl">
                            in a Lively community
                        </span>
                    </h5>
                    <div className="content-p flex justify-around">
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
                                Choose Your <br />
                                <span>Coving Mates</span>
                            </p>
                            <p className="my-3 mx-2 lg:mx-8">
                                Career
                                <br />
                                <span>Fairs</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div
                id="section-6"
                className="flex bg-gradient-to-b from-green-200 to-sky-200 my-16"
            >
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
                        <button className="text-white py-2 px-6 lg:px-8 mt-4 lg:mt-6 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-orange-400">
                            Colo-Tales
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}
