"use client";
import React from 'react'
import axios from 'axios'
import { toast, Toaster } from 'react-hot-toast'
import { useState } from 'react'
import { useUserContext } from '@/context/context';
const Report = () => {
    const { user } = useUserContext();
    console.log("USER", user)
    const [form, setForm] = useState({
        idNunmber: user?.id,
        issue: "",
        firstName: user?.first_name,
        lastName: user?.last_name,
        email: "support@amicolo.com",
        message: '',
        heading: 'Report',
        type: 'Report'


    })

    const handleSendMessage = async (e) => {
        e.preventDefault();
        const { data } = await axios.post('/api/contactUsEmail', { formData: form });
        if (data.ApiRes) {
            toast.success("Email Sent")
        }
    };

    return (
        <div className=' flex-1 p-2 flex flex-col items-center'>
            <Toaster />
            <p className=' w-4/5 text-center text-3xl text-white font-extrabold py-3' style={{ backgroundImage: "linear-gradient(#EF8463, #7170F5 )", clipPath: "polygon(3% 0%, 97% 0%, 100% 50%, 97% 100%, 3% 100%, 0% 50%)" }}>Report Issue</p>
            <div className='w-4/5 h-full flex flex-col items-center justify-center '>
                <div className='border border-black border-solid rounded-xl p-8'>
                    <div className='flex items-center justify-around gap-4 mb-5'>
                        <div className='w-1/2'>
                            <label htmlFor="id">ID Number</label>
                            <br />
                            <input type="text" readOnly={true} value={user?.id} placeholder='Enter Id Number' className='w-full  rounded-3xl bg-gray-300' name='id'
                                onChange={(e) => {
                                    const inputtext = e.target.value;
                                    setForm({ ...form, idNunmber: e.target.value })
                                }

                                } />
                        </div>
                        <div className='w-1/2'>
                            <label htmlFor="issue">Issue Category</label>
                            <br />
                            <select className='w-full rounded-3xl bg-gray-300' value={form.issue} htmlFor="issue" onChange={(e) => setForm({ ...form, issue: e.target.value })}>
                                <option name="issue"
                                    // onClick={(e) => setForm({ ...form, issue: e.target.value })}
                                    value="">Select issue</option>
                                <option name="issue"
                                    // onClick={(e) => setForm({ ...form, issue: e.target.value })}
                                    value="Issue with Payment">Issue with Payment</option>
                                <option name="issue"
                                    // onClick={(e) => setForm({ ...form, issue: e.target.value })}
                                    value="Issue with Booking">Issue with Booking</option>
                                <option name="issue"
                                    // onClick={(e) => setForm({ ...form, issue: e.target.value })}
                                    value="Issue with Login">Issue with Login</option>
                                <option name="issue"
                                    // onClick={(e) => setForm({ ...form, issue: e.target.value })}
                                    value="Report Community Violation">Report Community Violation</option>

                                <option name="issue"
                                    // onClick={(e) => setForm({ ...form, issue: e.target.value })}
                                    value="Other">Other</option>
                            </select>
                        </div>
                    </div>
                    <div className='f'>
                        <div className='w-full'>
                            <label htmlFor="text">Text</label>
                            <br />
                            <textarea className='w-full rounded-3xl bg-gray-300' value={form.message} placeholder='Enter here' name='text' rows="4" cols="50" onChange={(e) => setForm({ ...form, message: e.target.value })} >

                            </textarea>
                        </div>
                    </div>
                    <div className='w-full flex items-center justify-end  gap-3 mb-6 mt-3'>
                        <button className='px-4 py-2 rounded-xl bg-gray-200' onClick={handleSendMessage}> Send</button>
                        <button className='px-4 py-2 rounded-xl bg-gray-200' onClick={() => setForm({
                            idNunmber: "",
                            issue: "",
                            message: ''
                        })}> Discard</button>

                    </div>
                </div>

            </div >
        </div >
    )
}

export default Report
