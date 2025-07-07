import React from "react";

const PetifyFooter = () => {
  return (
    <footer className="bg-[#273645] text-white text-lg p-10 rounded-t-md relative overflow-hidden">

      <div className="w-full flex flex-wrap mt-10 gap-10 md:gap-20 justify-between">

        {/* Logo and Description */}
        <div className="flex flex-col flex-[1_1_300px] max-w-xs">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-purple-500 rounded-full p-2">
              <img
                  src="./src/assets/Logo.png"
                  alt="Petify Logo"
                  className="w-10 h-10 object-contain"
              />

            </div>
            <h1 className="text-3xl font-extrabold text-purple-600 select-none">PETIFY</h1>
          </div>
          <p className="text-lg leading-relaxed">
            <strong className="text-purple-600">Petify</strong> Is Your{" "}
            <strong className="text-purple-600">Trusted</strong> Platform To Reunite Lost Pets, Adopt{" "}
            <strong className="text-purple-600">New</strong> Companions, And Support Animal Welfare —{" "}
            <strong className="text-purple-600">All In One</strong> Place.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col flex-[1_1_150px] space-y-2">
          <h3 className="font-bold text-2xl select-none">Quick Links</h3>
          <nav className="flex flex-col gap-1 text-lg text-gray-500">
            <a href="#home" className="hover:text-purple-600 transition-colors">Home</a>
            <a href="#about" className="hover:text-purple-600 transition-colors">About Us</a>
            <a href="#services" className="hover:text-purple-600 transition-colors">Services</a>
            <a href="#categories" className="hover:text-purple-600 transition-colors">Categories</a>
            <a href="#products" className="hover:text-purple-600 transition-colors">Products</a>
            <a href="#faq" className="hover:text-purple-600 transition-colors">FAQ</a>
          </nav>
        </div>

        {/* Policy */}
        <div className="flex flex-col flex-[1_1_150px] space-y-2">
          <h3 className="font-bold text-2xl select-none">Policy</h3>
          <nav className="flex flex-col gap-1 text-lg text-gray-500">
            <a href="#privacy" className="hover:text-purple-600 transition-colors">Privacy Policy</a>
            <a href="#refund" className="hover:text-purple-600 transition-colors">Refund Policy</a>
            <a href="#cancellation" className="hover:text-purple-600 transition-colors">Cancellation Policy</a>
            <a href="#terms" className="hover:text-purple-600 transition-colors">Terms & Conditions</a>
          </nav>
        </div>

        {/* Connect with Us */}
        <div className="flex flex-col flex-[1_1_150px] space-y-2">
          <h3 className="font-bold text-2xl select-none">Connect with Us</h3>
          <nav className="flex flex-col gap-1 text-lg text-gray-500">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-purple-600 transition-colors">LinkedIn</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-purple-600 transition-colors">Instagram</a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-purple-600 transition-colors">Twitter</a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-purple-600 transition-colors">YouTube</a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-purple-600 transition-colors">Facebook</a>
          </nav>
        </div>

        {/* Contact Us */}
        <div className="flex flex-col flex-[1_1_200px] space-y-2 text-gray-500">
          <h3 className="font-bold text-2xl text-white select-none">Contact Us</h3>
          <p><strong className="text-gray-500 text-lg">Email:</strong> support@petify.com</p>
          <p><strong className="text-gray-500 text-lg">Phone:</strong> (800) 555-765 (7297)</p>
          <p><strong className="text-gray-500 text-lg">Live Chat:</strong> Mon–Sat, 9AM–6PM</p>
          <p><strong className="text-gray-500 text-lg">Address:</strong> 145 ABC tower, Jaipur</p>
        </div>
      </div>

      {/* Large outline text in bg */}
      <div className="relative mt-60">
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 opacity-10 select-none">
         <h1 className="text-[10rem] md:text-[12rem] font-extrabold text-purple-500 text-center tracking-widest leading-none">
          PETIFY
         </h1>
        </div>
     </div>
</footer>
  );
};

export default PetifyFooter;

