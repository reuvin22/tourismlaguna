import React from 'react'

function Cards({title, img, numbers}) {
  return (
    <div className='grid border-2 rounded-lg py-5 px-10 gap-2 bg-[#F9EFEF]'>
        <h1 className='text-2xl font-bold'>{title}</h1>
        <div className='flex gap-5 justify-center items-center'>
            <span className='text-5xl font-bold'>{numbers}</span>
            <img src={img} alt="Card Icon" className='h-13 w-20'/>
        </div>
    </div>
  )
}

export default Cards