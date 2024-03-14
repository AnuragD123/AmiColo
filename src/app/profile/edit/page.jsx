"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import { Country } from 'country-state-city';
import { Circles, MutatingDots } from "react-loader-spinner";
import Profile from "../../../../images/AmiColo_Profile.png";
import Image from "next/image";
import { useUserContext } from "@/context/context";
import { toast, Toaster } from "react-hot-toast";
// const baseUrl = require("http://192.168.127.176:3000");
const Edit = () => {
    const country = Country.getAllCountries();
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
        type: "",
        rooms: "",
        price: "",
        washrooms: "",
        parking: "",
        area: "",
        gym: "",
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
            type: user?.type || "",
            rooms: user?.rooms || "",
            price: user?.price || "",
            washrooms: user?.washrooms || "",
            parking: user?.parking || "",
            area: user?.area || "",
            gym: user?.gym || "",
        });
    }, [user]);

    console.log("form", form)

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
            formData.append("type", form.type);
            formData.append("rooms", form.rooms);
            formData.append("price", form.price);
            formData.append("washrooms", form.washrooms);
            formData.append("parking", form.parking);
            formData.append("area", form.area);
            formData.append("gym", form.gym);
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
    console.log("object", form.smoker)
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
        <div className="leading-10">
            <Toaster />
            <div className="w-full flex items-center justify-between mb-4 gap-2 max-sm:flex-col">
                <Link
                    href="/profile/edit"
                    className="w-1/2 max-sm:w-full text-center bg-gray-300 text-2xl font-bold px-3 py-2 rounded-3xl max-sm:text-xl">
                    Edit Profile
                </Link>
                <Link
                    href="/profile/preference"
                    className="w-1/2 max-sm:w-full text-center bg-gray-300 text-2xl font-bold px-3 py-2 rounded-3xl max-sm:text-xl">
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
                                : user?.avatar ? `/uploads/${user?.avatar}`
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

                <div className="w-full flex items-center gap-3 mb-6 max-sm:flex-col">
                    <div className="w-1/2 max-sm:w-full">
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
                    <div className="w-1/2 max-sm:w-full">
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

                <div className="w-full flex items-center mb-6 gap-4 max-sm:flex-col">
                    <div className="w-1/2 max-sm:w-full">
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
                    <div className="w-1/2 max-sm:w-full">
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

                <div className="w-full flex items-center gap-3 mb-6 max-sm:flex-col">
                    <div className="w-1/2 max-sm:w-full">
                        <label htmlFor="smoker">Smoker </label>
                        <span className="text-xs text-gr">Yes/No</span>

                        <br />
                        <span className=" flex items-center gap-5">
                            <button className={`px-3 py-1 rounded-xl max-sm:w-1/2 ${form.smoker == "true" || form.smoker == true ? "bg-gray-400" : "bg-gray-300"}`} onClick={(e) => setForm({ ...form, smoker: true })}>Yes</button>
                            <button className={`px-3 py-1 rounded-xl max-sm:w-1/2 ${form.smoker == "false" || form.smoker == false ? "bg-gray-400" : "bg-gray-300"}`} onClick={(e) => setForm({ ...form, smoker: false })}>No</button>
                        </span>
                    </div>
                    <div className="w-1/2 max-sm:w-full">
                        <label htmlFor="occupation">Occupation</label>
                        <br />
                        <select name="occupation" value={form.occupation} onChange={(e) => setForm({ ...form, occupation: e.target.value })} className="w-full rounded-3xl bg-gray-300">
                            <option value={null}>Select Occupation</option>
                            <option value="student">Student</option>
                            <option value="goverment">Goverment Servent</option>
                            <option value="developer">Developer</option>
                            <option value="teacher">Teacher</option>
                            <option value="engineer">Engineer</option>
                        </select>

                    </div>
                </div>

                <div className="w-full flex items-center gap-3 mb-6 max-sm:flex-col">
                    <div className="w-1/2 max-sm:w-full">
                        <label htmlFor="nationality">Nationality</label>
                        <br />
                        <select name="nationality" value={form.nationality} onChange={(e) => setForm({
                            ...form,
                            nationality: e.target.value,
                        })} className="w-full rounded-3xl bg-gray-300">
                            <option value={null}>Select Nationality</option>
                            {country.map((data, index) => (
                                <option key={index} value={form.name}>{data.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="w-1/2 max-sm:w-full">
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

                <div className="w-full flex items-center gap-3 mb-6 max-sm:flex-col">
                    <div className="w-1/2 max-sm:w-full">
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
                    <div className="w-1/2 max-sm:w-full">
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

                <div className="w-full flex items-center gap-3 mb-6 max-sm:flex-col">
                    <div className="w-1/2 max-sm:w-full">
                        <label htmlFor="languages">Language</label>
                        <br />
                        <select name="languages" value={form.languages} onChange={(e) => setForm({ ...form, languages: e.target.value })} className="w-full rounded-3xl bg-gray-300">
                            <option value={null}>Select Language</option>
                            <option value="english">English</option>
                            <option value="spanish">Spanish</option>
                            <option value="french">French</option>
                            <option value="german">German</option>
                            <option value="chinese">Chinese</option>
                            <option value="japanese">Japanese</option>
                            <option value="arabic">Arabic</option>
                            <option value="portuguese">Portuguese</option>
                            <option value="russian">Russian</option>
                            <option value="italian">Italian</option>
                            <option value="hindi">Hindi</option>
                            <option value="korean">Korean</option>
                            <option value="dutch">Dutch</option>
                            <option value="swedish">Swedish</option>
                            <option value="turkish">Turkish</option>
                            <option value="polish">Polish</option>
                            <option value="indonesian">Indonesian</option>
                            <option value="vietnamese">Vietnamese</option>
                            <option value="thai">Thai</option>
                            <option value="greek">Greek</option>
                            <option value="czech">Czech</option>
                            <option value="danish">Danish</option>
                            <option value="finnish">Finnish</option>
                            <option value="norwegian">Norwegian</option>
                            <option value="hebrew">Hebrew</option>
                            <option value="tagalog">Tagalog</option>
                            <option value="malay">Malay</option>
                            <option value="swahili">Swahili</option>
                        </select>

                    </div>
                    <div className="w-1/2 max-sm:w-full">
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

                <div className="w-full flex items-center gap-3 mb-6 max-sm:flex-col">
                    <div className="w-1/2 max-sm:w-full">
                        <label htmlFor="type">type</label>
                        <br />
                        <select name="type" value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })} className="w-full rounded-3xl bg-gray-300">
                            <option value={null}>Select type</option>
                            <option value="4.5">4.5</option>
                            <option value="studio">studio</option>
                            <option value="3.5">3.5</option>
                        </select>

                    </div>
                    <div className="w-1/2 max-sm:w-full">
                        <label htmlFor="rooms">rooms</label>
                        <br />
                        <select name="rooms" value={form.rooms} onChange={(e) => setForm({ ...form, rooms: e.target.value })} className="w-full rounded-3xl bg-gray-300">
                            <option value={null}>rooms</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                        </select>

                    </div>
                </div>

                <div className="w-full flex items-center gap-3 mb-6 max-sm:flex-col">
                    <div className="w-1/2 max-sm:w-full">
                        <label htmlFor="price">price</label>
                        <br />
                        <input
                            className="w-full rounded-3xl bg-gray-300"
                            type="number"
                            name="price"
                            value={form.price}
                            onChange={(e) =>
                                setForm({ ...form, price: e.target.value })
                            }
                        />
                    </div>
                    <div className="w-1/2 max-sm:w-full">
                        <label htmlFor="washrooms">washrooms</label>
                        <br />
                        <select name="washrooms" value={form.washrooms} onChange={(e) => setForm({ ...form, washrooms: e.target.value })} className="w-full rounded-3xl bg-gray-300">
                            <option value={null}>Select</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                        </select>

                    </div>
                </div>

                <div className="w-full flex items-center gap-3 mb-6 max-sm:flex-col">
                    <div className="w-1/2 max-sm:w-full">
                        <label htmlFor="parking">parking</label>
                        <br />
                        <select name="parking" value={form.parking} onChange={(e) => setForm({ ...form, parking: e.target.value })} className="w-full rounded-3xl bg-gray-300">
                            <option value={null}>{form.parking != "" && form.parking == 1 ? "Yes" : form.parking == 0 ? "No" : "Select"}</option>
                            <option value={true}>Yes</option>
                            <option value={false}>No</option>
                        </select>

                    </div>
                    <div className="w-1/2 max-sm:w-full">
                        <label htmlFor="area">area</label>
                        <br />
                        <input
                            className="w-full rounded-3xl bg-gray-300"
                            type="number"
                            name="area"
                            value={form.area}
                            onChange={(e) =>
                                setForm({ ...form, area: e.target.value })
                            }
                        />

                    </div>
                </div>

                <div className="w-full flex items-center gap-3 mb-6 max-sm:flex-col">
                    <div className="w-1/2 max-sm:w-full">
                        <label htmlFor="gym">Gym</label>
                        <br />
                        <select name="gym" value={form.gym} onChange={(e) => setForm({ ...form, gym: e.target.value })} className="w-full rounded-3xl bg-gray-300">
                            <option value={null}>{form.gum != "" && form.gym == 1 ? "Yes" : form.gym == 0 ? "No" : "Select"}</option>
                            <option value={true}>Yes</option>
                            <option value={false}>No</option>
                        </select>

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
