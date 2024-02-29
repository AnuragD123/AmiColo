"use client";
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Profile from '../../../../../images/AmiColo_Profile.png'


export default function Sidebar({ data }) {
  const [image, setImage] = useState(null);
  const [file, setFile] = useState("");
  const { first_name, last_name, id } = data;


  const handleSubmit = async () => {

    try {

      const filedata = new FormData()
      filedata.set('file', image)

      const res = await fetch(`/api/user/update_profile?id=${data.id}`, {
        method: 'POST',
        body: filedata,

      })
      // handle the error
      if (!res.ok) throw new Error(await res.text())
    } catch (e) {
      // Handle errors here
      console.error(e)
    }
  }
  const handleImageUpload = async (e) => {
    const filedata = e.target.files[0];
    if (!filedata) {
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      const imageData = reader.result;
      setFile(imageData);
      setImage(filedata)
    };
    reader.readAsDataURL(filedata);

  };

  return (
    <aside className="flex h-full w-64 overflow-y-scroll flex-col border-r px-5 py-8 items-center font-semibold">
      <div className='flex flex-col items-center gap-4 mb-3'>
        <Image
          className=' w-40 rounded-full'
          src={file || data.avatar || Profile}
          width={150}
          height={150}
          alt="Picture of the author"
        />
        <button>
          <label htmlFor="file" style={{ cursor: "pointer" }}> Upload Files
            <input
              type="file"
              id="file"
              name="photo"
              accept="image/*"
              style={{ display: "none" }}

              onChange={(e) => {
                const selectedFile = e.target.files[0];
                const validImageTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/bmp', 'image/webp'];
                if (selectedFile && validImageTypes.includes(selectedFile.type)) {
                  handleImageUpload(e)
                  // setImage(selectedFile);
                } else {
                  e.target.value = ""
                  alert('Please select a valid image file.');
                }
              }}
            />
          </label>
        </button>
        <button onClick={handleSubmit}>Submit</button>


        <span>
          <h3>{first_name + ' ' + last_name}</h3>
          <p className=' text-sm font-normal'>ID # {id}</p>
        </span>

      </div>
      <div>
        <ul className='flex flex-col items-center leading-10'>
          <li> <Link href="/profile" >Edit Profile</Link></li>
          <li> <Link href="/profile/idverfication" >ID Verfication</Link></li>
          <li> <Link href="/profile/match_requests" >Match Requests</Link></li>
          <li> <Link href="/profile/my_matches" >My Matches</Link></li>
          <li> <Link href="/profile/booking" >My Booking</Link></li>
          <li> <Link href="/profile/improve_matches" >Improve Matches</Link></li>
          <li> <Link href="/profile/report" >Report Issue</Link></li>
          <li> <Link href="/profile/orderreceiept" >Order Receipts</Link></li>
          <li> <Link href="/profile/saved_rooms" >Saved Listings</Link></li>
        </ul>
      </div>
    </aside>


  )
}
