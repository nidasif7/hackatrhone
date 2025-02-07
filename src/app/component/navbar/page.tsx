"use client"
import Link from "next/link";
import React from "react";

export default function navbar(){


    return(
        <div className="w-full mx-auto translate-y-5 h-[100px] flex flex-col justify-center items-center px-4 relative">
        {/* Foodtuck Heading */}
        <div className="text-center mb-4 flex items-center justify-center space-x-1">
          <h1 className="text-2xl font-bold text-[#FF9F0D]">Food</h1>
          <h1 className="text-2xl font-bold text-white">tuck</h1>
        </div>

        {/* Navigation and Search */}
        <nav className="w-full h-[57px] items-center">
  <div className="flex justify-center">
    {/* Added mx-auto to center the pink div horizontally */}
    <div className="flex justify-between items-center w-[80%] h-[54px]  mx-auto">
      {/* Navigation Links */}
      <ul className="  flex space-x-8 text-lg text-white">
         <Link href={"/"}>Home</Link>
        <Link href={"/menu"}>Menu</Link>
        <Link href={"/blog"}>Blog</Link>
        <Link href={"/page"}>Pages</Link>
        <li className="space-x-1">
          <Link href={"/about"}>About</Link><i className="fa-solid fa-angle-down"></i>
        </li>
        <Link href={"/shop"}>Shop</Link>
        <Link href={"/chef"}>Chef</Link>
      </ul>

      {/* Search Box and Icons */}
      <div className="relative flex items-center space-x-4">
        <div className="relative">
          <input 
            className="px-4 py-2 w-[243px] h-[38px] text-white bg-black rounded-full border border-[#FF9F0D] outline-none focus:outline-none pl-10"
            type="search" placeholder="Search..."
          />
          {/* Search Icon inside the input */}
          <i className="fa-solid fa-magnifying-glass text-white absolute right-4 top-1/2 transform -translate-y-1/2"></i>
        </div>
      <Link href={"/card"}><i className="text-white text-xl fa-solid fa-bag-shopping"></i></Link>
      </div>
    
    </div>
  </div>

</nav>


</div>

    );
}