import React from 'react'
import { TableContext, useNavigationContext } from '../../../context/context'
import Table from '../../../component/Table'
import Button from '../../../component/Button'

function Staffs() {
    const context = useNavigationContext()
    const header = [
        "name",
        "surname",
        "lastname",
    ]

    const data = [
        "reuvin",
        "hernandez",
        "galosmo"
    
    ]

    const handleAdd = (data) => {
        context?.activePage(data)
    }
    
  return (
    <div className='w-full grid place-items-center border-8 h-[100vh]'>
        <div className='grid gap-2 border-8 min-h-96 min-w-[80%]'>
            <div className='flex justify-end items-end h-12'>
                <Button
                    btnIcon='register'
                    btnSize='normalSize'
                    bgColor='green'
                    onClick={() => handleAdd('register')}
                >
                    Add
                </Button>
            </div>
                <TableContext.Provider value={{ 
                    tableData: data,
                    tableHeader: header
                }}>
                    <Table />
                </TableContext.Provider>
        </div>
    </div>
  )
}

export default Staffs