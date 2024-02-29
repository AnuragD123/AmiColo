'use client'

import React, { useState } from 'react';

const Friend = ({ id, first_name,last_name, profile_img, status }) => {
  const [isUnfriending, setUnfriending] = useState(false);

  const handleUnfriend = () => {
    // Perform unfriending action here
    setUnfriending(true);
    // Simulating a delay with setTimeout
    setTimeout(() => {
      setUnfriending(false);
      // You can handle the actual unfriending logic here
    }, 1000); // Simulating a 1-second delay
  };

  return (
    <div className="bg-white p-4 rounded-md shadow-md flex items-center justify-between transition-transform transform hover:scale-105">
      <div className="flex items-center space-x-4">
        <img src={profile_img} alt={`${first_name}'s avatar`} className="w-12 h-12 object-cover rounded-full" />
        <div>
          <p className="text-lg font-semibold text-gray-800">{first_name+' '+last_name}</p>
          <p className="text-gray-500">{status}</p>
        </div>
      </div>
      <button
        onClick={handleUnfriend}
        className={`px-4 py-2 bg-red-500 text-white rounded-full ${isUnfriending && 'opacity-50 cursor-not-allowed'}`}
        disabled={isUnfriending}
      >
        {isUnfriending ? 'Unfriending...' : 'Unfriend'}
      </button>
    </div>
  );
};

export default Friend;
