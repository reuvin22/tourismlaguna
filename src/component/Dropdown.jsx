import React from "react";

function Dropdown({ btnName, onClick }) {
  return (
    <div className="grid place-items-center py-2 px-5 hover:bg-white cursor-pointer rounded-lg">
      <button onClick={onClick}>{btnName}</button>
    </div>
  );
}

export default Dropdown;
