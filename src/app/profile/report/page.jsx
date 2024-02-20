"use client";
import React from 'react'
import { useState } from 'react'
const Report = () => {

    const [form, setForm] = useState({ idNunmber: "", issue: "" })
    return (
        <div className=' flex-1 p-2 flex flex-col items-center'>
            <p className=' w-4/5 text-center text-3xl text-white font-extrabold py-3' style={{ backgroundImage: "linear-gradient(#EF8463, #7170F5 )", clipPath: "polygon(3% 0%, 97% 0%, 100% 50%, 97% 100%, 3% 100%, 0% 50%)" }}>Report Issue</p>
            <div className='w-4/5 h-full flex flex-col items-center justify-center '>
                <div className='border border-black border-solid rounded-xl p-8'>
                    <div className='flex items-center justify-around gap-4 mb-5'>
                        <div className='w-1/2'>
                            <label htmlFor="id">ID Number</label>
                            <br />
                            <input type="text" className='w-full  rounded-3xl bg-gray-300' name='id'
                                onClick={(e) => setForm({ ...form, idNunmber: e.target.value })} />
                        </div>
                        <div className='w-1/2'>
                            <label htmlFor="issue">Issue Category</label>
                            <br />
                            <select className='w-full rounded-3xl bg-gray-300' name="gender">
                                <option
                                    onClick={(e) => setForm({ ...form, issue: e.target.value })}
                                    value="">first</option>
                                <option
                                    onClick={(e) => setForm({ ...form, issue: e.target.value })}
                                    value="">Se</option>
                                <option
                                    onClick={(e) => setForm({ ...form, issue: e.target.value })}
                                    value="">Th</option>
                            </select>
                        </div>
                    </div>
                    <div className='mb-5'>
                        <div className='w-full h-28'>
                            <label htmlFor="id">ID Number</label>
                            <br />
                            <input type="text" className='w-full h-full  rounded-3xl bg-gray-300' name='id'
                                onClick={(e) => setForm({ ...form, idNunmber: e.target.value })} />
                        </div>
                    </div>


                </div>

            </div>
        </div >
    )
}

export default Report
