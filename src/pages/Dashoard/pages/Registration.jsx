import React from "react";
import Button from "../../../component/Button";
import { Link, useNavigate } from "react-router-dom";
import { useNavigationContext } from "../../../context/context";

function Registration() {
  const context = useNavigationContext();
  const navigate = useNavigate()
  const handleTabClick = (data) => {
    context?.activePage(data);
  };

  const handleNavigate = () => {
    navigate('/dashboard')
  }
  return (
    <div className="w-full mt-5">
      <form>
        <div className="grid place-items-center gap-10">
          <h1 className="font-bold text-3xl">Staff Registration</h1>
          <div className="grid place-items-center gap-2">
            <div className="rounded-xl h-32 w-32 bg-slate-500"></div>
            <input type="file" name="user_photo" id="user_photo" />
          </div>
          <div className="grid grid-cols-3 gap-x-10 gap-y-5">
            <input
              type="text"
              placeholder="First Name"
              className="border border-gray-300 bg-gray-100 text-sm w-full px-3 py-2 focus:outline-none focus:border-gray-500 mb-2 rounded-md"
            />
            <input
              type="text"
              placeholder="Middle Name"
              className="border border-gray-300 bg-gray-100 text-sm w-full px-3 py-2 focus:outline-none focus:border-gray-500 mb-2 rounded-md"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="border border-gray-300 bg-gray-100 text-sm w-full px-3 py-2 focus:outline-none focus:border-gray-500 mb-2 rounded-md"
            />
            <input
              type="date"
              className="border border-gray-300 bg-gray-100 text-sm w-full px-3 py-2 focus:outline-none focus:border-gray-500 mb-2 rounded-md"
            />
            <input
              type="number"
              placeholder="Age"
              className="border border-gray-300 bg-gray-100 text-sm w-full px-3 py-2 focus:outline-none focus:border-gray-500 mb-2 rounded-md"
            />
            <select className="border border-gray-300 bg-gray-100 text-sm w-full px-3 py-2 focus:outline-none focus:border-gray-500 mb-2 rounded-md">
              <option>Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <input
              type="text"
              placeholder="Contact Number"
              className="border border-gray-300 bg-gray-100 text-sm w-full px-3 py-2 focus:outline-none focus:border-gray-500 mb-2 rounded-md"
            />
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 bg-gray-100 text-sm w-full px-3 py-2 focus:outline-none focus:border-gray-500 mb-2 rounded-md"
            />
            <input
              type="text"
              placeholder="Province"
              className="border border-gray-300 bg-gray-100 text-sm w-full px-3 py-2 focus:outline-none focus:border-gray-500 mb-2 rounded-md"
            />
            <input
              type="text"
              placeholder="Municipality/City"
              className="border border-gray-300 bg-gray-100 text-sm w-full px-3 py-2 focus:outline-none focus:border-gray-500 mb-2 rounded-md"
            />
            <input
              type="text"
              placeholder="Barangay"
              className="border border-gray-300 bg-gray-100 text-sm w-full px-3 py-2 focus:outline-none focus:border-gray-500 mb-2 rounded-md"
            />
            <input
              type="number"
              placeholder="Postal Code"
              className="border border-gray-300 bg-gray-100 text-sm w-full px-3 py-2 focus:outline-none focus:border-gray-500 mb-2 rounded-md"
            />
            <select className="border border-gray-300 bg-gray-100 text-sm w-full px-3 py-2 focus:outline-none focus:border-gray-500 mb-2 rounded-md">
              <option>Role</option>
              <option value="staff">Staff</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <div className="flex gap-5">
            <Button bgColor="green" btnIcon="submit" btnSize="normalSize">
              Submit
            </Button>
              <Button
                bgColor="blue"
                btnSize="normalSize"
              >
                <span className="h-5 w-5">&larr;</span>
                Back
              </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Registration;
