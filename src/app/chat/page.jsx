'use client'
import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image';
import { IoSearchOutline, IoArrowBackCircleOutline } from "react-icons/io5";
import { FiSend } from "react-icons/fi";
import Router from 'next/router'
import { MdAttachFile } from "react-icons/md"
import profile from '../../../images/profileDemo.png';
import { io } from "socket.io-client";


const Chat = () => {
    var socket;
    socket = io("http://localhost:3001");

    const scrollRef = useRef(null);
    const searchItem = [
        {
            id: 1,
            username: "sonu"
        },
        {
            id: 2,
            username: "rohit"
        },
        {
            id: 3,
            username: "monu"
        },
        {
            id: 4,
            username: "chote"
        },
        {
            id: 5,
            username: "sidhu"
        },
    ]
    const dummyLocalUser = {
        id: 1,
        username: "monu"
    };

    const dummyRoom = [
        {
            id: 1,
            user: [
                {
                    id: 1,
                    username: "sonu"
                },
                {
                    id: 2,
                    username: "rohit"
                },
            ],
            createdAt: '2024-02-25T10:30:00',
        },
        {
            id: 2,
            user: [
                {
                    id: 4,
                    username: "chote"
                },
                {
                    id: 1,
                    username: "sonu"
                },
            ],
            createdAt: '2024-02-25T10:30:00',
        },
        {
            id: 3,
            user: [
                {
                    id: 3,
                    username: "monu"
                },
                {
                    id: 1,
                    username: "sonu"
                },
            ],
            createdAt: '2024-02-25T10:30:00',
        },
        {
            id: 4,
            user: [
                {
                    id: 5,
                    username: "sidhu"
                },
                {
                    id: 1,
                    username: "sonu"
                },
            ],
            createdAt: '2024-02-25T10:30:00',
        },
    ]

    const dummyMessages = [
        {
            sender: {
                id: 1,
                username: "sonu"
            },
            reciver: {
                id: 2,
                username: "rohit"
            },
            message: 'Hello there!',
            createdAt: '2024-02-25T10:30:00',
        },

        {
            sender: {
                id: 2,
                username: "rohit"
            },
            reciver: {
                id: 1,
                username: "sonu"
            },
            message: 'Hi! How are you?',
            createdAt: '2024-02-25T10:35:00',
        },
        {
            sender: {
                id: 1,
                username: "sonu"
            },
            reciver: {
                id: 2,
                username: "rohit"
            },
            message: 'I\'m doing well, thank you!',
            createdAt: '2024-02-25T10:40:00',
        },
        {
            sender: {
                id: 2,
                username: "rohit"
            },
            reciver: {
                id: 1,
                username: "sonu"
            },
            message: 'That\'s great to hear!',
            createdAt: '2024-02-25T10:45:00',
        },

        {
            sender: {
                id: 2,
                username: "rohit"
            },
            reciver: {
                id: 1,
                username: "sonu"
            },
            message: 'That\'s great to hear!',
            createdAt: '2024-02-25T10:45:00',
        },
        {
            sender: {
                id: 2,
                username: "rohit"
            },
            reciver: {
                id: 1,
                username: "sonu"
            },
            message: 'That\'s great to hear!',
            createdAt: '2024-02-25T10:45:00',
        },
        {
            sender: {
                id: 1,
                username: "rohit"
            },
            reciver: {
                id: 4,
                username: "chote"
            },
            message: 'That\'s great ',
            createdAt: '2024-02-25T10:45:00',
        },
        {
            sender: {
                id: 4,
                username: "chote"
            },
            reciver: {
                id: 1,
                username: "sonu"
            },
            message: 'That\'s great ',
            createdAt: '2024-02-25T10:45:00',
        },
        {
            sender: {
                id: 4,
                username: "chote"
            },
            reciver: {
                id: 5,
                username: "sidhu"
            },
            message: 'That\'s great to hear!',
            createdAt: '2024-02-25T10:45:00',
        },
        {
            sender: {
                id: 5,
                username: "chote"
            },
            reciver: {
                id: 4,
                username: "sidhu"
            },
            message: 'That\'s great to hear!',
            createdAt: '2024-02-25T10:45:00',
        },

    ];

    const [messages, setMessages] = useState();
    const [localuser, setLocalUser] = useState(dummyLocalUser);
    const [showChat, setShowChat] = useState(false);
    const [message, setMessage] = useState("");
    const [reciverUser, setReciverUser] = useState();

    useEffect(() => {
        if (reciverUser) {
            // console.log("DATA", reciverUser)
            const filtered = dummyMessages.filter(
                (data) =>
                    (localuser.id === data.sender.id && reciverUser.id === data.reciver.id) ||
                    (localuser.id === data.reciver.id && reciverUser.id === data.sender.id)
            );
            console.log("object", filtered)
            setMessages(filtered);
        }
    }, [reciverUser]);

    useEffect(() => {
        socket.on("receive_msg", (data) => {
            console.log("DFindssssssssssss", data)
        });
    }, [socket]);

    const handleJoin = (e, rUser) => {
        e.preventDefault();
        if (rUser) {
            const room = dummyRoom.find((data) =>
                data.user.some((user) => user.id === localuser.id) &&
                data.user.some((user) => user.id === rUser.id)
            );
            if (room) {
                socket.emit("join_room", room.id);
            } else {
                console.log("Room not found");
                // Handle case when the room is not found
            }
        }
    };

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (reciverUser) {
            const room = dummyRoom.find((data) =>
                data.user.some((user) => user.id === localuser.id) &&
                data.user.some((user) => user.id === reciverUser.id)
            );
            if (room) {
                socket.emit('send_msg', {
                    roomId: room.id,
                    message: message,
                    sender: localuser,
                    reciver: reciverUser,
                    createdAt: '2024-02-25T10:45:00',
                });
            }

        }

    };

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
                            {searchItem?.map((user, index) => (
                                <div key={index} >
                                    <div className='flex items-center gap-2 relative'>
                                        <Image
                                            className='w-8 h-8 rounded-full cursor-pointer'
                                            src={profile}
                                            alt="profile"
                                            onClick={(e) => {
                                                handleJoin(e, user)
                                                setReciverUser(user)
                                                if (window.innerWidth <= 640) {
                                                    setShowChat(true)
                                                }

                                            }}
                                        />
                                        <span className='cursor-pointer' onClick={(e) => {
                                            handleJoin(e, user)
                                            setReciverUser(user)
                                            if (window.innerWidth <= 640) {
                                                setShowChat(true)
                                            }
                                        }}>
                                            <p className='text-md font-light p-0 m-0'>{user.username}</p>
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
                            <div className=' w-full flex items-center justify-between'>
                                <span>
                                    <span className='flex items-center gap-2'>
                                        <Image
                                            className='w-8 h-8 rounded-full'
                                            src={profile}
                                            alt="alternative"
                                        />
                                        <p className='text-lg font-semibold p-0 m-0'>{reciverUser?.username || ""}</p>
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
                                    messages?.map(({ sender, message }, index) => {
                                        console.log("sender", sender.id)
                                        const isLocalUser = localuser?.id === sender?.id;
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
                            <form className="flex items-center relative" onSubmit={(e) => handleSendMessage(e)}>
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
                                    value={message}
                                    placeholder="Type a message..."
                                    className="flex-1 border rounded-full py-2 px-4 focus:outline-none max-sm:pr-5 pl-10"
                                    onChange={(e) => setMessage(e.target.value)}
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
                                    <p className='text-lg font-semibold p-0 m-0'>{reciverUser?.username || ""}</p>
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
                                messages?.map(({ sender, message }, index) => {
                                    const isLocalUser = localuser?.id === sender?.id;
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
                        <form className="flex items-center relative" onSubmit={(e) => handleSendMessage(e)}>
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
                                value={message}
                                placeholder="Type a message..."
                                className="flex-1 border rounded-full py-2 px-4 focus:outline-none max-sm:pr-5 pl-10"
                                onChange={(e) => setMessage(e.target.value)}
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
