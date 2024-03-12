"use client";
// import { useState } from "react";
// import {
//     MapPin,
//     Car,
//     Bath,
//     Building,
//     ParkingCircle,
//     PawPrint,
//     Star,
//     Share2,
//     MessageCircle,
//     Send,
// } from "lucide-react";

// import ImageGrid from "@/app/(Components)/ImageGrid/ImageGrid";
// import Invite from "@/app/(Components)/invite/invite";

// export default function Home() {
//     const [showInvite, setShowInvite] = useState(false);

//     return (
//         <div className=" flex my-2 justify-center items-center lg:flex-row flex-col mx-4 md:mx-12">
//             <div className="image-container md:mx-auto max-w-2xl lg:max-w-3xl">
//                 {/* <Image
//                     src="/images/room.jpg"
//                     alt="room-photo"
//                     className="rounded-lg"
//                     height={500}
//                     width={500}
//                 /> */}
//                 <ImageGrid />
//             </div>
//             <div className="content">
//                 <div className="p-4">
//                     <h5 className="mb-2 text-2xl font-bold text-green-600 dark:text-white">
//                         $2,500.00
//                     </h5>
//                     <p className="text-sm font-normal text-gray-700 dark:text-gray-400">
//                         Lava Agni 2 5G (Glass Iron, 8GB RAM, 256GB Storage)
//                         |2.6GHz Dimensity 7050 6nm Processor | Curved Amoled
//                         Display| 13 5G Bands | Superfast 66W Charger | Clean
//                         Android (No Bloatware, No Ads)
//                     </p>
//                     <p className="text-xs text-gray-500 dark:text-gray-200">
//                         Montreal | 11 hours ago
//                     </p>
//                     <p className="text-sm max-h-64 text-gray-500 dark:text-gray-200">
//                         Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                         Reprehenderit aut ratione nulla officiis expedita natus
//                         facilis labore at beatae et tempora facere nostrum quae,
//                         illum error laudantium deleniti mollitia!
//                     </p>
//                     <div className="ratings flex items-center my-5">
//                         <p className="bg-blue-100 text-blue-800 text-sm font-semibold inline-flex items-center p-1.5 rounded dark:bg-blue-200 dark:text-blue-800">
//                             8.7
//                         </p>
//                         <p className="ms-2 font-medium text-gray-900 dark:text-white">
//                             Excellent
//                         </p>
//                         <span className="divider"></span>
//                         <p className="ml-4 text-sm font-medium text-gray-500 dark:text-gray-400">
//                             376 reviews
//                         </p>
//                     </div>
//                     <div className="gap-8 sm:grid sm:grid-cols-2">
//                         <div>
//                             <dl>
//                                 <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
//                                     Society Committee
//                                 </dt>
//                                 <dd className="flex items-center mb-3">
//                                     <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 me-2">
//                                         <div
//                                             className="bg-blue-600 h-2.5 rounded dark:bg-blue-500"
//                                             style={{ width: "80%" }}
//                                         ></div>
//                                     </div>
//                                     <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
//                                         8.8
//                                     </span>
//                                 </dd>
//                             </dl>
//                             <dl>
//                                 <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
//                                     Comfort
//                                 </dt>
//                                 <dd className="flex items-center mb-3">
//                                     <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 me-2">
//                                         <div
//                                             className="bg-blue-600 h-2.5 rounded dark:bg-blue-500"
//                                             style={{ width: "89%" }}
//                                         ></div>
//                                     </div>
//                                     <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
//                                         8.9
//                                     </span>
//                                 </dd>
//                             </dl>
//                             <dl>
//                                 <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
//                                     Free WiFi
//                                 </dt>
//                                 <dd className="flex items-center mb-3">
//                                     <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 me-2">
//                                         <div
//                                             className="bg-blue-600 h-2.5 rounded dark:bg-blue-500"
//                                             style={{ width: "80%" }}
//                                         ></div>
//                                     </div>
//                                     <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
//                                         8.8
//                                     </span>
//                                 </dd>
//                             </dl>
//                             <dl>
//                                 <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
//                                     Facilities
//                                 </dt>
//                                 <dd className="flex items-center">
//                                     <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 me-2">
//                                         <div
//                                             className="bg-blue-600 h-2.5 rounded dark:bg-blue-500"
//                                             style={{ width: "54%" }}
//                                         ></div>
//                                     </div>
//                                     <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
//                                         5.4
//                                     </span>
//                                 </dd>
//                             </dl>
//                         </div>
//                         <div>
//                             <dl>
//                                 <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
//                                     Value for money
//                                 </dt>
//                                 <dd className="flex items-center mb-3">
//                                     <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 me-2">
//                                         <div
//                                             className="bg-blue-600 h-2.5 rounded dark:bg-blue-500"
//                                             style={{ width: "89%" }}
//                                         ></div>
//                                     </div>
//                                     <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
//                                         8.9
//                                     </span>
//                                 </dd>
//                             </dl>
//                             <dl>
//                                 <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
//                                     Cleanliness
//                                 </dt>
//                                 <dd className="flex items-center mb-3">
//                                     <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 me-2">
//                                         <div
//                                             className="bg-blue-600 h-2.5 rounded dark:bg-blue-500"
//                                             style={{ width: "70%" }}
//                                         ></div>
//                                     </div>
//                                     <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
//                                         7.0
//                                     </span>
//                                 </dd>
//                             </dl>
//                             <dl>
//                                 <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
//                                     Location
//                                 </dt>
//                                 <dd className="flex items-center">
//                                     <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 me-2">
//                                         <div
//                                             className="bg-blue-600 h-2.5 rounded dark:bg-blue-500"
//                                             style={{ width: "89%" }}
//                                         ></div>
//                                     </div>
//                                     <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
//                                         8.9
//                                     </span>
//                                 </dd>
//                             </dl>
//                             <dl>
//                                 <dt className="text-sm font-medium mt-3 text-gray-500 dark:text-gray-400">
//                                     matching
//                                 </dt>
//                                 <dd className="flex items-center">
//                                     <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 me-2">
//                                         <div
//                                             className="bg-blue-600 h-2.5 rounded dark:bg-blue-500"
//                                             style={{ width: "75%" }}
//                                         ></div>
//                                     </div>
//                                     <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
//                                         7.5
//                                     </span>
//                                 </dd>
//                             </dl>
//                         </div>
//                     </div>
//                     <div className="flex flex-col md:flex-row items-center w-full md:w-auto lg:mx-4 my-2">
//                         <button className="md:mr-2 mb-2 md:mb-0 md:float-none rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-orange-400 text-white px-4 py-2">
//                             Book Now
//                         </button>
//                         {showInvite ? (
//                             <Invite />
//                         ) : (
//                             <>
//                                 <button
//                                     className=" flex items-center md:mr-2 mb-2 md:mb-0 md:float-none rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-orange-400 text-white px-4 py-2"
//                                     onClick={() => {
//                                         setShowInvite(true);
//                                     }}
//                                     isVisible={showInvite}
//                                 >
//                                     Invite
//                                     <Send className="h-4 w-4 ml-2" />
//                                 </button>
//                             </>
//                         )}
//                     </div>

