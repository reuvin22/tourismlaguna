import React from "react";
import Table from "../../../component/Table";
import { TableContext } from "../../../context/context";
import Button from "../../../component/Button";
function Reports() {
  const header = ["Report ID", "Issue", "Department", "Email"];

  const data = ["012OK391K", "Bad Management", "IT DEPARTMENT", "reuvin@gmail.com"];
  return (
  <div className="w-full">
      <h1 className="text-center font-bold text-3xl">Reports</h1>
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
  )
}

export default Reports;
