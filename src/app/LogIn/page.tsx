"use client"
import Link from "next/link";
import { useState } from "react";
const LogIn= () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMessage("Successfully Log in!");
  };

  return (
    <div className="bg-gray-100 flex h-screen items-center justify-center">
      <div className="flex sm:text-0.5xl  w-full max-w-5xl bg-white shadow-lg ">
      
        <div className="w-1/2 p-3 flex justify-center items-center">
          <img
            src="/SignUp.jpg"
            alt="Shopping Cart"
            className="w-full h-auto"
          />
        </div>

       
        <div className="w-1/2 p-8">
          <h2 className="text-2xl text-black font-bold mb-4">Log in Exclusive</h2>
          <form onSubmit={handleSubmit}>
          
            <input
              type="number"
              name="Phone Number"
              placeholder="Phone Number"
              className="w-full p-2 border text-black border-gray-300 rounded mb-4"
              value={formData.name}
              onChange={handleChange}
            />
          
            <input
              type="email"
              name="email"
              placeholder="Email or Phone Number"
              className="w-full p-2 border text-black border-gray-300 rounded mb-4"
              value={formData.email}
              onChange={handleChange}
            /> 

            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full p-2 border text-black border-gray-300 rounded mb-4"
              value={formData.password}
              onChange={handleChange}
            />
          <Link href="./">
            <button
              type="submit"
              className="w-full bg-red-500 text-white py-2 rounded"
            >
              Log In
            </button>
            </Link>
          </form>

          

         
          <p className="text-center text-gray-500 mt-4">
            Already have an account?{" "}
            <Link href="./" className="text-blue-500">
              Log in
            </Link>
          </p>

          {successMessage && (
            <Link href="./">
            <p className="text-green-600 text-center mt-4">
              {successMessage}
            </p>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default LogIn;
