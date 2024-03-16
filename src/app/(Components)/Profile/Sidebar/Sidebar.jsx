"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Profile from "../../../../../images/AmiColo_Profile.png";
import { useUserContext } from "@/context/context";

export default function Sidebar() {
  const { user } = useUserContext();
  // console.log(user.avatar);

  return (
    <aside className="flex h-full w-full overflow-y-scroll flex-col border-r items-center font-semibold">
      <div className="flex flex-col items-center gap-4 mb-3">
        <Image
          className=" w-40 h-40 rounded-full"
          src={user?.avatar ? `/uploads/${user?.avatar}` : Profile}
          width={150}
          height={150}
          alt="Picture of the author"
        />
        <span>
          <h3>{user?.first_name + " " + user?.last_name}</h3>
          <p className=" text-sm font-normal">ID # {user?.id}</p>
        </span>
      </div>
      <div>
        <ul className="flex flex-col items-center leading-10">
          <li>
            {" "}
            <Link href="/profile/edit">Edit Profile</Link>
          </li>
          <li>
            {" "}
            <Link href="/profile/idverfication">ID Verfication</Link>
          </li>
          <li>
            {" "}
            <Link href="/profile/match_requests">Match Requests</Link>
          </li>
          <li>
            {" "}
            <Link href="/profile/my_matches">My Matches</Link>
          </li>
          <li>
            {" "}
            <Link href="/profile/room_request">Room Request</Link>
          </li>
          <li>
            {" "}
            <Link href="/profile/sent_booking_request">
              {" "}
              Sent Booking Requests
            </Link>
          </li>
          {/* <li> <Link href="/profile/booking" >My Booking</Link></li> */}
          <li> <Link href="/profile/improve_matches" >Improve Matches</Link></li>
          <li> <Link href="/profile/report" >Report Issue</Link></li>
          {/* <li> <Link href="/profile/orderreceiept" >Order Receipts</Link></li> */}
          <li> <Link href="/profile/saved_rooms" >Saved Listings</Link></li>
        </ul>
      </div>
    </aside>
  );
}
