import React from 'react'
import { FormContext } from '../../context/context'
import Form from '../../component/Form'
import Button from '../../component/Button'
import { Link } from 'react-router-dom'
function Login() {
    const initialFields = [
        {
            name: 'email',
            type: 'email',
            label: 'Email',
            placeholder: 'Enter Your Email'
          }, 
          {
            name: 'password',
            type: 'password',
            label: 'Password',
            placeholder: 'Enter Your Password'
          }, 
    ]
  return (
    <div className='w-full h-[100vh] grid place-items-center'>
        <div className='w-96 h-96 bg-slate-800 rounded-lg relative sm:w-80'>
            <div className='w-full h-24 grid place-items-center'>
                <div className='rounded-full grid place-items-center bg-white w-28 h-28 mb-12 absolute '>
                    <img src='https://firebasestorage.googleapis.com/v0/b/projectimages-a2f47.appspot.com/o/TMS%2FlagunaLogo.png?alt=media&token=f37b2e70-4d12-4e0f-8f67-2673b222b26b' />
                </div>
            </div>
            <h1 className='font-bold text-white text-2xl font-poppins text-center'>Welcome</h1>
            <div className='grid place-items-center gap-2'>
                <FormContext.Provider value={{ 
                    initialFields
                 }}>
                    <Form />
                </FormContext.Provider>
                <Button
                    bgColor='blue'
                    btnSize='fullWidth'
                >
                    Login
                </Button>
                <Link to='/forgotpass'><span className='text-blue-500 hover:text-blue-200'>Forgot Password</span></Link>
            </div>
        </div>
    </div>
  )
}

export default Login