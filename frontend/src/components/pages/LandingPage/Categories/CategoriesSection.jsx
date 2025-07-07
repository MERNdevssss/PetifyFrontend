import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Button } from "@mui/material";

import Cats from '../../../../assets/cats.jpg';
import Dogs from '../../../../assets/dogs.jpg';
import Rabbits from '../../../../assets/rabbits.jpg';
import Parrots from '../../../../assets/parrots.jpg';
import Rats from '../../../../assets/rats.jpg';


function CategoriesSection() {
  const navigate = useNavigate();

  const pet_type = [
  {
    title: "Cats",
    image: Cats, 
    buttonText: "See More",
    next:'#'
  },
  {
    title: "Dogs",
    image: Dogs, 
    buttonText: "See More",
    next:'#'
  },
  {
    title: "Rabbits",
    image: Rabbits,
    buttonText: "See More",
    next:'#'
  },
  {
    title: "Parrots",
    image: Parrots,
    buttonText: "See More",
    next:'#'
  },
  {
    title: "Rats",
    image: Rats,
    buttonText: "See More",
    next:'#'
  },
];
  return (
    <section className="bg-[#FFF6F1] py-12 px-4 md:px-8 lg:px-16">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-4">
        Excited to get a pet, but still confused?
      </h2>
      <p className='text-center'>We're here to help you! Try Petify and make the right choice.</p>
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

export default CategoriesSection