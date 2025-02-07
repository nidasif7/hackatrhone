import React from "react";
import Link from "next/link";
import Footer from "../component/restaurant/footer";
import Navbar2 from "../component/navbar2/page";

export default function Chef() {
  // Array of chef data for easier mapping
  const chefs = [
    { img: "1chef.jpeg", name: "Tahmina Rumi", role: "Chef" },
    { img: "2chef.jpeg", name: "Jorina Begum", role: "Chef" },
    { img: "man.jpeg", name: "M.Mohammad", role: "Chef" },
    { img: "3chef.jpeg", name: "Munna Kathy", role: "Chef" },
    { img: "4chef.jpeg", name: "Mark Henry", role: "Chef" },
    { img: "5chef.jpeg", name: "Tahmina Rumi", role: "Chef" },
    { img: "6chef.jpeg", name: "Bisnu devgon", role: "Chef" },
    { img: "7chef.jpeg", name: "Motin Molladsf", role: "Chef" },
    { img: "8chef.jpeg", name: "William Rumi", role: "Chef" },
    { img: "9chef.jpeg", name: "Kets william roy", role: "Chef" },
    { img: "10chef.jpeg", name: "Mahmud kholil", role: "Chef" },
    { img: "11chef.jpeg", name: "Ataur Rahman", role: "Chef" },
  ];

  return (
    <div className="min-h-screen w-full">
      {/* Hero Section */}
        <Navbar2 />
      <div className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[410px] bg-[url('/back.jpeg')] bg-cover bg-center relative">

        <div className="flex justify-center items-center w-full h-full absolute top-0 left-0">
          <div className="text-center w-[90%] sm:w-[50%] md:w-[35%] lg:w-[18%] text-white">
            <p className="text-3xl sm:text-4xl md:text-5xl font-bold">Our Chef</p>
            <div className="space-x-2 text-base sm:text-lg mt-4 sm:mt-6 text-white">
            <button className="hover:text-[#FF9F0D] transition-colors"><Link href={"/"}>Home</Link></button>
              <i className="text-xs sm:text-sm fa-solid fa-chevron-right"></i>
              <button className="text-[#FF9F0D]">Chef</button>
            </div>
          </div>
        </div>
      </div>

      {/* Chefs Grid Section */}
      <div className="w-full py-12 sm:py-16 md:py-20">
        <div className="max-w-[90%] lg:max-w-[75%] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {chefs.map((chef, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="aspect-[3/4] overflow-hidden rounded-t-lg">
                  <img 
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300" 
                    src={`/${chef.img}`} 
                    alt={chef.name}
                  />
                </div>
                <div className="text-center py-4">
                  <p className="font-bold text-lg text-gray-800">{chef.name}</p>
                  <p className="text-gray-600 mt-1">{chef.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination or Load More Button (Optional) */}
          <div className="flex justify-center mt-12">
            <button className="px-6 py-3 border border-[#FF9F0D] text-[#FF9F0D] hover:bg-[#FF9F0D] hover:text-white transition-colors rounded-md">
              Load More
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}