import React from "react";
import Button from "../../../component/Button";
import Table from "../../../component/Table";
import { TableContext } from "../../../context/context";
function Inquiries() {
  const header = ["Ticket No.", "Issue", "Department", "Subject", "Email"];

  const data = ["1", "Pogi", "Kwarto", "Super Pogi", "reuvin@gmail.com"];
  return (
    <div className="w-full">
      <h1 className="text-center font-bold text-3xl">Inquiries</h1>
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

export default Inquiries;
