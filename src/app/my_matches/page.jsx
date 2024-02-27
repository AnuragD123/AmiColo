'use client'

import React, { useState } from 'react';
import Friend from './Friend';

const FriendsPage = () => {
  const initialFriendsList = [
    { id: 1, name: 'Friend 1', avatar: 'https://dummyimage.com/100x100/000000/ffffff&text=Avatar', status: 'Online' },
    { id: 2, name: 'Friend 2', avatar: 'https://dummyimage.com/100x100/000000/ffffff&text=Avatar', status: 'Away' },
    // Add more friends as needed
  ];

  const [friendsList, setFriendsList] = useState(initialFriendsList);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    const filteredFriends = initialFriendsList.filter((friend) =>
      friend.name.toLowerCase().includes(query)
    );

    setFriendsList(filteredFriends);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <div className="container mx-auto p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-4xl font-extrabold mb-6 text-gray-800">My Friends</h1>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search friends..."
            className="px-4 py-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
        <ul className="grid grid-cols-1 gap-4">
          {friendsList.map((friend) => (
            <li key={friend.id}>
              <Friend {...friend} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FriendsPage;






