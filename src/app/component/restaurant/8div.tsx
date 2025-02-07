export default function Div8() {
  return (
    <div>
      <div className="w-full h-[400px] md:h-[558px] bg-[url('/div.jpeg')] bg-cover bg-center">
        <div className="flex items-center justify-center h-full md:ml-[550px]">
          <div className="w-[90%] md:w-[760px] text-center md:text-right p-4 md:p-6">
            <p className="text-[#FF9F0D] text-xl md:text-2xl font-greatVibes">
              Restaurant Active Process
            </p>
            <p className="text-2xl md:text-4xl font-bold text-white mt-4">
              <span className="text-[#FF9F0D] md:ml-[65px]">We</span> Document Every
              Food Bean Process until it is saved 
            </p>
            <p className="text-base md:text-lg mt-4 md:mt-[29px] text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
            </p>
            <div className="flex flex-col md:flex-row justify-center md:justify-end space-y-4 md:space-y-0 md:space-x-6 mt-8 md:mt-[50px]">
              <button className="text-white text-base md:text-xl rounded-full border border-[#FF9F0D] w-full md:w-[190px] h-[50px] md:h-[60px]">
                See More
              </button>
              <div className="flex items-center justify-center space-x-4">
                <button className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] bg-[#FF9F0D] rounded-full flex items-center justify-center">
                  <i className="fa-solid fa-play text-xl md:text-2xl text-white"></i>
                </button>
                <p className="text-base md:text-xl font-bold text-white">
                  Play Video
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}