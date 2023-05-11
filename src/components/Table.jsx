import React from "react";

import Image from "next/image";

import { DotsIcon } from "../assets/icons/dotsIcon";
import SearchInput from "./SearchInput";

function Table({ columns, data }) {
  return (
    <div className="p-6 bg-ByeWindBackground mt-6 rounded-[16px] w-full overflow-x-auto">
      <div className="flex flex-wrap flex-row justify-between items-center mb-[16px]">
        <p className="text-lg font-semibold text-ByeWindBlack">
          Project Spending
        </p>
        <div className="flex flex-row items-center justify-between w-[196px]">
          <SearchInput />
          <DotsIcon />
        </div>
      </div>
      <div className="table-responsive">
        <table className="table-fixed w-full">
          <thead>
            <tr className="border-b border-ByeWindGrey-dark">
              {columns.map((column, index) => (
                <th
                  key={index}
                  className="text-left text-xs text-ByeWindGrey-dark py-4"
                >
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                {columns.map((column, index) => (
                  <td key={index} className="text-xs py-4">
                    <div className="flex items-center space-x-2">
                      {row[column.field]?.avatar && (
                        <Image
                          src={row[column.field]?.avatar}
                          alt={row[column.field].name}
                          width={24}
                          height={24}
                        />
                      )}
                      <span>
                        {row[column.field]?.name || row[column.field]}
                      </span>
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
