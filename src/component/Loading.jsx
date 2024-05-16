import React from 'react'

function Loading() {
  return (
    <div className='absolute w-full h-full bg-slate-200 grid place-items-center'>
        <div className='animate-pulse grid place-items-center gap-5'>
            <img src="https://firebasestorage.googleapis.com/v0/b/projectimages-a2f47.appspot.com/o/TMS%2FlagunaLogo.png?alt=media&token=f37b2e70-4d12-4e0f-8f67-2673b222b26b" alt="Loading Logo" className='h-60'/>
            <h1 className='text-4xl font-bold font-poppins'>Lalawigan ng Laguna</h1>
        </div>
    </div>
  )
}

export default Loading