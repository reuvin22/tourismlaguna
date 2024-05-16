import React from 'react';
import { useNavigationContext } from '../context/context';
import { Link } from 'react-router-dom';

function Sidebar() {
  const context = useNavigationContext()
  const handleTabClick = (data) => {
    context?.activePage(data)
  }
  return (
    <div className='bg-blue-800 w-68 h-[100vh] sm:hidden'>
      <div className='grid gap-10'>
        <div className='grid place-items-center w-full h-52'>
            <div className='rounded-full bg-white w-32 h-32'>
                <img src='https://firebasestorage.googleapis.com/v0/b/projectimages-a2f47.appspot.com/o/TMS%2FlagunaLogo.png?alt=media&token=f37b2e70-4d12-4e0f-8f67-2673b222b26b' />
            </div>
            <h1 className='font-bold font-poppins text-white text-xl'>Lalawigan ng Laguna</h1>
        </div>
        <hr />
        <div className='grid place-items-center gap-10 px-5'>
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
            Staff's Registration
          </button>
          <button
            className='transition delay-75 duration-75 ease-in text-white font-poppins text-xl font-bold hover:bg-white w-full rounded-md h-12 hover:text-blue-800'
            onClick={() => handleTabClick('tab3')}
          >
            Booking
          </button>
          <button
            className='transition delay-75 duration-75 ease-in text-white font-poppins text-xl font-bold hover:bg-white w-full rounded-md h-12 hover:text-blue-800'
            onClick={() => handleTabClick('tab4')}
          >
            Partners
          </button>
          <Link to="/login">
            <button
              className='transition delay-75 duration-75 ease-in text-white font-poppins text-xl font-bold hover:bg-white w-52 rounded-md h-12 hover:text-blue-800'
            >
              Logout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;