'use client'
import React, { useState, useRef } from 'react'
import Image from 'next/image';
import { IoSearchOutline, IoArrowBackCircleOutline } from "react-icons/io5";
import { FiSend } from "react-icons/fi";
import Router from 'next/router'
import { MdAttachFile, MdOutlineEmojiEmotions } from "react-icons/md"
import { BsCameraVideo } from "react-icons/bs";
import profile from '../../../images/profileDemo.png';
const Chat = () => {

    const scrollRef = useRef(null);
    const searchItem = [
        {
            username: "sonu"
        },
        {
            username: "rohit"
        },
        {
            username: "monu"
        },
    ]
    const dummyLocalUser = {
        _id: 1,
    };

    const dummyMessages = [
        {
            user: { id: 1 },
            message: 'Hello there!',
            createdAt: '2024-02-25T10:30:00',
        },
        {
            user: { id: 2, avatar: 'user2_avatar_url' },
            message: 'Hi! How are you?',
            createdAt: '2024-02-25T10:35:00',
        },
        {
            user: { id: 1 },
            message: 'I\'m doing well, thank you!',
            createdAt: '2024-02-25T10:40:00',
        },
        {
            user: { id: 2 },
            message: 'That\'s great to hear!',
            createdAt: '2024-02-25T10:45:00',
        },
        {
            user: { id: 1 },
            message: 'How was your day?',
            createdAt: '2024-02-25T10:50:00',
        },
        {
            user: { id: 2 },
            message: 'It was good. Busy but good!',
            createdAt: '2024-02-25T10:55:00',
        },
        {
            user: { id: 1 },
            message: 'Hyy!',
            createdAt: '2024-02-26T10:55:00',
        },
    ];

    const [messages, setMessages] = useState(dummyMessages);
    const [localuser, setLocalUser] = useState(dummyLocalUser);
    const [showChat, setShowChat] = useState(false);

    return (
        <div className='grid grid-cols-2 max-sm:grid-cols-1 h-screen content-baseline'>
            {!showChat ?
                <>
                    <div className='sideBox p-5 bg-blue-50 flex flex-col h-screen'>
                        <div className='flex items-center gap-2'>
                            <IoArrowBackCircleOutline className='text-3xl text-gray-500' onClick={() => Router.back()} />
                            <Image
                                className='w-10 h-10 rounded-full cursor-pointer'
                                src={profile}
                                alt="alternative"
                            />
                            <span>
                                <p className='text-md font-light p-0 m-0 cursor-pointer'>Alstons</p>
                                <p className='text-sm font-extralight p-0 m-0'>My Account</p>
                            </span>
                        </div>
                        <hr className='my-5' />
                        <div className='flex-1 overflow-y-scroll'>
                            <p className=' text-blue-500 font-semibold mb-5'>Messages</p>
                            <div className=' relative pb-5'>
                                <input type="search" placeholder='Search users...' className='w-full rounded-full border p-2 outline-none pl-9' />
                                <IoSearchOutline className=' absolute top-3 left-3' />
                            </div>
                            {searchItem?.map(({ username }, index) => (
                                <div key={index} >
                                    <div className='flex items-center gap-2 relative'>
                                        <Image
                                            className='w-8 h-8 rounded-full cursor-pointer'
                                            src={profile}
                                            alt="profile"
                                            onClick={() => {
                                                if (window.innerWidth <= 640) {
                                                    console.log("object", window.innerWidth)
                                                    setShowChat(true)
                                                }

                                            }}
                                        />
                                        <span className='cursor-pointer' onClick={() => {
                                            if (window.innerWidth <= 640) {
                                                console.log("object", window.innerWidth)
                                                setShowChat(true)
                                            }
                                        }}>
                                            <p className='text-md font-light p-0 m-0'>{username}</p>
                                            <p className='w-2 h-2 rounded-full absolute top-5 right-3 bg-green-600' ></p>
                                        </span>
                                    </div>
                                    <hr className='my-4' />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="h-screen flex flex-col max-sm:hidden">
                        {/* User info container */}
                        <div className="bg-blue-50 p-4 sticky top-0 flex items-center">
                            <IoArrowBackCircleOutline className='text-3xl text-gray-500 md:hidden' />
                            {/* User info content */}
                            {/* For example */}
                            <div className=' w-full flex items-center justify-between'>
                                <span>
                                    <span className='flex items-center gap-2'>
                                        <Image
                                            className='w-8 h-8 rounded-full'
                                            src={profile}
                                            alt="alternative"
                                        />
                                        <p className='text-lg font-semibold p-0 m-0'>Alston</p>
                                    </span>
                                    <p className='text-sm font-extralight p-0 m-0'>Online</p>
                                </span>
                            </div>
                        </div>

                        {/* Message box container */}
                        <div className="flex-1 overflow-y-scroll p-4" ref={scrollRef}>

                            {/* Messages content */}
                            {/* For example */}
                            <div className="flex flex-col space-y-4" >
                                {
                                    messages?.map(({ user, message }, index) => {
                                        const isLocalUser = localuser?._id === user?.id || localuser?._id === user?._id;
                                        return (
                                            <div key={index} >
                                                {index > 0 && (
                                                    <p className='w-full text-center'>21:44</p>
                                                )
                                                }

                                                {
                                                    isLocalUser ? (
                                                        <div className='flex items-center gap-2 px-5 max-sm:px-2 justify-start flex-row-reverse' >
                                                            <Image
                                                                className='w-8 h-8 rounded-full'
                                                                src={profile}
                                                                alt="alternative"
                                                            />
                                                            <p className='bg-blue-600 rounded-b-xl rounded-tl-xl p-4 text-white max-w-xs'>{message}</p>
                                                        </div>
                                                    ) : (
                                                        <div className='flex items-center gap-2 px-5 max-sm:px-2 '>
                                                            <Image
                                                                className='w-8 h-8 rounded-full'
                                                                src={profile}
                                                                alt="alternative"
                                                            />
                                                            <p className='bg-blue-100 rounded-b-xl rounded-tr-xl p-4 text-black max-w-xs'>{message}</p>
                                                        </div>
                                                    )}
                                            </div>
                                        );
                                    })}
                            </div>

                        </div>

                        {/* Input section */}
                        <div className="bg-blue-50 p-4 sticky bottom-0">

                            {/* Message input and send button */}
                            <form className="flex items-center relative" onSubmit={(e) => {
                            }}>
                                <div className='max-sm:absolute flex items-center gap-3 max-sm:gap-0'>
                                    <label for="file">
                                        <div className="flex items-center justify-center ">
                                            <MdAttachFile />
                                        </div>
                                        <input type="file" id="file" className="hidden" accept="image/*" />
                                    </label>
                                </div>
                                <input
                                    type="text"
                                    value={""}
                                    placeholder="Type a message..."
                                    className="flex-1 border rounded-full py-2 px-4 focus:outline-none max-sm:pr-5 pl-10"
                                />
                                <button type='submit' className="max-md:hidden ml-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full max-sm:absolute max-sm:right-0 max-sm:py-1">
                                    Send
                                </button>
                                <button type='submit'> <FiSend className="md:hidden" /></button>
                            </form>
                        </div>
                    </div >
                </>
                :
                <div className="h-screen flex flex-col sm:hidden">
                    {/* User info container */}
                    <div className="bg-blue-50 p-4 sticky top-0 flex items-center">
                        <IoArrowBackCircleOutline className='text-3xl text-gray-500 md:hidden' onClick={() => setShowChat(false)} />
                        {/* User info content */}
                        {/* For example */}
                        <div className=' w-full flex items-center justify-between'>
                            <span>
                                <span className='flex items-center gap-2'>
                                    <Image
                                        className='w-8 h-8 rounded-full'
                                        src={profile}
                                        alt="alternative"
                                    />
                                    <p className='text-lg font-semibold p-0 m-0'>Alston</p>
                                </span>
                                <p className='text-sm font-extralight p-0 m-0'>Online</p>
                            </span>
                        </div>
                    </div>

                    {/* Message box container */}
                    <div className="flex-1 overflow-y-scroll p-4" ref={scrollRef}>

                        {/* Messages content */}
                        {/* For example */}
                        <div className="flex flex-col space-y-4" >
                            {
                                messages?.map(({ user, message }, index) => {
                                    const isLocalUser = localuser?._id === user?.id || localuser?._id === user?._id;
                                    return (
                                        <div key={index} >
                                            {index > 0 && (
                                                <p className='w-full text-center'>21:44</p>
                                            )
                                            }

                                            {
                                                isLocalUser ? (
                                                    <div className='flex items-center gap-2 px-5 max-sm:px-2 justify-start flex-row-reverse' >
                                                        <Image
                                                            className='w-8 h-8 rounded-full'
                                                            src={profile}
                                                            alt="alternative"
                                                        />
                                                        <p className='bg-blue-600 rounded-b-xl rounded-tl-xl p-4 text-white max-w-xs'>{message}</p>
                                                    </div>
                                                ) : (
                                                    <div className='flex items-center gap-2 px-5 max-sm:px-2 '>
                                                        <Image
                                                            className='w-8 h-8 rounded-full'
                                                            src={profile}
                                                            alt="alternative"
                                                        />
                                                        <p className='bg-blue-100 rounded-b-xl rounded-tr-xl p-4 text-black max-w-xs'>{message}</p>
                                                    </div>
                                                )}
                                        </div>
                                    );
                                })}
                        </div>

                    </div>

                    {/* Input section */}
                    <div className="bg-blue-50 p-4 sticky bottom-0">

                        {/* Message input and send button */}
                        <form className="flex items-center relative" onSubmit={(e) => {
                        }}>
                            <div className='max-sm:absolute flex items-center gap-3 max-sm:gap-0'>
                                <label for="file">
                                    <div className="flex items-center justify-center ">
                                        <MdAttachFile />
                                    </div>
                                    <input type="file" id="file" className="hidden" accept="image/*" />
                                </label>
                            </div>
                            <input
                                type="text"
                                value={""}
                                placeholder="Type a message..."
                                className="flex-1 border rounded-full py-2 px-4 focus:outline-none max-sm:pr-5 pl-10"
                            />
                            <button type='submit' className="max-md:hidden ml-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full max-sm:absolute max-sm:right-0 max-sm:py-1">
                                Send
                            </button>
                            <button type='submit'> <FiSend className="md:hidden" /></button>
                        </form>
                    </div>
                </div >
            }

        </div >

    )
}

export default Chat
