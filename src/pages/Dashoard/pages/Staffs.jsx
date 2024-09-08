import React from "react";
import { ModalContext, TableContext, useModalContext, useNavigationContext, useTableContext } from "../../../context/context";
import Table from "../../../component/Table";
import Button from "../../../component/Button";
import Modal from "../../../component/Modal";
function Staffs() {
  const context = useNavigationContext();
  const modal = useModalContext()
  const table = useTableContext()
  const header = ["name", "surname", "lastname", "contact Number", "email", "role", "actions"];

  const data = ["reuvin", "hernandez", "galosmo", "09126052161", "reuvin@gmail.com", "Staff"];

  const inputs = [
    {name:"name", type:"text", placeholder: "Enter Pogi"},
    {name:"name", type:"text", placeholder: "Enter Pogi"},
    {name:"name", type:"text", placeholder: "Enter Pogi"},
    {name:"name", type:"text", placeholder: "Enter Pogi"},
    {name:"name", type:"text", placeholder: "Enter Pogi"},
    {name:"name", type:"text", placeholder: "Enter Pogi"},
    {name:"name", type:"text", placeholder: "Enter Pogi"},
    {name:"name", type:"text", placeholder: "Enter Pogi"},
    {name:"name", type:"text", placeholder: "Enter Pogi"},
    {name:"name", type:"text", placeholder: "Enter Pogi"},
    {name:"name", type:"text", placeholder: "Enter Pogi"},
    {name:"name", type:"text", placeholder: "Enter Pogi"}
  ]

  return (
    <div className="w-full">
      <h1 className="text-center font-bold text-3xl">Staffs</h1>
        {/* {modal?.modalSet && (
          <div className={modal?.modalSet === false || null ? 'hidden': `w-full h-96 grid place-items-center absolute -ml-36 sm:-ml-0 md:-ml-0 mt-10`}>
            <div className="h-96 flex justify-center w-96 absolute'">
            <ModalContext.Provider value={{ 
              title: "Modal Form"
            }}>
                <Modal />
            </ModalContext.Provider>
          </div>
        </div>
        )} */}
      {table?.openData === false ? (
        <div className="min-h-96 min-w-[80%] mt-5">
          <TableContext.Provider
            value={{
              tableData: data,
              tableHeader: header,
              hoverClick: true,
              actions: true,
              modals: true,
              formInput: inputs,
              modalButtons: true,
              formDesign: "grid grid-cols-3 gap-4",
              title: 'STAFF REGISTRATION'
            }}
          >
            <Table />
          </TableContext.Provider>
        </div>
      ) : (
        <div>
          <div className="min-h-96 min-w-[80%] mt-5 shadow-lg border-black rounded-lg grid grid-cols-4 place-items-center">
            <span>First Name: <span>Reuvin</span></span>
            <span>Middle Name: <span>Reuvin</span></span>
            <span>Last Name: <span>Reuvin</span></span>
            <span>Contact Number: <span>Reuvin</span></span>
            <span>Address: <span>Qtqt</span></span>
            <span>Email Address: <span>reuvinhernandez22@gmail.com</span></span>
            <span>Civil Status: <span>Stingle</span></span>
            <span>Birthday: <span>Qtqt</span></span>
            <span>Age: <span>15</span></span>
            <span>Address: <span>Qtqt</span></span>
            <span>Address: <span>Qtqt</span></span>
            <span>Address: <span>Qtqt</span></span>
          </div>
          <div className="flex w-[100%] items-center justify-center gap-5 mt-3">
              <Button
                btnSize='normalSize'
                bgColor='green'
              >
              Update
              </Button>
              <Button
                btnSize='normalSize'
                bgColor='red'
              >
                Back
              </Button>
            </div>
        </div>
      )}
    </div>
  );
}

export default Staffs;
