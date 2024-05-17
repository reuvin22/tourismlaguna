import React from "react";
import { TableContext, useNavigationContext } from "../../../context/context";
import Table from "../../../component/Table";
import Button from "../../../component/Button";

function Staffs() {
  const context = useNavigationContext();
  const header = ["name", "surname", "lastname"];

  const data = ["reuvin", "hernandez", "galosmo"];

  const handleAdd = (data) => {
    context?.activePage(data);
  };

  return (
    <div className="w-full h-[100vh]">
      <h1 className="text-center font-bold text-3xl">Staffs</h1>
      <div className="min-h-96 min-w-[80%]">
        <div className="mb-2 flex justify-end items-end h-12">
          <Button
            btnIcon="register"
            btnSize="normalSize"
            bgColor="green"
            onClick={() => handleAdd("register")}
          >
            Add
          </Button>
        </div>
        <TableContext.Provider
          value={{
            tableData: data,
            tableHeader: header,
          }}
        >
          <Table />
        </TableContext.Provider>
      </div>
    </div>
  );
}

export default Staffs;
