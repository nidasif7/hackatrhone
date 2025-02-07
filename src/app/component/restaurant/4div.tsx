import React from 'react';

export default function Div4() {
  return (
    <div className="relative bg-black">
      {/* Background Container */}
      <div className="flex justify-center items-center mt-16 sm:mt-20 lg:mt-[150px] w-full min-h-[300px] sm:h-[600px] md:h-[700px] lg:h-[469px] bg-cover bg-center relative">
        {/* Background Image with Opacity */}
        <div className="absolute inset-0 bg-[url('/4d.jpeg')] bg-cover bg-center opacity-25 pointer-events-none"></div>

        {/* Content Container - Adjusted max-width and padding */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center md:justify-between items-center w-full max-w-[90%] md:max-w-[95%] lg:max-w-[90%] xl:max-w-[1200px] px-2 md:px-4 py-8 md:py-12 z-10 gap-8 md:gap-6 lg:gap-4">
          
          {/* Professional Chefs - Adjusted widths */}
          <div className="w-full sm:w-[45%] md:w-[23%] lg:w-[220px]">
            <div className="flex flex-col items-center justify-center">
              <div className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px] bg-[#FF9F0D] flex items-center justify-center">
                <img src="/chef.png" alt="chef" className="w-4/5 h-4/5 object-contain" />
              </div>
              <p className="mt-3 sm:mt-4 md:mt-4 lg:mt-5 text-lg sm:text-xl md:text-xl lg:text-2xl text-center text-white font-bold">Professional Chefs</p>
              <strong className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl text-center mt-2 text-white">420</strong>
            </div>
          </div>

          {/* Items of Food - Adjusted widths */}
          <div className="w-full sm:w-[45%] md:w-[23%] lg:w-[220px]">
            <div className="flex flex-col items-center justify-center">
              <div className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px] bg-[#FF9F0D] flex items-center justify-center">
                <img src="/burgur1.png" alt="burger" className="w-4/5 h-4/5 object-contain" />
              </div>
              <p className="mt-3 sm:mt-4 md:mt-4 lg:mt-5 text-lg sm:text-xl md:text-xl lg:text-2xl text-center text-white font-bold">Items Of Food</p>
              <strong className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl text-center mt-2 text-white">320</strong>
            </div>
          </div>

          {/* Years of Experience - Adjusted widths */}
          <div className="w-full sm:w-[45%] md:w-[23%] lg:w-[220px]">
            <div className="flex flex-col items-center justify-center">
              <div className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px] bg-[#FF9F0D] flex items-center justify-center">
                <img src="/spon.png" alt="spoon" className="w-4/5 h-4/5 object-contain" />
              </div>
              <p className="mt-3 sm:mt-4 md:mt-4 lg:mt-5 text-lg sm:text-xl md:text-xl lg:text-2xl text-center text-white font-bold">Years Of Experienced</p>
              <strong className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl text-center mt-2 text-white">30+</strong>
            </div>
          </div>

          {/* Happy Customers - Adjusted widths */}
          <div className="w-full sm:w-[45%] md:w-[23%] lg:w-[220px]">
            <div className="flex flex-col items-center justify-center">
              <div className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px] bg-[#FF9F0D] flex items-center justify-center">
                <img src="/slice.png" alt="slice" className="w-4/5 h-4/5 object-contain" />
              </div>
              <p className="mt-3 sm:mt-4 md:mt-4 lg:mt-5 text-lg sm:text-xl md:text-xl lg:text-2xl text-center text-white font-bold">Happy Customers</p>
              <strong className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl text-center mt-2 text-white">220</strong>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}