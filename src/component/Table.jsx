import React, { useState } from "react";
import { ModalContext, useModalContext, useTableContext } from "../context/context";
import Button from "./Button";
import Modal from "./Modal";

function Table() {
  const context = useTableContext();
  const modal = useModalContext()
  const [modalOpen, setModalOpen] = useState(false)
  const [openData, setOpenData] = useState(false)
  const handleModalOpen = () => {
    setModalOpen(!modalOpen)
  }
  const handleClickData = (id) => {
    console.log(id)
  }
  const handleModal = () => {
    setModalOpen(!modalOpen)
  }


  console.log('THIS IS MODAL OPEN: ', modalOpen)

  return (
    <div>
        <div className="mb-2 flex justify-end gap-2">
          <input type="text" placeholder="Search...." className="px-5"/>
          {context.modals && (
          <Button
            bgColor='green'
            btnSize='normalSize'
            btnIcon='register'
            onClick={() => handleModal()}
          >
            Add
          </Button>
          )}
        </div>
      {modalOpen === true && (
           <ModalContext.Provider
            value={{
             formInputs: context?.formInput,
             formDesign: context?.formDesign,
             title: context?.title,
             modalButtons: context?.modalButtons,
             setModalOpen,
           }}
         >
          <Modal />
        </ModalContext.Provider>
      )}
      {context?.updateModal && (
          <ModalContext.Provider
              value={{
                formInputs: context?.formInput,
                formDesign: context?.formDesign,
                title: context?.title,
                modalButtons: context?.modalButtons,
                setModalOpen,
              }}
          >
          <Modal />
        </ModalContext.Provider>
      )}
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
          <tr
            className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider cursor-pointer ${
              context?.hoverClick ? 'text-gray-500' : 'bg-gray-50 text-gray-500'
            } hover:bg-gray-400`}
             onClick={() => handleClickData(context?.tableData)}
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
              <div className="flex justify-center items-center">
                <Button
                  bgColor='red'
                >
                Delete
              </Button>
            </div>
            )}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
