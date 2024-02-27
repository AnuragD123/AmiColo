// FriendSearchPage.js
'use client'
// FriendSearchPage.js

import React, { useState } from 'react';

const FriendSearchPage = () => {
  const initialFriendsList = [
    { id: 1, name: 'Friend 1', avatar: 'https://dummyimage.com/100x100/000000/ffffff&text=Avatar', status: 'Online' },
    { id: 2, name: 'Friend 2', avatar: 'https://dummyimage.com/100x100/000000/ffffff&text=Avatar', status: 'Away' },
    // Add more friends as needed
  ];

  const [friendsList, setFriendsList] = useState(initialFriendsList);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFriends, setSelectedFriends] = useState([]);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    const filteredFriends = initialFriendsList.filter((friend) =>
      friend.name.toLowerCase().includes(query)
    );

    setFriendsList(filteredFriends);
  };

  const handleFriendSelect = (friend) => {
    const isFriendSelected = selectedFriends.some((selectedFriend) => selectedFriend.id === friend.id);

    if (isFriendSelected) {
      // If friend is already selected, unselect it
      setSelectedFriends((prevSelectedFriends) =>
        prevSelectedFriends.filter((selectedFriend) => selectedFriend.id !== friend.id)
      );
    } else {
      // If friend is not selected, add it to the selectedFriends array
      setSelectedFriends((prevSelectedFriends) => [...prevSelectedFriends, friend]);
    }

    setSearchQuery(''); // Clear search query after selecting/unselecting a friend
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <div className="container mx-auto p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-4xl font-extrabold mb-6 text-gray-800">Friend Search</h1>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search friends..."
            className="px-4 py-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
        <div>
          <ul className="space-y-2">
            {friendsList.map((friend) => (
              <li key={friend.id} onClick={() => handleFriendSelect(friend)} className="cursor-pointer">
                <div className={`bg-white p-4 rounded-md shadow-md transition-transform transform hover:scale-105 ${selectedFriends.some((selectedFriend) => selectedFriend.id === friend.id) && 'ring ring-blue-500'}`}>
                  <img src={friend.avatar} alt={`${friend.name}'s avatar`} className="w-8 h-8 object-cover rounded-full mb-2" />
                  <p className="text-xs font-semibold text-gray-800">{friend.name}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-4">
          <p className="text-gray-600">Selected Friends:</p>
          <div className="flex flex-wrap mt-2">
            {selectedFriends.map((selectedFriend) => (
              <div key={selectedFriend.id} onClick={() => handleFriendSelect(selectedFriend)} className="bg-blue-500 text-white px-3 py-1 rounded-full m-1 cursor-pointer">
                {selectedFriend.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendSearchPage;