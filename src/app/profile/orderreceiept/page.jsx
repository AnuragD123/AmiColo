"use client";
import React, { useEffect, useState } from "react";
import { FaRegFilePdf } from "react-icons/fa6";
import axios from "axios";

const OrderReceipt = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const fetch_orders = async () => {
      const response = await axios.get(`/api/user/get_orders`);
      if (response.status === 200) {
        setOrders(response.data.data);
      } else {
        console.log(response.data.error);
      }
    };
    fetch_orders();
  }, []);

  return (
    <div className=" flex-1 p-2 flex flex-col items-center gap-4">
      <p
        className=" w-4/5 text-center text-3xl text-white font-extrabold py-3"
        style={{
          backgroundImage: "linear-gradient(#EF8463, #7170F5 )",
          clipPath:
            "polygon(3% 0%, 97% 0%, 100% 50%, 97% 100%, 3% 100%, 0% 50%)",
        }}
      >
        Order Receipts
      </p>
      {orders.length > 0 ? (
        <div className="w-full mt-16 flex flex-col gap-8">
          {orders.map((order, index) => (
            <div
              key={order.id}
              className="border-b border-t border-gray-200 bg-white shadow-sm sm:rounded-lg sm:border"
            >
              <div className="flex items-center border-b border-gray-200 p-4 sm:grid sm:grid-cols-4 sm:gap-x-6 sm:p-6">
                <dl className="grid flex-1 grid-cols-2 gap-x-6 text-sm sm:col-span-3 sm:grid-cols-3 lg:col-span-2">
                  <div>
                    <dt className="font-medium text-gray-900">Order Id</dt>
                    <dd className="mt-1 text-gray-500">{order.id}</dd>
                  </div>

                  <div>
                    <dt className="font-medium text-gray-900">Total amount</dt>
                    <dd className="mt-1 font-medium text-gray-900">
                      {order.price}
                    </dd>
                  </div>
                </dl>

                <div className="hidden lg:col-span-2 lg:flex lg:items-center lg:justify-end lg:space-x-4">
                  <a
                    href={order.href}
                    className="flex items-center justify-center rounded-md border border-gray-300 bg-white px-2.5 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    <span>View Order</span>
                    <span className="sr-only">{order.number}</span>
                  </a>
                  <a
                    href={order.invoiceHref}
                    className="flex items-center justify-center rounded-md border border-gray-300 bg-white px-2.5 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    <span>View Invoice</span>
                    <span className="sr-only">for order {order.number}</span>
                  </a>
                </div>
              </div>

              {/* Products */}
              <h4 className="sr-only">Items</h4>
              {/* <ul role="list" className="divide-y divide-gray-200">
                {order.products.map((product) => (
                  <li key={product.id} className="p-4 sm:p-6">
                    <div className="flex items-center sm:items-start">
                      <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-gray-200 sm:h-40 sm:w-40">
                        <img
                          src={product.imageSrc}
                          alt={product.imageAlt}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="ml-6 flex-1 text-sm">
                        <div className="font-medium text-gray-900 sm:flex sm:justify-between">
                          <h5>{product.name}</h5>
                          <p className="mt-2 sm:mt-0">{product.price}</p>
                        </div>
                        <p className="hidden text-gray-500 sm:mt-2 sm:block">
                          {product.description}
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 sm:flex sm:justify-between">
                      <div className="mt-6 flex items-center space-x-4 divide-x divide-gray-200 border-t border-gray-200 pt-4 text-sm font-medium sm:ml-4 sm:mt-0 sm:border-none sm:pt-0">
                        <div className="flex flex-1 justify-center">
                          <a
                            href={product.href}
                            className="whitespace-nowrap text-indigo-600 hover:text-indigo-500"
                          >
                            View product
                          </a>
                        </div>
                        <div className="flex flex-1 justify-center pl-4">
                          <a
                            href="#"
                            className="whitespace-nowrap text-indigo-600 hover:text-indigo-500"
                          >
                            Buy again
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul> */}
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <FaRegFilePdf className="text-9xl text-gray-500" />
          <p className="text-2xl text-gray-500">No orders yet</p>
        </div>
      )}
    </div>
  );
};

export default OrderReceipt;
