"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import Image from "next/image";
import axios from "axios";
import gluten from "../../../../public/images/gluten.jpeg";
import vegan from "../../../../public/images/vegan.jpeg";
import vegetarian from "../../../../public/images/vegetarian.jpeg";
import nonvegetarian from "../../../../public/images/nonvegetarian.jpeg";
import extremeExtrovert from "../../../../public/images/extremeextrovert.jpg";
import extrovert from "../../../../public/images/extrovert.jpg";
import introvert from "../../../../public/images/introverts2.webp";
import extremeIntrovert from "../../../../public/images/extremeintrovert.webp";
import { toast, Toaster } from "react-hot-toast";

// import new_york from '../../../../public/images/newyouk.jpg'
// import london from '../../../../public/images/london.jpeg'
// import tokyo from '../../../../public/images/tokyo.jpeg'
// import dubai from '../../../../public/images/Dubai.jpeg'

// import beach from '../../../../public/images/beach.jpg'
// import mountains from '../../../../public/images/mountains.jpeg'
// import cityscape from '../../../../public/images/cityscape.jpeg'
// import countryside from '../../../../public/images/countryside.jpeg'

import { useUserContext } from "@/context/context";
import { usePathname } from "next/navigation";

const Preference = () => {
  const { user, setUser } = useUserContext();
  const [tab, setTab] = useState("");
  const [form, setForm] = useState({
    diet: "",
    count_friends: "",
  });

  const pathname = usePathname();

  useEffect(() => {
    if (user) {
      setForm({
        // place: user?.place || "",
        diet: user?.diet || "",
        count_friends: user?.count_friends || "",
      });
    }
  }, [user]);

  useEffect(() => {
    const tab = pathname?.split("/")?.[2];
    console.log("Tab", tab);
    if (tab === "preference") {
      setTab("preference");
    } else {
      setTab("edit");
    }
  }, [pathname]);

  const prefence = [
    {
      heading: "What best describes your diet preferences?",
      type: "diet",
      data: [
        {
          img: vegetarian,
          value: "Vegetarian",
        },
        {
          img: nonvegetarian,
          value: "Non-Vegetarian",
        },
        {
          img: vegan,
          value: "Vegan",
        },
        {
          img: gluten,
          value: "gluten-free",
        },
      ],
    },
    {
      heading: "Select your mood via your friend count?",
      type: "count_friends",
      data: [
        {
          img: extremeIntrovert,
          value: 20,
        },
        {
          img: introvert,
          value: 50,
        },
        {
          img: extrovert,
          value: 100,
        },
        {
          img: extremeExtrovert,
          value: 200,
        },
      ],
    },
  ];

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      // Append form data
      // formData.append("place", form.place);
      formData.append("count_friends", form.count_friends);
      formData.append("diet", form.diet);

      const res = await axios.post(`/api/user/update_profile`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      // Handle response
      console.log(res.data);
      setUser(res.data?.getUser[0]);
      if (res.data.success) {
        toast.success("Profile Update Successfully");
      }
    } catch (e) {
      // Handle errors here
      console.error(e);
    }
  };

  return (
    <div className="leading-10">
      <Toaster />
      <div className="w-full flex items-center justify-between mb-4 gap-2">
        <Link
          href="/profile/edit"
          className="w-1/2 text-center bg-gray-300 text-2xl font-bold px-3 py-2 rounded-3xl"
          style={{
            backgroundColor: tab === "edit" ? "#2563EB" : "",
            color: tab === "edit" ? "#fff" : "",
          }}
        >
          Edit Profile
        </Link>
        <Link
          href="/profile/preference"
          className="w-1/2 text-center bg-gray-300 text-2xl font-bold px-3 py-2 rounded-3xl"
          style={{
            backgroundColor: tab === "preference" ? "#2563EB" : "",
            color: tab === "preference" ? "#fff" : "",
          }}
        >
          Your Preferences
        </Link>
      </div>
      <div>
        {prefence.map((data, index) => (
          <div className="leading-10" key={index}>
            <p className="font-semibold">{data.heading}</p>
            <div className="flex items-center justify-around">
              {data.data.map((value, index) => (
                <span
                  className="flex flex-col items-center gap-3 "
                  key={index}
                  onClick={() =>
                    setForm((prevForm) => ({
                      ...prevForm,
                      [data.type]: value.value,
                    }))
                  }
                >
                  {value.img ? (
                    <div className="flex flex-col items-center gap-1 my-4">
                      <Image
                        className="w-24 h-20 rounded-md  transition-all duration-300 ease-linear hover:scale-110"
                        src={value.img}
                        alt="Image"
                        width={96}
                        height={80}
                      />
                      <p className="text-2xl font-smibold py-5">
                        {value.value}
                      </p>
                    </div>
                  ) : (
                    <p className="text-5xl font-smibold py-5">{value.value}</p>
                  )}

                  {value.value === form?.[data.type] ||
                  value.value === user?.[data.type] ? (
                    <FaHeart
                      className={`${
                        value.value === form?.[data.type] ? "fill-red-700" : ""
                      } text-xl transition-all duration-300 ease-linear hover:text-2xl`}
                    />
                  ) : (
                    <FaRegHeart
                      className={`${
                        value.value === form?.[data.type] ? "fill-red-700" : ""
                      }  transition-all duration-300 ease-linear hover:text-2xl`}
                    />
                  )}
                </span>
              ))}
            </div>
          </div>
        ))}
        <div className="flex justify-end mt-6 mb-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
            onClick={handleSubmit}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Preference;
