import React from "react";
import { useNavigationContext } from "../../../context/context";
import { TableContext } from "../../../context/context";
import Button from "../../../component/Button";
import Table from "../../../component/Table";
function HumanResource() {
  const context = useNavigationContext();
  const header = ["staffId", "firstname", "surname", "lastname", "contact_number", "email", "site", "role"];

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

export default HumanResource;
