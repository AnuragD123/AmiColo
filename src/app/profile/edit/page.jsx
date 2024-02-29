"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
const Edit = () => {
    const [form, setForm] = useState({
        fName: "",
        lName: "",
        day: 0,
        month: 0,
        year: 0,
        gender: "",
        hSchool: "",
        bachelors: "",
        master: "",
        sector: "",
    });

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get('/api/user/getdata');
                console.log(response.data.data[0]);
                const userData = response.data.data[0];

                // Update the form state with the retrieved data
                setForm({
                    fName: userData.first_name || "",
                    lName: userData.last_name || "",
                    day: userData.day || 0,
                    month: userData.month || 0,
                    year: userData.year || 0,
                    gender: userData.gender || "",
                    hSchool: userData.hSchool || "",
                    bachelors: userData.bachelors || "",
                    master: userData.master || "",
                    sector: userData.sector || "",
                });

            } catch (error) {
                console.log(error.message)
            }
        }

        getData();
    }, []);
    return (
        <div className="w-2/4 mx-auto mt-10 leading-10">

            <div className="w-full flex items-center justify-between mb-4 gap-2">
                <Link href="/profile/edit" className="w-1/2 text-center bg-gray-300 text-2xl font-bold px-3 py-2 rounded-3xl">
                    Edit Profile
                </Link>
                <Link href="/profile/preference" className="w-1/2 text-center bg-gray-300 text-2xl font-bold px-3 py-2 rounded-3xl">
                    Your Preferences
                </Link>
            </div>

            <div>
                <div className="w-full flex items-center gap-3 mb-6">
                    <div className="w-1/2">
                        <label htmlFor="fname">First Name</label>
                        <br />
                        <input
                            className="w-full rounded-3xl bg-gray-300"
                            type="text"
                            name="fname"
                            value={form.fName}
                            onChange={(e) =>
                                setForm({ ...form, fName: e.target.value })
                            }
                        />
                    </div>
                    <div className="w-1/2">
                        <label htmlFor="lname">Last Name</label>
                        <br />
                        <input
                            className="w-full rounded-3xl bg-gray-300"
                            type="text"
                            name="lname"
                            value={form.lName}
                            onChange={(e) =>
                                setForm({ ...form, lName: e.target.value })
                            }
                        />
                    </div>
                </div>

                <div className="w-full flex items-center mb-6 gap-4">
                    <div className="w-1/2">
                        <label htmlFor="age">Age</label>
                        <div className="flex gap-3">
                            <input
                                className="w-2/6 rounded-3xl bg-gray-300"
                                placeholder="day"
                                type="number"
                                name="age"
                                value={form.day}
                                onChange={(e) =>
                                    setForm({ ...form, day: e.target.value })
                                }
                            />
                            <input
                                className="w-2/6 rounded-3xl bg-gray-300"
                                placeholder="month"
                                type="number"
                                name="age"
                                value={form.month}
                                onChange={(e) =>
                                    setForm({ ...form, month: e.target.value })
                                }
                            />
                            <input
                                className="w-2/6 rounded-3xl bg-gray-300"
                                placeholder="year"
                                type="number"
                                name="age"
                                value={form.year}
                                onChange={(e) =>
                                    setForm({ ...form, year: e.target.value })
                                }
                            />
                        </div>
                    </div>
                    <div className="w-1/2">
                        <label htmlFor="gender">Gender</label>
                        <br />
                        <select
                            className="w-full rounded-3xl bg-gray-300"
                            name="gender"
                            value={form.gender}
                            onChange={(e) =>
                                setForm({ ...form, gender: e.target.value })
                            }
                        >
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                </div>

                <div className="w-full flex items-center gap-3 mb-6">
                    <div className="w-1/2">
                        <label htmlFor="school">High School</label>
                        <br />
                        <input
                            className="w-full rounded-3xl bg-gray-300"
                            type="text"
                            name="school"
                            value={form.hSchool}
                            onChange={(e) =>
                                setForm({ ...form, hSchool: e.target.value })
                            }
                        />
                    </div>
                    <div className="w-1/2">
                        <label htmlFor="college">Bachelors</label>
                        <br />
                        <input
                            className="w-full rounded-3xl bg-gray-300"
                            type="text"
                            name="college"
                            value={form.bachelors}
                            onChange={(e) =>
                                setForm({ ...form, bachelors: e.target.value })
                            }
                        />
                    </div>
                </div>

                <div className="w-full flex items-center gap-3 mb-6">
                    <div className="w-1/2">
                        <label htmlFor="pg">Master</label>
                        <br />
                        <input
                            className="w-full rounded-3xl bg-gray-300"
                            type="text"
                            name="pg"
                            value={form.master}
                            onChange={(e) =>
                                setForm({ ...form, master: e.target.value })
                            }
                        />
                    </div>
                    <div className="w-1/2">
                        <label htmlFor="sector">Sector</label>
                        <br />
                        <input
                            className="w-full rounded-3xl bg-gray-300"
                            type="text"
                            name="sector"
                            value={form.sector}
                            onChange={(e) =>
                                setForm({ ...form, sector: e.target.value })
                            }
                        />
                    </div>
                </div>
            </div>

            <div className="flex justify-end mt-6">
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
                    onClick={() => {

                        console.log("Save button clicked. Implement your save logic.");
                    }}
                >
                    Save
                </button>
            </div>
        </div>
    );

};

export default Edit;
