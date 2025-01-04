import React, { useState } from "react";
import blog1 from "../assets/Blogs/blog1.jpeg";



const Blog = () => {
  const posts = [
    {
      title: "10 Tips for Web Development",
      description: "Learn essential tips for improving your web development skills.",
      fullText: "This is the full text of the blog post where you can explain all the tips in detail.",
      image: blog1,
      link: "/post/1",
    },
  ];

  const [expandedPost, setExpandedPost] = useState(null);

  const togglePost = (index) => {
    setExpandedPost(expandedPost === index ? null : index);
  };

  return (
    <div className="relative bg-black-600 py-12 px-6">
 

      <div className="max-w-7xl mx-auto relative z-10">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Our Blog</h1>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Popular Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.description}</p>
                  <button
                    onClick={() => togglePost(index)}
                    className="text-blue-500 hover:underline"
                  >
                    {expandedPost === index ? "Read less" : "Read more"}
                  </button>
                  {expandedPost === index && (
                    <div className="text-gray-600 mt-4">
                      <p>{post.fullText}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Blog;
