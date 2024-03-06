'use client'
import React from 'react';
import MatchRequest from './matchRequest'; // assuming you have a FollowRequest component
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Toaster } from 'react-hot-toast'
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
  //   const friendRequests = [
  //     { id: 1, username: 'john_doe' },
  //     { id: 2, username: 'jane_smith' },
  //     { id: 3, username: 'joe_root' },
  //     { id: 4, username: 'autin_thomas' },
  //     // Add more friend requests as needed
  //   ];

  return (
    <div>
      <Toaster />
      <div className="container mx-auto mt-8">
        <h1 className="text-3xl text-center font-bold mb-4">Match Requests</h1>

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
