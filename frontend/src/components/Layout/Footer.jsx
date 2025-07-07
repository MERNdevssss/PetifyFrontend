import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-[#273645] text-white px-6 py-12 rounded-t-md relative overflow-hidden">
      {/* Grid layout adjusted for tablets and desktops */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mt-10">

        {/* Logo and Description */}
        <div className="space-y-4 col-span-1">
          <div className="flex items-center gap-3">
            <div className="bg-purple-500 rounded-full p-2">
              <img
                src="./src/assets/Logo.png"
                alt="Petify Logo"
                className="w-10 h-10 object-contain"
              />
            </div>
            <h1 className="text-2xl font-extrabold text-purple-600 select-none">PETIFY</h1>
          </div>
          <p className="text-xl leading-relaxed text-white">
            <strong className="text-purple-500">Petify </strong><strong>is your{" "}</strong> 
            <strong className="text-purple-500">trusted</strong> <strong>platform to reunite lost pets,
            adopt</strong>  <strong className="text-purple-500">new</strong><strong>companions, and support animal welfare —{" "}</strong> 
            <strong className="text-purple-500">all in one</strong><strong>place.</strong> 
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-2xl mb-3 select-none">Quick Links</h3>
          <nav className="flex flex-col gap-2 text-gray-400 text-xl">
            <Link to="/" className="hover:text-purple-400 transition-colors">Home</Link>
            <Link to="/" className="hover:text-purple-400 transition-colors">About Us</Link>
            <Link to="/" className="hover:text-purple-400 transition-colors">Services</Link>
            <Link to="/" className="hover:text-purple-400 transition-colors">Categories</Link>
            <Link to="/" className="hover:text-purple-400 transition-colors">Products</Link>
            <Link to="/" className="hover:text-purple-400 transition-colors">FAQ</Link>
          </nav>
        </div>

        {/* Policy */}
        <div>
          <h3 className="font-bold text-2xl mb-3 select-none">Policy</h3>
          <nav className="flex flex-col gap-2 text-gray-400 text-xl">
            <a href="#privacy" className="hover:text-purple-400 transition-colors">Privacy Policy</a>
            <a href="#refund" className="hover:text-purple-400 transition-colors">Refund Policy</a>
            <a href="#cancellation" className="hover:text-purple-400 transition-colors">Cancellation Policy</a>
            <a href="#terms" className="hover:text-purple-400 transition-colors">Terms & Conditions</a>
          </nav>
        </div>

        {/* Connect with Us */}
        <div>
          <h3 className="font-bold text-2xl mb-3 select-none">Connect with Us</h3>
          <nav className="flex flex-col gap-2 text-gray-500 text-xl ">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-purple-400 transition-colors">LinkedIn</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-purple-400 transition-colors">Instagram</a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-purple-400 transition-colors">Twitter</a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-purple-400 transition-colors">YouTube</a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-purple-400 transition-colors">Facebook</a>
          </nav>
        </div>

        {/* Contact Info */}
        <div className="text-gray-400 md:col-span-2 lg:col-span-1">
          <h3 className="font-bold text-2xl mb-3 text-white select-none">Contact Us</h3>
          <p className='text-xl'><strong className="text-gray-500">Email:</strong> support@petify.com</p>
          <p className='text-xl'><strong className="text-gray-500">Phone:</strong> (800) 555-765</p>
          <p className='text-xl'><strong className="text-gray-500">Live Chat:</strong> Mon–Sat, 9AM–6PM</p>
          <p className='text-xl'><strong className="text-gray-500">Address:</strong> 145 ABC Tower, Jaipur</p>
        </div>
      </div>

      {/* Giant watermark text in background */}
      <div className="relative mt-44 sm:mt-52 md:mt-60">
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 opacity-10 select-none">
          <h1 className="text-[3.5rem] sm:text-[5rem] md:text-[6rem] lg:text-[14rem] font-extrabold text-purple-500 text-center tracking-widest leading-none">
            PETIFY
          </h1>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