//                     <div className="social-icons flex justify-start items-center text-xs text-gray-500 dark:text-gray-200 space-x-4">
//                         <button className="flex justify-center items-center">
//                             <Share2 className="w-4" />
//                             <p className="hidden md:inline">Share</p>
//                         </button>
//                         <button className="flex justify-center items-center">
//                             <Star className="w-4" />
//                             <p className="hidden md:inline">Add to Favorites</p>
//                         </button>
//                         <button className="flex justify-center items-center">
//                             <MessageCircle className="w-4" />
//                             <p className="hidden md:inline">Chat with Owner</p>
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {toast,Toaster} from 'react-hot-toast';

import Image from 'next/image';
import Profile from '@/../../public/images/lady.jpg';
import Apartment from '@/../../public/images/apartment.png';
const apartmentImage = 'https://via.placeholder.com/1200x600/3366cc/ffffff?text=Apartment';

const BookingRoomPage = ({ params }) => {


  const handleBookingReq = async () => {
    const room_id = params.id;
    console.log(room_id);

    const response = await axios.post('/api/apartment/send_booking_req', { room_id, selectedMatchIds });
    if(response.data.status==='success'){
      toast.success(response.data.msg)
      // console.log(response.data.msg);
    }else{
      toast.error(response.data.msg)

    }

  }
  const [apartmentData,SetAppartmentData] = useState([])
  const [matchesList, setMatchesList] = useState([]);
  const [matchSearch, setMatchSearch] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMatchIds, setSelectedMatchIds] = useState([]);

  useEffect(() => {

    const fetch_appartment_info=async()=>{
      const response = await axios.get(`/api/apartment/fetch_apartment_info?room_id=${params.id}`);
      if (response.data.status==='success') {
        SetAppartmentData(response.data.room_data[0])
      }
    }
    fetch_appartment_info();
    const fetchMatches = async () => {
      try {
        const response = await axios.get('/api/user/fetch_all_matches');
        setMatchesList(response.data.matches);
        setMatchSearch(response.data.matches);
      } catch (error) {
        console.error('Error fetching matches:', error);
      }
    };

    fetchMatches();
  }, []);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    if (query == "") {
      setMatchSearch(matchesList)
    }

    const filteredMatches = matchesList.filter((match) =>
      match.first_name.toLowerCase().includes(query) || match.last_name.toLowerCase().includes(query)
    );
    setMatchSearch(filteredMatches)
  };

  const handleMatchSelect = (match) => {
    const isMatchSelected = selectedMatchIds.includes(match.user2);

    if (isMatchSelected) {
      setSelectedMatchIds((prevSelectedMatchIds) =>
        prevSelectedMatchIds.filter((user2) => user2 !== match.user2)
      );
    } else {
      setSelectedMatchIds((prevSelectedMatchIds) => [...prevSelectedMatchIds, match.user2]);
    }
    setSearchQuery('');
  };

  return (
    <div className="bg-gray-100">
      <Toaster/>
      <div className="max-w-full overflow-hidden">
        <Image
          alt="Apartment" className="w-full h-auto"
          src={Apartment}
        // width={50}
        // height={50}
        />
        {/* <img src={apartmentImage} /> */}
      </div>
      <div className="container mx-auto mt-8 p-4 bg-white rounded shadow-md">
      {apartmentData ? (
        <>
          <h1 className="text-2xl font-bold mb-4">{apartmentData.type}</h1>
          <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis, nunc vel auctor malesuada.</p>
          <ul className="mt-4">
            <li><strong>Gym:</strong> {apartmentData.gym}</li>
            <li><strong>Rooms:</strong> {apartmentData.rooms}</li>
            <li><strong>Washrooms:</strong> {apartmentData.washrooms}</li>
            <li><strong>Area:</strong> {apartmentData.area}</li>
            <li><strong>Parking:</strong> {apartmentData.parking}</li>
            <li><strong>Price:</strong> {apartmentData.price}</li>
            {/* <li><strong>Cluster ID:</strong> {apartmentData.cluster_id}</li> */}
          </ul>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
      <div className="container mx-auto p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-4xl font-extrabold mb-6 text-gray-800">Match Search</h1>
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
            {matchSearch.map((match) => (
              <li key={match.user2} onClick={() => handleMatchSelect(match)} className="cursor-pointer">
                <div className={`bg-white p-4 rounded-md shadow-md transition-transform transform hover:scale-105 flex align-center ${selectedMatchIds.includes(match.user2) && 'ring ring-blue-500'}`}>
                  <Image
                    className="w-8 h-8 object-cover rounded-full mb-2"
                    src={
                      match.avatar ? `/uploads/${user?.avatar}` : Profile
                    }
                    width={50}
                    height={50}
                    alt="Picture of the author"
                  />
                  {/* <img src={match.avatar} alt={`${match.first_name}'s avatar`} /> */}
                  <div className="ml-2">
                    <p className="text-sm font-semibold text-gray-800">{match.first_name + ' ' + match.last_name}</p>
                    <p className="text-xs text-gray-500">Age: {match.age}, Gender: {match.gender}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-4">
          <p className="text-gray-600">Selected Matches:</p>
          <div className="flex flex-wrap mt-2">
            {selectedMatchIds.map((user2) => {
              const selectedMatch = matchesList.find((match) => match.user2 === user2);
              return (
                <div key={user2} onClick={() => handleMatchSelect(selectedMatch)} className="bg-blue-500 text-white px-3 py-1 rounded-full m-1 cursor-pointer">
                  {selectedMatch.first_name + ' ' + selectedMatch.last_name}
                </div>
              );
            })}
          </div>
        </div>
        <div className="mt-4 flex justify-end">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
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

        <iframe src="https://www.google.com/maps/d/embed?mid=1x7oYYlsyPPhC1xW3X3rwW5Ibr-7kDNw&ehbc=2E312F&noprof=1"
          className='w-full my-10  bottom-1 border-solid border-black'
          height="450"
          loading="lazy"
          allowfullscreen
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>

      </div>
    </div >
  );
};

export default BookingRoomPage;
