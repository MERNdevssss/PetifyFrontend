import React, { useState } from "react";
import { MapPin } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function Cat_ActionBar() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedDistance, setSelectedDistance] = useState("");
  const [location, setLocation] = useState("");

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "dogs", label: "Dogs" },
    { value: "cats", label: "Cats" },
    { value: "birds", label: "Birds" },
    { value: "small-animals", label: "Small Animals" },
    { value: "fish", label: "Fish" },
    { value: "reptiles", label: "Reptiles" },
    { value: "farm-animals", label: "Farm Animals" },
  ];

  const distances = [
    { value: "any", label: "Any Distance" },
    { value: "5", label: "5 miles" },
    { value: "10", label: "10 miles" },
    { value: "25", label: "25 miles" },
    { value: "50", label: "50 miles" },
    { value: "100", label: "100 miles" },
  ];

  const handleSaveSearch = () => {
    console.log("Saving search:", {
      category: selectedCategory,
      distance: selectedDistance,
      location: location,
    });
  };

  return (
    <div className="bg-petify-brand-purple py-3 px-3 sm:py-4 sm:px-4 lg:py-6 lg:px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Large screens - Single row layout */}
        <div className="hidden lg:grid lg:grid-cols-5 xl:grid-cols-6 gap-4 xl:gap-6">
          {/* Category Select */}
          <div className="w-full">
            <Select
              value={selectedCategory}
              onValueChange={setSelectedCategory}
            >
              <SelectTrigger className="w-full bg-petify-background-white text-petify-text-slate backdrop-blur-sm transition-all duration-200 border-0 shadow-md font-medium text-base lg:text-lg rounded-xl data-[placeholder]:text-petify-text-slate hover:shadow-lg focus:ring-2 focus:ring-purple-300 h-12 lg:h-14">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent className="max-h-60 overflow-y-auto text-petify-text-slate bg-white">
                {categories.map((category) => (
                  <SelectItem key={category.value} value={category.value} className="text-base">
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Distance Select */}
          <div className="w-full">
            <Select
              value={selectedDistance}
              onValueChange={setSelectedDistance}
            >
              <SelectTrigger className="w-full bg-petify-background-white backdrop-blur-sm transition-all duration-200 border-0 shadow-md text-petify-text-slate font-medium text-base lg:text-lg rounded-xl data-[placeholder]:text-petify-text-slate hover:shadow-lg focus:ring-2 focus:ring-purple-300 h-12 lg:h-14">
                <SelectValue placeholder="Distance" />
              </SelectTrigger>
              <SelectContent className="max-h-60 overflow-y-auto bg-white">
                {distances.map((distance) => (
                  <SelectItem key={distance.value} value={distance.value} className="text-base">
                    {distance.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Location Input */}
          <div className="w-full lg:col-span-2 xl:col-span-3">
            <div className="relative">
              <MapPin
                size={22}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-petify-text-slate z-10"
              />
              <input
                type="text"
                placeholder="Enter City, State Or ZIP"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full bg-petify-background-white backdrop-blur-sm transition-all duration-200 pl-12 pr-4 py-3 lg:py-4 shadow-md text-gray-700 placeholder:text-petify-text-slate focus:outline-none focus:ring-2 focus:ring-purple-300 border-0 rounded-xl hover:shadow-lg text-base lg:text-lg h-12 lg:h-14"
              />
            </div>
          </div>

          {/* Save Search Button */}
          <div className="w-full lg:col-span-1 xl:col-span-1">
            <button
              onClick={handleSaveSearch}
              className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-semibold px-4 lg:px-6 py-3 lg:py-4 rounded-xl shadow-lg transition-all duration-200 border border-white/30 hover:border-white/50 hover:shadow-xl active:scale-95 h-12 lg:h-14 flex items-center justify-center text-base lg:text-lg"
            >
              Save Search
            </button>
          </div>
        </div>

        {/* Small screens - Three rows layout */}
        <div className="lg:hidden space-y-3 sm:space-y-4">
          
          {/* Row 1: Both dropdowns */}
          <div className="flex gap-2 sm:gap-3">
            <div className="flex-1">
              <Select
                value={selectedCategory}
                onValueChange={setSelectedCategory}
              >
                <SelectTrigger className="w-full bg-petify-background-white text-petify-text-slate backdrop-blur-sm transition-all duration-200 border-0 shadow-md font-medium text-sm sm:text-base rounded-lg sm:rounded-xl data-[placeholder]:text-petify-text-slate hover:shadow-lg focus:ring-2 focus:ring-purple-300 h-10 sm:h-12">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent className="max-h-60 overflow-y-auto text-petify-text-slate bg-white">
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value} className="text-sm sm:text-base">
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex-1">
              <Select
                value={selectedDistance}
                onValueChange={setSelectedDistance}
              >
                <SelectTrigger className="w-full bg-petify-background-white backdrop-blur-sm transition-all duration-200 border-0 shadow-md text-petify-text-slate font-medium text-sm sm:text-base rounded-lg sm:rounded-xl data-[placeholder]:text-petify-text-slate hover:shadow-lg focus:ring-2 focus:ring-purple-300 h-10 sm:h-12">
                  <SelectValue placeholder="Distance" />
                </SelectTrigger>
                <SelectContent className="max-h-60 overflow-y-auto bg-white">
                  {distances.map((distance) => (
                    <SelectItem key={distance.value} value={distance.value} className="text-sm sm:text-base">
                      {distance.label}
                    </SelectItem>
                  ))}
                </SelectContent>
                </Select>
            </div>
          </div>

          {/* Row 2: Location input */}
          <div className="w-full">
            <div className="relative">
              <MapPin
                size={18}
                className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-petify-text-slate z-10"
              />
              <input
                type="text"
                placeholder="Enter City, State Or ZIP"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full bg-petify-background-white backdrop-blur-sm transition-all duration-200 pl-10 sm:pl-12 pr-4 py-2 sm:py-3 shadow-md text-gray-700 placeholder:text-petify-text-slate focus:outline-none focus:ring-2 focus:ring-purple-300 border-0 rounded-lg sm:rounded-xl hover:shadow-lg text-sm sm:text-base h-10 sm:h-12"
              />
            </div>
          </div>

          {/* Row 3: Save button */}
          <div className="w-full">
            <button
              onClick={handleSaveSearch}
              className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl shadow-lg transition-all duration-200 border border-white/30 hover:border-white/50 hover:shadow-xl active:scale-95 h-10 sm:h-12 flex items-center justify-center text-sm sm:text-base"
            >
              Save Search
            </button>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Cat_ActionBar;