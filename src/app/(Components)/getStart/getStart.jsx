'use client'
// Importing useState from React
import { useState } from "react";
import Image from "next/image";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Country, State, City } from 'country-state-city';
import gluten from '@/../../public/images/gluten.jpeg'
import vegan from '@/../../public/images/vegan.jpeg'
import vegetarian from '@/../../public/images/vegetarian.jpeg'
import nonvegetarian from '@/../../public/images/nonvegetarian.jpeg'


import beach from '@/../../public/images/beach.jpg'
import mountains from '@/../../public/images/mountains.jpeg'
import cityscape from '@/../../public/images/cityscape.jpeg'
import countryside from '@/../../public/images/countryside.jpeg'
import { toast, Toaster } from "react-hot-toast";


// Functional component for the multipage form
const GetStart = ({ handleSubmitForm }) => {
    const country = Country.getAllCountries();
    const [countryCode, setCountryCode] = useState("CA");
    const [slideNumber, setSlideNumber] = useState(0);

    const place = [
        {
            img: beach,
            value: "Beach"
        },
        {
            img: mountains,
            value: "Mountains"
        },
        {
            img: cityscape,
            value: "Cityscape"
        },
        {
            img: countryside,
            value: "Countryside"

        }
    ]

    const food = [
        {
            img: vegetarian,
            value: "vegetarian"
        },
        {
            img: nonvegetarian,
            value: "non-vegetarian"
        },
        {
            img: vegan,
            value: "vegan"
        },
        {
            img: gluten,
            value: "gluten-free"
        }
    ]

    const [form, setForm] = useState({
        nationality: null,
        language: null,
        occupation: null,
        smoker: null,
        food: null,
        place: null,
        city: null,
    });

    // Function to handle input changes and update form state
    const updateForm = (fieldName, value) => {
        if (fieldName === "nationality") {
            setCountryCode(value.countryCode)
        }
        setForm((prevForm) => ({ ...prevForm, [fieldName]: value }));
    };

    // Function to handle moving to the previous page
    const handlePrev = () => {
        if (slideNumber !== 0) {
            setSlideNumber((prevSlideNumber) => prevSlideNumber - 1);
        }
    };

    // Function to handle moving to the next page
    const handleNext = () => {

        if (slideNumber < 6) {
            setSlideNumber((prevSlideNumber) => prevSlideNumber + 1);
        } else if (slideNumber === 6 && form.nationality != null && form.language != null && form.occupation != null && form.smoker != null && form.food != null && form.place != null && form.city != null) {
            handleSubmitForm(form)
        } else {
            toast.error("fill all field")
        }
    };

    console.log(form)

    // Render the form based on the current slide number
    return (
        <div className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-70 flex items-center justify-center">
            <Toaster />
            <div className="bg-white w-1/2 h-1/2 max-lg:w-3/4 max-md:w-4/5 max-sm:w-11/12 rounded-2xl p-8 text-center flex flex-col items-center justify-center pb-8">
                {slideNumber === 0 && (
                    <div className="flex flex-col item-center gap-5 max-sm:w-full">
                        <h2 className="text-2xl font-bold mb-4">Tell us about your Nationality</h2>
                        <select name="" value={form.nationality} onChange={(e) => updateForm("nationality", e.target.value)} className=" rounded-xl outline-none">
                            <option value={null}>Select Nationality</option>
                            {country.map((data, index) => (
                                <option key={index} value={form.name}>{data.name}</option>
                            ))}
                        </select>
                    </div>
                )}
                {slideNumber === 1 && (
                    <div className="flex flex-col item-center gap-5 max-sm:w-full">
                        <h2 className="text-2xl font-bold mb-4">Could you share with us your language preference?</h2>
                        {/* <label>Language:</label> */}
                        <select name="" value={form.language} onChange={(e) => updateForm("language", e.target.value)} className=" rounded-xl outline-none">
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
                )}
                {slideNumber === 2 && (
                    <div className="flex flex-col item-center gap-5 max-sm:w-full">
                        <h2 className="text-2xl font-bold mb-4">What is your Occupation?</h2>
                        {/* <label>Occupation:</label> */}
                        {/* <input
                            type="text"
                            value={form.occupation || ""}
                            placeholder="Enter your Occupation"
                            onChange={(e) => updateForm("occupation", e.target.value)}
                            className=" outline-none rounded-xl"
                        /> */}
                        <select name="" value={form.occupation} onChange={(e) => updateForm("occupation", e.target.value)} className="rounded-xl outline-none">
                            <option value={null}>Select Occupation</option>
                            <option value="student">Student</option>
                            <option value="goverment">Goverment Servent</option>
                            <option value="developer">Developer</option>
                            <option value="teacher">Teacher</option>
                            <option value="engineer">Engineer</option>
                            {/* Add more options as needed */}
                        </select>
                    </div>
                )}
                {slideNumber === 3 && (
                    <div className="flex flex-col item-center gap-5 max-sm:w-full">
                        <h2 className="text-2xl font-bold mb-4">Do you smoke?</h2>
                        {/* <label>Smoker:</label> */}
                        <div className="flex items-center justify-around">
                            <button onClick={() => {
                                updateForm("smoker", true)
                                handleNext()

                            }} className='  float-right text-center text-xl text-white font-extrabold py-2 px-4 transition-all duration-300 ease-linear hover:scale-110 hover:rounded-xl ' style={{ backgroundImage: "linear-gradient(#EF8463, #7170F5 )" }}>Yes</button>
                            <button onClick={() => {
                                updateForm("smoker", false)
                                handleNext()
                            }} className=' float-right text-center text-xl text-white font-extrabold py-2 px-4 transition-all duration-300 ease-linear hover:scale-110 hover:rounded-xl ' style={{ backgroundImage: "linear-gradient(#EF8463, #7170F5 )" }}>No</button>
                        </div>
                    </div>
                )}
                {slideNumber === 4 && (
                    <div className="flex flex-col item-center gap-5 max-sm:w-full">
                        <h2 className="text-2xl font-bold mb-4">Tell us about your Food Preferences</h2>
                        {/* <label>Food:</label> */}
                        <div className="flex items-center justify-around gap-10">
                            {food.map((data, index) => (
                                <span
                                    className="flex flex-col items-center gap-3 "
                                    key={index}
                                    onClick={() => updateForm("food", data.value)}>
                                    <Image
                                        className="w-28 h-24 transition-all duration-300 ease-linear hover:scale-110"
                                        src={data.img}
                                        alt="Image"
                                        width={96}
                                        height={80}
                                    />
                                    {form.food === data.value ?

                                        <FaHeart className={`${form.food === data.value ? "fill-red-700" : ""} text-xl transition-all duration-300 ease-linear hover:text-2xl`} /> :
                                        <FaRegHeart className={`${form.food === data.value ? "fill-red-700" : ""}  transition-all duration-300 ease-linear hover:text-2xl`} />
                                    }
                                </span>
                            ))}
                        </div>

                    </div>
                )}
                {slideNumber === 5 && (
                    <div className="flex flex-col item-center gap-5 max-sm:w-full">
                        <h2 className="text-2xl font-bold mb-4">What is your preferred type of Place?</h2>
                        {/* <label>Place:</label> */}
                        <div className="flex items-center justify-around gap-10">
                            {place.map((data, index) => (
                                <span
                                    className="flex flex-col items-center gap-3 "
                                    key={index}
                                    onClick={() => updateForm("place", data.value)}>
                                    <Image
                                        className="w-28 h-24 transition-all duration-300 ease-linear hover:scale-110"
                                        src={data.img}
                                        alt="Image"
                                        width={96}
                                        height={80}
                                    />
                                    {form.place === data.value ?

                                        <FaHeart className={`${form.place === data.value ? "fill-red-700" : ""} text-xl transition-all duration-300 ease-linear hover:text-2xl`} /> :
                                        <FaRegHeart className={`${form.place === data.value ? "fill-red-700" : ""}  transition-all duration-300 ease-linear hover:text-2xl`} />
                                    }
                                </span>
                            ))}
                        </div>
                    </div>
                )}
                {slideNumber === 6 && (
                    <div className="flex flex-col item-center gap-5 max-sm:w-full">
                        <h2 className="text-2xl font-bold mb-4">Which City do you reside in?</h2>
                        {/* <label>City:</label> */}
                        <select name="" value={form.city} onChange={(e) => updateForm("city", e.target.value)} className=" rounded-xl outline-none">
                            {/* <option value={null}>Select Language</option>
                            {City.getCitiesOfCountry(countryCode).map((data, index) => (
                                <option key={index} value={data.code}>{data.name}</option>
                            ))} */}
                            <option value={null}>Select City</option>
                            <option value="toronto">Toronto</option>
                            <option value="vancouver">Vancouver</option>
                            <option value="montreal">Montreal</option>
                            <option value="calgary">Calgary</option>
                            <option value="ottawa">Ottawa</option>
                        </select>
                    </div>
                )}

                {/* Prev and Next buttons */}
                <div className="flex justify-between mt-10 w-full">
                    <button onClick={handlePrev} disabled={slideNumber === 0} className=' float-right text-center text-3xl text-white font-extrabold py-3 pl-5 pr-10' style={{ backgroundImage: "linear-gradient(#EF8463, #7170F5 )", clipPath: slideNumber != 0 ? "polygon(10% 0%, 90% 0%, 75% 50%, 90% 100%, 10% 100%, 0% 50%)" : "" }}>
                        Prev
                    </button>
                    <button onClick={handleNext} disabled={slideNumber === 7} className=' float-right text-center text-3xl text-white font-extrabold py-3 pr-5 pl-10' style={{ backgroundImage: "linear-gradient(#EF8463, #7170F5 )", clipPath: slideNumber != 6 ? "polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 25% 50%)" : "" }}>
                        {slideNumber === 6 ? "Finish" : "Next"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GetStart;
