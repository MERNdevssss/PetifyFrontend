import React from "react";
import { FaAward, FaUsers, FaShieldAlt } from "react-icons/fa";
import { MdPeople } from "react-icons/md";

const RoiSection = () => {
  const stats = [
    {
      icon: <FaAward className="text-yellow-400 text-4xl mb-2" />,
      value: "20+",
      label: "Awards",
    },
    {
      icon: <MdPeople className="text-blue-400 text-4xl mb-2" />,
      value: "10+",
      label: "Employees",
    },
    {
      icon: <FaUsers className="text-purple-500 text-4xl mb-2" />,
      value: "20k",
      label: "Clients",
    },
    {
      icon: <FaShieldAlt className="text-green-500 text-4xl mb-2" />,
      value: "99%",
      label: "Secure",
    },
  ];

  return (
    <div className="bg-[#FFF6F1] py-16 px-4 sm:px-6 lg:px-10">
  <section className="bg-[#D2F4EC] py-12 px-4 sm:px-6 lg:px-10 rounded-2xl shadow-md">
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-center">
      {stats.map((stat, index) => (
        <div key={index} className="flex flex-col items-center">
          {/* Slightly larger icon */}
          <div className="mb-3 text-5xl">{stat.icon}</div>
          {/* Bigger value text */}
          <h3 className="text-4xl font-extrabold text-purple-700">{stat.value}</h3>
          <p className="text-gray-700 mt-2 text-lg">{stat.label}</p>
        </div>
      ))}
    </div>
  </section>
</div>

  );
};

export default RoiSection;
