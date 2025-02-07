import React from "react";
import Link from "next/link";
import Navbar2 from "../component/navbar2/page";
import Footer from "../component/restaurant/footer";

export default function About() {
  return (
    <div className="w-full">
      <div className="w-full">
        {/* Hero Section */}
      <Navbar2 />
        <div className="w-full h-[300px] md:h-[350px] lg:h-[410px] bg-[url('/back.jpeg')] bg-cover bg-center">
          <div className="flex justify-center items-center w-full h-full">
            <div className="text-center w-[90%] sm:w-[50%] md:w-[35%] lg:w-[22%] text-white">
              <p className="text-2xl md:text-3xl lg:text-4xl font-bold">About Us</p>
              <div className="space-x-2 text-base md:text-lg mt-4 md:mt-6">
              <button className="hover:text-[#FF9F0D] transition-colors"><Link href={"/"}>Home</Link></button>
                <i className="text-xs md:text-sm fa-solid fa-chevron-right"></i>
                <button className="text-[#FF9F0D]">About</button>
              </div>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="flex flex-col lg:flex-row justify-center w-full py-12 md:py-16 lg:py-24">
          <div className="w-[90%] mx-auto lg:w-[75%] flex flex-col lg:flex-row justify-between">
            {/* Images Section */}
            <div className="flex flex-col sm:flex-row w-full lg:w-[55%] gap-4 mb-8 lg:mb-0">
              <img className="w-full sm:w-[48%] h-[300px] md:h-[400px] lg:h-[536px] object-cover rounded-md" src="/1c.jpeg" alt="about" />
              <div className="flex flex-col gap-4 w-full sm:w-[48%]">
                <img className="w-full h-[200px] md:h-[271px] object-cover rounded-md" src="/3c.jpeg" alt="about" />
                <img className="w-full h-[250px] md:h-[382px] object-cover rounded-md" src="/c1.jpeg" alt="about" />
              </div>
            </div>

            {/* Text Section */}
            <div className="w-full lg:w-[40%] p-4">
              <p className="text-[#FF9F0D] font-greatVibes text-xl md:text-2xl">About us   ___</p>
              <p className="text-2xl md:text-3xl lg:text-4xl font-bold mt-4">Food is an important part Of a balanced Diet</p>
              <p className="mt-6 md:mt-8 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis vitae mus.</p>
              <div className="flex items-center mt-6 md:mt-7">
                <button className="bg-[#FF9F0D] w-[150px] md:w-[195px] h-[50px] md:h-[58px] rounded-md text-white text-base md:text-lg font-bold">Show more</button>
                <button className="bg-[#FF9F0D] w-[50px] md:w-[60px] h-[50px] md:h-[60px] rounded-full ml-4 md:ml-5">
                  <i className="text-white text-lg md:text-xl fa-solid fa-play"></i>
                </button>
                <p className="text-black font-bold ml-3">Watch video</p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="flex justify-center w-full py-12 md:py-16 lg:py-24">
          <div className="w-[90%] lg:w-[75%]">
            <div className="text-center mb-8 md:mb-10">
              <p className="text-2xl md:text-3xl lg:text-4xl font-bold">Why Choose us</p>
              <p className="w-full md:w-[70%] lg:w-[579px] mx-auto mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum.</p>
            </div>

            <img className="w-full h-[250px] md:h-[300px] lg:h-[386px] object-cover rounded-md" src="/back1.jpeg" alt="feature" />

            <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-4 lg:gap-8 w-full mt-10">
  {/* First Card */}
  <div className="w-full md:w-1/3 p-4 md:p-6">
    <div className="flex flex-col items-center">
      <div className="text-center w-[60px] sm:w-[70px] md:w-[80px] h-[60px] sm:h-[70px] md:h-[80px]">
        <i className="fa-solid fa-user-graduate text-4xl sm:text-5xl md:text-6xl "></i>
      </div>
      
      <div className="text-center mt-6">
        <h3 className="text-lg sm:text-xl font-bold mb-3">Best Chef</h3>
        <p className="text-sm text-gray-600 max-w-sm mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat
        </p>
      </div>
    </div>
  </div>

  {/* Second Card */}
  <div className="w-full md:w-1/3 p-4 md:p-6">
    <div className="flex flex-col items-center">
      <div className="text-center w-[60px] sm:w-[70px] md:w-[80px] h-[60px] sm:h-[70px] md:h-[80px]">
        <i className="fas fa-coffee text-4xl sm:text-5xl md:text-6xl "></i>
      </div>
      
      <div className="text-center mt-6">
        <h3 className="text-lg sm:text-xl font-bold mb-3">Best Chef</h3>
        <p className="text-sm text-gray-600 max-w-sm mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat
        </p>
      </div>
    </div>
  </div>

  {/* Third Card */}
  <div className="w-full md:w-1/3 p-4 md:p-6">
    <div className="flex flex-col items-center">
      <div className="text-center w-[60px] sm:w-[70px] md:w-[80px] h-[60px] sm:h-[70px] md:h-[80px]">
        <i className="fa-solid fa-person text-4xl sm:text-5xl md:text-6xl "></i>
      </div>
      
      <div className="text-center mt-6">
        <h3 className="text-lg sm:text-xl font-bold mb-3">Best Chef</h3>
        <p className="text-sm text-gray-600 max-w-sm mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat
        </p>
      </div>
    </div>
  </div>
</div>
          </div>
        </div>

        {/* Team Section */}
        <div className="w-full mt-12 md:mt-16 lg:mt-20">
          <div className="relative w-full h-[300px] md:h-[400px] lg:h-[460px] bg-[url('/bgpic.jpeg')] bg-cover bg-center">
            <div className="absolute inset-0 bg-[#FF9F0D] bg-opacity-70"></div>
            <div className="relative flex justify-center items-center h-full">
              <div className="text-center w-[90%] md:w-[60%] lg:w-[418px] mt-[-70px]">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">Team Member</h1>
                <p className="text-white mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue</p>
              </div>
            </div>
          </div>

          <div className="relative mt-[-100px] md:mt-[-150px] lg:mt-[-180px] px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {[1, 2, 3, 4].map((member) => (
                <div key={member} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img className="w-full h-[250px] md:h-[280px] lg:h-[318px] object-cover" src="/man.jpeg" alt="Team Member" />
                  <div className="text-center py-4">
                    <p className="font-bold text-lg">Mark Henry</p>
                    <p className="text-gray-600">Owner</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="flex justify-center w-full py-16 md:py-20 lg:py-24">
          <div className="w-[90%] lg:w-[75%] relative">
            <p className="text-[#FF9F0D] text-xl md:text-2xl font-greatVibes">Testimonials</p>
            <p className="mt-4 text-2xl md:text-3xl font-bold text-black">What our client are saying</p>
            
            <div className="relative mt-16">
              <img className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px] md:w-[132px] md:h-[133px] object-cover rounded-full z-10" src="/face.jpeg" alt="testimonial" />
              
              <div className="bg-white shadow-xl p-6 md:p-8 rounded-lg">
                <div className="text-4xl md:text-5xl text-[#FF9F0D] text-center mt-8">
                  <i className="fa-solid fa-quote-left"></i>
                </div>
                
                <p className="text-center mt-6 md:mt-8 text-gray-600 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum.</p>
                
                <div className="flex justify-center gap-1 mt-6">
                  {[1, 2, 3, 4].map((star) => (
                    <i key={star} className="fa-solid fa-star text-[#FF9F0D]"></i>
                  ))}
                  <i className="fa-solid fa-star text-slate-200"></i>
                </div>
                
                <div className="text-center mt-4">
                  <p className="text-xl font-bold">Alamin Hasan</p>
                  <p className="text-gray-500 mt-1">Food Specialist</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-2 mt-8">
              {[1, 2, 3, 4].map((dot, index) => (
                <i key={dot} className={`fa-solid fa-circle text-sm ${index === 0 ? 'text-[#FF9F0D]' : 'text-[#FF9F0D4D]'}`}></i>
              ))}
            </div>
          </div>
        </div>

        {/* Menu Section */}
        <div className="flex justify-center w-full py-16 md:py-20 lg:py-24">
          <div className="w-[90%] lg:w-[75%]">
            <div className="text-center mb-8">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">Our Food Menu</h1>
              <p className="mt-4 text-gray-600 max-w-lg mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue</p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-6">
              {['Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Drink', 'Snack'].map((item, index) => (
                <button key={item} className={`text-sm md:text-base ${index === 0 ? 'text-[#FF9F0D]' : 'text-gray-600'}`}>
                  {item}
                </button>
              ))}
            </div>

            <div className="h-[2px] bg-[#E0E0E0] mb-8"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <div key={item} className="border-b border-[#E0E0E0] pb-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-lg md:text-xl font-bold">Alder Grilled Chinook Salmon</p>
                      <p className="mt-2 text-sm text-gray-600">Toasted French bread topped with romano, cheddar</p>
                      <p className="mt-2 text-sm text-gray-400">700 CAL</p>
                    </div>
                    <p className="text-lg md:text-xl text-[#FF9F0D] font-bold">32$</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-12">
              <button className="px-8 py-3 border border-[#FF9F0D] text-[#FF9F0D] hover:bg-[#FF9F0D] hover:text-white transition-colors">
                View Menu
              </button>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}