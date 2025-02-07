import Link from "next/link";
import React from "react";
import Navbar2 from "../component/navbar2/page";
import Footer from "../component/restaurant/footer";

export default function Signin() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar2 />
      
      {/* Hero Section */}
      <div className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[410px] bg-[url('/back.jpeg')] bg-cover bg-center relative">
        <div className="flex justify-center items-center w-full h-full">
          <div className="text-center w-[90%] sm:w-[50%] md:w-[35%] lg:w-[22%] text-white">
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold">404 Error</p>
            <div className="space-x-2 text-base sm:text-lg mt-4 sm:mt-6 text-white">
              <button className="hover:text-[#FF9F0D] transition-colors"><Link href={"/"}>Home</Link></button>
              <i className="text-xs sm:text-sm fa-solid fa-chevron-right"></i>
              <button className="text-[#FF9F0D]">404</button>
            </div>
          </div>
        </div>
      </div>

      {/* Sign In Form Section */}
      <div className="flex items-center justify-center px-4 py-12 sm:py-16 md:py-20">
        <div className="bg-white p-6 sm:p-8 shadow-lg rounded-lg w-full max-w-[320px] sm:max-w-[380px] md:max-w-[420px]">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">Sign In</h2>
          
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">Email</label>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">Password</label>
              <input 
                type="password" 
                placeholder="Enter your password" 
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all"
              />
            </div>
            
            <div className="flex items-center">
              <input 
                type="checkbox" 
                id="remember" 
                className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-400"
              />
              <label htmlFor="remember" className="ml-2 text-sm text-gray-700">Remember me?</label>
            </div>
            
            <button className="w-full bg-orange-500 text-white py-2.5 rounded-lg hover:bg-orange-600 transition-colors font-medium">
              Sign In
            </button>
          </form>
          
          <div className="text-right mt-2">
            <Link 
              href="/forgot-password" 
              className="text-sm text-gray-500 hover:text-orange-500 hover:underline transition-colors"
            >
              Forgot password?
            </Link>
          </div>

          <div className="flex items-center my-6">
            <div className="flex-1 border-t border-gray-200"></div>
            <p className="px-3 text-sm text-gray-500">OR</p>
            <div className="flex-1 border-t border-gray-200"></div>
          </div>
          
          {/* Social Sign In Buttons */}
          <div className="space-y-3">
            <button className="w-full flex items-center justify-center border border-gray-300 py-2.5 rounded-lg hover:bg-gray-50 transition-colors group">
              <i className="fa-brands ml-5 fa-google text-lg text-gray-600 group-hover:text-orange-500 transition-colors"></i>
              <span className="flex-1 text-center text-sm font-medium">Sign in with Google</span>
            </button>
            
            <button className="w-full flex  items-center justify-center border border-gray-300 py-2.5 rounded-lg hover:bg-gray-50 transition-colors group">
              <i className="fa-brands ml-5 fa-apple text-xl text-gray-600 group-hover:text-orange-500 transition-colors"></i>
              <span className="flex-1 text-center text-sm font-medium">Sign in with Apple</span>
            </button>
          </div>

          {/* Sign Up Link */}
          <p className="text-center text-sm text-gray-600 mt-6">
            Don't have an account?{" "}
            <Link href="/signup" className="text-orange-500 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}