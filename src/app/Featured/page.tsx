"use client"
import React from "react";

const Featured = () => {
  return (
    <div className="mr-10 ml-10 mt-20">
   
      <div className="text-start ml-5 ">
        <h2 className="text-lg font-bold text-gray-800">
          <span className="text-red-500">Featured</span>
        </h2>
        <h3 className="text-2xl font-semibold mt-2 mb-8">New Arrival</h3>
      </div>

    
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4  mb-5 ">
     <div className="relative h-[365px] bg-black">
          <img
            src="/fea1.png"
            alt="PlayStation 5"
            className="w-full h-full object-contain"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4">
            <h4 className="text-2xl py-3 font-bold text-white">PlayStation 5</h4>
            <p className="text-sm text-white">Black and white version on sale.</p>
            <button className="mt-2 text-sm text-red-300">Shop Now</button>
          </div>
        </div>

        
        <div className="grid grid-rows-3 gap-4 lg:col-span-2">
         
          <div className="relative h-[200px] bg-black">
            <img
              src="/fea2.jpeg"
              alt="Women's Collections"
              className="w-full h-full object-contain"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4">
              <h4 className="text-1.5xl font-bold text-white">Women's Collections</h4>
              <p className="text-sm text-white">Explore a new vibe.</p>
              <button className="mt-2 text-sm text-red-300">Shop Now</button>
            </div>
          </div>
 
          <div className="grid grid-cols-2 gap-4 row-span-2">
          
            <div className="relative h-[150px] bg-black">
              <img
                src="/fea3.png"
                alt="Speakers"
                className="w-full h-full object-contain"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4">
                <h4 className="text-0.5xl font-bold text-white">Speakers</h4>
                <p className="text-sm text-white">Amazon wireless speakers.</p>
                <button className="mt-2 text-sm text-red-300">Shop Now</button>
              </div>
            </div>

           
            <div className="relative h-[150px] bg-black">
              <img
                src="/fea4.png"
                alt="Perfume"
                className="w-full h-full object-contain"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4">
                <h4 className="text-0.5xl font-bold text-white">Perfume</h4>
                <p className="text-sm text-white">GUCCI Intense Oud.</p>
                <button className="mt-2 text-sm text-red-300">Shop Now</button>
              </div>
            
            </div>
          </div>
        </div>
      </div>
     
      <div className="flex flex-col md:flex-row  gap-5 justify-around items-center mb-20 ">
        <div className="text-center">
          <div className="text-gray-600 text-4xl">🚚</div>
          <h4 className="text-lg font-semibold">Free and Fast Delivery</h4>
          <p className="text-sm">Free delivery on orders over $140</p>
        </div>
        <div className="text-center">
          <div className="text-gray-600 text-4xl">📞</div>
          <h4 className="text-lg font-semibold">24/7 Customer Service</h4>
          <p className="text-sm">Friendly 24/7 support</p>
        </div>
        <div className="text-center">
          <div className="text-gray-600 text-4xl">💰</div>
          <h4 className="text-lg font-semibold">Money Back Guarantee</h4>
          <p className="text-sm">Returns within 30 days</p>
          </div>
      </div>
      </div>
  );
};

export default Featured;