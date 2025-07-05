import React from "react";
import { Button } from "@mui/material";

const blogs = [
  {
    title: "Basic Training Techniques for New Puppy Owners",
    image: "https://picsum.photos/id/1011/600/400", // Placeholder image
  },
  {
    title: "How to help your adopted pet adjust to their new home?",
    image: "https://picsum.photos/id/1015/600/400", // Placeholder image
  },
];

export default function Blog() {
  return (
    <section className="bg-[#FFF6F1] py-12 px-4 md:px-8 lg:px-16">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-10">
        Grow your knowledge with our experts blogs
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="relative rounded-2xl overflow-hidden shadow-lg group"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <h3 className="text-white text-lg font-semibold">
                {blog.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Button
          variant="outlined"
          sx={{
            color: "#333",
            borderColor: "#333",
            borderRadius: "30px",
            px: 3,
            py: 1,
            fontWeight: 500,
            textTransform: "none",
            "&:hover": {
              backgroundColor: "rgba(0,0,0,0.05)",
              borderColor: "#333",
            },
          }}
        >
          View All Blog
        </Button>
      </div>
    </section>
  );
}
