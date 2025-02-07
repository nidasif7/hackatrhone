export default function Footer() {
    return (
      <footer className="w-full bg-black">
        <div className="flex flex-col items-center px-4 md:px-6 lg:px-8">
          {/* Newsletter Section */}
          <div className="flex flex-col md:flex-row mt-8 md:mt-[130px] w-full md:w-[90%] lg:w-[80%] pb-8 border-b border-[#FF9F0D]">
            <div className="flex-1 text-center md:text-left mb-6 md:mb-0">
              <p className="text-2xl md:text-3xl font-bold text-white">
                <span className="text-[#FF9F0D]">St</span>ill You Need Our Support ?
              </p>
              <p className="text-white text-sm md:text-base mt-2">
                Don't wait make a smart & logical quote here. Its pretty easy.
              </p>
            </div>

            <div className="flex flex-col md:flex-row w-full md:w-[33%] space-y-4 md:space-y-0">
              <div className="flex justify-between items-center rounded-md w-full md:w-auto bg-[#FF9F0D] h-[56px] md:ml-4">
                <input type="email" placeholder="Enter Your Email" className="bg-transparent text-white px-4 w-full outline-none placeholder-white" />
                <button className="flex items-center justify-center bg-white min-w-[120px] h-[56px] rounded-r-md">
                  <p className="font-bold text-[#FF9F0D] text-sm whitespace-nowrap">Subscribe Now</p>
                </button>
              </div>
            </div>
          </div>

          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full md:w-[90%] lg:w-[80%] mt-8 md:mt-[60px]">
            {/* About Us Section */}
            <div className="text-white">
              <p className="text-xl md:text-2xl font-bold">About Us.</p>
              <p className="text-base md:text-lg mt-4">Corporate clients and leisure travelers has been relying on Groundlink for dependable safe, and professional chauffeured car service in major cities across World.</p>
              <div className="flex mt-6">
                <div className="flex justify-center items-center w-[60px] md:w-[77px] h-[60px] md:h-[70px] bg-[#FF9F0D] rounded-md">
                  <i className="text-white text-3xl md:text-4xl fa-solid fa-clock"></i>
                </div>
                <div className="ml-3 md:ml-[10px]">
                  <p className="text-base md:text-lg">Opening Hours</p>
                  <p className="text-sm md:text-base">Mon - Sat(8.00 - 6.00)</p>
                  <p className="text-sm md:text-base">Sunday - Closed</p>
                </div>
              </div>
            </div>

            {/* Useful Links */}
            <div className="text-white">
              <p className="text-xl md:text-2xl font-bold">Useful Links</p>
              <div className="mt-4 space-y-2">
                {["About", "News", "Partners", "Team", "Menu", "Contact"].map((link) => (
                  <p key={link} className="text-base md:text-lg hover:text-[#FF9F0D] cursor-pointer">{link}</p>
                ))}
              </div>
            </div>

            {/* Help Section */}
            <div className="text-white">
              <p className="text-xl md:text-2xl font-bold">Help?</p>
              <div className="mt-4 space-y-2">
                {["FAQ", "Term & Condition", "Reporting", "Documentation", "Support Policy", "Privacy"].map((item) => (
                  <p key={item} className="text-base md:text-lg hover:text-[#FF9F0D] cursor-pointer">{item}</p>
                ))}
              </div>
            </div>

            {/* Recent Posts */}
            <div className="text-white">
              <p className="text-xl md:text-2xl font-bold">Recent Post</p>
              <div className="space-y-4 mt-4">
                {[
                  {
                    title: "Is fastfood good for your body?",
                    date: "February 28,2022",
                    img: "/11.jpeg"
                  },
                  {
                    title: "Change your food habit With organic food",
                    date: "February 28,2022",
                    img: "/11.jpeg"
                  },
                  {
                    title: "Do you like fastfood for your life?",
                    date: "February 28,2022",
                    img: "/11.jpeg"
                  }
                ].map((post, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <img 
                      className="w-[70px] md:w-[80px] h-[70px] md:h-[79px] object-cover rounded-md" 
                      src={post.img} 
                      alt={`post-${index}`}
                    />
                    <div>
                      <p className="text-sm md:text-lg">{post.title}</p>
                      <p className="text-slate-300 text-sm md:text-base">{post.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="w-full bg-[#4F4F4F] mt-8 md:mt-[41px]">
            <div className="flex flex-col md:flex-row justify-between items-center py-6 px-4 md:px-8 lg:px-[301px]">
              <p className="text-white text-sm md:text-base text-center md:text-left mb-4 md:mb-0">
                Copyright © 2022 by Ayeman. All Rights Reserved.
              </p>
              <div className="flex space-x-3 md:space-x-4">
                {["facebook-f", "twitter", "instagram", "youtube", "pinterest"].map((social, index) => (
                  <div key={social} className={`flex justify-center items-center w-[30px] md:w-[35px] h-[30px] md:h-[33px] bg-white text-lg md:text-xl ${social === 'youtube' ? 'text-[#FF9F0D]' : ''}`}>
                    <i className={`fa-brands fa-${social}`}></i>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
}