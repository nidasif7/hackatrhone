import Link from "next/link";
import React from "react";
import Navbar2 from "../component/navbar2/page";
import Footer from "../component/restaurant/footer";

export default function Signin() {
  return (
    <div>
      <Navbar2 />
      <div className="w-full">
        {/* Hero Section */}
        <div className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[410px] bg-[url('/back.jpeg')] bg-cover bg-center">
          <div className="flex justify-center items-center w-full h-full">
            <div className="text-center w-[80%] sm:w-[50%] md:w-[35%] lg:w-[22%] text-white">
              <p className='text-3xl sm:text-3xl md:text-4xl font-bold'>404 Error</p>
              <div className='space-x-2 text-base sm:text-lg mt-4 md:mt-6 text-white'>
                <button className="hover:text-[#FF9F0D] transition-colors duration-300"><Link href={"/"}>Home</Link></button>
                <i className="text-xs sm:text-sm fa-solid fa-chevron-right"></i>
                <button className='text-[#FF9F0D]'>404</button>
              </div>
            </div>
          </div>
        </div>

        {/* Error Content Section */}
        <div className="flex justify-center px-4 sm:px-6 md:px-8 mt-12 sm:mt-16 md:mt-20 mb-12 sm:mb-16 md:mb-20 w-full">
          <div className="w-full sm:w-[80%] md:w-[60%] lg:w-[40%] xl:w-[30%]">
            {/* Error Number */}
            <p className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#FF9F0D] text-center 
                        animate-bounce">404</p>
            
            {/* Error Message */}
            <p className="mt-6 sm:mt-8 md:mt-10 font-bold text-lg sm:text-xl md:text-2xl text-center
                        leading-tight">
              Oops! Look likes something going wrong
            </p>
            
            {/* Error Description */}
            <p className="text-center mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-gray-600
                        px-4 sm:px-8 leading-relaxed">
              Page Cannot be found! we'll have it figured out in no time.
              Meanwhile, check out these fresh ideas:
            </p>
            
            {/* CTA Button */}
            <div className="flex justify-center mt-8 sm:mt-10">
              <Link href="/">
                <button className="text-base sm:text-lg rounded-md bg-[#FF9F0D] hover:bg-[#e08a00] 
                                transition-colors duration-300 
                                w-[160px] sm:w-[180px] 
                                h-[48px] sm:h-[58px] 
                                text-white 
                                font-medium
                                shadow-md hover:shadow-lg
                                transform hover:-translate-y-0.5 transition-transform">
                  <i className="fas fa-home mr-2"></i>
                  Go to home
                </button>
              </Link>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}