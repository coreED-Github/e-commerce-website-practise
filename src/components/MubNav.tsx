"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { FiMenu } from 'react-icons/fi'; // Menu icon
import { IoClose } from 'react-icons/io5'; // Close icon

const MubNav = () => {
  const [isOpen, setIsOpen] = useState(false); // State to handle menu open/close

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = () => {
    setIsOpen(false); 
  };

  return (
    <div className="lg:hidden bg-white shadow-md relative">
     
      <div className="flex justify-between items-center px-4 py-3">
        <h1 className="text-xl font-bold">Exclusive</h1>
        <FiMenu
          className="w-6 h-6 text-yellow-800 cursor-pointer"
          onClick={toggleMenu}
        />
      </div>

   
      <div
        className={`fixed top-0 right-0 h-full w-40 bg-purple-50 shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
       
        <div className="flex justify-end p-4">
          <IoClose
            className="w-6 h-6 text-yellow-600 cursor-pointer"
            onClick={toggleMenu}
          />
        </div>
       
        <nav className="flex flex-col ml-8 items-start p-4 space-y-4">
          <Link href="./" passHref>
            <p
              className="text-gray-800 hover:text-gray-200 text-2xl"
              onClick={handleOptionClick}
            >
              Home
            </p>
          </Link>
          <Link href="/About" passHref>
            <p
              className="text-gray-800 hover:text-gray-200 text-2xl"
              onClick={handleOptionClick}
            >
              About
            </p>
          </Link>
          <Link href="/Contact" passHref>
            <p
              className="text-gray-800 hover:text-gray-200 text-2xl"
              onClick={handleOptionClick}
            >
              Contact Us
            </p>
            </Link>
            <Link href="/Cart" passHref>
            <p
              className="text-gray-800 hover:text-gray-200 text-2xl"
              onClick={handleOptionClick}
            >
              Cart
            </p>
          </Link>
          <Link href="/SignUp" passHref>
            <p
              className="text-gray-800 hover:text-gray-200 text-2xl"
              onClick={handleOptionClick}
            >
              Sign Up
            </p>
             </Link>
             <Link href="/LogIn" passHref>
            <p
              className="text-gray-800 hover:text-gray-200 text-2xl"
              onClick={handleOptionClick}
            >
              Log In
            </p>
             </Link>


        </nav>
      </div>
    </div>
  );
};

export default MubNav