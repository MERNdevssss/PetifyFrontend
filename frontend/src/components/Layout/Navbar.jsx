import React, { useState } from "react";
import { Menu, X, Search, ChevronDown } from "lucide-react";
export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const closeSidebar = () => {
    setSidebarOpen(false);
  };
  const handleDropdownToggle = (item) => {
    setActiveDropdown(activeDropdown === item ? null : item);
  };
  const closeDropdown = () => {
    setActiveDropdown(null);
  };
  const menuItems = [
    { name: "Home", hasDropdown: false },
    {
      name: "Services",
      hasDropdown: true,
      items: [
        "Pet Training",
        "Medical Consultation",
        "Pet Grooming",
        "Pet Adoption",
        "Pet Hostel",
      ],
    },
    {
      name: "Products",
      hasDropdown: true,
      items: [
        "Pet Food",
        "Toys & Accessories",
        "Health & Wellness",
        "Grooming Supplies",
        "Training Equipment",
      ],
    },
    {
      name: "Categories",
      hasDropdown: true,
      items: ["Dogs", "Cats", "Birds", "Fish", "Small Animals", "Reptiles"],
    },
    { name: "About Us", hasDropdown: false },
    { name: "Contact Us", hasDropdown: false },
  ];
  return (
    <>
      <header className="bg-black/30 backdrop-blur-md shadow-md fixed top-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded-full flex justify-center items-center">
              <span className="text-[#7E3FF2] text-lg font-bold">🐾</span>
            </div>
            <a href="/" className="text-[#7E3FF2] font-extrabold text-lg">
              PETIFY
            </a>
          </div>
          <nav className="hidden md:flex items-center space-x-6 text-white">
            {menuItems.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  onClick={() =>
                    item.hasDropdown ? handleDropdownToggle(item.name) : null
                  }
                  className="flex items-center space-x-1 hover:text-[#7E3FF2] transition-colors duration-300"
                >
                  <span>{item.name}</span>
                  {item.hasDropdown && (
                    <ChevronDown
                      size={16}
                      className={`transform transition-transform duration-200 ${
                        activeDropdown === item.name ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </button>
                {item.hasDropdown && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-10">
                    {item.items.map((subItem) => (
                      <a
                        key={subItem}
                        href="#"
                        onClick={closeDropdown}
                        className="block px-4 py-2 text-gray-800 hover:bg-[#7E3FF2] hover:text-white transition-colors duration-200"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
          <div className="hidden md:flex text-white items-center space-x-4">
            <button className="p-2 hover:bg-white/10 rounded-full transition-colors duration-200">
              <Search size={20} />
            </button>
            <button className="bg-[#7E3FF2] hover:bg-[#6B2FD1] text-white px-6 py-2 rounded-xl font-bold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Log In
            </button>
          </div>
          <div className="md:hidden flex items-center space-x-2">
            <button className="p-2 text-white hover:bg-white/10 rounded-full transition-colors duration-200">
              <Search size={20} />
            </button>
            <button
              onClick={toggleSidebar}
              className="p-2 text-white hover:bg-white/10 rounded-full transition-colors duration-200"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {activeDropdown && (
        <div className="fixed inset-0 z-40" onClick={closeDropdown} />
      )}
      <div
        className={`fixed inset-0 z-50 transform ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div
          className="fixed inset-0 bg-gradient-to-r from-transparent to-black/20 backdrop-blur-sm"
          onClick={closeSidebar}
        />
        <div className="absolute right-0 top-0 h-full w-80 bg-gradient-to-br from-[#7E3FF2] to-[#5B2A9C] shadow-2xl">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-6 border-b border-white/20">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-white rounded-full flex justify-center items-center">
                  <span className="text-[#7E3FF2] text-lg font-bold">🐾</span>
                </div>
                <span className="text-white font-extrabold text-lg">
                  PETIFY
                </span>
              </div>
              <button
                onClick={closeSidebar}
                className="p-2 text-white hover:bg-white/10 rounded-full transition-colors duration-200"
              >
                <X size={24} />
              </button>
            </div>
            <nav className="flex-1 py-6 overflow-y-auto">
              {menuItems.map((item, index) => (
                <div key={item.name}>
                  <button
                    onClick={() =>
                      item.hasDropdown
                        ? handleDropdownToggle(item.name)
                        : closeSidebar()
                    }
                    className={`w-full flex items-center justify-between px-6 py-4 text-white hover:bg-white/10 transition-colors duration-200 text-lg font-medium ${
                      index < menuItems.length - 1
                        ? "border-b border-white/10"
                        : ""
                    }`}
                  >
                    <span>{item.name}</span>
                    {item.hasDropdown && (
                      <ChevronDown
                        size={16}
                        className={`transform transition-transform duration-200 ${
                          activeDropdown === item.name ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </button>
                  {item.hasDropdown && activeDropdown === item.name && (
                    <div className="bg-white/10 backdrop-blur-sm">
                      {item.items.map((subItem) => (
                        <a
                          key={subItem}
                          href="#"
                          onClick={closeSidebar}
                          className="block px-8 py-3 text-white/90 hover:bg-white/10 transition-colors duration-200 text-base"
                        >
                          {subItem}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
            <div className="p-6 border-t border-white/20">
              <button
                onClick={closeSidebar}
                className="w-full bg-white text-[#7E3FF2] py-3 px-6 rounded-xl font-bold hover:bg-gray-100 transition-colors duration-200 shadow-lg"
              >
                Log In
              </button>
            </div>
          </div>
        </div>
      </div>
      {sidebarOpen && (
        <style jsx>{`
          body {
            overflow: hidden;
          }
        `}</style>
      )}
    </>
  );
}
