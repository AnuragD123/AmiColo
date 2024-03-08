'use client'
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image'
import { IoSearchOutline, IoArrowBackCircleOutline } from 'react-icons/io5';
import { FiSend } from 'react-icons/fi';
import Router from 'next/router';
import { MdAttachFile } from 'react-icons/md';
import profile from '../../../images/profileDemo.png';
import { useUserContext } from '@/context/context';
import axios from 'axios';
import moment from 'moment/moment';

const Chat = () => {
    const scrollToBottom = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    };

    const { socket } = useUserContext();
    const scrollRef = useRef(null);

    const [messages, setMessages] = useState([]);
    const [localuser, setLocalUser] = useState(null);
    const [showChat, setShowChat] = useState(false);
    const [message, setMessage] = useState('');
    const [reciverUser, setReciverUser] = useState(null);
    const [user, setUsers] = useState([]);
    const [typing, setTyping] = useState(false);
    const [roomData, setRoomData] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        const handleGetMessage = data => {
            setMessages(prevMessages => [
                ...prevMessages,
                {
                    createdAt: data.createdAt,
                    updatedAt: data.createdAt,
                    message: data.message,
                    receiverId: data.reciver.user2,
                    senderId: data.sender.id,
                    id: messages.length,
                },
            ]);
        };

        socket?.on('getMessage', handleGetMessage);

        return () => {
            // Cleanup to avoid memory leaks
            socket?.off('getMessage', handleGetMessage);
        };
    }, [socket, messages]);

    useEffect(() => {
        scrollToBottom();
    }, [messages]);


    const fetchData = async () => {
        try {
            const response = await axios.get('/api/user/fetch_all_matches');
            const localUserResponse = await axios.get('/api/user/getdata');
            setUsers(response.data.matches);
            setLocalUser(localUserResponse.data.data[0]);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    const handleJoin = async (e, rUser) => {
        e.preventDefault();

        try {
            const response = await axios.post("/api/chat/room_create", {
                user_1: localuser.id,
                user_2: rUser.user2,
            });
            const getMessages = await axios.post('/api/chat/fetch_all_messages', {
                senderId: localuser.id,
                receiverId: rUser.user2,
            });

            const roomId = response.data.roomFind[0].id;

            setRoomData(response.data.roomFind[0]);
            setMessages(getMessages.data.Chat);
            setReciverUser(rUser);

            if (window.innerWidth <= 640) {
                setShowChat(true);
            }

            // Join the room on the server
            socket.emit('join_room', { roomId, user: localuser });
        } catch (error) {
            console.error('Error joining room:', error);
        }
    };


    // Modify handleSendMessage to send messages to the room
    const handleSendMessage = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("/api/chat/chatCreate", {
                room: roomData.id,
                message: message,
                sender: localuser,
                reciver: reciverUser,
            });

            const newMessage = {
                createdAt: Date.now(),
                updatedAt: Date.now(),
                message: message,
                receiverId: reciverUser.user2,
                senderId: localuser.id,
                id: messages.length,
            };

            setMessages(prevMessages => [...prevMessages, newMessage]);
            setMessage('');

            if (roomData) {
                // Send the message to the room on the server
                socket.emit('send_msg', {
                    room: roomData,
                    message: message,
                    sender: localuser,
                    reciver: reciverUser,
                    createdAt: '2024-02-25T10:45:00',
                });
            }
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    // Add a new useEffect to listen for group messages
    useEffect(() => {
        const handleGroupMessage = data => {
            console.log('Group Message:', data);
            if (data.room.user2_id === reciverUser.user2 || data.room.user1_id === reciverUser.user2) {
                setMessages(prevMessages => [
                    ...prevMessages,
                    {
                        createdAt: data.createdAt,
                        updatedAt: data.createdAt,
                        message: data.message,
                        receiverId: data.reciver.user2,
                        senderId: data.sender.id,
                        id: messages.length,
                    },
                ]);
            }

        };



        socket?.on('groupMessage', handleGroupMessage);

        socket?.on('inputfocusserver', data => {
            if (data.localuserID === reciverUser.user2) {
                setTyping(data.value)
            }
        })

        return () => {
            // Cleanup to avoid memory leaks
            socket?.off('groupMessage', handleGroupMessage);
            socket?.off('inputfocusserver');
        };
    }, [socket, messages]);



    // useEffect(() => {
    //     socket?.on("receive-message", (data) => {
    //         setChatUsers(prevUsers => {
    //             const updatedUsers = prevUsers.map(user => {
    //                 if (user?.user?.id == data?.receiver) {
    //                     return {
    //                         ...user,
    //                         lastChat: {
    //                             ...user.lastChat,
    //                             message: data.message, // Update lastChat.message with the new message
    //                             IsRead: true
    //                         }
    //                     };
    //                 }
    //                 return user;
    //             });
    //             const senderIndex = updatedUsers.findIndex(user => user?.user?.id == data?.receiver);

    //             if (senderIndex !== -1) {
    //                 const senderUser = updatedUsers.splice(senderIndex, 1)[0];
    //                 updatedUsers.unshift(senderUser);
    //             }
    //             return updatedUsers;
    //         });
    //         setChatHistory((prevChatHistory) => [...prevChatHistory, data]);
    //     });

    //     socket?.on('inputfocusserver', value => {
    //         setTyping(value)
    //     })

    //     return () => {
    //         socket?.off("receive-message");
    //         socket?.off("inputfocusserver");
    //     };
    // }, [socket])



    const formatTimestamp = timestamp => {
        const date = moment(timestamp);
        const now = moment();

        const timeDifference = now.diff(date, 'seconds');

        if (timeDifference < 60) {
            return <span>{timeDifference} seconds ago</span>;
        } else if (timeDifference < 3600) {
            const minutes = moment.duration(timeDifference, 'seconds').minutes();
            return <span>{minutes} minutes ago</span>;
        } else if (timeDifference < 86400) {
            const hours = moment.duration(timeDifference, 'seconds').hours();
            return <span>{hours} hours ago</span>;
        } else {
            return <span>{date.format('MMMM Do YYYY')}</span>; // Display the full date for older messages
        }
    };

    const renderTimestamp = (currentTimestamp, prevTimestamp) => {
        const currentMoment = moment(currentTimestamp);
        const prevMoment = moment(prevTimestamp);

        const timeDifference = currentMoment.diff(prevMoment, 'minute');

        if (timeDifference >= 2) {
            return formatTimestamp(currentTimestamp);
        }

        return null; // Return null if the difference is less than 2 hours
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
                                src={localuser?.avatar ? `/uploads/${localuser?.avatar}` : profile}
                                alt="alternative"
                                width={150}
                                height={150}
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
                                <div key={index} className=''>
                                    <div className={`flex items-center gap-2 relative ${messages[messages.length - 1]?.IsRead ? "bg-blue-600" : ""}  bg-opacity-30 p-2 rounded-lg`}>
                                        <Image
                                            className='w-8 h-8 rounded-full cursor-pointer'
                                            src={user?.avatar ? `/uploads/${user?.avatar}` : profile}
                                            alt="profile"
                                            width={150}
                                            height={150}
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
                                            <span>
                                                <p className='text-md font-light p-0 m-0'>{user.first_name + " " + user.last_name}</p>
                                                <p className='text-xs font-light p-0 m-0'>{messages[messages.length - 1]?.message}</p>

                                            </span>
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
                                            src={reciverUser?.avatar ? `/uploads/${reciverUser?.avatar}` : profile}
                                            width={150}
                                            height={150}
                                            alt="alternative"
                                        />
                                        <p className='text-lg font-semibold p-0 m-0'>{reciverUser ? (reciverUser?.first_name + " " + reciverUser?.last_name) : ""}</p>
                                    </span>
                                    <p className='text-sm font-extralight p-0 m-0'>{typing ? "typing" : "Online"}</p>
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
                                                                src={localuser?.avatar ? `/uploads/${localuser?.avatar}` : profile}
                                                                width={150}
                                                                height={150}
                                                                alt="alternative"
                                                            />
                                                            <p className='bg-blue-600 rounded-b-xl rounded-tl-xl p-4 text-white max-w-xs'>{chat.message}</p>
                                                        </div>
                                                    ) : (
                                                        <div className='flex items-center gap-2 px-5 max-sm:px-2 '>
                                                            <Image
                                                                className='w-8 h-8 rounded-full'
                                                                src={reciverUser?.avatar ? `/uploads/${reciverUser?.avatar}` : profile}
                                                                width={150}
                                                                height={150}
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
                                    onFocus={(e) => {
                                        if (localuser) {
                                            socket.emit("inputfocus", { room: roomData, localuserID: localuser.id, value: true })
                                        }
                                    }
                                    }
                                    onBlur={(e) => {
                                        console.log("object", blur)
                                        if (localuser) {
                                            socket.emit("inputfocus", { room: roomData, localuserID: localuser.id, value: !!message })
                                        }
                                    }
                                    }
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
                                        src={reciverUser?.avatar ? `/uploads/${reciverUser?.avatar}` : profile}
                                        width={150}
                                        height={150}
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
                                                            src={localuser?.avatar ? `/uploads/${localuser?.avatar}` : profile}
                                                            width={150}
                                                            height={150}
                                                            alt="alternative"
                                                        />
                                                        <p className='bg-blue-600 rounded-b-xl rounded-tl-xl p-4 text-white max-w-xs'>{chat.message}</p>
                                                    </div>
                                                ) : (
                                                    <div className='flex items-center gap-2 px-5 max-sm:px-2 '>
                                                        <Image
                                                            className='w-8 h-8 rounded-full'
                                                            src={reciverUser?.avatar ? `/uploads/${reciverUser?.avatar}` : profile}
                                                            width={150}
                                                            height={150}
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
                                onFocus={(e) => {
                                    if (localuser) {
                                        socket.emit("inputfocus", { room: roomData, localuserID: localuser.id, value: true })
                                    }
                                }
                                }
                                onBlur={(e) => {
                                    console.log("object", blur)
                                    if (localuser) {
                                        socket.emit("inputfocus", { room: roomData, localuserID: localuser.id, value: !!message })
                                    }
                                }
                                }
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
