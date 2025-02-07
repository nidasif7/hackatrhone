export default function Div9() {
    const blogPosts = [
      {
        image: "/2r.jpeg",
        date: "10 February 2022",
        title: "Pellentesque Non Efficitur Mi Aliquam Conval"
      },
      {
        image: "/22.jpeg", 
        date: "10 February 2022",
        title: "Morbi Sodales Tellus Elit, In Blandit Risus Suscipit A"
      },
      {
        image: "/33.jpeg",
        date: "10 February 2022", 
        title: "Curabitur rutrum velit ac congue malesuada"
      }
    ];
  
    return (
      <div className="flex justify-center items-center w-full h-auto py-10 mt-10">
        <div className="w-[90%] h-auto">
          <p className="text-center text-[#FF9F0D] text-2xl md:text-3xl font-greatVibes">
            Blog Post
          </p>
          <p className="text-center text-white text-3xl md:text-5xl mt-3 font-bold">
            <span className="text-yellow-500">La</span>test News & Blog
          </p>
  
          <div className="grid md:grid-cols-3 gap-6 mt-8 md:mt-16">
            {blogPosts.map((post, index) => (
              <div 
                key={index} 
                className="border-b-2 border-l-2 border-r-2 border-white"
              >
                <img 
                  className="w-full h-[200px] md:h-[349px] object-cover" 
                  src={post.image} 
                  alt={post.title} 
                />
                <div className="p-4">
                  <p className="text-[#FF9F0D]">{post.date}</p>
                  <p className="mt-3 text-base md:text-xl font-bold text-white">
                    {post.title}
                  </p>
                  <div className="mt-6 flex items-center space-x-4 text-white text-base">
                    <span>Learn More</span>
                    <div className="flex space-x-3">
                      <i className="fa-solid fa-thumbs-up"></i>
                      <i className="text-[#FF9F0D] fas fa-comment-dots"></i>
                      <i className="fa-solid fa-share-nodes"></i>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }