import React from 'react'
import Button from '../../../component/Button';
import { TableContext } from '../../../context/context';
import Table from '../../../component/Table';
function Sites() {
  const header = ["Site ID", "Site Name", "Location", "Staff Assigned", "Role", "actions"];

  const data = ["0OP1L2K39", "DIPALAWAN", "AURORA", "REUVIN HERNANDEZ", "ADMIN"];
  return (
    <div className="w-full">
      <h1 className="text-center font-bold text-3xl">Sites</h1>
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
  )
}

export default Sites