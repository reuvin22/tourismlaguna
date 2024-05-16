import React from 'react'
import Cards from '../../../component/Cards'
import { Chart } from 'chart.js'

function Dashboard() {
  const cards = [
    {
      img: "https://firebasestorage.googleapis.com/v0/b/projectimages-a2f47.appspot.com/o/image-removebg-preview%20(1).png?alt=media&token=8a4ff95b-cc9b-47df-a1ce-668e26eb0800",
      title: "Total Visitors",
      numbers: "15"
    },
    {
      img: "https://firebasestorage.googleapis.com/v0/b/projectimages-a2f47.appspot.com/o/reservation.png?alt=media&token=de233a9e-64c1-4289-a1aa-ad27b18ae950",
      title: "Reservations",
      numbers: "10"
    },
    {
      img: "https://firebasestorage.googleapis.com/v0/b/projectimages-a2f47.appspot.com/o/location.png?alt=media&token=43061b7a-d23e-4a98-851e-d5fd805c5f11",
      title: "Partners",
      numbers: "13"
    }
  ]

  const staffs = [
    {
      id: 1,
      img: 'https://firebasestorage.googleapis.com/v0/b/projectimages-a2f47.appspot.com/o/TMS%2FlagunaLogo.png?alt=media&token=f37b2e70-4d12-4e0f-8f67-2673b222b26b',
      name: "Reuvin Hernandez",
      role: "Admin"
    },
    {
      id: 2,
      img: 'https://firebasestorage.googleapis.com/v0/b/projectimages-a2f47.appspot.com/o/TMS%2FlagunaLogo.png?alt=media&token=f37b2e70-4d12-4e0f-8f67-2673b222b26b',
      name: "Rambo Tan",
      role: "Admin"
    },
    {
      id: 3,
      img: 'https://firebasestorage.googleapis.com/v0/b/projectimages-a2f47.appspot.com/o/TMS%2FlagunaLogo.png?alt=media&token=f37b2e70-4d12-4e0f-8f67-2673b222b26b',
      name: "Tan Rambo",
      role: "Staff"
    }
  ]

  return (
    <div className='w-full mt-10 grid gap-y-5'>
      <div className='flex gap-5'>
        <div className='grid gap-5'>
          <div className='flex gap-5'> 
            {cards.map(card => {
              return (
                <Cards 
                  img = {card.img}
                  title= {card.title}
                  numbers= {card.numbers}
                />
              )
            })}
          </div>
          <div className='flex'>
            <div className='grid border-2 rounded-lg py-5 px-10 gap-2 bg-[#F9EFEF] w-[66%]'>
                <h1 className='text-2xl font-bold'>Test</h1>
                <div className='flex gap-5'>
                    <span className='text-4xl font-bold'>15</span>
                    
                </div>
            </div>
            <div className='grid border-2 rounded-lg py-5 px-10 gap-2 bg-[#F9EFEF] w-[34%] h-52'>
                <h1 className='text-lg font-bold'>Visitor's Gender</h1>
                <div className='gap-5'>
                  <div class="mb-1 text-lg font-medium dark:text-white">Male</div>
                    <div class="flex w-full h-6 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                      <div class="progress-bar bg-blue-600 text-xs text-white whitespace-nowrap dark:bg-blue-500 transition duration-500 w-[75%] flex justify-center">
                          <span class="flex justify-center items-center rounded-full overflow-hidden">75%</span>
                      </div>
                  </div>
                  <div class="mb-1 text-lg font-medium dark:text-white">Female</div>
                    <div class="flex w-full h-6 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                      <div class="progress-bar bg-red-600 text-xs text-white whitespace-nowrap dark:bg-red-500 transition duration-500 w-[15%] flex justify-center">
                          <span class="flex justify-center items-center rounded-full overflow-hidden">15%</span>
                      </div>
                  </div>
                </div>
                
            </div>
          </div>
        </div>
          <div className='rounded-lg py-5 px-10 gap-2 bg-[#F9EFEF] h-full w-56'>
            <div className='grid'>
              <div className='flex gap-5'>
                <span className='font-bold font-poppins text-xl'>Visitor</span>
                <select className="border border-gray-300 bg-gray-100 text-sm w-54 px-3 focus:outline-none focus:border-gray-500 mb-2 rounded-md">
                      <option value="2014">2014</option>
                      <option value="2015">2015</option>
                  </select>
              </div>
            </div>
          </div>
      </div>
      <div className='flex gap-5'>
        <div className='rounded-lg py-5 px-10 gap-2 bg-[#F9EFEF] h-80 w-[66%]'>
          <canvas id="chart"></canvas>
        </div>
        <div className='rounded-lg px-10 bg-[#F9EFEF] h-80 w-[32%] overflow-y-auto overflow-x-hidden'>
          <div className='grid place-items-center py-3'>
            <span className='font-bold font-poppins text-2xl'>New Staffs</span>
            <div className="relative overflow-x-auto max-h-72 sm:rounded-lg">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                      <tr>
                          <th scope="col" className="px-6 py-3">
                            Image
                          </th>
                          <th scope="col" className="px-6 py-3">
                              Name
                          </th>
                          <th scope="col" className="px-6 py-3">
                              Role
                          </th>
                      </tr>
                  </thead>
                  <tbody>
                          {staffs.map((staffs, staffId) => {
                            return (
                              <tr key={staffId} className="border-b">
                                <td className="px-6 py-4"><img src={staffs.img} className='max-w-12 min-w-12'/></td>
                                <td className="px-6 py-4">{staffs.name}</td>
                                <td className="px-6 py-4">{staffs.role}</td>
                              </tr>
                            )
                          })}
                  </tbody>
              </table>
          </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard