"use client"
import React from 'react';
import Link from 'next/link';
import { FiHeart, FiShoppingCart, FiPhone } from 'react-icons/fi';

const Nav = () => {
  return (
    <nav className="hidden lg:flex justify-between items-center px-3 py-2 bg-white shadow-md border border-gray-300 ">
      <h1 className="text-xl font-bold ">Exclusive</h1>
      <div className="flex space-x-8 ml-24">
        <Link href="./"><p className="hover:text-blue-500">Home</p></Link>
        <Link href="/About"><p className="hover:text-blue-500">About</p></Link>
        <Link href="/Cart"> <p className="hover:text-blue-500">Cart</p></Link>
      <Link href="/Contact"><p className="hover:text-blue-500">Contact</p></Link>

        <Link href="/SignUp"> <p className="hover:text-blue-500">Sign Up</p></Link>
        <Link href="/LogIn"> <p className="hover:text-blue-500">Log In</p></Link>
       
      </div>
      <div className="flex items-center space-x-4">
    <div className='flex gap-2 mr-30'>
           <Link href="/BestSelling"><FiHeart className="w-6 h-6 text-red-600" /></Link> 
       <Link href="/Cart"> <FiShoppingCart className="w-6 h-6 text-yellow-600" /></Link>
       <Link href="/Contact"> <FiPhone className="w-6 h-6 text-purple-600" /></Link>
      
        </div>
      </div>
    </nav>
  );
};

export default Nav;