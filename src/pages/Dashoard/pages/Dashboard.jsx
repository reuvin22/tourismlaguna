import React from 'react'
import Cards from '../../../component/Cards'
import PieChart from '../../../component/PieChart'
import LineChart from '../../../component/LineChart'

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

  const pieChartData = [
    {
        title: "Visitor's Category",
        labels: ['Old', 'Children', 'Adult'],
        
        datasets: [
            {
                data: [300, 100, 50],
                backgroundColor: [
                    'red',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)'
                ],
                hoverOffset: 4,
            }
        ],
    },{
      title: "Visitor's Gender",
      labels: ['Male', 'Female'],
      datasets: [
          {
              data: [300, 100],
              backgroundColor: [
                  'rgb(54, 162, 235)',
                  'red',
              ],
              hoverOffset: 4,
          }
      ],
  },{
    title: "Visitor's Nationality",
    labels: ['Local', 'Foreign'],
    datasets: [
        {
            data: [300, 100],
            backgroundColor: [
                'rgb(54, 162, 235)',
                'red',
            ],
            hoverOffset: 4,
        }
    ],
}

];

  const currentDate = new Date();
  const labels = Array.from({ length: 7 }, (_, i) => {
    const date = new Date(currentDate);
    date.setFullYear(date.getFullYear() - i);
    return date.toLocaleString('en-US', { year: 'numeric' });
  });
  const data = {
    labels: labels,
    datasets: [{
      pointStyle: 'circle',
      label: 'Expenses',
      data: [65, 59, 80, 81, 56, 55, 40, 50,20,12,13],
      fill: false,
      pointBackgroundColor: 'rgb(75, 192, 192)',
      tension: 0.1
    },{
      pointStyle: 'circle',
      label: 'Profit',
      data: [50, 23, 28, 14, 56, 23, 98, 53,57,34,87],
      fill: false,
      pointBackgroundColor: 'red',
      tension: 0.1
    },{
      pointStyle: 'circle',
      label: 'Income',
      data: [23, 21, 65, 98, 76, 45, 65, 9,12,58,60],
      fill: false,
      pointBackgroundColor: 'orange',
      tension: 0.1
    }
  ]
  };

  return (
    <div className='w-full grid gap-y-5 sm:place-items-center'>
      <div className='flex gap-5 sm:grid'>
        <div className='grid gap-5 sm:place-items-center'>
          <div className='flex gap-5 sm:grid sm:gap-2 sm:w-72'> 
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
          <div className='flex gap-2 w-full relative sm:grid sm:w-72'>
            {pieChartData.map((data, index) => (
              <PieChart key={index} data={data} title={data.title}/>
            ))}
          </div>
        </div>
          <div className='rounded-lg py-5 px-10 gap-2 bg-[#F9EFEF] h-full w-56 sm:w-72'>
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
      <div className='flex gap-5 sm:grid'>
        <div className='rounded-lg py-5 px-10 gap-2 bg-[#F9EFEF] h-96 w-[66%] sm:h-80 sm:w-72'>
          <LineChart data={data} title="Annual Chart"/>
        </div>
        <div className='rounded-lg px-10 bg-[#F9EFEF] h-80 w-[32%] overflow-y-auto overflow-x-hidden sm:w-72'>
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