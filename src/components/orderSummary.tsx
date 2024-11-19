"use client";
import React from "react";
import { useCart } from "./providers/cart-provider";

const OrderSummary = () => {
  const { total } = useCart();
  return (
    <div className="bg-orange-50 p-6 overflow-hidden mb-40 justify-center items-center pt-14 h-fit w-full rounded-xl">
      {/* heading */}
      <h1 className="scroll-m-20 text-lg capitalize lg:text-2xl text-black font-semibold tracking-tight">
        Order Summary
      </h1>
      <div className="divider mt-0 mb-1"></div>
      {/* Pricing */}
      <div className="text-sm lg:text-lg font-medium tracking-tight text-black">
        {/* product prices */}
        <div className="flex justify-between items-center capitalize">
          <h2>Sub Total</h2>
          <h2>${total.toFixed(2)}</h2>
        </div>
        {/* delivery charges  */}
        <div className="flex justify-between items-center capitalize">
          <h2>Delivery Charges</h2>
          <h2>TBD</h2>
        </div>
        {/* Service charges  */}
        <div className="flex justify-between items-center capitalize">
          <h2>Sales Tax</h2>
          <h2>TBD</h2>
        </div>
      </div>
      {/* divider */}
      <div className="divider mt-0 mb-1"></div>
      {/* estimated total */}
      <div className="flex justify-between items-center text-sm lg:text-lg tracking-tight text-gray-800 font-semibold capitalize">
        <h2>Estimated Total</h2>
        <h2>${total.toFixed(2)}</h2>
      </div>
      {/* divider */}
      <div className="divider mt-4 mb-1"></div>
      {/* checkout button */}
      <div className="flex justify-center pb-8 items-center w-full">
        <button className="bg-orange-500 text-white hover:text-orange-500 hover:bg-transparent lg:text-base duration-300 scroll-m-20 text-base hover:shadow-md font-semibold tracking-tight p-4 capitalize rounded-xl px-8 mt-3">
          Proceed To Checkout
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
