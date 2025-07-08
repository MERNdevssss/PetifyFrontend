import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import img from "@/assets/Cat_HeroSection.png";
function Cat_HeroSection() {
  return (
    <section className="bg-[#A3E4D7]/50 py-16 px-6 md:px-20 relative overflow-hidden mt-2">
      <div className="absolute inset-0 opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-center">
        <div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-petify-brand-purple leading-tight">
            MEET THE ONES WHO ARE
            <br /> WAITING TO MEET YOU.
          </h1>
          <p className="mt-4 sm:mt-5 md:mt-6 text-[#666666] text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
            Every animal here is more than a category — they're a story waiting
            for a happy ending. Whether you're looking for a playful pup, a cozy
            kitten, or a curious bunny, your next best friend is just a click
            away.
          </p>
        </div>
        <Card className="rounded-xl shadow-lg border-2 border-petify-brand-purple">
          <CardContent className="p-2 md:p-4">
            <img
              src={img}
              alt="Woman holding dog"
              className="rounded-lg object-cover w-full h-auto"
            />
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export default Cat_HeroSection;
