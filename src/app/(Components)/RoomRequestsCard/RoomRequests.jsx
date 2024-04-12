"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";

const RoomRequestCard = ({ data }) => {
  const {
    invitedby_first_name,
    invitedby_last_name,
    type,
    gym,
    rooms,
    parking,
    area,
    price,
    washrooms,
    invitation_id,
  } = data;

  const acceptRoomInvite = async (invitation_id) => {
    try {
      const response = await axios.post(`/api/apartment/accept_room_req`, {
        invitation_id,
      });
      console.log("Room invite accepted:", response.data);

      if (response.data.status === "success") {
        toast.success(response.data.msg);
      } else {
        toast.error(response.data.msg);
      }
      // Optionally, you can perform additional actions after a successful request
    } catch (error) {
      console.error("Error accepting room invite:", error.message);
      // Handle errors or display an error message
    }
  };

  const declineRoomInvite = async (invitation_id) => {
    try {
      const response = await axios.post(`/api/apartment/decline_room_req`, {
        invitation_id,
      });
      console.log("Room invite declined:", response.data);

      if (response.data.status === "success") {
        toast.success(response.data.msg);
      } else {
        toast.error(response.data.msg);
      }
    } catch (error) {
      console.error("Error declining room invite:", error.message);
      // Handle errors or display an error message
    }
  };

  return (
    <div
      className="w-full rounded-lg flex item-start gap-5 max-lg:flex-col"
      style={{ boxShadow: "0px 0px 13px -3px black" }}
    >
      <Toaster />
      <Image
        className="rounded-lg max-lg:w-full max-lg:h-56 max-lg:rounded-br-none max-lg:rounded-bl-none"
        //{data.img}
        src={"/images/room2.jpg"}
        width={300}
        height={300}
        alt="Picture of the author"
      />
      <div className="py-2  max-lg:px-2 w-full gap-4 flex flex-col ">
        <h3 className="text-xl font-semibold mb-1">{type}</h3>
        <p className="text-md text-gray-600 mb-2">
          <ul>
            <li>Gym: {gym}</li>
            <li>Rooms: {rooms}</li>
            <li>Washrooms: {washrooms}</li>
            <li>Area: {area}</li>
            <li>Parking: {parking}</li>
            <li>Price: ${price}</li>
          </ul>
        </p>
        <p className="text-xs text-gray-600 ">
          <span className="font-sm text-black mr-2">Suggest By:</span>
          {invitedby_first_name + " " + invitedby_last_name}
        </p>

        <div className="w-full my-3 px-3">
          <button
            className=" float-right rounded-full bg-red-600 text-white px-4 py-1"
            onClick={() => declineRoomInvite(invitation_id)}
          >
            Decline
          </button>
          <button
            className=" float-right rounded-full bg-green-600 text-white px-4 py-1"
            onClick={() => acceptRoomInvite(invitation_id)}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomRequestCard;
