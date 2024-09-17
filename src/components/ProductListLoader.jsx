import React from "react";

const ProductListLoader = () => {
  const numbers = Array.from({ length: 4 }, (_, i) => i + 1);

  return (
    <>
      {numbers.map((number) => (
        <tr
          key={number}
          className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
        >
          <th
            scope="row"
            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            <div className="h-4 bg-gray-200 rounded-md dark:bg-gray-700 w-8 animate-pulse"></div>
          </th>
          <td className="px-6 py-4">
            <div className="h-4 bg-gray-200 rounded-md dark:bg-gray-700 w-24 animate-pulse"></div>
          </td>
          <td className="px-6 py-4 text-end">
            <div className="h-4 bg-gray-200 rounded-md dark:bg-gray-700 w-full animate-pulse"></div>
          </td>
          <td className="px-6 py-4 text-end">
            <div className="h-4 bg-gray-200 rounded-md dark:bg-gray-700 w-full animate-pulse mb-1"></div>
            <div className="h-4 bg-gray-200 rounded-md dark:bg-gray-700 w-full animate-pulse"></div>
          </td>
          <td className="px-6 py-4 text-right">
            <div className="inline-flex rounded-md shadow-sm" role="group">
              <div className="h-10 w-10 bg-gray-200 rounded-s-lg dark:bg-gray-700 animate-pulse"></div>
              <div className="h-10 w-10 bg-gray-200 rounded-e-lg dark:bg-gray-700 animate-pulse"></div>
            </div>
          </td>
        </tr>
      ))}
    </>
  );
};

export default ProductListLoader;
