import React, { useState } from "react";
import { ModalContext, useModalContext, useTableContext } from "../context/context";
import Button from "./Button";

function Table() {
  const context = useTableContext();
  const modal = useModalContext()
  const [modalOpen, setModalOpen] = useState(false)

  const handleModalOpen = () => {
    setModalOpen(!modalOpen)
    console.log(modal?.modalSet)
  }

  const handleModal = () => {
    modal?.modalSet(true)
  }

  console.log(modal?.modalSet)
  return (
    <div>
      <table className="min-w-full min-h-full divide-gray-200">
        <thead>
          <tr>
            {context?.tableHeader.map((tblHeader) => {
              return (
                <th className= 'px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                  {tblHeader}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <ModalContext.Provider value={{ 
            openModal: () => handleModal()
           }}>
          <tr
            className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider cursor-pointer ${
              context?.hoverClick ? 'text-gray-500' : 'bg-gray-50 text-gray-500'
            } hover:bg-gray-400`}
             onClick={() => handleModal()}
          >
            {context?.tableData.map((tblData) => {
              return (
                <td
                  key={tblData.id}
                  className="px-6 py-3 bg-transparent text-left text-xs font-medium uppercase tracking-wider"
                >
                  {tblData}
                </td>
              );
            })}
            {context?.actions === true && (
              <div className="flex gap-2 justify-center items-center">
                <Button>
                  Update
                </Button>
                <Button
                  bgColor='red'
                >
                Delete
              </Button>
            </div>
            )}
          </tr>
          </ModalContext.Provider>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
