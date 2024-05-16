import React, { useState } from 'react';
import { useNavigationContext } from '../context/context';
import { Link } from 'react-router-dom';

function Sidebar() {
  const context = useNavigationContext()
  const [openPartAcc, setPartOpenAcc] = useState(false)
  const [openTourAcc, setTourOpenAcc] = useState(false)

  const handleTabClick = (data) => {
    context?.activePage(data)
  }
  return (
    <div className='bg-gradient-to-r from-[#152259] to-blue-900 w-60 h-[100vh] sm:hidden overflow-y-hidden'>
      <div className='grid gap-10'>
        <div className='grid place-items-center w-full h-52'>
            <div className='rounded-full bg-white w-32 h-32'>
                <img src='https://firebasestorage.googleapis.com/v0/b/projectimages-a2f47.appspot.com/o/TMS%2FlagunaLogo.png?alt=media&token=f37b2e70-4d12-4e0f-8f67-2673b222b26b' />
            </div>
            <h1 className='font-bold font-poppins text-white text-xl'>Lalawigan ng Laguna</h1>
        </div>
        <hr />
        <div className='grid place-items-center gap-4 px-5'>
          <button
            className='transition delay-75 duration-75 ease-in text-white font-poppins text-xl font-bold hover:bg-white w-full rounded-md h-12 hover:text-blue-800'
            onClick={() => handleTabClick('tab1')}
          >
            Dashboard
          </button>
          <button
            className='transition delay-75 duration-75 ease-in text-white font-poppins text-xl font-bold hover:bg-white w-full rounded-md h-12 hover:text-blue-800'
            onClick={() => handleTabClick('tab2')}
          >
            Staffs
          </button>
          <button
            className='transition delay-75 duration-75 ease-in text-white font-poppins text-xl font-bold hover:bg-white w-full rounded-md h-15 hover:text-blue-800'
            onClick={() => setTourOpenAcc(!openTourAcc)}
          >
            <div className='flex justify-center items-center w-full h-12'>
              <span> Tour Package</span>
              {openTourAcc ? <img src="https://firebasestorage.googleapis.com/v0/b/projectimages-a2f47.appspot.com/o/minus.png?alt=media&token=a9cfa397-0aad-4d49-aa2b-9edde461e620" alt="Accordion" className='h-5 w-5 ml-10' /> : <img src="https://firebasestorage.googleapis.com/v0/b/projectimages-a2f47.appspot.com/o/plus.png?alt=media&token=5ea79c12-c236-4980-8782-7cc3660fea98" alt="Accordion" className='h-5 w-5 ml-10' />}
            </div>
          </button>
          <div className={`${openTourAcc ? 'visible' : 'hidden'} mt-[-5%] w-full bg-blue-500 rounded-lg`}>
            <button
              className='transition delay-75 duration-75 ease-in text-white font-poppins text-xl font-bold hover:bg-white w-full rounded-md h-12 hover:text-blue-800'
              onClick={() => handleTabClick('subPackage1')}
            >
              Local
            </button>
            <button
              className='transition delay-75 duration-75 ease-in text-white font-poppins text-xl font-bold hover:bg-white w-full rounded-md h-12 hover:text-blue-800'
              onClick={() => handleTabClick('subPackage2')}
            >
              International
            </button>
          </div>
          <button
            className='transition delay-75 duration-75 ease-in text-white font-poppins text-xl font-bold hover:bg-white w-full rounded-md h-12 hover:text-blue-800'
            onClick={() => handleTabClick('tab3')}
          >
            Booking
          </button>
            <button
              className='transition delay-75 duration-75 ease-in text-white font-poppins text-xl font-bold hover:bg-white w-full rounded-md h-12 hover:text-blue-800'
              onClick={() => setPartOpenAcc(!openPartAcc )}
            >
              <div className='flex justify-center items-center'>
              <span className='ml-12'>Partners</span>
              {openPartAcc ? <img src="https://firebasestorage.googleapis.com/v0/b/projectimages-a2f47.appspot.com/o/minus.png?alt=media&token=a9cfa397-0aad-4d49-aa2b-9edde461e620" alt="Accordion" className='h-5 w-5 ml-10' /> : <img src="https://firebasestorage.googleapis.com/v0/b/projectimages-a2f47.appspot.com/o/plus.png?alt=media&token=5ea79c12-c236-4980-8782-7cc3660fea98" alt="Accordion" className='h-5 w-5 ml-10' />}
              </div>
            </button>
          <div className={`${openPartAcc ? 'visible' : 'hidden'} h-24 gap-5 w-full bg-blue-500 mt-[-5%] rounded-lg`}>
            <button
              className='transition delay-75 duration-75 ease-in text-white font-poppins text-lg font-bold hover:bg-white w-full rounded-md h-12 hover:text-blue-800'
              onClick={() => handleTabClick('localPartners')}
            >
              Local Companies
            </button>
            <button
              className='transition delay-75 duration-75 ease-in text-white font-poppins text-md font-bold hover:bg-white w-full rounded-md h-12 hover:text-blue-800'
              onClick={() => handleTabClick('internationalPartners')}
            >
              International Companies
            </button>
          </div>
          <button
              className='transition delay-75 duration-75 ease-in text-white font-poppins text-xl font-bold hover:bg-white w-full rounded-md h-12 hover:text-blue-800'
              onClick={() => handleTabClick('tab6')}
            >
              Human Resource
            </button>
            <button
              className='transition delay-75 duration-75 ease-in text-white font-poppins text-xl font-bold hover:bg-white w-full rounded-md h-12 hover:text-blue-800'
              onClick={() => handleTabClick('tab7')}
            >
              Reports
            </button>
            <button
              className='transition delay-75 duration-75 ease-in text-white font-poppins text-xl font-bold hover:bg-white w-full rounded-md h-12 hover:text-blue-800'
              onClick={() => handleTabClick('tab8')}
            >
              Inquiries
            </button>
          {/* <Link to="/login">
            <button
              className='transition delay-75 duration-75 ease-in text-white font-poppins text-xl font-bold hover:bg-white w-52 rounded-md h-12 hover:text-blue-800'
            >
              Logout
            </button>
          </Link> */}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;