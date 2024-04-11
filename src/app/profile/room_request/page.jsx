"use client";
import React, { useState, useEffect } from "react";
import Room from "@/app/(Components)/RoomRequestsCard/RoomRequests";
import axios from "axios";

const Roomrequest = () => {
  const [roomRequests, setRoomRequests] = useState([]);
  useEffect(() => {
    const fetchRecievedRoomRequests = async () => {
      const response = await axios.get(
        "/api/apartment/fetch_booking-invitations"
      );

      console.log(response.data.booking_requests);
      setRoomRequests(response.data.booking_requests);
    };

    fetchRecievedRoomRequests();
  }, []);
  return (
    <div className=" flex-1 p-2 flex flex-col items-center">
      <p
        className=" w-4/5 text-center text-3xl text-white font-extrabold py-3 max-lg:w-11/12"
        style={{
          backgroundImage: "linear-gradient(#EF8463, #7170F5 )",
          clipPath:
            "polygon(3% 0%, 97% 0%, 100% 50%, 97% 100%, 3% 100%, 0% 50%)",
        }}
      >
        Room Requests
      </p>
      <div className="mt-16  flex flex-col justify-center items-center gap-5 w-full">
        {roomRequests.map((roomRequest, index) => (
          <Room key={index} data={roomRequest} />
        ))}
      </div>
    </div>
  );
};

export default Roomrequest;
