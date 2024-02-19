import { Select } from 'flowbite-react'
import React from 'react'

const Filter = () => {
  return (
    <div className='bg-gradient-to-r from-cyan-200 to-blue-200 w-3/12 max-w-60 py-3' style={{ backgroundImage: "linear-gradient(to right, #BBEEE0 , #B6D0FE)" }}>
      <div className='flex flex-col items-center justify-center gap-2' >
        <h3 className='text-4xl font-extrabold w-11/12'>Filter</h3>
        <hr className='w-full h-1.5 bg-blue-400 mb-2' />
      </div>
      <div className='flex flex-col items-center justify-center '>
        <div className='w-11/12 flex flex-col gap-3'>
          <div>
            <h4 className="pb-2 font-bold">Localities</h4>
            <select className='bg-gray-200 rounded-full outline-none w-11/12'>
              <option>Option</option>
              <option value="first">First</option>
              <option value="first">First</option>
              <option value="first">First</option>
              <option value="first">First</option>
            </select>
          </div>
          <div>
            <h4 className="pb-2 font-bold">Amenities</h4>
            <select className='bg-gray-200 rounded-full outline-none w-11/12' >
              <option>Option</option>
              <option value="first">First</option>
              <option value="first">First</option>
              <option value="first">First</option>
              <option value="first">First</option>
            </select>
          </div>
          <div>
            <h4 className="pb-2 font-bold">Price</h4>
            <div className='flex flex-col w-full gap-5'>
              <select className='bg-gray-200 rounded-full outline-none w-11/12' >
                <option>Min</option>
                <option value="first">First</option>
                <option value="first">First</option>
                <option value="first">First</option>
                <option value="first">First</option>
              </select>
              <select className='bg-gray-200 rounded-full outline-none w-11/12' >
                <option>Max</option>
                <option value="first">First</option>
                <option value="first">First</option>
                <option value="first">First</option>
                <option value="first">First</option>
              </select>
            </div>

            <button className='bg-gray-200 border border-spacing-1 border-black rounded-full px-5 py-2 mt-2 float-right'>Apply</button>
          </div>
          <div>
            <h4 className="pb-2 font-bold">Sharing</h4>
            <select className='bg-gray-200 rounded-full outline-none w-11/12' >
              <option>Option</option>
              <option value="first">First</option>
              <option value="first">First</option>
              <option value="first">First</option>
              <option value="first">First</option>
            </select>
          </div>
          <hr className='w-full h-1.5 bg-blue-400 mb-2' />
        </div>
      </div>
    </div>
  )
}

export default Filter
