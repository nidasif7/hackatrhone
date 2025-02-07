export default function Div5() {
    const menuItems = [
        { name: 'Lettuce Leaf', desc: 'Lacus nisi, et ac dap', price: '12.5', img: '/1m.jpeg' },
        { name: 'Fresh Breakfast', desc: 'Lacus nisi, et ac da', price: '14.5', img: '/4c.jpeg' },
        { name: 'Mild Butter', desc: 'Lacus nisi, et ac da', price: '12.5', img: '/2m.jpeg' },
        { name: 'Fresh Bread', desc: 'Lacus nisi, et ac da', price: '12.5', img: '/3m.jpeg' },
    ];

    const menuItems2 = [
        { name: 'Glow Cheese', desc: 'Lacus nisi, et ac da', price: '12.5', img: '/4m.jpeg' },
        { name: 'Chocolate', desc: 'Lacus nisi, et ac dap', price: '14.5', img: '/5m.jpeg' },
        { name: 'Slice Beef', desc: 'Lacus nisi, et ac dap', price: '12.5', img: '/2nd.jpeg' },
        { name: 'Burgur', desc: 'Lacus nisi, et ac dap', price: '12.5', img: '/2c.jpeg' },
    ];

    const categories = ['Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Drink', 'Snack', 'Soups'];

    return (
        <div className="flex justify-center items-center w-full h-auto py-10 mt-5">
            <div className="w-full md:w-[90%] lg:w-[80%] px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center">
                    <p className="text-[#FF9F0D] text-xl sm:text-2xl font-greatVibes">Choose & pick</p>
                    <p className="mt-3 sm:mt-[15px] text-white text-3xl sm:text-4xl font-bold">
                        <span className="text-yellow-500">Fr</span>om Our Menu
                    </p>
                </div>

                {/* Categories */}
                <div className="mt-8 sm:mt-[50px]">
                    <div className="flex flex-wrap justify-center sm:justify-between gap-4 text-base sm:text-lg lg:text-xl">
                        {categories.map((category, index) => (
                            <p key={index} className={`${index === 0 ? 'text-[#FF9F0D]' : 'text-white'} cursor-pointer hover:text-[#FF9F0D] transition-colors`}>
                                {category}
                            </p>
                        ))}
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex flex-col lg:flex-row justify-between w-full mt-8 lg:mt-[40px] gap-8">
                    {/* Center Image Section */}
                    <div className="relative w-full lg:w-[515px] h-[300px] sm:h-[400px] flex justify-center items-center order-1 lg:order-none">
                        <img 
                            className="w-full sm:w-[500px] h-[250px] sm:h-[400px] object-cover" 
                            src="/parent.png" 
                            alt="background plate" 
                        />
                        <img 
                            className="w-[250px] sm:w-[350px] h-[220px] sm:h-[362px] object-cover absolute inset-0 m-auto" 
                            src="/main.png" 
                            alt="main dish" 
                        />
                    </div>

                    {/* Left Menu Items */}
                    <div className="w-full lg:w-[376px] space-y-4 sm:space-y-5">
                        {menuItems.map((item, index) => (
                            <div key={index} className="flex items-start gap-3">
                                <img 
                                    className="w-[70px] sm:w-[80px] h-[70px] sm:h-[82px] object-cover rounded-md" 
                                    src={item.img} 
                                    alt={item.name} 
                                />
                                <div className="flex flex-col">
                                    <p className="text-white text-lg sm:text-xl font-bold">{item.name}</p>
                                    <p className="text-white text-base sm:text-lg">{item.desc}</p>
                                    <p className="text-[#FF9F0D] text-base sm:text-lg font-bold">{item.price}$</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Menu Items */}
                    <div className="w-full lg:w-[376px] space-y-4 sm:space-y-5">
                        {menuItems2.map((item, index) => (
                            <div key={index} className="flex items-start gap-3">
                                <img 
                                    className="w-[70px] sm:w-[80px] h-[70px] sm:h-[82px] object-cover rounded-md" 
                                    src={item.img} 
                                    alt={item.name} 
                                />
                                <div className="flex flex-col">
                                    <p className="text-white text-lg sm:text-xl font-bold">{item.name}</p>
                                    <p className="text-white text-base sm:text-lg">{item.desc}</p>
                                    <p className="text-[#FF9F0D] text-base sm:text-lg font-bold">{item.price}$</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}