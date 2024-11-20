"use client";
import React from "react";
import { useCart } from "./providers/cart-provider";

const OrderSummary = () => {
  const { total } = useCart();
  return (
    <div className="bg-orange-50 p-6 overflow-hidden rounded-xl mb-12 sm:mb-40 h-fit w-full">
      {/* Heading */}
      <h1 className="text-lg lg:text-2xl text-black font-semibold tracking-tight mb-4">
        Order Summary
      </h1>

      {/* Pricing */}
      <div className="text-sm lg:text-lg font-medium tracking-tight text-black mb-4">
        {/* Subtotal */}
        <div className="flex justify-between items-center capitalize mb-2">
          <h2>Sub Total</h2>
          <h2>${total.toFixed(2)}</h2>
        </div>
        {/* Delivery Charges */}
        <div className="flex justify-between items-center capitalize mb-2">
          <h2>Delivery Charges</h2>
          <h2>TBD</h2>
        </div>
        {/* Sales Tax */}
        <div className="flex justify-between items-center capitalize mb-2">
          <h2>Sales Tax</h2>
          <h2>TBD</h2>
        </div>
      </div>

      {/* Divider */}
      <div className="divider my-2"></div>

      {/* Estimated Total */}
      <div className="flex justify-between items-center text-sm lg:text-lg tracking-tight text-gray-800 font-semibold capitalize mb-4">
        <h2>Estimated Total</h2>
        <h2>${total.toFixed(2)}</h2>
      </div>

      {/* Divider */}
      <div className="divider my-4"></div>

      {/* Checkout Button */}
      <div className="flex justify-center pb-8">
        <button className="bg-orange-500 text-white hover:text-orange-500 hover:bg-transparent lg:text-base duration-300 text-base hover:shadow-md font-semibold tracking-tight p-4 capitalize rounded-xl mt-3 w-full sm:w-auto">
          Proceed To Checkout
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
