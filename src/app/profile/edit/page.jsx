"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import { Circles, MutatingDots } from "react-loader-spinner";
import Profile from "../../../../images/AmiColo_Profile.png";
import Image from "next/image";
import { useUserContext } from "@/context/context";
import { toast, Toaster } from "react-hot-toast";
// const baseUrl = require("http://192.168.127.176:3000");
const Edit = () => {
    const { user, setUser } = useUserContext();
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        fName: "",
        lName: "",
        day: 0,
        month: 0,
        year: 0,
        gender: "",
        smoker: "",
        occupation: "",
        nationality: "",
        bio: "",
        bedtime: "",
        diet: "",
        languages: "",
        education: "",
        file: "",
    });
    const [image, setImage] = useState();

    useEffect(() => {
        // const getData = async () => {
        //     try {
        //         const response = await axios.get('/api/user/getdata');
        //         console.log(response.data.data[0]);
        //         const userData = response.data.data[0];

        //         // Update the form state with the retrieved data
        //         setForm({
        //             fName: userData.first_name || "",
        //             lName: userData.last_name || "",
        //             day: userData.dob.split("-")[2].split("T")[0] || 0,
        //             month: userData.dob.split("-")[1] || 0,
        //             year: userData.dob.split("-")[0] || 0,
        //             gender: userData.gender || "",
        //             hSchool: userData.high_school || "",
        //             bachelors: userData.bachelors || "",
        //             master: userData.master || "",
        //             sector: userData.sector || "",
        //             file: userData.avatar || "",
        //         });

        //         console.log("object", userData.dob, userData.dob.split("-"))
        //     } catch (error) {
        //         console.log(error.message)
        //     }
        // }

        // getData();
        console.log("USERDATA", user);
        setForm({
            fName: user?.first_name || "",
            lName: user?.last_name || "",
            day: user?.dob.split("-")[2].split("T")[0] || 0,
            month: user?.dob.split("-")[1] || 0,
            year: user?.dob.split("-")[0] || 0,
            gender: user?.gender || "",
            smoker: user?.smoker || "",
            occupation: user?.occupation || "",
            nationality: user?.nationality || "",
            bio: user?.bio || "",
            bedtime: user?.bedtime || "",
            diet: user?.diet || "",
            languages: user?.languages || "",
            education: user?.education || "",
        });
    }, [user]);

    const handleSubmit = async () => {
        try {
            setLoading(true);
            const formData = new FormData();
            // Append form data
            formData.append("fName", form.fName);
            formData.append("lName", form.lName);
            formData.append("day", form.day);
            formData.append("month", form.month);
            formData.append("year", form.year);
            formData.append("gender", form.gender);
            formData.append("smoker", form.smoker);
            formData.append("occupation", form.occupation);
            formData.append("nationality", form.nationality);
            formData.append("bio", form.bio);
            formData.append("bedtime", form.bedtime);
            formData.append("diet", form.diet);
            formData.append("languages", form.languages);
            formData.append("education", form.education);
            // Append image data
            if (image) {
                formData.append("file", image);
            }
            const res = await axios.post(`/api/user/update_profile`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            // Handle response
            setUser(res.data?.getUser[0]);
            if (res.data.success) {
                setLoading(false);
                toast.success("Profile Update Successfully");
            }
        } catch (e) {
            // Handle errors here
            console.error(e);
        }
    };

    const handleImageUpload = async (e) => {
        const filedata = e.target.files[0];
        if (!filedata) {
            return;
        }
        const reader = new FileReader();
        reader.onload = () => {
            const imageData = reader.result;
            setForm({ ...file, file: imageData });
            setImage(filedata);
        };
        reader.readAsDataURL(filedata);
    };
    return loading ? (
        <MutatingDots
            visible={true}
            height="100"
            width="100"
            color="#4fa94d"
            secondaryColor="#4fa94d"
            radius="12.5"
            ariaLabel="mutating-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
        />
    ) : (
        <div className="w-2/4 mx-auto mt-10 leading-10">
            <Toaster />
            <div className="w-full flex items-center justify-between mb-4 gap-2">
                <Link
                    href="/profile/edit"
                    className="w-1/2 text-center bg-gray-300 text-2xl font-bold px-3 py-2 rounded-3xl">
                    Edit Profile
                </Link>
                <Link
                    href="/profile/preference"
                    className="w-1/2 text-center bg-gray-300 text-2xl font-bold px-3 py-2 rounded-3xl">
                    Your Preferences
                </Link>
            </div>

            <div>
                <div className="w-full flex items-center gap-3 mb-6">
                    <Image
                        className=" w-40 rounded-full"
                        // src={`${baseUrl}/assets/images/${form.file}`}
                        src={
                            form.file
                                ? form.file
                                : user?.avatar
                                ? `/uploads/${form?.file}`
                                : Profile
                        }
                        // src={form.file || Profile}
                        width={150}
                        height={150}
                        alt="Picture of the author"
                    />

                    <button>
                        <label
                            htmlFor="file"
                            style={{ cursor: "pointer" }}>
                            {" "}
                            Upload Files
                            <input
                                type="file"
                                id="file"
                                name="photo"
                                accept="image/*"
                                style={{ display: "none" }}
                                onChange={(e) => {
                                    const selectedFile = e.target.files[0];
                                    const validImageTypes = [
                                        "image/jpeg",
                                        "image/png",
                                        "image/gif",
                                        "image/bmp",
                                        "image/webp",
                                    ];
                                    if (
                                        selectedFile &&
                                        validImageTypes.includes(
                                            selectedFile.type
                                        )
                                    ) {
                                        handleImageUpload(e);
                                        // setImage(selectedFile);
                                    } else {
                                        e.target.value = "";
                                        alert(
                                            "Please select a valid image file."
                                        );
                                    }
                                }}
                            />
                        </label>
                    </button>
                </div>

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
                        <label htmlFor="age">Date of Birth</label>
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
                            }>
                            <option value="ratherNotSay">Rather not say</option>
                            <option value="Other">Other</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                </div>

                <div className="w-full flex items-center gap-3 mb-6">
                    <div className="w-1/2">
                        <label htmlFor="smoker">Smoker</label>
                        <br />
                        <input
                            className="w-full rounded-3xl bg-gray-300"
                            type="text"
                            name="smoker"
                            value={form.smoker}
                            onChange={(e) =>
                                setForm({ ...form, smoker: e.target.value })
                            }
                        />
                    </div>
                    <div className="w-1/2">
                        <label htmlFor="occupation">Occupation</label>
                        <br />
                        <input
                            className="w-full rounded-3xl bg-gray-300"
                            type="text"
                            name="occupation"
                            value={form.occupation}
                            onChange={(e) =>
                                setForm({ ...form, occupation: e.target.value })
                            }
                        />
                    </div>
                </div>

                <div className="w-full flex items-center gap-3 mb-6">
                    <div className="w-1/2">
                        <label htmlFor="nationality">Nationality</label>
                        <br />
                        <input
                            className="w-full rounded-3xl bg-gray-300"
                            type="text"
                            name="nationality"
                            value={form.nationality}
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    nationality: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="w-1/2">
                        <label htmlFor="bio">Bio</label>
                        <br />
                        <input
                            className="w-full rounded-3xl bg-gray-300"
                            type="text"
                            name="bio"
                            value={form.bio}
                            onChange={(e) =>
                                setForm({ ...form, bio: e.target.value })
                            }
                        />
                    </div>
                </div>

                <div className="w-full flex items-center gap-3 mb-6">
                    <div className="w-1/2">
                        <label htmlFor="bedtime">Bed Time</label>
                        <br />
                        <input
                            className="w-full rounded-3xl bg-gray-300"
                            type="text"
                            name="bedtime"
                            value={form.bedtime}
                            onChange={(e) =>
                                setForm({ ...form, bedtime: e.target.value })
                            }
                        />
                    </div>
                    <div className="w-1/2">
                        <label htmlFor="diet">Diet</label>
                        <br />
                        <input
                            className="w-full rounded-3xl bg-gray-300"
                            type="text"
                            name="diet"
                            value={form.diet}
                            onChange={(e) =>
                                setForm({ ...form, diet: e.target.value })
                            }
                        />
                    </div>
                </div>

                <div className="w-full flex items-center gap-3 mb-6">
                    <div className="w-1/2">
                        <label htmlFor="languages">Language</label>
                        <br />
                        <input
                            className="w-full rounded-3xl bg-gray-300"
                            type="text"
                            name="languages"
                            value={form.languages}
                            onChange={(e) =>
                                setForm({ ...form, languages: e.target.value })
                            }
                        />
                    </div>
                    <div className="w-1/2">
                        <label htmlFor="education">Education</label>
                        <br />
                        <input
                            className="w-full rounded-3xl bg-gray-300"
                            type="text"
                            name="education"
                            value={form.education}
                            onChange={(e) =>
                                setForm({ ...form, education: e.target.value })
                            }
                        />
                    </div>
                </div>
            </div>

            <div className="flex justify-end mt-6">
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold my-2 px-5 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
                    onClick={handleSubmit}>
                    {loading ? (
                        <Circles
                            className="p-1"
                            height="40"
                            width="40"
                            color="#ffffff"
                            ariaLabel="circles-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={loading}
                        />
                    ) : (
                        "Save"
                    )}
                </button>
            </div>
        </div>
    );
};

export default Edit;
