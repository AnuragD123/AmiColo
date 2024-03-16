"use client";
import React, { useEffect, useState } from "react";
import Room from "@/app/(Components)/Room/Room";
import axios from "axios";
const SaveListing = () => {
  const [savedRooms, setSavedRooms] = useState([]);
  const fetchSavedRooms = async () => {
    try {
      const response = await axios.get("/api/user/bookmark_room");
      setSavedRooms(response.data.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchSavedRooms();
  }, []);

  return (
    <div className=" flex-1 p-2 flex flex-col items-center">
      <p
        className=" w-4/5 text-center text-3xl text-white font-extrabold py-3"
        style={{
          backgroundImage: "linear-gradient(#EF8463, #7170F5 )",
          clipPath:
            "polygon(3% 0%, 97% 0%, 100% 50%, 97% 100%, 3% 100%, 0% 50%)",
        }}
      >
        Saved Listings
      </p>
      <div className=" mt-16 w-3/5 flex flex-col justify-center items-center gap-5">
        {savedRooms.length > 0 ? (
          savedRooms.map((room, index) => (
            <Room
              key={index}
              data={room}
              isBookmarked={true}
              fetchSavedRooms={fetchSavedRooms}
            />
          ))
        ) : (
          <p>No saved rooms</p>
        )}
      </div>
    </div>
  );
};

export default SaveListing;
