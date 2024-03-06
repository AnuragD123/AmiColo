'use client'
import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image';
import { IoSearchOutline, IoArrowBackCircleOutline } from "react-icons/io5";
import { FiSend } from "react-icons/fi";
import Router from 'next/router'
import { MdAttachFile } from "react-icons/md"
import profile from '../../../images/profileDemo.png';
import { io } from "socket.io-client";
import axios from 'axios';
import moment from 'moment/moment';

const Chat = () => {
    var socket;
    socket = io("http://localhost:3001");
    const scrollRef = useRef(null);

    const [messages, setMessages] = useState([]);
    const [localuser, setLocalUser] = useState();
    const [showChat, setShowChat] = useState(false);
    const [message, setMessage] = useState("");
    const [reciverUser, setReciverUser] = useState();
    const [user, setUsers] = useState([]);
    const [roomData, setRoomData] = useState();

    const renderTimestamp = (currentTimestamp, prevTimestamp) => {
        const currentMoment = moment(currentTimestamp);
        const prevMoment = moment(prevTimestamp);

        const timeDifference = currentMoment.diff(prevMoment, 'minute');
        // return formatTimestamp(currentTimestamp);
        if (timeDifference >= 2) {
            return formatTimestamp(currentTimestamp);
        }

        return null; // Return null if the difference is less than 2 hours
    };

    useEffect(() => {
        socket.on("new_msg", (data) => {
            console.log("DFindssssssssssss", data)
        });
    }, [socket]);

    useEffect(() => {
        fetchData();
    }, [])
    const fetchData = async () => {
        try {
            const response = await axios.get("/api/user/fetch_all_matches");
            const localuser = await axios.get('/api/user/getdata');
            setUsers(response.data.matches);
            setLocalUser(localuser.data.data[0]);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    }

    const handleJoin = async (e, rUser) => {
        e.preventDefault();
        console.log("Rr", rUser)
        try {
            const response = await axios.post("/api/chat/room_create", {
                user_1: localuser.id,
                user_2: rUser.user2,
            });
            const getMessages = await axios.post('/api/chat/fetch_all_messages', {
                senderId: localuser.id,
                receiverId: rUser.user2,
            });

            setRoomData(response.data.roomFind[0])
            setMessages(getMessages.data.Chat)

            if (response.data.roomFind[0]) {
                socket.emit("join_room", response.data.roomFind[0].id);
            } else {
                console.log("Room not found");
                // Handle case when the room is not found
            }

        } catch (error) {
            console.error('Error fetching users:', error);

        }

    };

    const handleSendMessage = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("/api/chat/chatCreate", {
                room: roomData.id,
                message: message,
                sender: localuser,
                reciver: reciverUser,
            });
            setMessages([
                ...messages,
                {
                    createdAt: Date.now(),
                    updatedAt: Date.now(),
                    message: message,
                    receiverId: reciverUser.user2,
                    senderId: localuser.id,
                    id: 0
                }
            ]);
            setMessage("")

            if (roomData) {
                socket.emit('send_msg', {
                    room: roomData,
                    message: message,
                    sender: localuser,
                    reciver: reciverUser,
                    createdAt: '2024-02-25T10:45:00',
                });
            }

        } catch (error) {
            console.error('Error fetching users:', error);

        }

    };

    console.log(messages)
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
                                <p className='text-md font-light p-0 m-0 cursor-pointer'>{localuser?.first_name + " " + localuser?.last_name}</p>
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
                            {user?.map((user, index) => (
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
                                            <p className='text-md font-light p-0 m-0'>{user.first_name + " " + user.last_name}</p>
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
                                        <p className='text-lg font-semibold p-0 m-0'>{reciverUser ? (reciverUser?.first_name + " " + reciverUser?.last_name) : ""}</p>
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
                                    messages?.map((chat, index) => {
                                        const isLocalUser = localuser?.id === chat.senderId;
                                        return (
                                            <div key={index} >
                                                {index > 0 && (
                                                    <p className='w-full text-center'> {renderTimestamp(chat?.createdAt, messages[index - 1]?.createdAt)}</p>
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
                                                            <p className='bg-blue-600 rounded-b-xl rounded-tl-xl p-4 text-white max-w-xs'>{chat.message}</p>
                                                        </div>
                                                    ) : (
                                                        <div className='flex items-center gap-2 px-5 max-sm:px-2 '>
                                                            <Image
                                                                className='w-8 h-8 rounded-full'
                                                                src={profile}
                                                                alt="alternative"
                                                            />
                                                            <p className='bg-blue-100 rounded-b-xl rounded-tr-xl p-4 text-black max-w-xs'>{chat.message}</p>
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
                                    <p className='text-lg font-semibold p-0 m-0'>{reciverUser ? (reciverUser?.first_name + " " + reciverUser?.last_name) : ""}</p>
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
                                messages?.map((chat, index) => {
                                    const isLocalUser = localuser?.id === chat.senderId;
                                    return (
                                        <div key={index} >
                                            {index > 0 && (
                                                <p className='w-full text-center'> {renderTimestamp(chat?.createdAt, messages[index - 1]?.createdAt)}</p>
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
                                                        <p className='bg-blue-600 rounded-b-xl rounded-tl-xl p-4 text-white max-w-xs'>{chat.message}</p>
                                                    </div>
                                                ) : (
                                                    <div className='flex items-center gap-2 px-5 max-sm:px-2 '>
                                                        <Image
                                                            className='w-8 h-8 rounded-full'
                                                            src={profile}
                                                            alt="alternative"
                                                        />
                                                        <p className='bg-blue-100 rounded-b-xl rounded-tr-xl p-4 text-black max-w-xs'>{chat.message}</p>
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
