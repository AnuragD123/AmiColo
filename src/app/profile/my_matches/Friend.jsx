import React, { useState } from "react";
import axios from "axios";

const Friend = ({ id, first_name, last_name, profile_img, status }) => {
    const [isUnfriending, setUnfriending] = useState(false);
    const [friend, setFriend] = useState(true);

    const handleUnfriend = async (unfriendId=3) => {
        try {
            // Send a DELETE request to remove friend
            await axios.delete(`/api/remove_friend`, {
                data: { userId2: unfriendId }
            });
            // Assuming the DELETE request was successful, update the state
            setFriend(false);
        } catch (error) {
            console.error("Error unfriending:", error.message);
        }
    };

    const handleAddFriend = async (addFriendId=3) => {
        try {
            // Send a POST request to add friend
            await axios.post(`/api/user/add_friend`, { userId2: addFriendId });            // Assuming the POST request was successful, update the state
            setFriend(true);
        } catch (error) {
            console.error("Error adding friend:", error.message);
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
            {friend ? (
                <button
                    onClick={handleUnfriend}
                    className={`px-4 py-2 bg-red-500 text-white rounded-full ${
                        isUnfriending && "opacity-50 cursor-not-allowed"
                    }`}
                    disabled={isUnfriending}>
                    Unfriend
                </button>
            ) : (
                <button
                    onClick={handleAddFriend}
                    className={`px-4 py-2 bg-green-500 text-white rounded-full ${
                        isUnfriending && "opacity-50 cursor-not-allowed"
                    }`}
                    disabled={isUnfriending}>
                    Add Friend
                </button>
            )}
        </div>
    );
};

export default Friend;
