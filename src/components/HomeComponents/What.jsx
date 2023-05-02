import React, { useState } from "react";
import whatpic from "../images/whatpic.png";
import whatwedo from "../images/whatwedo.svg";

const What = () => {
  return (
    <div className="bg-[#FFD230] ma py-8">
      <div className="flex flex-col-reverse md:flex-row-reverse justify-between w-[80%] mx-auto">
        <div className="flex flex-col w-[100%] bg-cover md:w-[40%] quicksand-500 text-xl md:gap-4 justify-center text-start bg-[#FFD230]">
          <p className="my-8 p-4">
            Coaching and Mentorship Capacity Building Mbinu Enterprise Program
          </p>
          <button className="bg-white w-[60%] hover:scale-105 transition-all duration-300 quicksand-700 rounded-md shadow-md shadow-gray-300 mx-16 md:mx-2 my-5 md:my-0 justify-center px-2 py-4 uppercase">
            Our Products
          </button>
        </div>
        <div className="relative">
          <img src={whatpic} alt="whatpic" className="md:h-[500px] md:w-[500px] h-[300px]" />
          <div className="absolute top-[53%] md:top-2/3 left-[23%] md:left-[27%] alstoria text-center md:text-7xl text-5xl font-bold flex flex-col">
            <p className="md:text-5xl text-3xl">What</p>
            <p>We Do</p>
          </div>
        </div>
      </div>
      <style jsx>{`
        @media only screen and (max-width: 767px) {
          .ma {
            background-image: url(${whatwedo});
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
          }
        }
      `}</style>
    </div>
  );
};

export default What;
