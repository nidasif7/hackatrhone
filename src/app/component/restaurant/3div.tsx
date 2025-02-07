import React from 'react';

export default function Div3() {
  return (
    <div className="flex justify-center items-center w-full h-auto py-10 px-4">
      <div className="flex flex-col lg:flex-row w-full max-w-[1320px] gap-8 lg:gap-10">
        {/* Left Section with Images */}
        <div className="w-full lg:w-[620px] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          <img 
            className="w-full h-[150px] sm:h-[200px] lg:h-[250px] object-cover rounded-md col-span-2 sm:col-span-1 lg:col-span-2" 
            src="/1c.jpeg" 
            alt="Image 1" 
          />
          <img 
            className="w-full h-[120px] sm:h-[180px] lg:h-[220px] object-cover rounded-md sm:mt-20 lg:mt-0" 
            src="/2c.jpeg" 
            alt="Image 2" 
          />
          <img 
            className="w-full h-[150px] sm:h-[200px] lg:h-[250px] object-cover rounded-md col-span-2 sm:col-span-1 lg:col-span-2" 
            src="/3c.jpeg" 
            alt="Image 3" 
          />
          <img 
            className="w-full h-[120px] sm:h-[180px] lg:h-[220px] object-cover rounded-md" 
            src="/4c.jpeg" 
            alt="Image 4" 
          />
          <img 
            className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] lg:w-[180px] lg:h-[180px] object-cover rounded-md" 
            src="/5c.jpeg" 
            alt="Image 5" 
          />
          <img 
            className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] lg:w-[180px] lg:h-[180px] object-cover rounded-md" 
            src="/6c.jpeg" 
            alt="Image 6" 
          />
        </div>

        {/* Right Section with Text */}
        <div className="w-full lg:w-[526px] text-center lg:text-left">
          <p className="text-[#FF9F0D] text-2xl lg:text-3xl font-greatVibes">Why Choose Us</p>
          <p className="text-3xl lg:text-5xl text-white font-bold mt-5">
            <strong className="text-[#FF9F0D] text-3xl lg:text-5xl">Ex</strong>traordinary Taste And Experienced
          </p>
          <p className="text-base lg:text-lg text-white mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start mt-10 space-y-5 sm:space-y-0 sm:space-x-5">
            {['Fast Food', 'Lunch', 'Dinner'].map((item, index) => (
              <div key={item} className="flex flex-col items-center">
                <div className="w-[102px] h-[100px] bg-[#FF9F0D] rounded-md flex justify-center items-center">
                  <i className={`text-white text-6xl ${
                    index === 0 ? 'fa-solid fa-burger' : 
                    index === 1 ? 'fa-solid fa-cookie-bite' : 
                    'fa-solid fa-wine-glass fa-flip-horizontal'
                  }`}></i>
                </div>
                <p className="text-lg text-center mt-2 text-white font-medium">{item}</p>
              </div>
            ))}
          </div>

          <div className="relative flex w-full h-auto lg:h-[120px] bg-white rounded-lg shadow-md mt-10 p-4 lg:p-0">
            <div className="absolute left-0 top-0 bottom-0 w-[10px] bg-[#FF9F0D] rounded-l-lg hidden lg:block"></div>

            <div className="flex flex-col lg:flex-row items-center justify-between w-full lg:px-6">
              <p className="text-[#FF9F0D] text-4xl lg:text-6xl font-bold text-center lg:text-left">30+</p>
              <p className="text-black text-xl lg:text-2xl font-bold text-center lg:text-left">
                Years of <br />
                <span className="font-bold text-2xl lg:text-3xl">Experience</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
