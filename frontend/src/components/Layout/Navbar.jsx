// import React from "react";
// import { Link, useNavigate } from "react-router-dom";

// // const Navbar = () => {
// // const navigate=useNavigate();

// //   // const location = useLocation();

// //   // const linkClasses = (path) =>
// //   //   `text-sm font-medium px-3 py-1 rounded-md transition ${
// //   //     location.pathname === path
// //   //       ? "bg-teal-100 text-teal-700"
// //   //       : "text-gray-700 hover:text-red-500 hover:bg-red-50"
// //   //   }`;

// //   return (
// //     // <nav className="bg-white shadow-md sticky top-0 z-50">
// //     //   <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
// //     //     <Link to="/" className="text-2xl font-bold text-red-200 flex items-center gap-2">
// //     //       🐾 <span className="text-gray-800">Pet Marketplace Platform</span>
// //     //     </Link>

// //     //     <div className="flex gap-3">
// //     //       <Link to="/" className={linkClasses("/")}>
// //     //         Home
// //     //       </Link>
// //     //       <Link to="/suggest" className={linkClasses("/suggest")}>
// //     //         AI Suggestion
// //     //       </Link>
// //     //     </div>
// //     //   </div>
// //     // </nav>
// //     <>
    
// //     </>
// //   );
// // };

// export default Navbar;











// import React, { useState } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { Button, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
// import PetsIcon from "@mui/icons-material/Pets";
// import MenuIcon from "@mui/icons-material/Menu";
// import CloseIcon from "@mui/icons-material/Close";

// const Navbar = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [mobileOpen, setMobileOpen] = useState(false);

//   const navLinks = [
//     { name: "Home", path: "/" },
//     { name: "About", path: "/about" },
//     { name: "Pets", path: "/pets" },
//     { name: "About", path: "/about2" },
//     { name: "Contact", path: "/contact" },
//   ];

//   const isActive = (path) => location.pathname === path;

//   return (
//     <div className="flex justify-between items-center px-4 py-2 bg-cream border-b-2 border-blue-400">
//       {/* Logo */}
//       <div
//         className="flex items-center cursor-pointer"
//         onClick={() => navigate("/")}
//       >
//         <PetsIcon className="text-purple-700" />
//         <span className="ml-1 text-xl font-bold text-purple-700">PETIFY</span>
//       </div>

//       {/* Desktop Links */}
//       <div className="hidden md:flex space-x-6">
//         {navLinks.map((link, index) => (
//           <button
//             key={index}
//             onClick={() => navigate(link.path)}
//             className={`text-base font-medium hover:text-orange-500 focus:outline-none transition-colors duration-200 ${
//               isActive(link.path) ? "text-orange-500" : "text-gray-800"
//             }`}
//           >
//             {link.name}
//           </button>
//         ))}
//       </div>

//       {/* Book Now Button (Desktop) */}
//       <div className="hidden md:block">
//         <Button
//           variant="contained"
//           sx={{
//             backgroundColor: "#7b5eff",
//             borderRadius: "9999px",
//             textTransform: "none",
//             paddingX: 2,
//             paddingY: 0.5,
//             '&:hover': {
//               backgroundColor: "#5f45d5",
//             },
//           }}
//           onClick={() => navigate("/book")}
//         >
//           Book Now
//         </Button>
//       </div>

//       {/* Hamburger Menu (Mobile) */}
//       <div className="md:hidden">
//         <IconButton onClick={() => setMobileOpen(true)}>
//           <MenuIcon className="text-purple-700" />
//         </IconButton>
//       </div>

//       {/* Drawer for Mobile Menu */}
//       <Drawer anchor="right" open={mobileOpen} onClose={() => setMobileOpen(false)}>
//         <div className="w-64 p-4 bg-cream h-full flex flex-col">
//           <div className="flex justify-between items-center mb-4">
//             <div className="flex items-center">
//               <PetsIcon className="text-purple-700" />
//               <span className="ml-1 text-xl font-bold text-purple-700">PETIFY</span>
//             </div>
//             <IconButton onClick={() => setMobileOpen(false)}>
//               <CloseIcon />
//             </IconButton>
//           </div>
//           <List>
//             {navLinks.map((link, index) => (
//               <ListItem
//                 button
//                 key={index}
//                 onClick={() => {
//                   navigate(link.path);
//                   setMobileOpen(false);
//                 }}
//               >
//                 <ListItemText
//                   primary={link.name}
//                   primaryTypographyProps={{
//                     style: {
//                       color: isActive(link.path) ? "#fb923c" : "#1f2937",
//                       fontWeight: isActive(link.path) ? "600" : "400",
//                     },
//                   }}
//                 />
//               </ListItem>
//             ))}
//           </List>
//           <Button
//             variant="contained"
//             sx={{
//               backgroundColor: "#7b5eff",
//               borderRadius: "9999px",
//               textTransform: "none",
//               marginTop: 2,
//               '&:hover': {
//                 backgroundColor: "#5f45d5",
//               },
//             }}
//             onClick={() => {
//               navigate("/book");
//               setMobileOpen(false);
//             }}
//           >
//             Book Now
//           </Button>
//         </div>
//       </Drawer>
//     </div>
//   );
// };

// export default Navbar;






import React, { useState } from "react";
import { Menu, MenuItem, IconButton, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <header className="bg-white bg-opacity-10 backdrop-blur-md shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-white rounded-full flex justify-center items-center">
            <span className="text-[#7E3FF2] text-lg font-bold">🐾</span>
          </div>
          <span className="text-[#7E3FF2] font-extrabold text-lg">PETIFY</span>
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center space-x-6 text-white">
          {["Home", "Services", "Products", "Categories", "About Us", "Contact Us"].map((item) => (
            <div key={item} className="relative group">
              <a
                href="#"
                className="hover:text-[#7E3FF2] transition-colors duration-300"
              >
                {item}
              </a>
              {/* Dropdown on Hover */}
              <div className="absolute left-0 top-full mt-2 bg-white shadow-md rounded-md opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform translate-y-2 transition duration-300">
                <ul className="text-gray-700 p-2">
                  <li className="hover:text-[#7E3FF2] py-1">Option 1</li>
                  <li className="hover:text-[#7E3FF2] py-1">Option 2</li>
                  <li className="hover:text-[#7E3FF2] py-1">Option 3</li>
                </ul>
              </div>
            </div>
          ))}
        </nav>

        {/* Icons & Login */}
        <div className="flex items-center space-x-4">
          <IconButton className="text-white hover:text-[#7E3FF2]">
            <SearchIcon />
          </IconButton>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#7E3FF2",
              borderRadius: "12px",
              textTransform: "none",
              fontWeight: "bold",
              boxShadow: "0 4px 10px rgba(126, 63, 242, 0.3)",
            }}
          >
            Log In
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuOpen}
            className="text-white"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            {["Home", "Services", "Products", "Categories", "About Us", "Contact Us"].map(
              (item) => (
                <MenuItem key={item} onClick={handleMenuClose}>
                  {item}
                </MenuItem>
              )
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}