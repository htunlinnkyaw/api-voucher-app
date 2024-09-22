import React from "react";

const VoucherListLoader = () => {
  const numbers = Array.from({ length: 4 }, (_, i) => i + 1);

  return (
    <>
      {numbers.map((number) => (
        <tr
          key={number}
          className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 animate-pulse"
        >
          <td className="px-6 py-4">
            <div className="h-4 bg-gray-200 rounded dark:bg-gray-700 w-24"></div>
          </td>
          <th
            scope="row"
            className="px-6 py-4 font-medium text-stone-900 whitespace-nowrap dark:text-white"
          >
            <div className="h-4 bg-gray-200 rounded dark:bg-gray-700 w-32"></div>
          </th>
          <td className="px-6 py-4">
            <div className="h-4 bg-gray-200 rounded dark:bg-gray-700 w-40"></div>
          </td>
          <td className="px-6 py-4 text-end">
            <div className="h-4 bg-gray-200 rounded dark:bg-gray-700 w-40 ml-auto"></div>
          </td>
          <td className="px-6 py-4 text-end">
            <div className="inline-flex rounded-md shadow-sm" role="group">
              <div className="h-10 w-10 bg-gray-200 rounded dark:bg-gray-700"></div>
            </div>
          </td>
        </tr>
      ))}
    </>
  );
};

export default VoucherListLoader;
