import useSWR from "swr";
import endpoint from "../constant/endpoint";
import { useForm } from "react-hook-form";
import useRecordStore from "../stores/useRecordStore";
import { useState } from "react";

const fetcher = (url) => fetch(url).then((res) => res.json());

const SaleForm = () => {
  const { data, isLoading, error } = useSWR(`${endpoint}/products`, fetcher);

  const { addRecord, records, changeQuantity } = useRecordStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const currentProduct = JSON.parse(data.product);
    const currentProductId = currentProduct.id;

    const isExisted = records.find(
      ({ product: { id } }) => currentProductId === id
    );

    if (isExisted) {
      changeQuantity(isExisted.id, data.quantity);
    } else {
      addRecord({
        id: Date.now(),
        product: currentProduct,
        quantity: data.quantity,
        cost: currentProduct.price * data.quantity,
        created_at: new Date().toISOString(),
      });
    }

    reset();
  };

  return (
    <div className="my-5 bg-white p-5 rounded-lg border">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid md:grid-cols-5 grid-cols-1 gap-5">
          <div className="col-span-2">
            <label
              htmlFor="product"
              className={`block mb-2 text-sm font-medium ${
                errors.product ? "text-red-500" : "text-gray-900"
              } dark:text-white`}
            >
              Select Your option
            </label>
            <select
              id="product"
              {...register("product", { required: true })}
              className={`bg-gray-50 outline-none ${
                errors.product
                  ? "border border-red-500 focus:ring-red-500 focus:border-red-500"
                  : "border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              } text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
            >
              <option value="">Choose a Product</option>

              {!isLoading &&
                data.map((product) => (
                  <option key={product.id} value={JSON.stringify(product)}>
                    {product.product_name}
                  </option>
                ))}
            </select>
            {errors.product?.type === "required" && (
              <p className="text-red-500 mt-1 text-sm">
                Product field is required
              </p>
            )}
          </div>
          <div className="col-span-2">
            <label
              htmlFor="quantity"
              className={`block mb-2 text-sm font-medium ${
                errors.quantity ? "text-red-500" : "text-gray-900"
              } dark:text-white`}
            >
              Quantity
            </label>
            <input
              type="number"
              id="quantity"
              {...register("quantity", { required: true })}
              className={`bg-gray-50 outline-none ${
                errors.product
                  ? "border border-red-500 focus:ring-red-500 focus:border-red-500"
                  : "border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              } text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
            />
            {errors.quantity?.type === "required" && (
              <p className="text-red-500 mt-1 text-sm">
                Quantity field is required
              </p>
            )}
          </div>
          <div className="col-span-1">
            <button
              type="submit"
              className="text-blue-700 w-full h-full hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
            >
              Add Product
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SaleForm;
