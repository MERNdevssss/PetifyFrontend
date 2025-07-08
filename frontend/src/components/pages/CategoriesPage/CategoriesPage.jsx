import React from "react";
import Cat_HeroSection from "./Cat_HeroSection.jsx";
import Cat_FilterSection from "./Cat_FilterSection.jsx";
import Cat_ActionBar from "./Cat_ActionBar.jsx";
import Cat_Display from "./PetSection/Pet_Display.jsx";

function CategoriesPage() {
  return (
    <div>
      <Cat_HeroSection />
      <Cat_ActionBar />
      <main className="lg:grid lg:grid-cols-5">
        <aside className="col-span-1">
        <Cat_FilterSection />
        </aside>
        <aside className="col-span-4">
          <Cat_Display/>
        </aside>
      </main>
    </div>
  );
}

export default CategoriesPage;
