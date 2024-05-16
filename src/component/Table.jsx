import React from 'react'
import { useTableContext } from '../context/context'

function Table() {
    const context = useTableContext()
  return (
    <div>
        <table>
            {context?.tableHeader.map(tblHeader => {
                return (
                    <tr>
                        <th>{tblHeader}</th>
                    </tr>
                )
            })}
            {context?.tableData.map((tblData, tblIndex) => {
                {tblData.length !== 0? (
                    <tr>
                        <td key={tblIndex}>{tblData}</td>
                    </tr>
                ) : (
                    <div>
                        <span>No Record Found</span>
                    </div>
                )}
            })}
        </table>
    </div>
  )
}

export default Table