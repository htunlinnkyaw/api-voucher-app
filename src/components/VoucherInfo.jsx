import { useForm } from "react-hook-form";
import SaleForm from "./SaleForm";
import VoucherTable from "./VoucherTable";
import useRecordStore from "../stores/useRecordStore";
import endpoint from "../constant/endpoint";
import toast from "react-hot-toast";
import { tailspin } from "ldrs";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
tailspin.register();

const VoucherInfo = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { records, resetRecord } = useRecordStore();
  const [isSending, setIsSending] = useState(false);
  const nav = useNavigate();

  const onSubmit = async (data) => {
    const total = records.reduce((pv, cv) => pv + cv.cost, 0);
    const tax = total * 0.07;
    const netTotal = total + tax;

    const currentVoucher = { ...data, records, total, tax, netTotal };

    setIsSending(true);

    await fetch(`${endpoint}/vouchers`, {
      method: "POST",
      body: JSON.stringify(currentVoucher),
      headers: {
        "Content-Type": "application/json",
      },
    });

    toast.success("Voucher created successfully");

    resetRecord();
    reset();

    setIsSending(false);

    if (data.view_voucher) {
      nav("/voucher");
    }
  };

  const generateInvoiceNumber = () => {
    // Get the current date
    const date = new Date();

    // Format the date as YYYYMMDD
    const formattedDate = date.toISOString().slice(0, 10).replace(/-/g, "");

    // Generate a random number between 1000 and 9999
    const randomNumber = Math.floor(1000 + Math.random() * 9000);

    // Combine the formatted date and the random number
    const invoiceNumber = `INV-${formattedDate}-${randomNumber}`;

    return invoiceNumber;
  };

  return (
    <div>
      <form id="infoForm" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-5">
          <div className="col-span-1">
            <div>
              <label
                htmlFor="voucher_id"
                className={`block mb-2 text-sm font-medium ${
                  errors.voucher_id ? "text-red-500" : "text-gray-900"
                } dark:text-white`}
              >
                Voucher ID
              </label>
              <input
                type="text"
                id="voucher_id"
                {...register("voucher_id", {
                  required: true,
                })}
                defaultValue={generateInvoiceNumber()}
                className={`bg-gray-50 outline-none ${
                  errors.voucher_id
                    ? "border border-red-500 focus:ring-red-500 focus:border-red-500"
                    : "border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                } text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
              />
              {errors.voucher_id?.type === "required" && (
                <p className="text-red-500 mt-1 text-sm">
                  Voucher id is required
                </p>
              )}
            </div>
          </div>
          <div className="col-span-1">
            <div>
              <label
                htmlFor="voucher_id"
                className={`block mb-2 text-sm font-medium ${
                  errors.customer_name ? "text-red-500" : "text-gray-900"
                } dark:text-white`}
              >
                Customer Name
              </label>
              <input
                type="text"
                id="customer_name"
                {...register("customer_name", {
                  required: true,
                })}
                className={`bg-gray-50 outline-none ${
                  errors.customer_name
                    ? "border border-red-500 focus:ring-red-500 focus:border-red-500"
                    : "border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                } text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
              />
              {errors.customer_name?.type === "required" && (
                <p className="text-red-500 mt-1 text-sm">
                  Customer name is required
                </p>
              )}
            </div>
          </div>
          <div className="col-span-1">
            <div>
              <label
                htmlFor="voucher_id"
                className={`block mb-2 text-sm font-medium ${
                  errors.customer_email ? "text-red-500" : "text-gray-900"
                } dark:text-white`}
              >
                Customer Email
              </label>
              <input
                type="email"
                id="customer_email"
                {...register("customer_email", {
                  required: true,
                })}
                className={`bg-gray-50 outline-none ${
                  errors.customer_email
                    ? "border border-red-500 focus:ring-red-500 focus:border-red-500"
                    : "border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                } text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
              />
              {errors.customer_email?.type === "required" && (
                <p className="text-red-500 mt-1 text-sm">
                  Customer email is required
                </p>
              )}
            </div>
          </div>
          <div className="col-span-1">
            <div>
              <label
                htmlFor="voucher_id"
                className={`block mb-2 text-sm font-medium ${
                  errors.sale_date ? "text-red-500" : "text-gray-900"
                } dark:text-white`}
              >
                Sale Date
              </label>
              <input
                type="date"
                id="sale_date"
                {...register("sale_date", {
                  required: true,
                })}
                defaultValue={new Date().toISOString().slice(0, 10)}
                className={`bg-gray-50 outline-none ${
                  errors.sale_date
                    ? "border border-red-500 focus:ring-red-500 focus:border-red-500"
                    : "border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                } text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
              />
              {errors.sale_date?.type === "required" && (
                <p className="text-red-500 mt-1 text-sm">
                  Sale date is required
                </p>
              )}
            </div>
          </div>
        </div>
      </form>
      <SaleForm />
      <VoucherTable />

      <div className="mt-5 flex gap-3 items-center justify-end">
        <div className="flex items-center">
          <input
            {...register("all_correct")}
            required
            form="infoForm"
            id="all-correct"
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="all-correct"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Make sure all field are correct
          </label>
        </div>
        <div className="flex items-center">
          <input
            {...register("view_voucher")}
            id="view_voucher"
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="view_voucher"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            View vouchers after saving
          </label>
        </div>
        <button
          type="submit"
          form="infoForm"
          className="text-white bg-blue-700 inline-flex gap-3 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <span> Confrim Voucher</span>
          {isSending && (
            <l-tailspin
              size="20"
              stroke="5"
              speed="0.9"
              color="white"
            ></l-tailspin>
          )}
        </button>
      </div>
    </div>
  );
};

export default VoucherInfo;
