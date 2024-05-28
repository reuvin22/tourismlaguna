import React, { useState } from "react";
import { useNavigationContext } from "../context/context";
import { Link } from "react-router-dom";

function Sidebar() {
  const context = useNavigationContext();
  const [openPartAcc, setPartOpenAcc] = useState(false);
  const [openTourAcc, setTourOpenAcc] = useState(false);
  const handleTabClick = (data) => {
    context?.activePage(data);
    setPartOpenAcc(false);
    setTourOpenAcc(false);
  };
  const handleOpen = (data) => {
    context?.onOpenSidebar(data);
  };
  
  return (
    <div className="bg-gradient-to-r from-[#152259] to-blue-900 w-60 h-[100vh] overflow-y-hidden">
      {/* <img src='https://firebasestorage.googleapis.com/v0/b/projectimages-a2f47.appspot.com/o/image-removebg-preview%20(5).png?alt=media&token=e87a188b-4123-4845-85cf-2c9436f89753' className='h-8 w-8 sm:visible'/> */}
      <div className="grid gap-10">
        <div className="grid place-items-center w-full h-52 relative">
          <button
            onClick={() => handleOpen("closeSidebar")}
            className={`${context?.openSidebar ? "sm:visible" : "hidden"}`}
          >
            <img
              src="https://firebasestorage.googleapis.com/v0/b/projectimages-a2f47.appspot.com/o/x_white.png?alt=media&token=40ea64b8-9729-474a-915f-cc5fe3d2d520"
              alt="burger"
              className="absolute w-7 h-7 right-0 top-0 mt-3 mr-3 cursor-pointer"
            />
          </button>
          <div className="rounded-full bg-white w-32 h-32">
            <img src="https://firebasestorage.googleapis.com/v0/b/projectimages-a2f47.appspot.com/o/TMS%2FlagunaLogo.png?alt=media&token=f37b2e70-4d12-4e0f-8f67-2673b222b26b" />
          </div>
          <h1 className="font-bold font-poppins text-white text-xl">
            Lalawigan ng Laguna
          </h1>
        </div>
        <hr />
        <div className="grid place-items-center gap-4 px-5">
          <button
            className="transition delay-75 duration-75 ease-in text-white font-poppins text-xl font-bold hover:bg-white w-full rounded-md h-12 hover:text-blue-800"
            onClick={() => handleTabClick("tab1")}
          >
            Dashboard
          </button>
          <button
            className="transition delay-75 duration-75 ease-in text-white font-poppins text-xl font-bold hover:bg-white w-full rounded-md h-12 hover:text-blue-800"
            onClick={() => handleTabClick("tab2")}
          >
            Staffs
          </button>
          <button
            className="transition delay-75 duration-75 ease-in text-white font-poppins text-xl font-bold hover:bg-white w-full rounded-md h-15 hover:text-blue-800"
            onClick={() => setTourOpenAcc(!openTourAcc)}
          >
          </button>
          <button
            className="transition delay-75 duration-75 ease-in text-white font-poppins text-xl font-bold hover:bg-white w-full rounded-md h-12 hover:text-blue-800"
            onClick={() => setPartOpenAcc(!openPartAcc)}
          >
            <div className="flex justify-center items-center">
              <span className="">Sites</span>
            </div>
          </button>
          <button
            className="transition delay-75 duration-75 ease-in text-white font-poppins text-xl font-bold hover:bg-white w-full rounded-md h-12 hover:text-blue-800"
            onClick={() => handleTabClick("tab6")}
          >
            Human Resource
          </button>
          <button
            className="transition delay-75 duration-75 ease-in text-white font-poppins text-xl font-bold hover:bg-white w-full rounded-md h-12 hover:text-blue-800"
            onClick={() => handleTabClick("tab7")}
          >
            Reports
          </button>
          <button
            className="transition delay-75 duration-75 ease-in text-white font-poppins text-xl font-bold hover:bg-white w-full rounded-md h-12 hover:text-blue-800"
            onClick={() => handleTabClick("tab8")}
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
