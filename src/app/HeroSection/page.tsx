"use client"
import React from 'react';
import { FaApple } from 'react-icons/fa';
function HeroSection(){
  return (
    <section className=" bg-white flex sm:flex-col md:flex-row lg:flex-row">
     
      <div className="flex-col bg-white sm:text-0.3xl hidden md:text-0.2xl lg:text-1xl md:flex  w-4/12 p-4 mt-5">
       <ul className="space-y-3 ml-10 ">
          <li className="flex items-center justify-between hover:text-gray-600 ">
          <select
              name="Women's Fashion"
              id="text">
             
            <option value="text">Women's Fashion</option>
            </select>
            
            <i className="fas fa-chevron-right"></i>
          </li>
          <li className="flex items-center justify-between hover:text-gray-600 cursor-pointe">
          <select
              name="Men's Fashion"
              id="Men's Fashion">
            <option value="text">Men's Fashion</option>
            </select>
          
          </li>
          <li className="flex items-center justify-between hover:text-gray-600 cursor-pointer">
            <span>Electronics</span>
            
          </li>
          <li className="flex items-center justify-between hover:text-gray-600 cursor-pointer">
            <span>Home & Lifestyle</span>
           
          </li>
          <li className="flex items-center justify-between hover:text-gray-600 cursor-pointer">
            <span>Medicine</span>
           
          </li>
          <li className="flex items-center justify-between hover:text-gray-600 cursor-pointer">
            <span>Sports & Outdoor</span>
           
          </li>
          <li className="flex items-center justify-between hover:text-gray-600 cursor-pointer">
            <span>Baby & Toys</span>
            </li>
          <li className="flex items-center justify-between hover:text-gray-600 cursor-pointer">
            <span>Groceries & Pets</span>
           
          </li>
          <li className="flex items-center justify-between hover:text-gray-600 cursor-pointer">
            <span>Health & Beauty</span>
           
          </li>
        </ul>
      </div>

      
      <div className="w-full md:w-3/4 flex flex-col md:flex-row items-center p-10 bg-black mt-8">
        <div className="w-full md:w-1/2 text-center flex flex-col items-center justify-start md:text-left ml-6 ">
       
        <FaApple className="text-5xl flex justify-center  items-center mb-2 hover:text-gray-400 transition cursor-pointer text-white" />
        <p className='text-0.5xl mt-4 text-white'>i phone 14 series</p>
      
          <h1 className="text-4xl font-bold text-white">iPhone 14 Series</h1>
          <p className="text-lg text-white mt-4">Up to 10% off Voucher</p>
          <button className="mt-3  text-white  rounded hover:text-pink-300">
            Shop Now
          </button>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <img src="/hero.jpg" alt="iPhone 14" className="w-3/4" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;