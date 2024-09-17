import React from "react";

const ProductRowEmpty = () => {
  return (
    <>
      <tr className="bg-white border-b hidden last:table-row dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td
          colSpan={5}
          className="px-6 py-4 font-medium text-gray-500 text-center whitespace-nowrap dark:text-white"
        >
          There is no product
        </td>
      </tr>
    </>
  );
};

export default ProductRowEmpty;
