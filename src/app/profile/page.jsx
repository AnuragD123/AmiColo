"use client";
import Link from "next/link";
import Preference from "./preference/page"
import { useState } from "react"
const EditProfile = () => {

  const [form, setForm] = useState({ fName: "", lName: "", day: 0, month: 0, year: 0, gender: "", hSchool: "", bachelors: "", master: "", sector: "" });
  const [Preferences, setPreferences] = useState(false)


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
              <input disabled value={"valueji"} className='w-full rounded-3xl bg-gray-300' type="text" name='fname'
                onChange={(e) => setForm({ ...form, fName: e.target.value })}
              />
            </div>
            <div className='w-1/2'>
              <label htmlFor="lname">Last Name</label>
              <br />
              <input disabled value={"valueji"} className='w-full rounded-3xl bg-gray-300' type="text" name='lname'
                onChange={(e) => setForm({ ...form, lName: e.target.value })}
              />
            </div>
          </div>

          <div className='w-full flex items-center mb-6 gap-4'>
            <div className='w-1/2'>
              <label htmlFor="age">Age</label>
              <div className='flex gap-3'>
                <input disabled value={"valueji"} className='w-2/6 rounded-3xl bg-gray-300' placeholder='day' type="number" name='age'
                  onChange={(e) => setForm({ ...form, day: e.target.value })}
                />
                <input disabled value={"valueji"} className='w-2/6 rounded-3xl bg-gray-300' placeholder='month' type="number" name='age'
                  onChange={(e) => setForm({ ...form, month: e.target.value })}
                />
                <input disabled value={"valueji"} className='w-2/6 rounded-3xl bg-gray-300' placeholder='year' type="number" name='age'
                  onChange={(e) => setForm({ ...form, year: e.target.value })}
                />
              </div>

            </div>
            <div className='w-1/2'>
              <label htmlFor="gender">Gender</label>
              <br />
              <select disabled value={"valueji"} className='w-full rounded-3xl bg-gray-300' name="gender">
                <option
                  onClick={(e) => setForm({ ...form, gender: e.target.value })}
                  value="Male">Male</option>
                <option
                  onClick={(e) => setForm({ ...form, gender: e.target.value })}
                  value="Female">Female</option>
                <option
                  onClick={(e) => setForm({ ...form, gender: e.target.value })}
                  value="other">other</option>
              </select>
            </div>
          </div>

          <div className='w-full flex items-center gap-3 mb-6'>
            <div className='w-1/2'>
              <label htmlFor="school">High School</label>
              <br />
              <input disabled value={"valueji"} className='w-full rounded-3xl bg-gray-300' type="text" name='school'
                onChange={(e) => setForm({ ...form, hSchool: e.target.value })}
              />
            </div>
            <div className='w-1/2'>
              <label htmlFor="college">Bachelors</label>
              <br />
              <input disabled value={"valueji"} className='w-full rounded-3xl bg-gray-300' type="text" name='college'
                onChange={(e) => setForm({ ...form, bachelors: e.target.value })}
              />
            </div>
          </div>

          <div className='w-full flex items-center gap-3 mb-6'>
            <div className='w-1/2'>
              <label htmlFor="pg">Master</label>
              <br />
              <input disabled value={"valueji"} className='w-full rounded-3xl bg-gray-300' type="text" name='pg'
                onChange={(e) => setForm({ ...form, master: e.target.value })}
              />
            </div>
            <div className='w-1/2'>
              <label htmlFor="sector">Sector</label>
              <br />
              <input disabled value={"valueji"} className='w-full rounded-3xl bg-gray-300' type="text" name='sector'
                onChange={(e) => setForm({ ...form, sector: e.target.value })}
              />
            </div>
          </div>
        </div>
    </div>
  )
}

export default EditProfile
