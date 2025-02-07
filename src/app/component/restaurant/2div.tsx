export default function Div2() {
  return (
    <div className="flex justify-center items-center w-full h-auto py-10 md:py-20 ">
      <div className="w-[90%] max-w-7xl mx-auto">
        {/* Heading Section */}
        <div className="text-center">
          <p className="text-[#FF9F0D] text-2xl sm:text-3xl md:text-4xl font-greatVibes">
            Food Category
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mt-2">
            <span className="text-yellow-500">Ch</span>oose Food Item
          </h1>
        </div>

        {/* Image Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 sm:mt-12 md:mt-16">
          <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="/1r.jpeg"
              alt="Food 1"
            />
          </div>
          <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="/2r.jpeg"
              alt="Food 2"
            />
          </div>
          <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="/3r.jpeg"
              alt="Food 3"
            />
          </div>
          <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="/4r.jpeg"
              alt="Food 4"
            />
          </div>
        </div>
      </div>
    </div>
  );
}