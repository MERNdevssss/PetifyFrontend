import React from "react";
import PetCard from "./PetCard";

function Pet_Display() {
  return (
    <div className="w-full bg-petify-background-white min-h-screen">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 py-4 sm:py-6 md:py-8">
        <div className="grid 
          grid-cols-1 
          xs:grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-2 
          lg:grid-cols-3 
          xl:grid-cols-4 
          2xl:grid-cols-4
          gap-3 
          sm:gap-4 
          md:gap-5 
          lg:gap-6 
          xl:gap-7
          place-items-center
          auto-rows-max
        ">
          <PetCard />
          <PetCard />
          <PetCard />
          <PetCard />
          <PetCard />
          <PetCard />
          <PetCard />
          <PetCard />
          <PetCard />
          <PetCard />
          <PetCard />
          <PetCard />
          <PetCard />
          <PetCard />
          <PetCard />
          <PetCard />
        </div>
        
        {/* Load more section */}
        <div className="flex justify-center mt-8 sm:mt-10 md:mt-12">
          <button className="
            bg-petify-primary-purple 
            hover:bg-petify-primary-purple/90 
            text-white 
            font-semibold 
            py-2 sm:py-3 md:py-4 
            px-6 sm:px-8 md:px-12 
            rounded-xl 
            transition-all 
            duration-300 
            hover:shadow-lg 
            transform 
            hover:-translate-y-1 
            active:scale-95
            text-sm sm:text-base md:text-lg
            w-full sm:w-auto
            max-w-xs sm:max-w-none
          ">
            Load More Pets
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pet_Display;
