"use client"

import Link from "next/link";
import React from "react";
import { useState } from "react";
import { motion } from "framer-motion"; // Import Framer Motion

export default function navbar2(){
    
        const [isClick , setisClick] = useState(false)
    
    const toggleNavbar= (): void =>{
      setisClick(!isClick)
    }
    return(
        <nav className="bg-black text-white h-20 w-full flex justify-center items-center">
            <div className="flex justify-between items-center w-[75%] h-[32px]">
              <p className="text-2xl font-bold">Food<span className="text-[#FF9F0D]">tuck</span></p>
  
              <ul className="hidden lg:flex space-x-8 text-xl">
              <Link href={"/"}>Home</Link>
                <Link href={"/menu"}>Menu</Link>             
                <Link href={"/blog"}>Blog</Link>
                <Link href={"/page"}>Page</Link>
                <Link href={"/about"}>About</Link>
                <Link href={"/shop"}>Shop</Link>
                <Link href={"/chef"}>chef</Link>
              </ul>

              {isClick &&( 
                <motion.div
                className="fixed inset-0 bg-black  w-full bg-opacity-75 z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <motion.ul
                  className="py-5 h-full w-full bg-black text-white"
                  initial={{ y: "-100%" }} // Start off-screen from the top (move up)
                  animate={{ y: 0 }} // Slide down to 0 position (visible)
                  exit={{ y: "-100%" }} // Slide out to the top again when closing
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                <div>
                <div className="flex flex-col justify-center items-center text-xl bg-black w-full  absolute left-0">
                   
         <ul className="mt-10 items-center flex flex-col text-2xl  md:flex flex-wrap items-center gap-[30px] text-center text-white ">
       <Link href={"/"}>Home</Link>
         <Link href={"/menu"}>Menu</Link>             
         <Link href={"/blog"}>Blog</Link>
         <Link href={"/page"}>Page</Link>
         <Link href={"/about"}>About</Link>
         <Link href={"/shop"}>Shop</Link>
         <Link href={"/chef"}>Chef</Link>
       </ul>
       <i className="absolute left-[86%] top-[10%] text-2xl fa-solid fa-bars xl:hidden"  onClick={toggleNavbar} ></i>
       </div>
       
       </div>

       </motion.ul>
       
       </motion.div>
      )}
              <div className="space-x-5">
                <i className="text-xl fa-solid fa-magnifying-glass"></i>
                <Link href={"/signin"}><i className="text-xl fa-solid fa-user"></i></Link>
                <Link href={"/card"}><i className="text-white text-xl fa-solid fa-bag-shopping"></i></Link>
                <i className="text-xl fa-solid fa-bars lg:hidden"  onClick={toggleNavbar} ></i>
              </div>
            </div>
     
          </nav>
    );
}