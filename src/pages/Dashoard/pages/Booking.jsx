import React from 'react'

function Booking() {
  return (
    <div className='w-full grid mt-10'>
        <h1 className='text-center font-bold text-2xl font-poppins'>Booking</h1>
        <div className='flex justify-end'>
            <select className="border border-gray-300 bg-gray-100 text-sm w-60 px-3 py-2 focus:outline-none focus:border-gray-500 mb-2 rounded-md mr-10">
                <option value="2014">2014</option>
                <option value="2015">2015</option>
            </select>
        </div>
        <div className='w-full border-2 h-[600px] px-10 py-2 gap-5 flex'>
            <div className='h-full border-yellow-800 w-72 border-2 rounded-lg'>

            </div>
            <div className='h-full border-yellow-800 w-[70%] border-2 rounded-lg'>

            </div>
        </div>
    </div>
  )
}

export default Booking