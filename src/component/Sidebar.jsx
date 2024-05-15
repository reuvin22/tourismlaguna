import React from 'react';
import { useNavigationContext } from '../context/context';

function Sidebar() {
  const context = useNavigationContext();

  console.log(context?.activePage)
  return (
    <div className='bg-blue-800 w-60 border-2 h-[100vh]'>
      <div className='grid gap-20'>
        <div className='grid place-items-center border-2 w-full h-52'></div>
        <div className='grid place-items-center gap-10 px-5'>
          <button
            className='transition delay-75 duration-75 ease-in text-white font-poppins text-xl font-bold hover:bg-white w-full rounded-md h-12 hover:text-blue-800'
            onClick={context?.activePage({type: 'tab1'})}
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
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;