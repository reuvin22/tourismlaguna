import React from 'react'
import Cards from '../../../component/Cards'

function Dashboard() {
  const cards = [
    {
      title: "Total Visitors",
      numbers: "15"
    },
    {
      title: "Reservations",
      numbers: "10"
    },
    {
      title: "Partners",
      numbers: "13"
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
            <div className='grid border-2 rounded-lg py-5 px-10 gap-2 bg-[#F9EFEF] w-[34%] h-36'>
                <h1 className='text-lg font-bold'>Visitor's Gender</h1>
                <div className='flex gap-5'>
                    <span className='text-4xl font-bold'>16</span>
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

        </div>
        <div className='rounded-lg px-10 bg-[#F9EFEF] h-80 w-[27%]'>
          <div className='grid place-items-center mt-7'>
            <span className='font-bold font-poppins text-2xl'>New Staffs</span>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
                      <tr>
                          <th scope="col" class="px-6 py-3">
                          </th>
                          <th scope="col" class="px-6 py-3">
                              Name
                          </th>
                          <th scope="col" class="px-6 py-3">
                              Role
                          </th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr class="border-b">
                          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              Test
                          </th>
                          <td class="px-6 py-4">
                              John Doe
                          </td>
                          <td class="px-6 py-4">
                              Admin
                          </td>
                      </tr>
                      <tr class="border-b ">
                          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              Lala
                          </th>
                          <td class="px-6 py-4">
                              Jessica Doe
                          </td>
                          <td class="px-6 py-4">
                              Staff
                          </td>
                      </tr>
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