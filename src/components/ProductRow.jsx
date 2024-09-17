import React from "react";
import { HiOutlinePencil, HiOutlineTrash } from "react-icons/hi";

const ProductRow = () => {
  return (
    <>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          1
        </th>
        <td className="px-6 py-4">Mac Book</td>
        <td className="px-6 py-4 text-end">$ 2999</td>
        <td className="px-6 py-4 text-end">
          <p className="text-xs">15 Sept 2024</p>
          <p className="text-xs">1:37 PM</p>
        </td>
        <td className="px-6 py-4 text-right">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button className="size-10 flex justify-center items-center text-lg font-medium text-stone-600 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
              <HiOutlinePencil />
            </button>

            <button
              type="button"
              className="size-10 flex justify-center items-center text-lg font-medium text-red-600 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-red-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
            >
              <HiOutlineTrash />
            </button>
          </div>
        </td>
      </tr>
    </>
  );
};

export default ProductRow;
