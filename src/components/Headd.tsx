"use client"
import React from 'react';
import Link from 'next/link';
const Headd = () => {
  return (
    <div className="bg-black  text-white flex justify-between items-center px-1 py-1 text-xl lg:text-xs">
    <div className=" flex-1 flex justify-center text-center gap-1 sm:text-left lg:text-center md:text-center text-xs">
       <p> Summer Sale - Up to 50% Off!</p>
       <Link href="/Cart">
       <button className=" text-0.1xl text-white text-0.1xl rounded hover:bg-gray-300 underline">
          Shop Now
        </button>
        </Link>
      </div>
       <div className="flex items-center gap-5 ">
       <select
          className="bg-black text-white border border-gray-500  rounded text-xs mr-10"
          aria-label="Language Select"
        >
          <option>English</option>
          <option>Urdu</option>
          <option>French</option>
        </select>
      </div>
    </div>
  );
};

export default Headd;


