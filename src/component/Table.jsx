import React from "react";
import { useTableContext } from "../context/context";

function Table() {
  const context = useTableContext();
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
          <tr
            className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider cursor-pointer ${
              context?.hoverClick ? 'text-gray-500' : 'bg-gray-50 text-gray-500'
            } hover:bg-gray-400`}
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
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
