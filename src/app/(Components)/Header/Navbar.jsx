"use client";
import React, { useState, useEffect } from "react";
import { Phone, Mail } from "lucide-react";
import Link from "next/link";
import axios from "axios";
import { useUserContext } from "@/context/context";
import { useRouter } from "next/navigation";
import { Toaster, toast } from "react-hot-toast";

import Cookies from "js-cookie";

const Navbar = () => {
  const { user, setUser } = useUserContext();
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const token = Cookies.get("token"); // this is always giving undefined

  useEffect(() => {
    if (token == null) {
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
    }
  }, [token, Cookies]);

  const handleLogout = async () => {
    try {
      // Make a request to your logout API using Axios
      const response = await axios.get("/api/auth/logout");

      if (response.data.success) {
        // Logout successful, redirect to login page

        setUser();
        localStorage.clear();
        Cookies.remove("token");
        toast.success(response.data.message);
        router.push("/login");
        window.location.reload();
      } else {
        // Handle logout failure
        toast.error("Logout failed");
        console.error("Logout failed");
      }
    } catch (error) {
      // Handle network or other errors
      console.error("Error during logout:", error);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row bg-gradient-to-r from-indigo-500 via-purple-500 to-orange-400 p-2 lg:px-8 items-center justify-between">
      <div className="flex items-center">
        <Link href="/">
          <img
            src="/images/navbar-logo.png"
            alt="logo of AmiColo"
            className="w-32 h-auto ml-4 lg:ml-0"
          />
        </Link>
      </div>
      <div className="flex flex-col sm:flex-row items-center text-white mt-4 lg:mt-0">
        <div className="flex items-center ml-4 lg:ml-0 lg:mr-8">
          <Phone className="mr-2" size={18} />
          <Link
            href="https://chat.whatsapp.com/FOJm9BG8PJz1VsQz69OQJn"
            className="sm:inline"
          >
            +1 514-586-4586
          </Link>
        </div>
        <div className="flex items-center ml-4 lg:ml-0 lg:mr-8 py-2">
          <Mail className="mr-2" size={18} />
          <Link href="mailto:info@amicolo.com" className="sm:inline">
            info@amicolo.com
          </Link>
        </div>
        <button
          className="bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-400 hover:to-cyan-400 px-5 py-2 rounded-full ml-4 lg:ml-0 text-white"
          onClick={user ? handleLogout : () => router.push("/login")}
        >
          {user ? "Sign Out" : "Sign In"}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
