import React from 'react';
import Footer from '../component/restaurant/footer';
import Link from 'next/link';
import Navbar2 from '../component/navbar2/page';

export default function Menu() {
  return (
    <div className='w-full'>
      <Navbar2 />
      {/* Hero Section */}
      <div className="w-full h-[250px] md:h-[350px] lg:h-[410px] bg-[url('/back.jpeg')] bg-cover bg-center">
        <div className="flex justify-center items-center w-full h-full">
          <div className="text-center w-[80%] sm:w-[50%] md:w-[30%] lg:w-[18%] text-white">
            <p className='text-3xl md:text-4xl lg:text-5xl font-bold'>Our Menu</p>
            <div className='space-x-2 text-base md:text-lg mt-4 md:mt-6 text-white'>
              <button className="hover:text-[#FF9F0D] transition-colors"><Link href={"/"}>Home</Link></button>
              <i className="text-xs md:text-sm fa-solid fa-chevron-right"></i>
              <button className='text-[#FF9F0D]'>Menu</button>
            </div>
          </div>
        </div>
      </div>

      {/* Section 1 - Starter Menu */}
      <div className='flex justify-center w-full mt-12 md:mt-20 lg:mt-[150px] px-4 lg:px-0'>
        <div className='flex flex-col lg:flex-row justify-between w-full lg:w-[90%] xl:w-[69%] gap-8 lg:gap-12'>
          <img className="w-full lg:w-[32%] h-[300px] md:h-[400px] lg:h-[626px] object-cover rounded-md" src="/up.jpeg" alt="starter menu" />
          <div className='w-full lg:w-[60%]'>
            <i className="text-xl fas fa-coffee text-[#FF9F0D]"></i>
            <p className='mt-2 text-3xl md:text-4xl lg:text-5xl font-bold'>Starter Menu</p>
            
            <div className='w-full h-auto py-4 md:h-[130px] border-b border-[#E0E0E0]'>
              <p className='flex justify-between text-xl md:text-2xl font-bold'>Alder Grilled Chinook Salmon <span className='text-2xl md:text-3xl text-[#FF9F0D]'>32$</span></p>
              <p className='mt-2 text-base md:text-lg text-[#4F4F4F]'>Toasted French bread topped with romano, cheddar</p>
              <p className='mt-2 text-base md:text-lg text-[#828282]'>560 CAL</p>
            </div>

            <div className='w-full h-auto py-4 md:h-[130px] border-b border-[#E0E0E0]'>
              <p className='flex justify-between text-xl md:text-2xl font-bold text-[#FF9F0D]'>Berries and creme tart <span className='text-2xl md:text-3xl text-[#FF9F0D]'>43$</span></p>
              <p className='mt-2 text-base md:text-lg text-[#4F4F4F]'>Gorgonzola, ricotta, mozzarella, taleggio</p>
              <p className='mt-2 text-base md:text-lg text-[#828282]'>700 CAL</p>
            </div>

            <div className='w-full h-auto py-4 md:h-[130px] border-b border-[#E0E0E0]'>
              <p className='flex justify-between text-xl md:text-2xl font-bold'>Tormentoso Bush Pizza Pintoage <span className='text-2xl md:text-3xl text-[#FF9F0D]'>14$</span></p>
              <p className='mt-2 text-base md:text-lg text-[#4F4F4F]'>Ground cumin, avocados, peeled and cubed</p>
              <p className='mt-2 text-base md:text-lg text-[#828282]'>1000 CAL</p>
            </div>

            <div className='w-full h-auto py-4 md:h-[130px] border-b border-[#E0E0E0]'>
              <p className='flex justify-between text-xl md:text-2xl font-bold'>Spicy Vegan Potato Curry<span className='text-2xl md:text-3xl text-[#FF9F0D]'>35$</span></p>
              <p className='mt-2 text-base md:text-lg text-[#4F4F4F]'>Spreadable cream cheese, crumbled blue cheese</p>
              <p className='mt-2 text-base md:text-lg text-[#828282]'>560 CAL</p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 - Main Course */}
      <div className="flex justify-center w-full mt-12 md:mt-20 lg:mt-[150px] px-4 lg:px-0">
        <div className="flex flex-col-reverse lg:flex-row justify-between w-full lg:w-[90%] xl:w-[69%] gap-8 lg:gap-12">
          <div className="w-full lg:w-[60%]">
            <i className="text-xl fas fa-coffee text-[#FF9F0D]"></i>
            <p className='mt-2 text-3xl md:text-4xl lg:text-5xl font-bold'>Main Course</p>
            
            <div className='w-full h-auto py-4 md:h-[130px] border-b border-[#E0E0E0]'>
              <p className='flex justify-between text-xl md:text-2xl font-bold'>Optic Big Breakfast Combo Menu <span className='text-2xl md:text-3xl text-[#FF9F0D]'>32$</span></p>
              <p className='mt-2 text-base md:text-lg text-[#4F4F4F]'>Toasted French bread topped with romano, cheddar</p>
              <p className='mt-2 text-base md:text-lg text-[#828282]'>560 CAL</p>
            </div>

            <div className='w-full h-auto py-4 md:h-[130px] border-b border-[#E0E0E0]'>
              <p className='flex justify-between text-xl md:text-2xl font-bold'>Cashew Chicken With Stir-Fry <span className='text-2xl md:text-3xl text-[#FF9F0D]'>43$</span></p>
              <p className='mt-2 text-base md:text-lg text-[#4F4F4F]'>Gorgonzola, ricotta, mozzarella, taleggio</p>
              <p className='mt-2 text-base md:text-lg text-[#828282]'>700 CAL</p>
            </div>

            <div className='w-full h-auto py-4 md:h-[130px] border-b border-[#E0E0E0]'>
              <p className='flex justify-between text-xl md:text-2xl font-bold'>Vegetables & Green Salad<span className='text-2xl md:text-3xl text-[#FF9F0D]'>14$</span></p>
              <p className='mt-2 text-base md:text-lg text-[#4F4F4F]'>Ground cumin, avocados, peeled and cubed</p>
              <p className='mt-2 text-base md:text-lg text-[#828282]'>1000 CAL</p>
            </div>

            <div className='w-full h-auto py-4 md:h-[130px] border-b border-[#E0E0E0]'>
              <p className='flex justify-between text-xl md:text-2xl font-bold'>Spicy Vegan Potato Curry<span className='text-2xl md:text-3xl text-[#FF9F0D]'>35$</span></p>
              <p className='mt-2 text-base md:text-lg text-[#4F4F4F]'>Spreadable cream cheese, crumbled blue cheese</p>
              <p className='mt-2 text-base md:text-lg text-[#828282]'>560 CAL</p>
            </div>
          </div>
          <img className="w-full lg:w-[32%] h-[300px] md:h-[400px] lg:h-[626px] object-cover rounded-md" src="/down.jpeg" alt="main course" />
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative bg-black mt-12 md:mt-20 lg:mt-[150px]">
        <div className="flex justify-center items-center w-full h-auto py-12 md:h-[469px] bg-cover bg-center relative">
          <div className="absolute inset-0 bg-[url('/4d.jpeg')] bg-cover bg-center opacity-25"></div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 w-[90%] lg:w-[1319px] z-10">
            <div className="flex flex-col items-center">
              <div className="w-[80px] h-[80px] md:w-[120px] md:h-[120px] bg-[#FF9F0D] rounded-md flex items-center justify-center">
                <img className="w-[60%] h-[60%] object-contain" src="/chef.png" alt="chef" />
              </div>
              <strong className="mt-4 md:mt-7 text-2xl md:text-4xl text-white">420</strong>
              <p className="mt-2 md:mt-5 text-lg md:text-2xl text-center text-white font-bold">Professional Chefs</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-[80px] h-[80px] md:w-[120px] md:h-[120px] bg-[#FF9F0D] rounded-md flex items-center justify-center">
                <img className="w-[60%] h-[60%] object-contain" src="/burgur1.png" alt="food" />
              </div>
              <strong className="mt-4 md:mt-7 text-2xl md:text-4xl text-white">320</strong>
              <p className="mt-2 md:mt-5 text-lg md:text-2xl text-center text-white font-bold">Items Of Food</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-[80px] h-[80px] md:w-[120px] md:h-[120px] bg-[#FF9F0D] rounded-md flex items-center justify-center">
                <img className="w-[60%] h-[60%] object-contain" src="/spon.png" alt="experience" />
              </div>
              <strong className="mt-4 md:mt-7 text-2xl md:text-4xl text-white">30+</strong>
              <p className="mt-2 md:mt-5 text-lg md:text-2xl text-center text-white font-bold">Years Of Experienced</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-[80px] h-[80px] md:w-[120px] md:h-[120px] bg-[#FF9F0D] rounded-md flex items-center justify-center">
                <img className="w-[60%] h-[60%] object-contain" src="/slice.png" alt="customers" />
              </div>
              <strong className="mt-4 md:mt-7 text-2xl md:text-4xl text-white">220</strong>
              <p className="mt-2 md:mt-5 text-lg md:text-2xl text-center text-white font-bold">Happy Customers</p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 4 - Dessert */}
      <div className='flex justify-center w-full mt-12 md:mt-20 lg:mt-[150px] px-4 lg:px-0'>
        <div className='flex flex-col lg:flex-row justify-between w-full lg:w-[90%] xl:w-[69%] gap-8 lg:gap-12'>
          <img 
            className="w-full lg:w-[32%] h-[300px] md:h-[400px] lg:h-[626px] object-cover rounded-md hover:opacity-90 transition-opacity duration-300" 
            src="/upp.jpeg" 
            alt="dessert menu" 
          />
          <div className='w-full lg:w-[60%]'>
            <i className="text-xl fas fa-coffee text-[#FF9F0D] hover:scale-110 transition-transform duration-300"></i>
            <p className='mt-2 text-3xl md:text-4xl lg:text-5xl font-bold'>Dessert</p>
            
            <div className='w-full h-auto py-4 md:h-[130px] border-b border-[#E0E0E0] hover:bg-gray-50 transition-colors duration-300'>
              <p className='flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-0 text-xl md:text-2xl font-bold'>
                Fig and lemon cake 
                <span className='text-2xl md:text-3xl text-[#FF9F0D]'>32$</span>
              </p>
              <p className='mt-2 text-base md:text-lg text-[#4F4F4F]'>Toasted French bread topped with romano, cheddar</p>
              <p className='mt-2 text-base md:text-lg text-[#828282]'>560 CAL</p>
            </div>

            <div className='w-full h-auto py-4 md:h-[130px] border-b border-[#E0E0E0] hover:bg-gray-50 transition-colors duration-300'>
              <p className='flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-0 text-xl md:text-2xl font-bold'>
                Creamy mascarpone cake 
                <span className='text-2xl md:text-3xl text-[#FF9F0D]'>43$</span>
              </p>
              <p className='mt-2 text-base md:text-lg text-[#4F4F4F]'>Gorgonzola, ricotta, mozzarella, taleggio</p>
              <p className='mt-2 text-base md:text-lg text-[#828282]'>700 CAL</p>
            </div>

            <div className='w-full h-auto py-4 md:h-[130px] border-b border-[#E0E0E0] hover:bg-gray-50 transition-colors duration-300'>
              <p className='flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-0 text-xl md:text-2xl font-bold'>
                Pastry, blueberries, lemon juice 
                <span className='text-2xl md:text-3xl text-[#FF9F0D]'>14$</span>
              </p>
              <p className='mt-2 text-base md:text-lg text-[#4F4F4F]'>Ground cumin, avocados, peeled and cubed</p>
              <p className='mt-2 text-base md:text-lg text-[#828282]'>1000 CAL</p>
            </div>

            <div className='w-full h-auto py-4 md:h-[130px] border-b border-[#E0E0E0] hover:bg-gray-50 transition-colors duration-300'>
              <p className='flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-0 text-xl md:text-2xl font-bold'>
                Pain au chocolat
                <span className='text-2xl md:text-3xl text-[#FF9F0D]'>35$</span>
              </p>
              <p className='mt-2 text-base md:text-lg text-[#4F4F4F]'>Spreadable cream cheese, crumbled blue cheese</p>
              <p className='mt-2 text-base md:text-lg text-[#828282]'>560 CAL</p>
            </div>

          </div>
        </div>
      </div>


{/* Section 5 - Drinks */}
      <div className="flex justify-center w-full mt-12 md:mt-20 lg:mt-[150px] px-4 lg:px-0">
        <div className="flex flex-col-reverse lg:flex-row justify-between w-full lg:w-[90%] xl:w-[69%] gap-8 lg:gap-12">
          <div className="w-full lg:w-[60%]">
            <i className="text-xl fas fa-coffee text-[#FF9F0D]"></i>
            <p className='mt-2 text-3xl md:text-4xl lg:text-5xl font-bold'>Drinks</p>
            
            <div className='w-full h-auto py-4 md:h-[130px] border-b border-[#E0E0E0]'>
              <p className='flex justify-between text-xl md:text-2xl font-bold'>Caffè macchiato<span className='text-2xl md:text-3xl text-[#FF9F0D]'>32$</span></p>
              <p className='mt-2 text-base md:text-lg text-[#4F4F4F]'>Toasted French bread topped with romano, cheddar</p>
              <p className='mt-2 text-base md:text-lg text-[#828282]'>560 CAL</p>
            </div>

            <div className='w-full h-auto py-4 md:h-[130px] border-b border-[#E0E0E0]'>
              <p className='flex justify-between text-xl md:text-2xl font-bold'>Aperol Spritz Capacianno <span className='text-2xl md:text-3xl text-[#FF9F0D]'>43$</span></p>
              <p className='mt-2 text-base md:text-lg text-[#4F4F4F]'>Gorgonzola, ricotta, mozzarella, taleggio</p>
              <p className='mt-2 text-base md:text-lg text-[#828282]'>700 CAL</p>
            </div>

            <div className='w-full h-auto py-4 md:h-[130px] border-b border-[#E0E0E0]'>
              <p className='flex justify-between text-xl md:text-2xl font-bold'>Caffe Latte Campuri<span className='text-2xl md:text-3xl text-[#FF9F0D]'>14$</span></p>
              <p className='mt-2 text-base md:text-lg text-[#4F4F4F]'>Ground cumin, avocados, peeled and cubed</p>
              <p className='mt-2 text-base md:text-lg text-[#828282]'>1000 CAL</p>
            </div>

            <div className='w-full h-auto py-4 md:h-[130px] border-b border-[#E0E0E0]'>
              <p className='flex justify-between text-xl md:text-2xl font-bold'>Tormentoso BushTea Pintoage<span className='text-2xl md:text-3xl text-[#FF9F0D]'>35$</span></p>
              <p className='mt-2 text-base md:text-lg text-[#4F4F4F]'>Spreadable cream cheese, crumbled blue cheese</p>
              <p className='mt-2 text-base md:text-lg text-[#828282]'>560 CAL</p>
            </div>
          </div>
          <img className="w-full lg:w-[32%] h-[300px] md:h-[400px] lg:h-[626px] object-cover rounded-md" src="/downn.jpeg" alt="drinks" />
        </div>
      </div>

      {/* Partners Section */}
      <div className='flex justify-center items-center w-full py-12 md:py-16 lg:py-20 mt-12 md:mt-16 lg:mt-[100px] px-4 lg:px-0'>
        <div className='w-full md:w-[90%] lg:w-[70%]'>
          <p className='text-center text-base md:text-lg'>Partners & Clients</p>
          <p className='text-center text-2xl md:text-3xl font-bold mt-2 md:mt-3'>We work with the best people</p>

          <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 mt-8 md:mt-10'>
            <div className="flex items-center justify-center">
              <img className="w-full max-w-[150px] h-[80px] md:h-[100px] lg:h-[130px] object-contain opacity-35 transition-opacity hover:opacity-50" 
                   src="/col1.png" 
                   alt="partner" />
            </div>
            <div className="flex items-center justify-center">
              <img className="w-full max-w-[150px] h-[80px] md:h-[100px] lg:h-[130px] object-contain opacity-35 transition-opacity hover:opacity-50" 
                   src="/col2.png" 
                   alt="partner" />
            </div>
            <div className="flex items-center justify-center">
              <img className="w-full max-w-[150px] h-[80px] md:h-[100px] lg:h-[130px] object-contain opacity-35 transition-opacity hover:opacity-50" 
                   src="/col3.png" 
                   alt="partner" />
            </div>
            <div className="flex items-center justify-center">
              <img className="w-full max-w-[150px] h-[80px] md:h-[100px] lg:h-[130px] object-contain opacity-35 transition-opacity hover:opacity-50" 
                   src="/col4.png" 
                   alt="partner" />
            </div>
            <div className="flex items-center justify-center">
              <img className="w-full max-w-[150px] h-[80px] md:h-[100px] lg:h-[130px] object-contain opacity-35 transition-opacity hover:opacity-50" 
                   src="/col5.png" 
                   alt="partner" />
            </div>
            <div className="flex items-center justify-center">
              <img className="w-full max-w-[150px] h-[80px] md:h-[100px] lg:h-[130px] object-contain opacity-35 transition-opacity hover:opacity-50" 
                   src="/col6.png" 
                   alt="partner" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
      </div>
      )}