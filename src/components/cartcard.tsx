import Image from "next/image";
import Link from "next/link";
import React from "react";

const Cartcard = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center pt-7 md:pt-1">
        <Image
          src="/pictures/emptyCart.jpg"
          alt="Empty Cart"
          width={400}
          height={400}
          className="h-40 w-96 object-contain"
        />
        <h2 className="mt-4 text-2xl font-semibold text-gray-700">
          Your Cart is Empty
        </h2>
        <p className="mt-2 px-6 text-gray-600 font-medium text-base leading-none">
          It looks like you have not added anything to your cart. Go ahead and
          explore top categories.
        </p>
        <button className="bg-orange-500 text-white hover:text-orange-500 hover:bg-transparent lg:text-base duration-300 scroll-m-20 text-base hover:shadow-md font-semibold tracking-tight p-4 capitalize rounded-xl px-8 mt-5">
          <Link href={"/products"}>Continue Shopping</Link>
        </button>
      </div>
    </div>
  );
};

export default Cartcard;
