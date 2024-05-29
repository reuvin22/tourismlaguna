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
          {context?.tableData.map((tblData) => {
            return (
              <tr>
                <td
                  key={tblData.id}
                  className={context?.hoverClick === true ? `px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-700 uppercase tracking-wider hover:bg-gray-400 cursor-pointer` : `px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider`}
                >
                  {tblData}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
