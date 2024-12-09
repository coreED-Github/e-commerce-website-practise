"use client"
import { FaFacebook, FaTwitter, FaInstagram, FaGooglePlay, FaApple, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto grid grid-cols-2  md:grid-cols-5 gap-8 px-4">
        
        <div>
          <h4 className="font-bold text-1xl sm:text-0.5xl mb-4">Exclusive</h4>
          <p className="mb-4">Get 10% off your first order</p>
          <form className="flex items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 w-28 h-10 text-black rounded-l-md focus:outline-none"
            />
            <button
              type="submit"
              className="bg-blue-300 p-2 rounded-r-md hover:bg-blue-200 transition"
            >
              &#9658;
            </button>
          </form>
        </div>

       
        <div>
          <h4 className="font-bold  text-1xl mb-4">Support</h4>
          <p>111 Bijoy Sarani, Dhaka,</p>
          <p>DH 1515, Bangladesh.</p>
          <p className="mt-4 ">exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>

       
        <div>
          <h4 className="font-bold text-sm mb-4">Account</h4>
          <ul>
            <li className="mb-2">
              <a href="/Contact" className="hover:underline">
                My Account
              </a>
            </li>
            <li className="mb-2">
              <a href="/LogIn" className="hover:underline">
                Login / Register
              </a>
            </li>
            <li className="mb-2">
              <a href="/Cart" className="hover:underline">
                Cart
              </a>
            </li>
            <li className="mb-2">
              <a href="/BestSelling" className="hover:underline">
                Wishlist
              </a>
            </li>
            <li>
              <a href="/Cart" className="hover:underline">
               Cart
              </a>
            </li>
          </ul>
        </div>

       
        <div>
          <h4 className="font-bold text-1xl mb-4">Quick Link</h4>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Terms of Use
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                FAQ
              </a>
            </li>
            <li>
              <a href="/Contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        
        <div>
          <h4 className="font-bold  text-1xl mb-4 ">Download App</h4>
          <p className="mb-4">Save big on your purchases!</p>
          <div className="flex space-x-4">
            <a href="#">
              <FaGooglePlay className="text-3xl hover:text-green-400 transition cursor-pointer" />
            </a>
            <a href="#">
              <FaApple className="text-3xl hover:text-gray-400 transition cursor-pointer" />
            </a>
          </div>
          <p className="mt-6">Follow Us:</p>
          <div className="flex space-x-4 mt-2">
            <a href="https://www.facebook.com/profile.php?id=61556187216320&mibextid=ZbWKwL">
              <FaFacebook className="text-2xl hover:text-blue-400 transition cursor-pointer" />
            </a>
            <a href="https://www.linkedin.com/in/saira-nasir-935bb1230?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                            <FaLinkedin className="text-2xl hover:text-blue-300 transition cursor-pointer" />
                        </a>
                        <a href="#">
                            <FaInstagram className="text-2xl hover:text-pink-400 transition cursor-pointer" />
                        </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
        <p className="text-gray-400">© Copyright Rimel 2022. All rights reserved.</p>
      </div>
    </footer>
  );
}