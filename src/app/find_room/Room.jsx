import React, { useState } from "react";
import Link from "next/link";
import { Star, Share2 } from "lucide-react";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
const Room = ({ key, data }) => {
  const [bookmarked, setBookmarked] = useState(data.isBookmarked);
  const handleBookmark = async () => {
    // const id = localStorage.getItem("id");
    const response = await axios.post("/api/user/bookmark_room", {
      room_id: data.id,
    });
    if (response.status === 200) {
      setBookmarked(true);
      data.isBookmarked = true;
      toast.success("Room added to favorites");
    } else {
      setBookmarked(false);
      data.isBookmarked = false;
      toast.error("Failed to add room to favorites");
    }
  };

  const handleRemoveBookmark = async () => {
    const response = await axios.delete("/api/user/bookmark_room", {
      data: { room_id: data.id },
    });
    if (response.status === 200) {
      setBookmarked(false);
      data.isBookmarked = false;
      toast.success("Room removed from favorites");
    } else {
      setBookmarked(true);
      data.isBookmarked = true;
      toast.error("Failed to remove room from favorites");
    }
  };

  return (
    <div
      key={key}
      className="w-full bg-white  rounded-lg shadow-md  hover:bg-gray-100  dark:bg-gray-800 dark:hover:bg-gray-700 flex flex-col md:flex-row"
    >
      <Toaster />
      <img
        className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
        src="/images/room.jpg"
        alt="room photo"
      />
      <div
        className="p-4 flex flex-col justify-between"
        style={{ width: "100%" }}
      >
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-green-600 dark:text-white">
          ${data.price}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          ***Roommate Immediately needed***
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-200">
          Parking: {data.parking === "yes" ? "Available" : "Not Available"} |
          Gym: {data.gym === "yes" ? "Available" : "Not Available"}
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-200">
          Room Type is {data.type} and area is {data.area}. it has {data.rooms}{" "}
          bedrooms and {data.washrooms} bathrooms
        </p>
        <div className="w-full">
          <Link href={`/booking/${data.id}`}>
            <button className="float-right rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-orange-400 text-white px-4 py-2">
              Visit
            </button>
          </Link>
        </div>
        <div className="flex justify-start items-center text-xs text-gray-500 dark:text-gray-200 gap-x-4">
          <div className="share-favorite flex flex-col justify-center items-center gap-x-4">
            <button
              className="flex justify-center items-center gap-2"
              onClick={bookmarked ? handleRemoveBookmark : handleBookmark}
            >
              <Star
                style={{
                  color: bookmarked ? "red" : "",
                  transition: "color 0.3s ease",
                  fill: "currentColor",
                }}
              />
              <p className="hidden md:inline">
                {bookmarked ? "Remove from" : "Add to"} Favorites
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Room;
