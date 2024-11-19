import Image from "next/image";
import heroimage from "../../public/pictures/hero.jpg";
import React from "react";

const Hero = () => {
  return (
    <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col justify-center  items-center bg-orange-100 overflow-hidden">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col  md:items-center md:text-left mb-16 md:mb-0 items-center text-center">
        <p className="mb-2  leading-relaxed sm:text-3xl sm:text-center text-2xl text-black">
          Sale Up to 50% off!
        </p>
        <h1 className="title-font  sm:text-4xl sm:text-center  text-3xl mb-8 font-semibold text-gray-900">
          OUR FALL COLLECTION
          <br></br>
          HAS ARRIVED
        </h1>
        <div className="flex justify-center items-center">
          <button className="inline-flex  text-white bg-orange-400 border-0 py-2 px-6 focus:outline-none hover:bg-orange-500 rounded text-lg duration-300 scroll-m-20 tracking-tight">
            Shop Now
          </button>
        </div>
      </div>
      <div className="lg:max-w-lg md:pr-20 lg:w-full md:w-1/2 w-5/6 ">
        <Image
          className="object-contain md:h-[447px]  h-[340px] object-center rounded-3xl hover:scale-105 duration-500 hover:duration-500"
          alt="Hero"
          src={heroimage}
        />
      </div>
    </div>
  );
};

export default Hero;
