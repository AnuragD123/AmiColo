'use client'
import React, { useEffect, useState } from 'react'
import Room from '@/app/(Components)/Room/Room'
import { GrNext, GrPrevious } from "react-icons/gr";
import axios from 'axios';
const Listing = () => {

    const [rooms, setRooms] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(5); // Number of jobs per page
    // Calculate indexes for displaying current jobs
    const indexOfLastUser = currentPage * postPerPage;
    const indexOfFirstUser = indexOfLastUser - postPerPage;
    const currentMatch = (rooms).slice(
        indexOfFirstUser,
        indexOfLastUser
    );

    // Change page
    const paginate = (pageNumber) => {
        window.scrollTo(0, 0); // Scrolls to the top of the page
        setCurrentPage(pageNumber)
    }
    const totalPages = Math.ceil(rooms.length / postPerPage);
    const getPageNumbers = () => {
        const pageNumbers = [];
        if (totalPages <= 5) {
            for (let i = 1; i <= totalPages; i++) {
                pageNumbers.push(i);
            }
        } else {
            if (currentPage <= 3) {
                for (let i = 1; i <= 5; i++) {
                    pageNumbers.push(i);
                }
                pageNumbers.push('...');
                pageNumbers.push(totalPages);
            } else if (currentPage > 3 && currentPage < totalPages - 2) {
                pageNumbers.push(1);
                pageNumbers.push('...');
                for (let i = currentPage - 1; i <= currentPage + 1; i++) {
                    pageNumbers.push(i);
                }
                pageNumbers.push('...');
                pageNumbers.push(totalPages);
            } else {
                pageNumbers.push(1);
                pageNumbers.push('...');
                for (let i = totalPages - 4; i <= totalPages; i++) {
                    pageNumbers.push(i);
                }
            }
        }
        return pageNumbers;
    };

    useEffect(() => {
        const fetchRooms = async () => {
            try {
                const response = await axios.get('/api/room/fetchroom');
                setRooms(response.data.data);

            } catch (error) {
                console.error('Error fetching rooms:', error);

            }
        };

        fetchRooms();
    }, []);

    return (
        <div className=' flex-1 p-2 flex flex-col items-center'>
            <p className=' w-4/5 text-center text-3xl text-white font-extrabold py-3' style={{ backgroundImage: "linear-gradient(#EF8463, #7170F5 )", clipPath: "polygon(3% 0%, 97% 0%, 100% 50%, 97% 100%, 3% 100%, 0% 50%)" }}>Find Rooms</p>
            <div className="mt-5 w-4/5 flex flex-col justify-center items-center gap-5">
                {
                    currentMatch.map((room) => (
                        <Room key={room.id} data={room} />
                    )

                    )
                }
            </div>
            <div className="my-5">
                {(rooms.length > postPerPage) && (
                    <ul className="flex items-center gap-4">
                        <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1} className='bg-blue-600 bg-opacity-70 hover:bg-opacity-100 transition-all duration-300 ease-linear text-white p-3 rounded-full'>
                            <GrPrevious />
                        </button>
                        {getPageNumbers().map((number, index) => (
                            <li key={index} className=''>
                                <button
                                    onClick={() => paginate(number)}
                                    className={currentPage === number ? ' text-white bg-blue-600 rounded-full px-4 py-2' : ''}
                                    disabled={number === '...'}
                                >
                                    {number}
                                </button>
                            </li>
                        ))}
                        <button onClick={() => paginate(currentPage + 1)} disabled={indexOfLastUser >= rooms.length} className='bg-blue-600 bg-opacity-70 hover:bg-opacity-100 transition-all duration-300 ease-linear text-white p-3 rounded-full'>
                            <GrNext />
                        </button>
                    </ul>
                )}
            </div>
        </div>
    )
}

export default Listing
