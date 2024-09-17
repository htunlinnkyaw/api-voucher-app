import React, { useState } from "react";
import useSWR, { useSWRConfig } from "swr";
import endpoint from "../constant/endpoint";
import { Link, useNavigate, useParams } from "react-router-dom";
import ProductEditLoader from "./ProductEditLoader";
import { useForm } from "react-hook-form";

import { tailspin } from "ldrs";
import toast from "react-hot-toast";

tailspin.register();

const fetcher = (url) => fetch(url).then((res) => res.json());

const ProductEditCard = () => {
  const { id } = useParams();

  const nav = useNavigate();

  const [isUpdate, setIsUpdating] = useState(false);

  const { data, error, isLoading } = useSWR(
    `${endpoint}/products/${id}`,
    fetcher
  );

  const { mutate } = useSWRConfig();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleEditProduct = async (formData) => {
    setIsUpdating(true);
    await fetch(`${endpoint}/products/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        product_name: formData.product_name,
        price: formData.product_price,
        created_at: new Date().toISOString(),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    mutate(`${endpoint}/products/${id}`);
    mutate(`${endpoint}/products`);

    setIsUpdating(false);

    if (formData.back_to_product_page) {
      nav("/product");
    }

    toast.success("Product Updated Successfully");
  };

  return (
    <section>
      <section className="mt-5">
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl mb-3 font-bold">Edit Product</h1>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At alias
            necessitatibus quos earum itaque.
          </p>

          {isLoading ? (
            <ProductEditLoader />
          ) : (
            <form className="mt-5" onSubmit={handleSubmit(handleEditProduct)}>
              <div className="mb-6">
                <label
                  htmlFor="product-name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Product Name
                </label>
                <input
                  type="text"
                  id="product-name"
                  {...register("product_name", {
                    required: true,
                    minLength: 5,
                    maxLength: 30,
                  })}
                  defaultValue={data.product_name}
                  placeholder="e.g Hosting Services"
                  className={`bg-gray-50 ${
                    errors.product_name
                      ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                      : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  } outline-none border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                />
                {errors.product_name?.type === "required" && (
                  <p className="text-red-500 mt-1 text-sm">
                    Product name is required
                  </p>
                )}
                {errors.product_name?.type === "minLength" && (
                  <p className="text-red-500 mt-1 text-sm">
                    Product name must be greater than 5 characters
                  </p>
                )}
                {errors.product_name?.type === "manLength" && (
                  <p className="text-red-500 mt-1 text-sm">
                    Product name must be less than 30 characters
                  </p>
                )}
              </div>
              <div className="mb-6">
                <label
                  htmlFor="product-price"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Product Price
                </label>
                <input
                  type="text"
                  id="product-price"
                  {...register("product_price", {
                    required: true,
                    min: 100,
                    max: 10000,
                  })}
                  defaultValue={data.price}
                  placeholder="e.g 2000"
                  className={`bg-gray-50 ${
                    errors.product_price
                      ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                      : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  } border outline-none  text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                />
                {errors.product_price?.type === "required" && (
                  <p className="text-red-500 mt-1 text-sm">
                    Product price is required
                  </p>
                )}
                {errors.product_price?.type === "min" && (
                  <p className="text-red-500 mt-1 text-sm">
                    Product price must be greater than 100 dollors
                  </p>
                )}
                {errors.product_price?.type === "max" && (
                  <p className="text-red-500 mt-1 text-sm">
                    Product price must be less than 10000 dollors
                  </p>
                )}
              </div>
              <div className="flex items-center mb-3">
                <input
                  id="link-checkbox"
                  type="checkbox"
                  required
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="link-checkbox"
                  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Make sure all field are correct
                </label>
              </div>
              <div className="flex items-center mb-3">
                <input
                  id="link-checkbox"
                  type="checkbox"
                  defaultChecked
                  value={true}
                  {...register("back_to_product_page")}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="link-checkbox"
                  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Back to Product List after saving
                </label>
              </div>
              <div>
                <Link
                  to={"/product"}
                  type="button"
                  className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                >
                  Cancel
                </Link>
                <button
                  type="submit"
                  className="text-white inline-flex items-center gap-1 justify-center bg-blue-600 border border-gray-300 focus:outline-none hover:bg-blue-700 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                >
                  <span>Update Product</span>
                  {isUpdate && (
                    <l-tailspin
                      size="20"
                      stroke="5"
                      speed="0.9"
                      color="white"
                    ></l-tailspin>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </section>
  );
};

export default ProductEditCard;
