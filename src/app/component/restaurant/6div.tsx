import React from 'react';

export default function Div6() {
    return (
        <div className="flex justify-center items-center w-full h-auto py-6 sm:py-8 lg:py-10">
            <div className="w-[95%] sm:w-[90%] h-auto text-center">
                <p className="text-[#FF9F0D] text-xl sm:text-2xl font-greatVibes">Chefs</p>
                <h2 className="text-white text-3xl sm:text-4xl font-bold mt-2">
                    <span className="text-yellow-500">Me</span>et Our Chefs
                </h2>

                {/* Images Grid - Responsive Layout */}
                <div className="flex flex-col sm:flex-row flex-wrap lg:flex-nowrap justify-center lg:justify-between w-full mt-8 sm:mt-12 lg:mt-[63px] gap-4 sm:gap-3 lg:gap-2">
                    <div className="w-full sm:w-[48%] lg:w-[24%] h-[300px] sm:h-[350px] lg:h-[391px]">
                        <img 
                            className="w-full h-full object-cover rounded-md" 
                            src="/c6.jpeg" 
                            alt="Chef 1" 
                        />
                    </div>
                    <div className="w-full sm:w-[48%] lg:w-[24%] h-[300px] sm:h-[350px] lg:h-[391px]">
                        <img 
                            className="w-full h-full object-cover rounded-md" 
                            src="/c7.jpeg" 
                            alt="Chef 2" 
                        />
                    </div>
                    <div className="w-full sm:w-[48%] lg:w-[24%] h-[300px] sm:h-[350px] lg:h-[391px]">
                        <img 
                            className="w-full h-full object-cover rounded-md" 
                            src="/8c.jpeg" 
                            alt="Chef 3" 
                        />
                    </div>
                    <div className="w-full sm:w-[48%] lg:w-[24%] h-[300px] sm:h-[350px] lg:h-[391px]">
                        <img 
                            className="w-full h-full object-cover rounded-md" 
                            src="/c9.jpeg" 
                            alt="Chef 4" 
                        />
                    </div>
                </div>

                {/* Button */}
                <div className="flex justify-center mt-6 sm:mt-8 lg:mt-[29px]">
                    <button className="text-white text-lg sm:text-xl border border-[#FF9F0D] rounded-full w-[160px] sm:w-[190px] h-[50px] sm:h-[60px] hover:bg-[#FF9F0D] transition-colors duration-300">
                        See More
                    </button>
                </div>
            </div>
        </div>
    );
}