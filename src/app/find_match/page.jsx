'use client'
import React, { useEffect, useState } from 'react'
import usersData from '../../../user_recommendation.json'; // Adjust the 
import Roomate from '../(Components)/Roomate/Roomate'
import axios from 'axios'
import { GrNext, GrPrevious } from "react-icons/gr";
import { toast, Toaster } from "react-hot-toast";
const FindMatch = () => {

    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(9); // Number of jobs per page
    // Calculate indexes for displaying current jobs
    const indexOfLastUser = currentPage * postPerPage;
    const indexOfFirstUser = indexOfLastUser - postPerPage;
    const currentMatch = (users).slice(
        indexOfFirstUser,
        indexOfLastUser
    );


    /* getting the id's of recommended users from dynamically generated .json file */


    // Change page
    const paginate = (pageNumber) => {
        window.scrollTo(0, 0); // Scrolls to the top of the page
        setCurrentPage(pageNumber)
    }
    const totalPages = Math.ceil(users.length / postPerPage);
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

        const triggerMLEvent=async() =>{
            const response = await axios.get('89.116.49.229:3000/api2');
            console.log(response);
        }
        triggerMLEvent();
        const fetchUsers = async () => {

            
            const recommended_user_ids = Object.values(usersData);
            console.log(recommended_user_ids);
            try {
                const response = await axios.post('/api/user/fetchusers_ml',{recommended_user_ids});
                // const response = await axios.get('/api/user/fetchusers');
                setUsers(response.data.data);
                console.log(response.data);

            } catch (error) {
                console.error('Error fetching users:', error);

            }
        };

        fetchUsers();


    }, []);

    return (
        <>
            <Toaster />
            <div className=' flex-1 p-2 flex flex-col items-center'>
                <p className='text-center w-full text-3xl text-white font-extrabold py-3' style={{ backgroundImage: "linear-gradient(#EF8463, #7170F5 )", clipPath: "polygon(3% 0%, 97% 0%, 100% 50%, 97% 100%, 3% 100%, 0% 50%)" }}>Find Matches</p>
                <div className="mt-5 w-full grid md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center">
                    {
                        currentMatch.map((user) => (
                            <Roomate key={user.id} data={user} />
                        )

                        )
                    }
                </div>

                <div className="my-5">
                    {(users.length > postPerPage) && (
                        <ul className="flex flex-wrap items-center gap-4">
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
                            <button onClick={() => paginate(currentPage + 1)} disabled={indexOfLastUser >= users.length} className='bg-blue-600 bg-opacity-70 hover:bg-opacity-100 transition-all duration-300 ease-linear text-white p-3 rounded-full'>
                                <GrNext />
                            </button>
                        </ul>
                    )}
                </div>
                {/* <div className='w-4/5 mt-3'>
                    <button className=' w-1/5 max-w-52 float-right text-center text-3xl text-white font-extrabold py-3' style={{ backgroundImage: "linear-gradient(#EF8463, #7170F5 )", clipPath: "polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 25% 50%)" }}> Next</button>
                </div> */}
            </div>
        </>
    )
}

export default FindMatch
