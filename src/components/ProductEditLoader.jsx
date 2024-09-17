import React from "react";

const ProductEditLoader = () => {
  return (
    <>
      <div className="mt-5">
        <div className="mb-6">
          <div className="h-4 bg-gray-200 rounded-md dark:bg-gray-700 w-36 mb-2 animate-pulse"></div>
          <div className="h-10 bg-gray-200 rounded-lg dark:bg-gray-700 w-full animate-pulse"></div>
        </div>

        <div className="mb-6">
          <div className="h-4 bg-gray-200 rounded-md dark:bg-gray-700 w-36 mb-2 animate-pulse"></div>
          <div className="h-10 bg-gray-200 rounded-lg dark:bg-gray-700 w-full animate-pulse"></div>
        </div>

        <div className="flex items-center mb-3">
          <div className="w-4 h-4 bg-gray-200 rounded dark:bg-gray-700 animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded-md dark:bg-gray-700 w-52 ms-2 animate-pulse"></div>
        </div>

        <div className="flex items-center mb-3">
          <div className="w-4 h-4 bg-gray-200 rounded dark:bg-gray-700 animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded-md dark:bg-gray-700 w-64 ms-2 animate-pulse"></div>
        </div>

        <div className="flex space-x-2">
          <div className="h-10 bg-gray-200 rounded-lg dark:bg-gray-700 w-24 animate-pulse"></div>
          <div className="h-10 bg-gray-200 rounded-lg dark:bg-gray-700 w-32 animate-pulse"></div>
        </div>
      </div>
    </>
  );
};

export default ProductEditLoader;
