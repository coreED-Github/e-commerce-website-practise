"use client"
import React from "react";
import { AiOutlineHeart, AiOutlineEye } from "react-icons/ai";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const products = [

  {
    id: 1,
    name: "The north coat",
    price: "$50",
    image: "/best1.png",
    discount: "-20%",
   rating: 88,
  },
  {
    id: 2,
    name: "Gucci duffle bag",
    price: "$960",
    image: "/best2.png",
    discount: "-20%",
    rating: 55,
  },
  {
    id: 3,
    name: "RGB liquid CPU Cooler",
    price: "$200",
    image: "/best3.png",
discount: "-20%",
    rating: 35,
  },
  {
    id: 4,
    name: "Small BookSelf",
    price: "$250",
    image: "/best4.png",
   discount: "-20%",
    rating: 35,
  },
  {
    id: 5,
    name: "Breed Dry Dog Food",
    price: "$15",
    image: "/list5.jpg",
   discount: "-20%",
    rating: 35,
  },
  {
    id: 6,
    name: "CANON EOS DSLR",
    price: "$250",
    image: "/list6.png",
   
    discount: "-20%",
    rating: 35,
  },
  {
    id: 7,
    name: "ASUS FHD Laptop",
    price: "$250",
    image: "/list7.png",
 
    discount: "-20%",
    rating: 35,
  },
  {
    id: 7,
    name: "ASUS FHD Laptop",
    price: "$250",
    image: "/list7.png",
 
    discount: "-20%",
    rating: 35,
  },

];

function Explore() {
 const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full  ml-5 mt-10 mb-5">
      <h3 className="text-red-600 text-sm font-bold uppercase">Today's</h3>
      <h2 className="text-2xl font-bold mb-4">Flash Sales</h2>
      <div className="relative">

        <button
          onClick={handleScrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow hover:bg-gray-200"
        >
          <MdKeyboardArrowLeft size={24} />
        </button>
        <div
          ref={scrollContainerRef}
          className=" bg-slate-600 grid grid-cols-4  space-x-2 space-y-5 mr-10 ml-10 "
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="  relative w-[240px] h-[300px]  gap-2 bg-white shadow-md rounded-lg overflow-hidden flex-shrink-0"
            >

              <span className="absolute top-2 left-2 bg-red-600 text-white text-sm font-bold px-2 py-1 rounded">
                {product.discount}
              </span>
            <img
                src={product.image}
                alt={product.name}
                className="w-full h-[150px] object-contain bg-gray-100"
              />
              <div className="absolute top-2 right-2 flex flex-col space-y-2 opacity-0 hover:opacity-100 transition-opacity">
                <button className="bg-white p-2 rounded-full shadow hover:bg-gray-200">
                  <AiOutlineHeart size={20} className="text-red-600" />
                </button>
                <button className="bg-white p-2 rounded-full shadow hover:bg-gray-200">
                  <AiOutlineEye size={20} className="text-gray-800" />
                </button>
              </div>


              <div className="p-4">
                <h3 className="text-sm font-bold text-gray-800">
                  {product.name}
                </h3>


                <div className="flex items-center space-x-2 mt-2">
                  <span className="text-red-500 font-bold text-lg">
                    {product.price}
                  </span>
                 
                </div>

                <div className="flex items-center mt-0.2">
                  <div className="flex text-yellow-500">★ ★ ★ ★ ☆</div>
                  <span className="text-gray-600 text-xs ml-2">
                    ({product.rating})
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

          <button
          onClick={handleScrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow hover:bg-gray-200"
        >
          <MdKeyboardArrowRight size={24} />
        </button> 
      </div>
    </div>
  );
};

export default Explore;
