import React from 'react'

function Cards({title, icon, numbers}) {
  return (
    <div className='grid border-2 rounded-lg py-5 px-10 gap-2 bg-[#F9EFEF]'>
        <h1 className='text-2xl font-bold'>{title}</h1>
        <div className='flex gap-5'>
            <span className='text-4xl font-bold'>{numbers}</span>
            <img src={icon} alt="Card Icon" />
        </div>
    </div>
  )
}

export default Cards