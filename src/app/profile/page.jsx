'use client'
import Link from "next/link";
import Preference from "./preference/page"
import { useState, useEffect } from "react"
import axios from "axios";
import { useUserContext } from '@/context/context';

const Profile = () => {


  const [form, setForm] = useState({ fName: "", lName: "", day: 0, month: 0, year: 0, gender: "", smoker: "", occupation: "", nationality: "", bio: "", bTime: "", diet: "", language: "", education: "", });
  const [Preferences, setPreferences] = useState(false)
  const [userData, setUserdata] = useState('');
  const { setUser } = useUserContext();
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get('/api/user/getdata');
        console.log(response.data.data[0]);
        setUser(response.data.data[0]);
        setUserdata(response.data.data[0]);

      } catch (error) {
        console.log(error.message)
      }

    }
    getData();
  }, [])

  return (
    <div className='w-2/4 mx-auto mt-10 leading-10'>
      <div className='w-full flex items-center justify-between mb-4 gap-2'>
        <Link href={"/profile/edit"} className='w-1/2 text-center bg-gray-300 text-2xl font-bold px-3 py-2 rounded-3xl' >Edit Profile</Link>
        <Link href={"/profile/preference"} className='w-1/2 text-center bg-gray-300 text-2xl font-bold px-3 py-2 rounded-3xl' >Your Preferences</Link>
      </div>
      <div>
        <div className='w-full flex items-center gap-3 mb-6'>
          <div className='w-1/2'>
            <label htmlFor="fname">First Name</label>
            <br />
            <input disabled value={userData.first_name} className='w-full rounded-3xl bg-gray-300' type="text"
            />
          </div>
          <div className='w-1/2'>
            <label htmlFor="lname">Last Name</label>
            <br />
            <input disabled value={userData.last_name} className='w-full rounded-3xl bg-gray-300' type="text" name='lname'

            />
          </div>
        </div>

        <div className='w-full flex items-center mb-6 gap-4'>
          <div className='w-1/2'>
            <label htmlFor="dob">Date of Birth</label>
            <div className='flex gap-3'>
              <input disabled value={"25"} className='w-2/6 rounded-3xl bg-gray-300' placeholder='day' type="number" name='age'
                onChange={(e) => setForm({ ...form, day: e.target.value })}
              />
              <input disabled value={"02"} className='w-2/6 rounded-3xl bg-gray-300' placeholder='month' type="number" name='age'
                onChange={(e) => setForm({ ...form, month: e.target.value })}
              />
              <input disabled value={"2024"} className='w-2/6 rounded-3xl bg-gray-300' placeholder='year' type="number" name='age'
                onChange={(e) => setForm({ ...form, year: e.target.value })}
              />
            </div>

          </div>
          <div className='w-1/2'>
            <label htmlFor="gender">Gender</label>
            <br />
            <input disabled value={userData.gender} className='w-full rounded-3xl bg-gray-300' type="text" name='gender'
            />

          </div>
        </div>

        <div className='w-full flex items-center gap-3 mb-6'>
          <div className='w-1/2'>
            <label htmlFor="smoker">Smoker</label>
            <br />
            <input disabled value={userData.smoker} className='w-full rounded-3xl bg-gray-300' type="text" name='smoker'
              onChange={(e) => setForm({ ...form, smoker: e.target.value })}
            />
          </div>
          <div className='w-1/2'>
            <label htmlFor="occupation">Occupation</label>
            <br />
            <input disabled value={userData.occupation} className='w-full rounded-3xl bg-gray-300' type="text" name='occupation'
              onChange={(e) => setForm({ ...form, occupation: e.target.value })}
            />
          </div>
        </div>

        <div className='w-full flex items-center gap-3 mb-6'>
          <div className='w-1/2'>
            <label htmlFor="school">Nationality</label>
            <br />
            <input disabled value={userData.nationality} className='w-full rounded-3xl bg-gray-300' type="text" name='nationality'
              onChange={(e) => setForm({ ...form, nationality: e.target.value })}
            />
          </div>
          <div className='w-1/2'>
            <label htmlFor="bio">bio</label>
            <br />
            <input disabled value={userData.bio} className='w-full rounded-3xl bg-gray-300' type="text" name='bio'
              onChange={(e) => setForm({ ...form, bio: e.target.value })}
            />
          </div>
        </div>

        <div className='w-full flex items-center gap-3 mb-6'>
          <div className='w-1/2'>
            <label htmlFor="bTime">Bed Time</label>
            <br />
            <input disabled value={userData.bedtime} className='w-full rounded-3xl bg-gray-300' type="text" name='bTime'
              onChange={(e) => setForm({ ...form, bTime: e.target.value })}
            />
          </div>
          <div className='w-1/2'>
            <label htmlFor="diet">Diet</label>
            <br />
            <input disabled value={userData.diet} className='w-full rounded-3xl bg-gray-300' type="text" name='diet'
              onChange={(e) => setForm({ ...form, diet: e.target.value })}
            />
          </div>
        </div>

        <div className='w-full flex items-center gap-3 mb-6'>
          <div className='w-1/2'>
            <label htmlFor="school">Language</label>
            <br />
            <input disabled value={userData.languages} className='w-full rounded-3xl bg-gray-300' type="text" name='language'
              onChange={(e) => setForm({ ...form, language: e.target.value })}
            />
          </div>
          <div className='w-1/2'>
            <label htmlFor="education">Education</label>
            <br />
            <input disabled value={userData.education} className='w-full rounded-3xl bg-gray-300' type="text" name='education'
              onChange={(e) => setForm({ ...form, education: e.target.value })}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
