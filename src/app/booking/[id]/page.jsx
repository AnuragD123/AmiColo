"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import { clusterMapper } from "./data";
import Image from "next/image";
import Profile from "@/../../public/images/lady.jpg";

import Apartment from "@/../../public/images/apartment.png";
const apartmentImage =
  "https://via.placeholder.com/1200x600/3366cc/ffffff?text=Apartment";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const BookingRoomPage = ({ params }) => {
  const handleBookingReq = async () => {
    const room_id = params.id;

    const response = await axios.post("/api/apartment/send_booking_req", {
      room_id,
      selectedMatchIds,
    });
    if (response.data.status === "success") {
      toast.success(response.data.msg);
    } else {
      toast.error(response.data.msg);
    }
  };
  const [apartmentData, SetAppartmentData] = useState([]);
  const [matchesList, setMatchesList] = useState([]);
  const [matchSearch, setMatchSearch] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMatchIds, setSelectedMatchIds] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetch_appartment_info = async () => {
      const response = await axios.get(
        `/api/apartment/fetch_apartment_info?room_id=${params.id}`
      );
      if (response.data.status === "success") {
        SetAppartmentData(response.data.room_data[0]);
        setImages(response.data.room_data);
      }
    };
    fetch_appartment_info();

    const fetchMatches = async () => {
      try {
        const response = await axios.get("/api/user/fetch_all_matches");
        setMatchesList(response.data.matches);
        setMatchSearch(response.data.matches);
      } catch (error) {
        console.error("Error fetching matches:", error);
      }
    };

    fetchMatches();
  }, []);

  const user = JSON.parse(localStorage.getItem("user"));
  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    if (query == "") {
      setMatchSearch(matchesList);
    }

    const filteredMatches = matchesList.filter(
      (match) =>
        match.first_name.toLowerCase().includes(query) ||
        match.last_name.toLowerCase().includes(query)
    );
    setMatchSearch(filteredMatches);
  };

  const handleMatchSelect = (match) => {
    const isMatchSelected = selectedMatchIds.includes(match.user2);

    if (isMatchSelected) {
      setSelectedMatchIds((prevSelectedMatchIds) =>
        prevSelectedMatchIds.filter((user2) => user2 !== match.user2)
      );
    } else {
      setSelectedMatchIds((prevSelectedMatchIds) => [
        ...prevSelectedMatchIds,
        match.user2,
      ]);
    }
    setSearchQuery("");
  };
  return (
    <div className="bg-gray-100">
      <Toaster />
      <div className="container mx-auto overflow-hidden">
        {/* <Image
          alt="Apartment" className="w-full h-auto"
          src={Apartment}
        // width={50}
        // height={50}
        /> */}

        {/* Image slider */}

        <div className="images-container mx-auto mt-5 w-2/3">
          <Swiper
            className="relative"
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            {images.map((data, index) => (
              <SwiperSlide key={index}>
                <img
                  src={`/images/rooms/${data.url}`}
                  className="object-cover"
                  alt="Picture of the author"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* <img src={apartmentImage} /> */}
      </div>
      <div className="container mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
        {apartmentData ? (
          <>
            <h1 className="text-3xl font-bold mb-4">
              {" "}
              Apartment Type: {apartmentData.type}
            </h1>
            <p className="text-gray-700 leading-relaxed">
              Welcome to our {apartmentData.type} Apartment, where modern living
              meets elegance. These spacious units offer breathtaking views and
              top-notch amenities.
            </p>
            <ul className="mt-6">
              <li className="flex items-center mb-2">
                <span className="w-24 font-semibold">Gym:</span>
                <span className="text-gray-700">
                  {apartmentData.gym ? "Yes" : "No"}
                </span>
              </li>
              <li className="flex items-center mb-2">
                <span className="w-24 font-semibold">Rooms:</span>
                <span className="text-gray-700">{apartmentData.rooms}</span>
              </li>
              <li className="flex items-center mb-2">
                <span className="w-24 font-semibold">Washrooms:</span>
                <span className="text-gray-700">{apartmentData.washrooms}</span>
              </li>
              <li className="flex items-center mb-2">
                <span className="w-24 font-semibold">Area:</span>
                <span className="text-gray-700">{apartmentData.area} sqft</span>
              </li>
              <li className="flex items-center mb-2">
                <span className="w-24 font-semibold">Parking:</span>
                <span className="text-gray-700">
                  {apartmentData.parking ? "Yes" : "No"}
                </span>
              </li>
              <li className="flex items-center">
                <span className="w-24 font-semibold">Price:</span>
                <span className="text-gray-700">${apartmentData.price}/mo</span>
              </li>
              {/* Additional data points can be added here */}
            </ul>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>

      <div className="container mx-auto p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-4xl font-extrabold mb-6 text-gray-800">
          Match Search
        </h1>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search matches..."
            className="px-4 py-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
        <div>
          <ul className="space-y-2">
            {matchSearch.map(
              (match) => (
                console.log(match),
                (
                  <li
                    key={match.user2}
                    onClick={() => handleMatchSelect(match)}
                    className="cursor-pointer"
                  >
                    <div
                      className={`bg-white p-4 rounded-md shadow-md transition-transform transform hover:scale-105 flex align-center ${
                        selectedMatchIds.includes(match.user2) &&
                        "ring ring-blue-500"
                      }`}
                    >
                      <Image
                        className="w-8 h-8 object-cover rounded-full mb-2"
                        src={match.avatar ? match?.avatar : Profile}
                        width={50}
                        height={50}
                        alt="Picture of the author"
                      />
                      {/* <img src={match.avatar} alt={`${match.first_name}'s avatar`} /> */}
                      <div className="ml-2">
                        <p className="text-sm font-semibold text-gray-800">
                          {match.first_name + " " + match.last_name}
                        </p>
                        <p className="text-xs text-gray-500">
                          Age:{" "}
                          {new Date().getFullYear() -
                            new Date(match.dob).getFullYear()}
                          , Gender: {match.gender}
                        </p>
                      </div>
                    </div>
                  </li>
                )
              )
            )}
          </ul>
        </div>
        <div className="mt-4">
          <p className="text-gray-600">Selected Matches:</p>
          <div className="flex flex-wrap mt-2">
            {selectedMatchIds.map((user2) => {
              const selectedMatch = matchesList.find(
                (match) => match.user2 === user2
              );
              return (
                <div
                  key={user2}
                  onClick={() => handleMatchSelect(selectedMatch)}
                  className="bg-blue-500 text-white px-3 py-1 rounded-full m-1 cursor-pointer"
                >
                  {selectedMatch.first_name + " " + selectedMatch.last_name}
                </div>
              );
            })}
          </div>
        </div>
        <div className="mt-4 flex justify-end">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleBookingReq}
          >
            Send Room Invitation
          </button>
        </div>
      </div>
      <div className="max-w-full overflow-hidden">
        {/* <iframe
          className='w-full my-10  bottom-1 border-solid border-black'
          height="450"
          loading="lazy"
          allowfullscreen
          // referrerpolicy="no-referrer-when-downgrade"
          src="//maps.google.com/maps?q=53.3381768,-6.2613077&z=15&output=embed"></iframe> */}

        <iframe
          src={clusterMapper?.[apartmentData?.cluster_id]?.mapSrc}
          className="w-full my-10  bottom-1 border-solid border-black"
          height="450"
          loading="lazy"
          allowfullscreen
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default BookingRoomPage;
