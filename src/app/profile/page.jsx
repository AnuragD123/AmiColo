'use client'
import Link from "next/link";
import Preference from "./preference/page"
import { useState, useEffect } from "react"
import axios from "axios";
import { useUserContext } from '@/context/context';

const Profile = () => {


  const [form, setForm] = useState({ fName: "", lName: "", day: 0, month: 0, year: 0, gender: "", smoker: "", occupation: "", cleanliness: "", nationality: "", bio: "", bedtime: "", diet: "", languages: "", education: "", });
  const [Preferences, setPreferences] = useState(false)
  const { user, setUser } = useUserContext();
  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const response = await axios.get('/api/user/getdata');
  //       console.log(response.data.data[0]);
  //       setUser(response.data.data[0]);
  //       localStorage.setItem('id',response.data.data[0].id);
  //       setUserdata(response.data.data[0]);

  //     } catch (error) {
  //       console.log(error.message)
  //     }
  //   }
  //   getData();
  // }, [])
  useEffect(() => {
    setForm({
      first_name: user?.first_name || "",
      last_name: user?.last_name || "",
      gender: user?.gender || "",
      day: user?.dob?.split("-")[2].split("T")[0] || 0,
      month: user?.dob?.split("-")[1] || 0,
      year: user?.dob?.split("-")[0] || 0,
      bio: user?.bio || "",
      bedtime: user?.bedtime || "",
      occupation: user?.occupation || "",
      smoker: user?.smoker || "",
      cleanliness: user?.cleanliness || "",
      diet: user?.diet || "",
      nationality: user?.nationality || "",
      education: user?.education || "",
      languages: user?.languages || "",
    });
  }, [user]);

  

  return (
    <div className="leading-10">
      <div className="w-full flex items-center justify-between mb-4 gap-2">
        <Link
          href={"/profile/edit"}
          className="w-1/2 text-center bg-gray-300 text-2xl font-bold px-3 py-2 rounded-3xl max-sm:text-xl"
        >
          Edit Profile
        </Link>
        <Link
          href={"/profile/preference"}
          className="w-1/2 text-center bg-gray-300 text-2xl font-bold px-3 py-2 rounded-3xl max-sm:text-xl"
        >
          Your Preferences
        </Link>
      </div>
      <div className="mb-3">
        <div className="w-full flex items-center gap-3 mb-6">
          <div className="w-1/2">
            <label htmlFor="fname">First Name</label>
            <br />
            <input
              disabled
              value={form.first_name}
              className="w-full rounded-3xl bg-gray-300"
              type="text"
            />
          </div>
          <div className="w-1/2">
            <label htmlFor="lname">Last Name</label>
            <br />
            <input
              disabled
              value={form.last_name}
              className="w-full rounded-3xl bg-gray-300"
              type="text"
              name="lname"
            />
          </div>
        </div>

        <div className="w-full flex items-center mb-6 gap-4">
          <div className="w-1/2">
            <label htmlFor="dob">Date of Birth</label>
            <div className="flex gap-3">
              <input
                disabled
                value={form.day}
                className="w-2/6 rounded-3xl bg-gray-300"
                placeholder="day"
                type="number"
                name="age"
                onChange={(e) => setForm({ ...form, day: e.target.value })}
              />
              <input
                disabled
                value={form.month}
                className="w-2/6 rounded-3xl bg-gray-300"
                placeholder="month"
                type="number"
                name="age"
                onChange={(e) => setForm({ ...form, month: e.target.value })}
              />
              <input
                disabled
                value={form.year}
                className="w-2/6 rounded-3xl bg-gray-300"
                placeholder="year"
                type="number"
                name="age"
                onChange={(e) => setForm({ ...form, year: e.target.value })}
              />
            </div>
          </div>
          <div className="w-1/2">
            <label htmlFor="gender">Gender</label>
            <br />
            <input
              disabled
              value={form.gender}
              className="w-full rounded-3xl bg-gray-300"
              type="text"
              name="gender"
            />
          </div>
        </div>

        <div className="w-full flex items-center gap-3 mb-6">
          <div className="w-1/2 max-sm:w-full">
            <label htmlFor="smoker">Smoker </label>

            <br />
            <span className=" flex items-center gap-5">
              <button
                className={`px-3 py-1 rounded-xl w-1/2 ${
                  form.smoker == "true" || form.smoker == true
                    ? "bg-gray-300 border-2 border-gray-400"
                    : "bg-gray-300"
                }`}
              >
                Yes
              </button>
              <button
                className={`px-3 py-1 rounded-xl w-1/2 ${
                  form.smoker == "false" || form.smoker == false
                    ? "bg-gray-300 border-2 border-gray-400"
                    : "bg-gray-300"
                }`}
              >
                No
              </button>
            </span>
          </div>
          <div className="w-1/2">
            <label htmlFor="occupation">Occupation</label>
            <br />
            <select
              disabled
              name="occupation"
              value={form.occupation}
              onChange={(e) => setForm({ ...form, occupation: e.target.value })}
              className="w-full rounded-3xl bg-gray-300"
            >
              <option value={null}>Select Occupation</option>
              <option value="Professional">Professional</option>
              <option value="Unemployed">Unemployed</option>
              <option value="Student">Student</option>
            </select>
          </div>
        </div>

        <div className="w-full flex items-center gap-3 mb-6">
          <div className="w-1/2">
            <label htmlFor="school">Nationality</label>
            <br />
            <input
              disabled
              value={form.nationality}
              className="w-full rounded-3xl bg-gray-300"
              type="text"
              name="nationality"
              onChange={(e) =>
                setForm({ ...form, nationality: e.target.value })
              }
            />
          </div>
          <div className="w-1/2">
            <label htmlFor="bio">bio</label>
            <br />
            <input
              disabled
              value={form.bio}
              className="w-full rounded-3xl bg-gray-300"
              type="text"
              name="bio"
              onChange={(e) => setForm({ ...form, bio: e.target.value })}
            />
          </div>
        </div>

        <div className="w-full flex items-center gap-3 mb-6">
          <div className="w-1/2">
            <label htmlFor="bTime">Bed Time</label>
            <br />
            <select
              disabled
              name=""
              value={form.bedtime}
              onChange={(e) => setForm({ ...form, bedtime: e.target.value })}
              className="w-full rounded-3xl bg-gray-300"
            >
              <option value={null}>Select Bedtime</option>
              <option value="Early Bird">Early Bird</option>
              <option value="Night Owl">Night Owl</option>
            </select>
          </div>
          <div className="w-1/2">
            <label htmlFor="diet">Diet</label>
            <br />
            <select
              disabled
              name=""
              value={form.diet}
              onChange={(e) => setForm({ ...form, diet: e.target.value })}
              className="w-full rounded-3xl bg-gray-300"
            >
              <option value={null}>Select diet</option>
              <option value="Non-Vegetarian">Non-Vegetarian</option>
              <option value="Vegan">Vegan</option>
              <option value="Vegetarian">Vegetarian</option>
            </select>
          </div>
        </div>

        <div className="w-full flex items-center gap-3 mb-6">
          <div className="w-1/2">
            <label htmlFor="school">Language</label>
            <br />
            <select
              disabled
              name="languages"
              value={form.languages}
              onChange={(e) => setForm({ ...form, languages: e.target.value })}
              className="w-full rounded-3xl bg-gray-300"
            >
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
          <div className="w-1/2">
            <label htmlFor="education">Education</label>
            <br />
            <input
              disabled
              value={form.education}
              className="w-full rounded-3xl bg-gray-300"
              type="text"
              name="education"
              onChange={(e) => setForm({ ...form, education: e.target.value })}
            />
          </div>
        </div>
        <div className="w-1/2 max-sm:w-full">
          <label htmlFor="cleanliness">Cleanliness</label>
          <br />
          <select
            disabled
            name="cleanliness"
            value={form.cleanliness}
            onChange={(e) => setForm({ ...form, cleanliness: e.target.value })}
            className="w-full rounded-3xl bg-gray-300"
          >
            <option value={null}>"Select"</option>
            <option value="Average">Average</option>
            <option value="Messy">Messy</option>
            <option value="Neat">Neat</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Profile
