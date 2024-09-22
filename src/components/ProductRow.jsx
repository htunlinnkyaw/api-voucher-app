import React, { useState } from "react";
import { HiOutlinePencil, HiOutlineTrash } from "react-icons/hi";
import { useSWRConfig } from "swr";
import endpoint from "../constant/endpoint";

import { bouncy } from "ldrs";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import ShowDate from "./ShowDate";

bouncy.register();

const ProductRow = ({
  product: { id, product_name, price, created_at },
  index,
}) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const { mutate } = useSWRConfig();

  const handleDeleteBtn = async () => {
    setIsDeleting(true);
    await fetch(`${endpoint}/products/${id}`, {
      method: "DELETE",
    });
    mutate(`${endpoint}/products`);
    setIsDeleting(false);
    toast.success("Product Deleted Successfully");
  };

  return (
    <>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {index + 1}
        </th>
        <td className="px-6 py-4">{product_name}</td>
        <td className="px-6 py-4 text-end">${price}</td>
        <td className="px-6 py-4 text-end">
          <ShowDate timestamp={created_at} />
        </td>
        <td className="px-6 py-4 text-right">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <Link
              to={`/product/edit/${id}`}
              className="size-10 flex justify-center items-center text-lg font-medium text-stone-600 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
            >
              <HiOutlinePencil />
            </Link>

            <button
              onClick={handleDeleteBtn}
              type="button"
              className="size-10 flex justify-center items-center text-lg font-medium text-red-600 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-red-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
            >
              {isDeleting ? (
                <l-bouncy size="15" speed="1.75" color="red"></l-bouncy>
              ) : (
                <HiOutlineTrash />
              )}
            </button>
          </div>
        </td>
      </tr>
    </>
  );
};

export default ProductRow;
