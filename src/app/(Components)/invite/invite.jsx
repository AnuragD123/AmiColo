"use client";
import { useState } from "react";
import { Dropdown } from "flowbite-react";
import { Send } from "lucide-react";

function Invite() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <form className="max-w-lg">
            <div className="flex flex-col md:flex-row md:items-center">
                <label
                    htmlFor="search-dropdown"
                    className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white md:w-1/4 md:text-right md:mr-4"
                >
                    Your Email
                </label>
                <div className="pl-6 border-y border-xl border-l rounded-l-full  p-2 bg-gray-50   border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600  dark:text-white dark:focus:border-blue-500 bg-gradient-to-r from-indigo-500 via-purple-500 to-orange-400 text-white">
                    <Dropdown
                        label={"Invite"}
                        inline
                        className=""
                    >
                        <Dropdown.Item>{"user1"}</Dropdown.Item>
                        <Dropdown.Item>{"user2"}</Dropdown.Item>
                        <Dropdown.Item>{"user3"}</Dropdown.Item>
                        <Dropdown.Item>{"user3"}</Dropdown.Item>
                    </Dropdown>
                </div>
                <div className="relative flex-grow">
                    <input
                        type="search"
                        id="search-dropdown"
                        className="block w-full py-2.5 px-4 rounded-e-full text-sm text-gray-900 placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500"
                        placeholder="Search Mockups, Logos, Design Templates..."
                        required
                        autoFocus
                    />

                    <button
                        type="submit"
                        className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-full border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        <Send className="w-4 h-4 mr-2" />
                        <span className="sr-only">Search</span>
                    </button>
                </div>
            </div>
        </form>
    );
}

export default Invite;
