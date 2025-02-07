export default function Div1() {
  return (
    <div className="flex justify-center items-center w-full h-auto md:h-[562px] mt-[50px] md:mt-[100px]">
      <div className="flex flex-col md:flex-row justify-between items-center w-[90%] h-full mx-auto text-white">
        {/* Text Section */}
        <div className="w-full md:w-[562px] text-center md:text-left">
          <p className="text-[#FF9F0D] text-xl md:text-2xl font-greatVibes">about us</p>
          <p className="text-2xl md:text-4xl font-bold">
            <strong className="text-[#FF9F0D] text-2xl md:text-4xl">We</strong> Create the best foody product
          </p>
          <p className="mt-[15px] md:mt-[29px] text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat
            fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. 
          </p>
          <p className="mt-[10px] md:mt-[20px] text-sm md:text-base">
            <i className="fa-solid fa-check text-white mr-2.5"></i> Lacus nisi, et ac dapibus sit eu velit in consequat.
          </p>
          <p className="mt-[10px] md:mt-[15px] text-sm md:text-base">
            <i className="fa-solid fa-check text-white mr-2.5"></i> Quisque diam pellentesque bibendum non dui volutpat fringilla
          </p>
          <p className="mt-[10px] md:mt-[15px] text-sm md:text-base">
            <i className="fa-solid fa-check text-white mr-2.5"></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
          <button className="rounded-full outline-none bg-amber-500 mt-[15px] md:mt-[29px] w-[150px] md:w-[190px] h-[50px] md:h-[60px] text-sm md:text-base">
            Read More
          </button>
        </div>

        {/* Image Section */}
        <div className="flex flex-col items-center space-y-4 mt-[30px] md:mt-0">
          <div className="w-full md:w-[660px]">
            <img className="w-full h-[200px] md:h-[330px] object-cover rounded-md" src="/full.jpeg" alt="half" />
          </div>
          <div className="flex justify-between w-full md:w-[660px] space-x-2">
            <img className="w-[48%] md:w-[322px] h-[150px] md:h-[217px] object-cover rounded-md" src="/first.jpeg" alt="half" />
            <img className="w-[48%] md:w-[322px] h-[150px] md:h-[217px] object-cover rounded-md" src="/2nd.jpeg" alt="half" />
          </div>
        </div>
      </div>
    </div>
  );
}