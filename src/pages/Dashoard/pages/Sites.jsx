import React from 'react'
import Button from '../../../component/Button';
import { TableContext } from '../../../context/context';
import Table from '../../../component/Table';
function Sites() {
  const header = ["Site ID", "Site Name", "Location", "Staff Assigned", "Role", "actions"];

  const data = ["0OP1L2K39", "DIPALAWAN", "AURORA", "REUVIN HERNANDEZ", "ADMIN"];
  const inputs = [
    {name:"name", type:"text", placeholder: "Enter Site Name"},
    {name:"name", type:"text", placeholder: "Enter Barangay"},
    {name:"name", type:"text", placeholder: "Enter City"},
    {name:"name", type:"text", placeholder: "Enter Postal Code"},
    {name:"name", type:"text", placeholder: "Date Added"},
    {name:"name", type:"text", placeholder: "Enter Staff"},
    {name:"name", type:"text", placeholder: "Enter Staff Contact Number"},
    {name:"name", type:"text", placeholder: "Enter Reserve Staff"},
    {name:"name", type:"text", placeholder: "Enter Reserve Staff Contact Number"}
  ]
  return (
    <div className="w-full">
      <h1 className="text-center font-bold text-3xl">Sites</h1>
      <div className="min-h-96 min-w-[80%] mt-5">
        <TableContext.Provider
          value={{
            tableData: data,
            tableHeader: header,
            hoverClick: true,
            actions: true,
            modals: true,
            modalButtons: true,
            formInput: inputs,
            formDesign: "grid grid-cols-3 gap-4",
            title: 'ADD SITES'
          }}
        >
          <Table />
        </TableContext.Provider>
      </div>
    </div>
  )
}

export default Sites