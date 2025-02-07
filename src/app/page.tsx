import Div1 from "./component/restaurant/1div";
import Div2 from "./component/restaurant/2div";
import Div3 from "./component/restaurant/3div";
import Div4 from "./component/restaurant/4div";
import Div5 from "./component/restaurant/5div";
import Div6 from "./component/restaurant/6div";
import Div7 from "./component/restaurant/7div";
import Div8 from "./component/restaurant/8div";
import Div9 from "./component/restaurant/9div";
import Navbar from "./component/navbar/page";
import Footer from "./component/restaurant/footer";
import Link from "next/link";





export default function Restaurant() {
  return (
    <div>

    <section className="bg-black h-[8000px]">
      {/* Background Image Wrapper with reduced opacity */}
      <div className="w-full h-[1050px] bg-black relative">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/bg.jpeg')] bg-cover bg-center opacity-10"></div>

 
      <Navbar/>
      
      <div className="flex mt-[100px] ">
      <div className="flex flex-col items-center ml-[100px] space-y-11">
       <div className="w-[2px] h-[158px] bg-white "></div>

      {/* Social Media Icons with spacing */}
      <i className="fa-brands fa-facebook-f text-white"></i>
       <i className="fa-brands fa-twitter text-[#FF9F0D]"></i>
     <i className="fa-brands fa-pinterest-p text-white"></i>

    <div className="w-[2px] h-[158px] bg-white mt-[120px]"></div>
    </div>


{/* Last Section Content */}
<div className="flex flex-col w-[472px] text-white py-8 mt-[110px] ml-[100px]">
  <div className="w-[489px] mx-auto">
  <p className="text-[#FF9F0D] text-2xl font-greatVibes">Its Quick & Amusing!</p>
    <p className="text-5xl font-bold">
      <strong className="text-[#FF9F0D] text-5xl">Th</strong>e Art of speed food Quality
    </p>
    <p className="text-lg mt-[29px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue</p>
    <button className="rounded-full outline-none bg-amber-500 mt-[29px] w-[190px] h-[60px]">See Menu</button>
  </div>
</div>
</div>

      {/* Right Section with Image */}
      <div className="relative flex flex-col mt-[-500px] ml-[550px] ">
        {/* Decorative Circular Image */}
        <div className="relative w-[410px] h-[410px] mx-auto">
        <div className="absolute inset-0 border-[3px] border-white rounded-full"></div>
        <img className="absolute inset-0 w-[80px] h-[83px] mt-[40px] ml-[5px]"
            src="/1.png"
            alt="noddles"
          />
          <img className="absolute inset-0 w-[80px] h-[110px] mt-[180px] ml-[-35px]"
            src="/12.png"
            alt="noddles"
          />
           <img className="absolute inset-0 w-[60px] h-[80px] mt-[310px] ml-[30px] ]"
            src="/221.png"
            alt="noddles"
          /> 
           <img className="absolute inset-0 w-[30px] h-[40px] mt-[365px] ml-[120px] ]"
            src="/44.png"
            alt="leavee"
          />
          
        <img className="transform rotate-[96deg] ml-[220px] mt-[70px] w-[620px] "
            src="/76.png"
            alt="leave"
            />
            
          <img className=" absolute mt-[-260px] inset-0 ml-[65px] w-[400px] h-[800] rounded-full object-cover"
            src="/rice.png"
            alt="Delicious Dish"
          />
      </div>
      </div>
      </div>
<Div1/>
<Div2/>
<Div3/>
<Div4/>
<Div5/>
<Div6/>
<Div7/>
<Div8/>
<Div9/>
<Footer/>
</section>
</div>
  );
}
