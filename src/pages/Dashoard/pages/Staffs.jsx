import React from "react";
import { TableContext, useNavigationContext } from "../../../context/context";
import Table from "../../../component/Table";
import Button from "../../../component/Button";

function Staffs() {
  const context = useNavigationContext();
  const header = ["name", "surname", "lastname", "contact Number", "email", "role"];

  const data = ["reuvin", "hernandez", "galosmo", "09126052161", "reuvin@gmail.com", "Staff"];

  const handleAdd = (data) => {
    context?.activePage(data);
  };

  return (
    <div className="w-full">
      <h1 className="text-center font-bold text-3xl">Staffs</h1>
      <div className="min-h-96 min-w-[80%] mt-5">
        <TableContext.Provider
          value={{
            tableData: data,
            tableHeader: header,
            hoverClick: true
          }}
        >
          <Table />
        </TableContext.Provider>
      </div>
    </div>
  );
}

export default Staffs;
