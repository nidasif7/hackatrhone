import React from 'react';
import Link from 'next/link';
import Navbar2 from '../component/navbar2/page';
import Footer from '../component/restaurant/footer';

export default function Shop() {
    return (
        <div className="max-w-screen-2xl mx-auto">
            <div className='w-full mb-20'>
                {/* Hero Section */}
                <div className="w-full h-[300px] sm:h-[350px] lg:h-[410px] bg-[url('/back.jpeg')] bg-cover bg-center">
                    <Navbar2 />
                    <div className="flex justify-center items-center w-full h-[300px] sm:h-[350px] lg:h-[410px]">
                        <div className="text-center w-[80%] sm:w-[50%] md:w-[30%] lg:w-[18%] h-[104px] text-white">
                            <p className='text-3xl sm:text-4xl lg:text-5xl font-bold'>Our shop</p>
                            <div className='space-x-2 text-base sm:text-lg mt-6 text-white'>
                            <button className="hover:text-[#FF9F0D] transition-colors"><Link href={"/"}>Home</Link></button>
                                <i className="text-sm fa-solid fa-chevron-right"></i>
                                <button className='text-[#FF9F0D]'>Shop</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className='flex flex-col lg:flex-row justify-center w-full mt-[50px] sm:mt-[100px] lg:mt-[150px] px-4 sm:px-6 lg:px-8'>
                    {/* Main Product Section */}
                    <div className='w-full lg:w-[55%] space-y-8'>
                        {/* Sort Controls */}
                        <div className='flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5'>
                            <div className='flex items-center justify-between w-full sm:w-auto'>
                                <p className='mr-2'>Sort By:</p>
                                <div className='flex rounded-md items-center border border-slate-200 h-[46px] w-[70%] sm:w-[180px] text-slate-200'>
                                    <p className='ml-3'>Newest</p>
                                    <i className="ml-auto mr-3 text-sm fa-solid fa-angle-down"></i>
                                </div>
                            </div>
                            <div className='flex items-center justify-between w-full sm:w-auto'>
                                <p className='mr-2'>Show:</p>
                                <div className='flex rounded-md items-center border border-slate-200 h-[46px] w-[70%] sm:w-[180px] text-slate-200'>
                                    <p className='ml-3'>Default</p>
                                    <i className="ml-auto mr-3 text-sm fa-solid fa-angle-down"></i>
                                </div>
                            </div>
                        </div>

                        {/* Products Grid */}
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                            {[
                                { img: '/c1.jpeg', name: 'Fresh Lime', price: '38.00', oldPrice: '45.00' },
                                { img: '/c2.jpeg', name: 'Chocolate Muffin', price: '28.00' },
                                { img: '/4c.jpeg', name: 'Burger', price: '21.00', oldPrice: '45.00' },
                                { img: '/c3.jpeg', name: 'Country Burger', price: '45.00' },
                                { img: '/c4.jpeg', name: 'Drink', price: '23.00', oldPrice: '45.00' },
                                { img: '/c5.jpeg', name: 'Pizza', price: '43.00' },
                                { img: '/c8.jpeg', name: 'Cheese Butter', price: '10.00' },
                                { img: '/9c.jpeg', name: 'Sandwiches', price: '25.00' },
                                { img: '/c10.jpeg', name: 'Chicken Chup', price: '12.00' },
                                { img: '/c3.jpeg', name: 'Country Burger', price: '45.00' },
                                { img: '/c4.jpeg', name: 'Drink', price: '23.00', oldPrice: '45.00' },
                                { img: '/c5.jpeg', name: 'Pizza', price: '43.00' },
                                { img: '/c8.jpeg', name: 'Cheese Butter', price: '10.00' },
                                { img: '/9c.jpeg', name: 'Sandwiches', price: '25.00' },
                                { img: '/c10.jpeg', name: 'Chicken Chup', price: '12.00' }
                            ].map((product, index) => (
                                <div key={index} className='w-full'>
                                    <div className='aspect-w-1 aspect-h-1'>
                                        <img 
                                            className="w-full h-[200px] sm:h-[220px] lg:h-[267px] object-cover" 
                                            src={product.img} 
                                            alt={product.name} 
                                        />
                                    </div>
                                    <p className='mt-3 font-bold'>{product.name}</p>
                                    <div className='flex space-x-2'>
                                        <p className='text-[#FF9F0D]'>${product.price}</p>
                                        {product.oldPrice && (
                                            <p className='line-through text-[#828282]'>${product.oldPrice}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Pagination - Fixed at Bottom */}

                    </div>

                    {/* Sidebar */}
                    <div className="w-full lg:w-[20%] lg:ml-7 mt-8 lg:mt-0">
                        <div className="border border-slate-200 rounded-md p-4 space-y-8">
                            {/* Search Box */}
                            <div className="flex items-center h-[46px] bg-[#FF9F0D1A]">
                                <input 
                                    type="text" 
                                    placeholder="Search Product" 
                                    className="flex-1 bg-transparent px-4 text-[#828282]"
                                />
                                <button className="w-[46px] h-full text-white bg-[#FF9F0D]">
                                    <i className="fas fa-search"></i>
                                </button>
                            </div>

                            {/* Categories */}
                            <div>
                                <p className='text-xl font-bold mb-5'>Category</p>
                                {[
                                    'Sandwiches', 'Burger', 'Chicken Chup', 'Drink', 
                                    'Pizza', 'Non Veg', 'Thi', 'Uncategorized'
                                ].map((category, index) => (
                                    <div key={index} className='flex items-center mt-2'>
                                        <button className='w-[14px] h-[14px] border border-black'></button>
                                        <p className='ml-2'>{category}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Perfect Taste Banner */}
                            <div className='relative'>
                                <img className="w-full h-[286px] object-cover" src="/text.jpeg" alt="Background" />
                                <div className="absolute inset-0 p-5">
                                    <p className='text-white text-lg font-bold'>Perfect Taste</p>
                                    <p className="text-white text-2xl font-bold mt-2">Classic Restaurant</p>
                                    <p className='text-[#FF9F0D] text-lg font-bold mt-4'>45.00$</p>
                                    <div className='flex text-white items-center mt-[100px]'>
                                        <p>Shop Now</p>
                                        <i className="ml-3 fa-solid fa-circle-arrow-right"></i>
                                    </div>
                                </div>
                            </div>

                            {/* Price Filter */}
                            <div>
                                <p className='text-2xl font-bold mb-4'>Filter By Price</p>
                                <div className="relative py-4">
                                    <div className="w-full h-[5px] bg-[#FF9F0D]"></div>
                                    <div className="absolute left-0 top-1/2 -translate-y-1/2">
                                        <div className="w-[15px] h-[15px] bg-white rounded-full flex justify-center items-center">
                                            <div className="w-[8px] h-[8px] bg-[#FF9F0D] rounded-full"></div>
                                        </div>
                                    </div>
                                    <div className="absolute right-0 top-1/2 -translate-y-1/2">
                                        <div className="w-[15px] h-[15px] bg-white rounded-full flex justify-center items-center">
                                            <div className="w-[8px] h-[8px] bg-[#FF9F0D] rounded-full"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex justify-between text-slate-400 text-sm sm:text-base mt-4'>
                                    <p>From $0 to $8000</p>
                                    <button>Filter</button>
                                </div>
                            </div>

                            {/* Latest Products */}
                            <div>
                                <p className="text-xl font-bold mb-4">Latest Products</p>
                                <div className="space-y-4">
                                    {['Pizza', 'Cookies', 'Burger', 'Cupchakes'].map((item, index) => (
                                        <div key={index} className="flex items-start">
                                            <img className="w-[71px] h-[65px] object-cover" src="/34.jpeg" alt={item} />
                                            <div className="ml-[10px]">
                                                <p className="text-lg">{item}</p>
                                                <div className="flex space-x-1 text-[9px]">
                                                    {[1, 2].map((star) => (
                                                        <i key={star} className="fa-solid fa-star text-[#FF9F0D]"></i>
                                                    ))}
                                                    {[1, 2, 3].map((star) => (
                                                        <i key={star} className="fa-solid fa-star text-slate-200"></i>
                                                    ))}
                                                </div>
                                                <p className="text-xl">$35.00</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Product Tags */}
                            <div>
                                <p className='text-2xl font-bold mb-4'>Product Tags</p>
                                <div className='flex flex-wrap gap-3'>
                                    {[
                                        'Services', 'Our Menu', 'Pizza',
                                        'CupCake', 'Burger', 'Cookies',
                                        'Our Shop', 'Tandoori Chicken'
                                    ].map((tag, index) => (
                                        <span 
                                            key={index} 
                                            className={`border-b-2 pb-1 ${
                                                tag === 'Burger' 
                                                    ? 'border-[#FF9F0D] text-[#FF9F0D]' 
                                                    : 'border-[#F2F2F2] text-[#4F4F4F]'
                                            }`}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                <div className=' flex justify-center items-center  h-[50px] w-[100%] mt-[-50px] mb-10 '>
                <div className='flex justify-center'>
                            <div className="flex space-x-2">
                                <button className="w-10 h-10 flex items-center justify-center border border-slate-200 text-[#FF9F0D]">
                                    <i className="fas fa-angle-double-left"></i>
                                </button>
                                <button className="w-10 h-10 flex items-center justify-center border border-slate-200 text-[#FF9F0D]">1</button>
                                <button className="w-10 h-10 flex items-center justify-center border border-slate-200 text-white bg-[#FF9F0D]">2</button>
                                <button className="w-10 h-10 flex items-center justify-center border border-slate-200 text-[#FF9F0D]">3</button>
                                <button className="w-10 h-10 flex items-center justify-center border border-slate-200 text-[#FF9F0D]">
                                    <i className="fas fa-angle-double-right"></i>
                                </button>
                            </div>
                        </div>
                </div>
            <Footer />
        </div>
    );
}