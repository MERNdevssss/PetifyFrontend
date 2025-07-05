// import React from "react";
// import PetsIcon from "@mui/icons-material/Pets";
// import { Button } from "@mui/material";

// const HomePage = () => {
//   return (
//     <div className="bg-[#FFF8F0] px-6 py-10">
//       <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between relative">
//         {/* Left Content */}
//         <div className="flex-1 z-10">
//           <p className="text-green-600 font-semibold mb-2 text-lg">
//             Happy Pets, Happy Hearts
//           </p>
//           <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
//             Find Your New <br />
//             <span className="text-orange-500">Best</span>{" "}
//             <span className="text-purple-700">FRIEND</span>
//             <PetsIcon className="inline text-gray-700 ml-1" />
//           </h1>
//           <p className="text-gray-600 mt-4 mb-6 max-w-sm text-base">
//             Reuniting lost pets and connecting companions one paw at a time
//           </p>
//           <Button
//             variant="contained"
//             sx={{
//               backgroundColor: "#7b5eff",
//               borderRadius: "9999px",
//               textTransform: "none",
//               paddingX: 2,
//               paddingY: 0.5,
//               '&:hover': {
//                 backgroundColor: "#5f45d5",
//               },
//             }}
//           >
//             Find Your Pet
//           </Button>
//         </div>

//         {/* Background Circle */}
//         <div className="absolute left-0 top-20 w-72 h-72 bg-orange-400 rounded-full -z-10"></div>

//         {/* Right Image */}
//         <div className="flex-1 flex justify-center md:justify-end mt-10 md:mt-0">
//           <img
//             src="../src/assets/catHero.png"
//             alt="Cute Pet"
//             className="rounded-xl shadow-xl w-72 sm:w-80 md:w-96"
//           />
//         </div>
//       </div>

//       {/* Stats */}
//       <div className="mt-12 bg-green-100 py-6 px-4 rounded-xl flex flex-col sm:flex-row justify-around items-center space-y-4 sm:space-y-0 sm:space-x-4">
//         <div className="text-center">
//           <p className="text-yellow-500 text-2xl font-bold">20+</p>
//           <p className="text-gray-700">Awards</p>
//         </div>
//         <div className="text-center">
//           <p className="text-teal-500 text-2xl font-bold">10+</p>
//           <p className="text-gray-700">Employees</p>
//         </div>
//         <div className="text-center">
//           <p className="text-purple-600 text-2xl font-bold">20k</p>
//           <p className="text-gray-700">Clients</p>
//         </div>
//         <div className="text-center">
//           <p className="text-green-600 text-2xl font-bold">99%</p>
//           <p className="text-gray-700">Secure</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;


import React from "react";
import PetsIcon from "@mui/icons-material/Pets";
import { Button } from "@mui/material";
import Services from "./Services/Services";
import Blog from "./Blog/Blog";

const HomePage = () => {
  return (<>
    <Services/>
    <Blog/>
  </>);
};

export default HomePage;