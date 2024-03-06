'use client';

import React, { useState, useEffect } from 'react';
import Friend from './Friend';
import axios from 'axios';

const MatchesPage = () => {
  const [matchesList, setMatchesList] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await axios.get('/api/user/fetch_all_matches');
        setMatchesList(response.data.matches);
      } catch (error) {
        console.error('Error fetching matches:', error);
      }
    };

    fetchMatches();
  }, []);

  const handlematchReq = (id) => {
    console.log("Enter", id)
    setMatchRequests(matchRequests.filter((data) => data.from_id !== id));
  }


  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    const filteredMatches = matchesList.filter((match) =>
      `${match.first_name} ${match.last_name}`.toLowerCase().includes(query)
    );


    setMatchesList(filteredMatches);
  };

  return (
    <div className="bg-gray-100 w-full min-h-screen flex flex-col items-center justify-start">
      <div className="container mx-auto p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-4xl font-extrabold mb-6 text-gray-800">My Matches</h1>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search matches..."
            className="px-4 py-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
        <ul className="grid grid-cols-1 gap-4">
          {matchesList.map((match) => (
            <li key={match.id}>
              <Friend {...match} handlematchReq={handlematchReq} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MatchesPage;
