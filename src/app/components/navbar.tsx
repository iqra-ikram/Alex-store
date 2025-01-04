"use client"
import Link from "next/link";
import React, { useState } from "react";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-teal-500 to-green-500 text-white px-4 md:px-8 py-4 flex items-center justify-between font-sans" data-aos="fade-down" data-aos-duration="3000">
      <div className="flex items-center space-x-4">
        <button
          className="text-2xl md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
        
        </button>

        <div className="font-bold text-xl tracking-wide">Alex Store</div>
      </div>
      <ul
        className={`${
          isMenuOpen
            ? "absolute left-0 top-16 w-full bg-[#FFFBF0] shadow-lg"
            : "hidden"
        } md:flex md:static md:w-auto space-y-2 md:space-y-0 md:space-x-8 text-base font-medium`}
      >
       <Link href="/"> <li className="px-4 py-2 md:p-0 text-center md:text-left hover:text-gray-600">
          Home
        </li> </Link>
        <Link href="/product"><li className="px-4 py-2 md:p-0 text-center md:text-left hover:text-gray-600">
          Products
        </li> </Link>
        <Link href="/Contact"> <li className="px-4 py-2 md:p-0 text-center md:text-left hover:text-gray-600">
          Contact
        </li> </Link>
      </ul>

      <div className="flex items-center space-x-4">
        <div className="hidden md:flex items-center bg-[#F7EDE4] rounded-full px-4 py-2 w-[400px] mr-12 text-black ">
         
          <input
            type="text"
            placeholder="Search for products..."
            className="bg-transparent focus:outline-none text-sm placeholder-gray-500"
          />
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;