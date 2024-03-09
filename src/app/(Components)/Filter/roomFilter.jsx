
'use client'
import React, { useState } from 'react'

const RoomFilter = () => {
    const [form, setForm] = useState({
        type: null,
        rooms: null,
        washrooms: null,
        min: null,
        max: null,
        gym: null,
        parking: null,
    })

    console.log("Form", form)
    return (
        <div className='bg-gradient-to-r from-cyan-200 to-blue-200 w-3/12 min-w-64 max-w-60 py-3' style={{ backgroundImage: "linear-gradient(to right, #BBEEE0 , #B6D0FE)" }}>
            <div className='flex flex-col items-center justify-center gap-2' >
                <h3 className='text-4xl font-extrabold w-11/12'>Filter</h3>
                <hr className='w-full h-1.5 bg-blue-400 mb-2' />
            </div>
            <div className='flex flex-col items-center justify-center '>
                <div className='w-11/12 flex flex-col gap-3'>
                    <div>
                        <h4 className="pb-2 font-bold">Type</h4>
                        <select className='bg-gray-200 rounded-full outline-none w-11/12' onClick={(e) => setForm({ ...form, type: e.target.value })}>
                            <option>Option</option>
                            <option value="studio">studio</option>
                            <option value="flat">flat</option>
                            <option value="Rk">Rk</option>
                        </select>
                    </div>
                    <div className='flex items-center gap-3'>
                        <span className=' w-1/2 inline-block'>
                            <label htmlFor="rooms" className="pb-2 font-bold">Rooms</label>
                            <input type="number" name='rooms' value={form.rooms} onChange={(e) => setForm({ ...form, rooms: e.target.value })} className='bg-gray-200 rounded-full outline-none w-full' />
                        </span>
                        <span className='w-1/2 inline-block'>
                            <label htmlFor="rooms" className="pb-2 font-bold">washrooms</label>
                            <input type="number" name='rooms' value={form.washrooms} onChange={(e) => setForm({ ...form, washrooms: e.target.value })} className='bg-gray-200 rounded-full outline-none w-full' />
                        </span>
                    </div>
                    <div>
                        <h4 className="pb-2 font-bold">Price</h4>
                        <input type="number" className='bg-gray-200 rounded-full outline-none w-11/12' />
                    </div>
                    <div>
                        <h4 className="pb-2 font-bold">Price</h4>
                        <div className='flex  w-full gap-5'>
                            <span className='flex flex-col w-1/2'>
                                <label htmlFor="min">Min</label>
                                <input type="number" name='min' value={form.min} onChange={(e) => setForm({ ...form, min: e.target.value })} className='bg-gray-200 rounded-full outline-none w-full' />
                            </span>
                            <span className='flex flex-col w-1/2'>
                                <label htmlFor="max">MAx</label>
                                <input type="number" name='max' value={form.max} onChange={(e) => setForm({ ...form, max: e.target.value })} className='bg-gray-200 rounded-full outline-none w-full' />
                            </span>
                            {/* <input type="number" className='bg-gray-200 rounded-full outline-none w-1/2' /> */}
                        </div>


                    </div>
                    <div>
                        <h4 className="pb-2 font-bold">Need</h4>
                        <span className='flex items-center w-full gap-5'>
                            <input type="checkbox" name="parking" value={form.gym} onClick={(e) => setForm({ ...form, gym: !form.parking })} className='bg-gray-200 rounded-full outline-none' />
                            <label htmlFor="parking">Gym</label>
                        </span>
                        <span className='flex items-center w-full gap-5'>
                            <input type="checkbox" name='parking' value={form.parking} onClick={(e) => setForm({ ...form, parking: !form.parking })} className='bg-gray-200 rounded-full outline-none' />
                            <label htmlFor="parking" >parking</label>
                        </span>
                    </div>

                    <button className='bg-gray-200 border border-spacing-1 border-black rounded-full px-5 py-2 mt-2 float-right'>Apply</button>
                    <hr className='w-full h-1.5 bg-blue-400 mb-2' />
                </div>
            </div>
        </div>
    )
}

export default RoomFilter
