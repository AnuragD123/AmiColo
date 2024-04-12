import React, { useState } from "react";
import axios from "axios";

const Friend = ({
  id,
  first_name,
  last_name,
  avatar: profile_img,
  status,
  user2,
  handlematchReq,
}) => {
  const [isUnfriending, setUnfriending] = useState(false);
  const [isAddingFriend, setAddingFriend] = useState(false);
  const [isFriend, setFriend] = useState(true);

  const handleUnfriend = async (unfriendId) => {
    try {
      // Set unfriending state to true to indicate the operation is in progress
      setUnfriending(true);

      // Send a DELETE request to remove the friend using axios
      await axios.post(`/api/remove_friend`, { userId2: unfriendId });

      // Assuming the DELETE request was successful, update the state to indicate the user is no longer friends
      setFriend(false);
      // handlematchReq(user2) //For Remove entry after Unfriend click
    } catch (error) {
      // Handle errors by logging them and/or displaying error messages to the user
      console.error("Error unfriending:", error.message);
    } finally {
      // Reset the unfriending state to false after the operation is complete (whether successful or failed)
      setUnfriending(false);
    }
  };

  const handleAddFriend = async (addFriendId) => {
    try {
      setAddingFriend(true);
      // Send a POST request to add friend
      await axios.post(`/api/add_friend`, { userId2: addFriendId });
      // Assuming the POST request was successful, update the state
      setFriend(true);
    } catch (error) {
      console.error("Error adding friend:", error.message);
    } finally {
      setAddingFriend(false);
    }
  };

  return (
    <div className="bg-white p-4 rounded-md shadow-md flex items-center justify-between transition-transform transform hover:scale-105">
      <div className="flex items-center space-x-4">
        <img
          src={profile_img}
          alt={`${first_name}'s avatar`}
          className="w-12 h-12 object-cover rounded-full"
        />
        <div>
          <p className="text-lg font-semibold text-gray-800">
            {first_name} {last_name}
          </p>
          <p className="text-gray-500">{status}</p>
        </div>
      </div>
      {isFriend ? (
        <button
          onClick={() => handleUnfriend(user2)} //Change Id to user2 id
          className={`px-4 py-2 bg-red-500 text-white rounded-full ${
            isUnfriending && "opacity-50 cursor-not-allowed"
          }`}
          disabled={isUnfriending}
        >
          Unfriend
        </button>
      ) : (
        <button
          onClick={() => handleAddFriend(user2)} //Change Id to user2 id
          className={`px-4 py-2 bg-green-500 text-white rounded-full ${
            isAddingFriend && "opacity-50 cursor-not-allowed"
          }`}
          disabled={isAddingFriend}
        >
          Add Friend
        </button>
      )}
    </div>
  );
};

export default Friend;
