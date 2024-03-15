'use client'
import React from 'react';
import MatchRequest from './matchRequest'; // assuming you have a FollowRequest component
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Toaster } from 'react-hot-toast'

const MatchRequestsPage = () => {
  // Dummy data for friend requests

  const [matchRequests, setMatchRequests] = useState([]);


  useEffect(() => {
    // Fetch friend requests data from the API endpoint
    const fetchMatchRequests = async () => {
      try {
        const response = await axios.get('/api/user/fetch_matching_requests');
        console.log("DATA Found ", response.data.data)
        setMatchRequests(response.data.data);
        // console.log(matchRequests)
      } catch (error) {
        console.error('Error fetching friend requests:', error.message);
      }
    };

    fetchMatchRequests();
  }, []);
  const handlematchReq = (id) => {
    console.log("Enter", id)
    setMatchRequests(matchRequests.filter((data) => data.from_id !== id));
  }


  return (
    <div>
      <Toaster />
      <div className="container mx-auto mt-8">
        <h1 className=' w-4/5 text-center text-3xl text-white font-extrabold py-3 max-lg:w-11/12' style={{ backgroundImage: "linear-gradient(#EF8463, #7170F5 )", clipPath: "polygon(3% 0%, 97% 0%, 100% 50%, 97% 100%, 3% 100%, 0% 50%)" }}>Match Requests</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {matchRequests.map((user) => (
            <MatchRequest key={user.req_id} user={user} handlematchReq={handlematchReq} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MatchRequestsPage;
