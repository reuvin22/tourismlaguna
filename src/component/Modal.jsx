import React, { useState } from 'react'
import Form from './Form'
import { FormContext, useModalContext } from '../context/context'

function Modal() {
  const modalContext = useModalContext()
  return (
    <div className={modalContext?.modalSet === false ? 'hidden' : `w-full`}>
        <div className='border-2 w-[100%] h-96 border-black absolute z-10 bg-white rounded-lg'>
          <FormContext.Provider value={{ 
            initialFields: modalContext?.formInputs,
            onSubmit: (data) => handleSubmit(data),
            title: modalContext?.title
           }}>
          <Form />
          </FormContext.Provider>
        </div>
    </div>
  )
}

export default Modal