import Link from "next/link";
import React from "react";
import Footer from "../component/restaurant/footer";
import Navbar2 from "../component/navbar2/page";
export default function blog(){
    return(
      <div>
      
        <div className='w-full'>
        <div className="w-full h-[410px] bg-[url('/back.jpeg')] bg-cover bg-center">
       <Navbar2/>

        <div className="flex justify-center items-center w-full h-[410px]">
          <div className="text-center w-[18%] h-[104px] text-white sm: w-[50%]">
            <p className='text-4xl font-bold sm: text-md'>Blog List</p>
            <div className='space-x-2 text-lg mt-6 text-white'>
            <button className="hover:text-[#FF9F0D] transition-colors"><Link href={"/"}>Home</Link></button>
              <i className="text-sm fa-solid fa-chevron-right"></i>
              <button className='text-[#FF9F0D]'>Blog</button>
            </div>
          </div>
        </div>
      </div>


      <div className="flex justify-center  w-full mt-8 sm:mt-12 md:mt-16 lg:mt-16 ">
        <div className="flex flex-col lg:flex-row w-[90%] md:w-[80%] lg:w-[70%] justify-between">
          
          
        <div className="w-full lg:w-[70%] space-y-8 sm:space-y-10 md:space-y-12">
        <img className="w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[520px] object-cover" src="/88.jpeg" alt="half" />
        <div className="flex items-center  mt-4 h-[24px] w-[280px] sm:text-base ">
        <i className="fa fa-calendar text-[#FF9F0D] mr-[4px]"></i>
        <p> Feb 14, 2022 / 
        <i className="px-[4px] fas fa-comment-alt text-[#FF9F0D] mx-[4px]"></i> 3 /  
        <i className="fa-solid fa-user-plus text-[#FF9F0D] mx-[4px]"></i> Admin
        </p>
        </div>
        <div className="text-xl sm:text-2xl font-bold mt-3  w-full">
          <p>10 Reasons To Do A Digital Detox Challenge</p></div>
       <div className="w-full sm:w-[85%] h-[1px] bg-[#E0E0E0] mt-6 sm:mt-8"></div>
        <div className="w-full sm:w-[90%] md:w-[80%] mt-4 sm:mt-6">
        <p>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat
        </p></div>
        <div className="flex justify-center items-centersm:justify-start items-center text-base sm:text-lg text-[#FF9F0D] w-full sm:w-[172px] h-[52px] mt-4 sm:mt-5 border border-[#FF9F0D] rounded-md">
        <p>Read More <i className="fa-solid fa-arrow-up-right-from-square"></i></p></div>

        <div className="w-full lg: space-y-8 sm:space-y-10 md:space-y-12">
        <img className="w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[520px] object-cover" src="/55.jpeg" alt="half" />
        <div className="flex items-center  mt-4 h-[24px] w-[280px] sm:text-base">
        <i className="fa fa-calendar text-[#FF9F0D] mr-[4px]"></i>
        <p> Feb 14, 2022 / 
        <i className="px-[4px] fas fa-comment-alt text-[#FF9F0D] mx-[4px]"></i> 3 /  
        <i className="fa-solid fa-user-plus text-[#FF9F0D] mx-[4px]"></i> Admin
        </p>
        </div>
        <div className="text-xl sm:text-2xl font-bold mt-3  w-full">
          <p>Traditional Soft Pretzels with Sweet Beer Cheese</p></div>
          <div className="w-full sm:w-[85%] h-[1px] bg-[#E0E0E0] mt-6 sm:mt-8"></div>
          <div className="w-full sm:w-[90%] md:w-[80%] mt-4 sm:mt-6">
        <p>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat
        </p></div>
        <div className="flex justify-center items-centersm:justify-start items-center text-base sm:text-lg text-[#FF9F0D] w-full sm:w-[172px] h-[52px] mt-4 sm:mt-5 border border-[#FF9F0D] rounded-md">
        <p>Read More <i className="fa-solid fa-arrow-up-right-from-square"></i></p></div>


        <div className="w-full lg: space-y-8 sm:space-y-10 md:space-y-12">
        <img className="w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[520px] object-cover" src="/31.jpeg" alt="half" />
        <div className="flex items-center mt-4 h-[24px] w-[280px] sm:text-base">
        <i className="fa fa-calendar text-[#FF9F0D] mr-[4px]"></i>
        <p> Feb 14, 2022 / 
        <i className="px-[4px] fas fa-comment-alt text-[#FF9F0D] mx-[4px]"></i> 3 /  
        <i className="fa-solid fa-user-plus text-[#FF9F0D] mx-[4px]"></i> Admin
        </p></div> 
        <div className="text-xl sm:text-2xl font-bold mt-3  w-full">
        <p>The Ultimate Hangover Burger: Egg in a Hole Burger</p></div>
        <div className="w-full sm:w-[85%] h-[1px] bg-[#E0E0E0] mt-6 sm:mt-8"></div>
          <div className="w-full sm:w-[90%] md:w-[80%] mt-4 sm:mt-6">
        <p>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat
        </p></div>
        <div className="flex justify-center items-centersm:justify-start items-center text-base sm:text-lg text-[#FF9F0D] w-full sm:w-[172px] h-[52px] mt-4 sm:mt-5 border border-[#FF9F0D] rounded-md">
        <p>Read More <i className="fa-solid fa-arrow-up-right-from-square"></i></p></div>

        <div className="w-full lg: space-y-8 sm:space-y-10 md:space-y-12">
        <img className="w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[520px] object-cover"  src="/2nd.jpeg" alt="half" />
        <div className="flex items-center mt-4 h-[24px] w-[280px] sm:text-base">
        <i className="fa fa-calendar text-[#FF9F0D] mr-[4px]"></i>
        <p> Feb 14, 2022 / 
        <i className="px-[4px] fas fa-comment-alt text-[#FF9F0D] mx-[4px]"></i> 3 /  
        <i className="fa-solid fa-user-plus text-[#FF9F0D] mx-[4px]"></i> Admin
        </p>
        </div>
        <div className="text-xl sm:text-2xl font-bold mt-3  w-full">
          <p>My Favorite Easy Black Pizza Toast Recipe</p></div>
          <div className="w-full sm:w-[85%] h-[1px] bg-[#E0E0E0] mt-6 sm:mt-8"></div>
          <div className="w-full sm:w-[90%] md:w-[80%] mt-4 sm:mt-6">
        <p>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat
        </p></div>
        <div className="flex justify-center items-centersm:justify-start items-center text-base sm:text-lg text-[#FF9F0D] w-full sm:w-[172px] h-[52px] mt-4 sm:mt-5 border border-[#FF9F0D] rounded-md">
        <p>Read More <i className="fa-solid fa-arrow-up-right-from-square"></i></p></div>


         <div className="flex justify-center mb-8 lg:mb-20 hidden xl:block">
                <div className="flex justify-between items-center w-full sm:w-[60%] mb-5 md:w-[50%] lg:w-[32%] h-[51px] mt-6 sm:mt-3">
                <button className="w-[17%] h-[40px] border border-slate-200 text-[#FF9F0D]"><i className="fas fa-angle-double-left"></i></button>
                <button className="w-[17%] h-[40px] border border-slate-20 text-[#FF9F0D]">1</button>
                <button className="w-[17%] h-[40px] border border-slate-200 text-white bg-[#FF9F0D]">2</button>
                <button className="w-[17%] h-[40px] border border-slate-200 text-[#FF9F0D]">3</button>
                <button className="w-[17%] h-[40px] border border-slate-200 text-[#FF9F0D]"><i className="fas fa-angle-double-right"></i></button>
                </div>
                </div>
        </div>
        </div>
        </div>
        </div>
       

        


        <div className="w-full lg:w-[29%] mt-8 lg:mt-0 space-y-4 sm:space-y-5 mb-5">
        <div className="flex justify-between items-center border border-[#E0E0E0] w-full h-[46px]  text-[#BDBDBD]">
         <p className="ml-4">Search Product</p>
         <button className="w-[17%] h-full text-white bg-[#FF9F0D]">
         <i className="fas fa-search"></i>
         </button></div>
         <div className="flex justify-center items-center w-full h-[365px] border border-[#E0E0E0] mt-5">
            <div className="w-[200px] h-[320px] ">
            <div className="flex justify-center"><img className="w-[90px] h-[90px] object-cover rounded-full" src="/men.jpeg" alt="half" /></div>
            <div className="flex justify-center">
            <div className="text-center text-sm  w-[150px] h-[86px] mt-5">
                <p className="font-bold mt-1 text-lg">Prince Miyako</p>
                <p className="text-[#828282] mt-2">Blogger/Photographer</p>
                <div className="flex items-center space-x-1 text-[10px] mt-2">
                <i className="fa-solid fa-star text-[#FF9F0D]"></i>
                <i className="fa-solid fa-star text-[#FF9F0D]"></i>
                <i className="fa-solid fa-star text-[#FF9F0D]"></i>
                <i className="fa-solid fa-star text-[#FF9F0D]"></i>
                <i className="fa-solid fa-star text-[#FF9F0D]"></i>
                <p className="text-[#828282] ml-2">(1 Review)</p>
                </div>
            </div></div>
            <div className="flex justify-center mt-2">
            <div className="text-center items-center w-[70%] text-sm">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis distinctio</p>
            </div>
            </div>
            <div className="flex justify-center mt-2 space-x-2">
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-pinterest"></i>
            </div>
            </div>
         </div>

         <div className="flex justify-center border mt-4 border-[#E0E0E0] w-full h-[490px]">
          <div className=" w-[86%]  mt-5 ">
            <p className="font-bold text-lg ">Recent Post</p>
            <div className="flex mt-[20px]">
            <div className="w-[99px] h-[71px]">
            <img className="w-full h-full object-cover rounded-md " src="/90.jpeg" alt="half" />
            </div>
            <div className="flex flex-col  ml-[10px]">
            <p className=" text-sm text-[#828282]">June 22, 2020</p>
            <p className="text-sm mt-2">Lorem ipsum dolor sit cingelit.</p>        
            </div></div>
            <div className="w-full h-[1px] mt-3 bg-[#E0E0E0]"></div>


            <div className="flex mt-[20px]">
            <div className="w-[99px] h-[71px]">
            <img className="w-full h-full object-cover rounded-md " src="/91.jpeg" alt="half" />
            </div>
            <div className="flex flex-col  ml-[10px]">
            <p className=" text-sm text-[#828282]">June 22, 2020</p>
            <p className="text-sm mt-2">Lorem ipsum dolor sit cingelit.</p>        
            </div></div>
            <div className="w-full h-[1px] mt-3 bg-[#E0E0E0]"></div>


            <div className="flex mt-[20px]">
            <div className="w-[99px] h-[71px]">
            <img className="w-full h-full object-cover rounded-md " src="/92.jpeg" alt="half" />
            </div>
            <div className="flex flex-col  ml-[10px]">
            <p className=" text-sm text-[#828282]">June 22, 2020</p>
            <p className="text-sm mt-2">Lorem ipsum dolor sit cingelit.</p>        
            </div></div>
            <div className="w-full h-[1px] mt-3 bg-[#E0E0E0]"></div>


            <div className="flex mt-[20px]">
            <div className="w-[99px] h-[71px]">
            <img className="w-full h-full object-cover rounded-md " src="/5m.jpeg" alt="half" />
            </div>
            <div className="flex flex-col  ml-[10px]">
            <p className=" text-sm text-[#828282]">June 22, 2020</p>
            <p className="text-sm mt-2">Lorem ipsum dolor sit cingelit.</p>        
            </div></div>
         
          </div>
         </div>


         <div className="flex justify-center border mt-4 border-[#E0E0E0] w-full h-[405px]">
          <div className="w-[80%] h-[370px]  mt-7">
          <p className="font-bold">Filter By Menu</p>
          <div className="flex items-center mt-5">
          <img className="w-[63px] h-[57px] object-cover rounded-md " src="/5m.jpeg" alt="half" />
          <div className="flex justify-between ml-2 w-[68%]">
          <p className="font-bold text-sm">Chicken Fry</p>
          <p className="text-sm ">26</p></div>
          </div>

          <div className="flex  items-center mt-2">
          <img className="w-[63px] h-[57px] object-cover rounded-md " src="/93.jpeg" alt="half" />
         <div className="flex justify-between ml-2 w-[68%]">
         <p className="font-bold text-sm">Burger Food</p>
         <p className="text-sm ">46</p>
         </div>
          </div>

          <div className="flex items-center mt-2">
          <img className="w-[63px] h-[57px] object-cover rounded-md " src="/94.jpeg" alt="half" />
          <div className="flex justify-between ml-2 w-[68%]">
          <p className="font-bold text-sm">Pizza</p>
          <p className="text-sm ">16</p></div>
          </div>

          <div className="flex  items-center mt-2">
          <img className="w-[63px] h-[57px] object-cover rounded-md " src="/95.jpeg" alt="half" />
          <div className="flex justify-between ml-2 w-[68%]">
          <p className="font-bold text-sm">Fresh Fruits</p>
          <p className="text-sm">36</p></div>
          </div>

          <div className="flex items-center mt-2">
          <img className="w-[63px] h-[57px] object-cover rounded-md " src="/2nd.jpeg" alt="half" />
          <div className="flex justify-between ml-2 w-[68%]">
          <p className="font-bold text-sm ">Vegetables</p>
          <p className="text-sm ">16</p></div>
          </div>
          </div>
          </div>
          <div className="flex justify-center items-center  w-full h-[260px] border mt-4 border-[#E0E0E0]">
            <div className=" w-[80%] h-[250px]">
              <p className="text-lg font-bold">Populer Tags</p>
              <div className="flex justify-between mt-3">
                <button className="w-[100px] h-[38px] border boder-[#E0E0E0]">Sandwich</button>
                <button className="w-[58px] h-[38px] border boder-[#E0E0E0]">Tikka</button>
                <button className="w-[46px] h-[38px] border boder-[#E0E0E0]">Bbq</button>
              </div>
              <div className="flex justify-between mt-4">
                <button className="w-[90px] h-[38px] border boder-[#E0E0E0]">Restaurant</button>
                <button className="w-[123px] ml-1 h-[38px] border boder-[#E0E0E0] lg: text-sm">Chicken Sharma</button>
              </div>
              <div className="flex justify-between mt-4">
                <button className="w-[70px] h-[38px] border boder-[#E0E0E0]">Health</button>
                <button className="w-[85px] h-[38px] border boder-[#E0E0E0]">Fastfood</button>
                <button className="w-[50px] h-[38px] border boder-[#E0E0E0]">Food</button>
              </div>
              <div className="flex justify-between mt-4">
                <button className="w-[70px] h-[38px] border boder-[#E0E0E0]">Pizza</button>
                <button className="w-[65px] h-[38px] border boder-[#E0E0E0]">Burger</button>
                <button className="w-[66px] h-[38px] border boder-[#E0E0E0]">Chicken</button>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center w-full h-[250px]  border border-[#E0E0E0] mt-4"> 
          <div className="w-[85%] h-[230px]">
            <p className="text-lg font-bold">Photo Gallery</p>
          <div className="flex justify-between mt-5">
          <img className="w-[72px] h-[75px] object-cover  " src="/ah.jpeg" alt="half" />
          <img className="w-[72px] h-[75px] object-cover  " src="/bg.jpeg" alt="half" />
          <img className="w-[72px] h-[75px] object-cover  " src="/dd.jpeg" alt="half" />
          </div>
          <div className="flex justify-between mt-4">
          <img className="w-[72px] h-[75px] object-cover  " src="/cd.jpeg" alt="half" />
          <img className="w-[72px] h-[75px] object-cover  " src="/first.jpeg" alt="half" />
          <img className="w-[72px] h-[75px] object-cover  " src="/rr.jpeg" alt="half" />
          </div>
          </div>
          </div>

          <div className="flex justify-center items-center w-full h-[115px]  border border-[#E0E0E0] mt-4">
            <div className="w-[68%] h-[80px]  mt-3">
            <p className="text-lg font-bold">Follow Us</p>
            <div className="flex justify-between mt-4">
            <button className="bg-[#FAF7F2] w-[34px] h-[30px]"><i className="fa-brands fa-twitter"></i></button>
            <button className="bg-[#FAF7F2] w-[34px] h-[30px]"><i className="fa-brands fa-youtube"></i></button>
            <button className="bg-[#FF9F0D] text-white w-[34px] h-[30px] "><i className="fa-brands fa-pinterest"></i></button>
            <button className="bg-[#FAF7F2] w-[34px] h-[30px]"><i className="fa-brands fa-instagram"></i></button>
            <button className="bg-[#FAF7F2] w-[34px] h-[30px]"><i className="fa-brands fa-facebook-f"></i></button>
            </div>
            </div>
          </div>

        </div>
        </div>
      </div>
     
        
</div>
<Footer/>
</div>

    );
}