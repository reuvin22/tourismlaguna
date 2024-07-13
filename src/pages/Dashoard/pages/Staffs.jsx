import React from "react";
import { ModalContext, TableContext, useModalContext, useNavigationContext } from "../../../context/context";
import Table from "../../../component/Table";
import Button from "../../../component/Button";
import Modal from "../../../component/Modal";
function Staffs() {
  const context = useNavigationContext();
  const modal = useModalContext()
  const header = ["name", "surname", "lastname", "contact Number", "email", "role", "action"];

  const data = [
    "reuvin", "hernandez", "galosmo", "09126052161", "reuvin@gmail.com", "Staff"
  ];

  const inputs = [
    {name:"name", type:"text", placeholder: "Enter Pogi"},
    {name:"name", type:"text", placeholder: "Enter Pogi"},
    {name:"name", type:"text", placeholder: "Enter Pogi"}
  ]

  return (
    <div className="w-full">
      <h1 className="text-center font-bold text-3xl">Staffs</h1>
      <div className="min-h-96 min-w-[80%] mt-5">
        <TableContext.Provider
          value={{
            tableData: data,
            tableHeader: header,
            hoverClick: true,
            actions: true
          }}
        >
          <Table />
        </TableContext.Provider>
      </div>
    </div>
  );
}

export default Staffs;
