import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Profile from '../../../../../images/AmiColo_Profile.png'
import { BarChart, Wallet, Newspaper, BellRing, Paperclip, Brush, Wrench } from 'lucide-react'

export default function Sidebar() {
  return (
    <aside className="flex h-full w-64 overflow-y-scroll flex-col border-r px-5 py-8 items-center font-semibold">
      <div className='flex flex-col items-center gap-4 mb-3'>
        <Image
          src={Profile}
          width={150}
          height={150}
          alt="Picture of the author"
        />
        <span>
          <h3>My Profile</h3>
          <p className=' text-sm font-normal'>ID #000000</p>
        </span>

      </div>
      <div>
        <ul className='flex flex-col items-center leading-10'>
          <li> <Link href="/profile" >Edit Profile</Link></li>
          <li> <Link href="/profile/idverfication" >ID Verfication</Link></li>
          <li> <Link href="/profile/matche" >Improve Matches</Link></li>
          <li> <Link href="/profile/report" >Report Issue</Link></li>
          <li> <Link href="/profile/orderreceiept" >Order Receipts</Link></li>
          <li> <Link href="/profile/booking" >My Booking</Link></li>
          <li> <Link href="/profile/mymatches" >My Matches</Link></li>
          <li> <Link href="/profile/listing" >Saved Listings</Link></li>
        </ul>
      </div>
    </aside>


  )
}
