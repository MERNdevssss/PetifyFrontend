import React from "react";
import Services from "./Services/Services";
import Blog from "./Blog/Blog";
import HeroSection from "./Hero/HeroSection";
import CategoriesSection from "./Categories/CategoriesSection";
import ProductSection from "../Products/ProductSection";
import RoiSection from "../Roi/RoiSection";
import TestimonialSection from "./Testimonial/Testimonial";
import Footer from "./Footer/Footer";

const HomePage = () => {
  return (
    <>

      <HeroSection />
      <CategoriesSection/>
      <ProductSection/>
      <Services />
      <RoiSection/>
      <TestimonialSection/>
      <Blog />
    <Footer/>
    </>
  );

};

export default HomePage;
