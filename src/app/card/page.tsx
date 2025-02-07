import Link from "next/link";
import React from "react";
import Footer from "../component/restaurant/footer";
import Navbar2 from "../component/navbar2/page";

export default function Card() {
  return (
    <div className='w-full'>
      {/* Header Section */}
      <div className="w-full h-[300px] md:h-[410px] bg-[url('/back.jpeg')] bg-cover bg-center">
        <Navbar2/>
  
        <div className="flex justify-center items-center w-full h-full">
          <div className="text-center w-[90%] md:w-[22%] text-white">
            <p className='text-2xl md:text-4xl font-bold'>Shopping Cart</p>
            <div className='space-x-2 text-sm md:text-lg mt-4 md:mt-6 text-white'>
            <button className="hover:text-[#FF9F0D] transition-colors"><Link href={"/"}>Home</Link></button>
              <i className="text-sm fa-solid fa-chevron-right"></i>
              <button className='text-[#FF9F0D]'>Shopping Cart</button>
            </div>
          </div>
        </div>
      </div>

      {/* Cart Items Section */}
      <div className="flex justify-center w-full mt-10 px-4">
        <div className="w-full md:w-[80%]">
          {/* Cart Header */}
          <div className="hidden md:flex items-center font-bold text-gray-700 py-3 border-b border-gray-300">
            <p className="w-1/3">Product</p>
            <p className="w-1/6">Price</p>
            <p className="w-1/6">Quantity</p>
            <p className="w-1/6">Total</p>
            <p className="w-1/6 text-right">Remove</p>
          </div>

          {/* Mobile and Desktop Cart Items */}
          <div className="divide-y divide-gray-200">
            {[
              { name: "Burger", price: 35.00, img: "/a.jpeg" },
              { name: "Fresh Lime", price: 25.00, img: "/c.jpeg" },
              { name: "Pizza", price: 15.00, img: "/4r.jpeg" },
              { name: "Chocolate Muffin", price: 45.00, img: "/d.jpeg" },
              { name: "Cheese Butter", price: 15.00, img: "/e.jpeg" }
            ].map((item) => (
              <div key={item.name} className="flex flex-col md:flex-row items-center py-4">
                <div className="w-full md:w-1/3 flex items-center space-x-4 mb-4 md:mb-0">
                  <img className="w-16 h-16 md:w-12 md:h-12 object-cover" src={item.img} alt={item.name} />
                  <div>
                    <p className="font-bold">{item.name}</p>
                    <div className="flex space-x-1 text-[13px]">
                      {[1,2,3].map(() => (
                        <i key={Math.random()} className="fa-solid fa-star text-[#FF9F0D]"></i>
                      ))}
                      {[1,2].map(() => (
                        <i key={Math.random()} className="fa-solid fa-star text-slate-200"></i>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-auto flex justify-between items-center">
                  <div className="md:hidden">Price</div>
                  <p className="md:w-1/6">${item.price.toFixed(2)}</p>
                </div>
                <div className="w-full md:w-auto flex justify-between items-center my-4 md:my-0">
                  <div className="md:hidden">Quantity</div>
                  <div className="flex items-center space-x-2">
                    <button className="px-2 py-1 text-gray-600 bg-gray-200 rounded-md ml-2">-</button>
                    <p className="text-center">1</p>
                    <button className="px-2 py-1 text-gray-600 bg-gray-200 rounded-md ">+</button>
                  </div>
                </div>
                <div className="w-full md:w-auto flex justify-between items-center">
                  <div className="md:hidden">Total</div>
                  <p className="md:w-1/6 ml-2">$221.00</p>
                </div>
                <button className="w-full md:w-1/6 text-right text-2xl mt-4 md:mt-0">×</button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Coupon and Total Bill Section */}
      <div className="flex justify-center w-full mt-16 px-4">
        <div className="flex flex-col md:flex-row justify-between w-full md:w-[80%] space-y-8 md:space-y-0">
          {/* Coupon Code */}
          <div className="w-full md:w-[49%]">
            <h2 className="text-2xl font-bold mb-3">Coupon Code</h2>
            <div className="w-full p-5 border border-[#E0E0E0] rounded-md">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <div className="flex flex-col md:flex-row mt-5">
                <input
                  type="text"
                  placeholder="Enter code"
                  className="px-4 py-2 w-full md:w-2/3 focus:outline-none border border-[#E0E0E0] mb-2 md:mb-0 md:mr-2"
                />
                <button className="bg-orange-500 text-white px-6 py-2 hover:bg-orange-600">Apply</button>
              </div>
            </div>
          </div>

          {/* Total Bill */}
          <div className="w-full md:w-[49%]">
            <h2 className="text-2xl font-bold mb-3">Total Bill</h2>
            <div className="w-full border border-[#E0E0E0] rounded-md p-5">
              <div className="flex justify-between font-bold mb-2">
                <span>Cart Subtotal</span>
                <span>$120.00</span>
              </div>
              <div className="flex justify-between text-gray-700 mb-2">
                <span>Shipping Charge</span>
                <span>$0.00</span>
              </div>
              <div className="w-full h-[1px] bg-[#E0E0E0] mt-4"></div>
              <div className="flex justify-between font-bold text-gray-900 my-5">
                <span>Total Amount</span>
                <span>$205.00</span>
              </div>
            </div>
            <button className="w-full bg-orange-500 text-white py-3 hover:bg-orange-600 mt-5">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>

      <div className="mt-16"></div>
      <Footer/>
    </div>
  );
}