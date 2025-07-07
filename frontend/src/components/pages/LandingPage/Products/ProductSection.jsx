import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Button } from "@mui/material";

import Food from '../../../../assets/food.jpg';
import Medicines from '../../../../assets/medicines.jpg';
import Accessories from '../../../../assets/accessories.jpg';
import Treats from '../../../../assets/treats.jpg';
import Clothes from '../../../../assets/clothes.jpg';
import Toys from '../../../../assets/toys.jpg';
import Grooming from '../../../../assets/grooming_kits.jpg';

function ProductSection() {
  const navigate = useNavigate();

  const pet_type = [
    {
      title: "Food",
      image: Food, 
      buttonText: "See More",
      next:'#'
    },
    {
      title: "Medicines",
      image: Medicines, 
      buttonText: "See More",
      next:'#'
    },
    {
      title: "Toys",
      image: Toys,
      buttonText: "See More",
      next:'#'
    },
    {
      title: "Grooming",
      image: Grooming,
      buttonText: "See More",
      next:'#'
    },
    {
      title: "Treats",
      image: Treats,
      buttonText: "See More",
      next:'#'
    },
    {
      title: "Clothes",
      image: Clothes,
      buttonText: "See More",
      next:'#'
    },
    {
      title: "Accessories",
      image: Accessories,
      buttonText: "See More",
      next:'#'
    },
  ];

  return (
    <section className="bg-[#FFF6F1] py-12 px-4 md:px-8 lg:px-16">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-10">
        Everything you need !
      </h2>
      <div className="flex gap-6 my-4 overflow-x-auto scrollbar-hide px-1 snap-x snap-mandatory scroll-smooth">
  {pet_type.map((type, index) => (
    <div
      key={index}
      className="relative rounded-2xl overflow-hidden shadow-lg group flex-shrink-0 snap-start 
                 w-[90vw] sm:w-[45vw] md:w-[29vw]"
    >
      <img
        src={type.image}
        alt={type.title}
        className="h-80 w-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-10 p-4 flex justify-between items-center">
        <h3 className="text-white text-lg font-semibold">{type.title}</h3>
        <Button
          onClick={() => navigate(type.next)}
          variant="outlined"
          sx={{
            color: "#fff",
            borderColor: "#fff",
            borderRadius: "50px",
            "&:hover": {
              backgroundColor: "rgba(255,255,255,0.1)",
              borderColor: "#fff",
            },
            fontSize: "0.8rem",
            textTransform: "none",
          }}
        >
          {type.buttonText}
        </Button>
      </div>
    </div>
  ))}
</div>

    </section>
  )
}

export default ProductSection