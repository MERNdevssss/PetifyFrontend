import React from "react";
import { Button } from "@mui/material";
import {useNavigate} from "react-router-dom";
import trainingImg from '../../../../assets/training.jpg';
import adoptionImg from '../../../../assets/adoption.jpg';
import hostelImg from '../../../../assets/hostel.jpg';
import medicalImg from '../../../../assets/medical.jpg';
import groomingImg from '../../../../assets/grooming.jpg';

export default function Services() {
  const navigate=useNavigate();

  const services = [
  {
    title: "Pet Training",
    image: trainingImg, 
    buttonText: "See More",
    next:'/pet-training'
  },
  {
    title: "Medical Consultation",
    image: medicalImg, 
    buttonText: "See More",
    next:'#'
  },
  {
    title: "Pet Grooming",
    image: groomingImg,
    buttonText: "See More",
    next:'#'
  },
  {
    title: "Pet Adoption",
    image: adoptionImg,
    buttonText: "See More",
    next:'#'
  },
  {
    title: "Pet Hostel",
    image: hostelImg, 
    buttonText: "Book Now",
    next:'#'
  },
];
  return (
    <section className="bg-[#FFF6F1] py-12 px-4 md:px-8 lg:px-16">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-10">
        Exciting Services For Your Pets
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className={`relative rounded-2xl overflow-hidden shadow-lg group
              ${
                index === 3
                  ? "md:col-span-2" // Pet Adoption spans 2 columns
                  : index === 4
                  ? "lg:col-span-1" // Pet Hostel normal size
                  : ""
              }
            `}
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 flex justify-between items-center">
              <h3 className="text-white text-lg font-semibold">
                {service.title}
              </h3>
              <Button
                onClick={()=>navigate(service.next)}
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
                {service.buttonText}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
