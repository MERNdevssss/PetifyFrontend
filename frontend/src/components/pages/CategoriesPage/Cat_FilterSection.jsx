import React, { useState, useEffect } from "react";
import { Filter, X } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
function Cat_FilterSection() {
  const [filters, setFilters] = useState({
    breed: "",
    age: "",
    size: "",
    gender: "",
    goodWith: "",
    color: "",
    isVaccinated: "",
    healthStatus: "",
  });
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const openSidebar = () => {
    setIsSidebarOpen(true);
    setIsAnimatingOut(false);
  };
  const closeSidebar = () => {
    setIsAnimatingOut(true);
    setTimeout(() => {
      setIsSidebarOpen(false);
      setIsAnimatingOut(false);
    }, 100);
  };
  const [hasInitialAnimated, setHasInitialAnimated] = useState(false);
  useEffect(() => {
    if (isSidebarOpen && !isAnimatingOut) {
      const timer = setTimeout(() => setHasInitialAnimated(true), 10);
      return () => clearTimeout(timer);
    } else {
      setHasInitialAnimated(false);
    }
  }, [isSidebarOpen, isAnimatingOut]);
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isSidebarOpen]);
  const filterOptions = {
    breed: [
      { value: "any", label: "Any" },
      { value: "labrador", label: "Labrador" },
      { value: "golden-retriever", label: "Golden Retriever" },
      { value: "german-shepherd", label: "German Shepherd" },
      { value: "bulldog", label: "Bulldog" },
      { value: "beagle", label: "Beagle" },
      { value: "poodle", label: "Poodle" },
      { value: "rottweiler", label: "Rottweiler" },
      { value: "siberian-husky", label: "Siberian Husky" },
    ],
    age: [
      { value: "any", label: "Any" },
      { value: "puppy", label: "Puppy (0-1 year)" },
      { value: "young", label: "Young (1-3 years)" },
      { value: "adult", label: "Adult (3-7 years)" },
      { value: "senior", label: "Senior (7+ years)" },
    ],
    size: [
      { value: "any", label: "Any" },
      { value: "small", label: "Small (0-25 lbs)" },
      { value: "medium", label: "Medium (26-60 lbs)" },
      { value: "large", label: "Large (61-100 lbs)" },
      { value: "extra-large", label: "Extra Large (100+ lbs)" },
    ],
    gender: [
      { value: "any", label: "Any" },
      { value: "male", label: "Male" },
      { value: "female", label: "Female" },
    ],
    goodWith: [
      { value: "any", label: "Any" },
      { value: "kids", label: "Kids" },
      { value: "other-dogs", label: "Other Dogs" },
      { value: "cats", label: "Cats" },
      { value: "kids-dogs", label: "Kids & Dogs" },
      { value: "kids-cats", label: "Kids & Cats" },
      { value: "dogs-cats", label: "Dogs & Cats" },
      { value: "all", label: "All" },
    ],
    color: [
      { value: "any", label: "Any" },
      { value: "black", label: "Black" },
      { value: "brown", label: "Brown" },
      { value: "white", label: "White" },
      { value: "golden", label: "Golden" },
      { value: "gray", label: "Gray" },
      { value: "mixed", label: "Mixed" },
      { value: "tan", label: "Tan" },
      { value: "red", label: "Red" },
    ],
    isVaccinated: [
      { value: "any", label: "Any" },
      { value: "yes", label: "Yes" },
      { value: "no", label: "No" },
      { value: "partially", label: "Partially" },
    ],
    healthStatus: [
      { value: "any", label: "Any" },
      { value: "healthy", label: "Healthy" },
      { value: "special-needs", label: "Special Needs" },
      { value: "under-treatment", label: "Under Treatment" },
    ],
  };
  const handleFilterChange = (filterType, value) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: value,
    }));
  };
  const FilterDropdown = ({ label, filterKey, options }) => (
    <div className="my-6 group">
      <label className="block text-petify-text-slate font-semibold text-lg mb-2 tracking-wide transition-colors duration-200 group-hover:text-petify-primary-purple">
        {label}
      </label>
      <Select
        value={filters[filterKey]}
        onValueChange={(value) => handleFilterChange(filterKey, value)}
      >
        <SelectTrigger className="w-full bg-white rounded-xl hover:bg-gray-50 transition-all duration-200 border border-gray-200 focus:ring-2 focus:ring-petify-primary-purple focus:border-petify-primary-purple hover:border-petify-primary-purple/50 hover:shadow-md transform hover:-translate-y-0.5">
          <SelectValue placeholder={`Select ${label.toLowerCase()}`} />
        </SelectTrigger>
        <SelectContent className="max-h-60 overflow-y-auto bg-white animate-in fade-in slide-in-from-top-2 duration-200">
          {options.map((option, index) => (
            <SelectItem 
              key={option.value} 
              value={option.value}
              className="transition-colors duration-150 hover:bg-petify-primary-purple/10"
              style={{ animationDelay: `${index * 20}ms` }}
            >
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
  const FilterContent = () => (
    <div className="space-y-2">
      <FilterDropdown
        label="Breed"
        filterKey="breed"
        options={filterOptions.breed}
      />
      <FilterDropdown label="Age" filterKey="age" options={filterOptions.age} />
      <FilterDropdown
        label="Size"
        filterKey="size"
        options={filterOptions.size}
      />
      <FilterDropdown
        label="Gender"
        filterKey="gender"
        options={filterOptions.gender}
      />
      <FilterDropdown
        label="Good with"
        filterKey="goodWith"
        options={filterOptions.goodWith}
      />
      <FilterDropdown
        label="Color"
        filterKey="color"
        options={filterOptions.color}
      />
      <FilterDropdown
        label="Vaccination "
        filterKey="isVaccinated"
        options={filterOptions.isVaccinated}
      />
      <FilterDropdown
        label="Health Status"
        filterKey="healthStatus"
        options={filterOptions.healthStatus}
      />
      <div className="mt-8 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-petify-primary-purple/30">
        <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
          <span className="w-2 h-2 bg-petify-primary-purple rounded-full"></span>
          Selected Filters:
        </h3>
        <div className="text-sm text-gray-600 space-y-1">
          {Object.entries(filters).map(
            ([key, value], index) =>
              value &&
              value !== "any" && (
                <div 
                  key={key} 
                  className="flex justify-between p-2 rounded-lg bg-gray-50 hover:bg-petify-primary-purple/5 transition-all duration-200 animate-in fade-in slide-in-from-right"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="capitalize font-medium">
                    {key.replace(/([A-Z])/g, " $1").trim()}:
                  </span>
                  <span className="font-semibold text-petify-primary-purple">
                    {filterOptions[key].find((option) => option.value === value)
                      ?.label || value}
                  </span>
                </div>
              )
          )}
          {Object.values(filters).every(value => !value || value === "any") && (
            <div className="text-center py-4 text-gray-400 italic animate-in fade-in duration-300">
              No filters selected
            </div>
          )}
        </div>
      </div>
    </div>
  );
  return (
    <>
      <div className="md:hidden p-4 bg-petify-background-white">
        <button
          onClick={openSidebar}
          className="w-full bg-petify-primary-purple hover:bg-petify-primary-purple/90 text-white font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:scale-95 group overflow-hidden relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-petify-primary-purple/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
          <Filter size={20} className="transition-transform duration-200 group-hover:rotate-12 relative z-10" />
          <span className="transition-all duration-200 relative z-10">Filters</span>
        </button>
      </div>
      <div className="hidden md:block mx-auto bg-petify-background-white p-8 min-h-screen">
        <FilterContent />
      </div>
      {isSidebarOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div 
            className={`fixed inset-0 bg-black/50 transition-opacity duration-300 ${
              isAnimatingOut ? 'opacity-0' : hasInitialAnimated ? 'opacity-100' : 'opacity-0'
            }`}
            onClick={closeSidebar}
          />
          <div className={`fixed left-0 top-0 h-full w-80 bg-petify-background-white shadow-2xl transform transition-all duration-300 ease-out overflow-y-auto ${
            isAnimatingOut 
              ? '-translate-x-full opacity-75 scale-95' 
              : hasInitialAnimated 
                ? 'translate-x-0 opacity-100 scale-100' 
                : '-translate-x-full opacity-75 scale-95'
          }`}>
            <div className="flex flex-col h-full">
              <div className={`flex items-center justify-between p-6 border-b border-gray-200 bg-white transition-all duration-400 delay-75 ${
                isAnimatingOut 
                  ? 'opacity-0 -translate-y-4' 
                  : hasInitialAnimated 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 -translate-y-4'
              }`}>
                <h2 className="text-xl font-bold text-petify-text-slate">
                  Filters
                </h2>
                <button
                  onClick={closeSidebar}
                  className="p-2 hover:bg-gray-100 rounded-full transition-all duration-200 hover:scale-110 active:scale-95"
                >
                  <X size={24} className="text-petify-text-slate transition-transform duration-200" />
                </button>
              </div>
              <div className={`flex-1 p-6 transition-all duration-500 delay-100 ${
                isAnimatingOut 
                  ? 'opacity-0 translate-y-4' 
                  : hasInitialAnimated 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-4'
              }`}>
                <FilterContent />
              </div>
              <div className={`p-6 border-t border-gray-200 bg-white transition-all duration-400 delay-150 ${
                isAnimatingOut 
                  ? 'opacity-0 translate-y-4' 
                  : hasInitialAnimated 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-4'
              }`}>
                <button
                  onClick={closeSidebar}
                  className="w-full bg-petify-primary-purple hover:bg-petify-primary-purple/90 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5 active:scale-95"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default Cat_FilterSection;
