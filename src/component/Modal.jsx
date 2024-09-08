import React from 'react';
import Form from './Form';
import { FormContext, useModalContext, useTableContext } from '../context/context';
import Button from './Button';

function Modal() {
  const modalContext = useModalContext();
  const { formInputs, setModalOpen, modalButtons, title, formDesign } = modalContext;

  const handleClose = () => {
    setModalOpen(false);
  };

  return (
    <div className="w-full">
      <div className="border-2 w-[78%] py-10 border-black absolute z-10 bg-white rounded-lg">
        <div className="w-full grid place-items-center">
          <h1 className="text-3xl font-bold mt-5">{title}</h1>
        </div>
        <FormContext.Provider
          value={{
            initialFields: formInputs,
            onSubmit: (data) => console.log('Form submitted:', data),
            title,
            formDesign,
          }}
        >
          <Form />
        </FormContext.Provider>
         <div className={modalContext?.modalButtons ? 'flex justify-center items-center gap-10' : 'hidden'}>
         <Button bgColor="green" btnSize="normalSize" type="submit">
           Submit
         </Button>
         <Button bgColor="red" btnSize="normalSize" onClick={handleClose}>
           Back
         </Button>
       </div>
      </div>
    </div>
  );
}

export default Modal;
