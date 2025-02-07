export default function Div7() {
  return (
    <div className="flex justify-center items-center w-full h-auto py-10">
      <div className="w-[90%] h-auto">
        <p className="text-[#FF9F0D] text-2xl md:text-3xl font-greatVibes">Testimonials</p>
        <p className="mt-5 text-3xl md:text-5xl font-bold text-white">What our clients are saying</p>
        
        <div className="mt-16 md:mt-[100px] w-full md:ml-[255px] md:w-[868px] h-auto md:h-[450px] bg-white shadow-xl">
          <div className="flex justify-center items-center">
            <img 
              className="mt-[-40px] md:mt-[-68px] w-[100px] h-[100px] md:w-[132px] md:h-[133px] object-cover rounded-full" 
              src="/face.jpeg" 
              alt="Client" 
            />
          </div>
          
          <div className="flex justify-center items-center mt-6 md:mt-[35px] text-3xl md:text-5xl text-[#FF9F0D]">
            <i className="fa-solid fa-quote-left"></i>
          </div>
          
          <div className="flex justify-center items-center mt-6 md:mt-[30px] px-4">
            <p className="w-full md:w-[696px] text-base md:text-lg text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, itaque  earum perspiciatis velit quo, at consequuntur, magnam alias mollitia nemo suscipit excepturi ipsa voluptate?</p>
          </div>
          
          <div className="flex justify-center items-center mt-6 md:mt-[35px] text-xl md:text-2xl">
            {[1,2,3,4].map(() => (
              <i key={Math.random()} className="fa-solid fa-star text-[#FF9F0D]"></i>
            ))}
            <i className="fa-solid fa-star text-slate-200"></i>
          </div>
          
          <div className="flex justify-center items-center mt-4 text-xl font-bold">
            <p>Alamin Hasan</p>
          </div>
          
          <div className="flex justify-center items-center mt-2 text-slate-400 text-base md:text-lg">
            <p>Food Specialist</p>
          </div>
        </div>
        
        <div className="flex justify-center items-center mt-8 md:mt-[50px] text-xl space-x-2">
          {[true, false, false, false].map((active, index) => (
            <i 
              key={index} 
              className={`fa-solid fa-circle ${active ? 'text-[#FF9F0D]' : 'text-[#FF9F0D4D]'}`}
            ></i>
          ))}
        </div>
      </div>
    </div>
  );
}