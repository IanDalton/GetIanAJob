import React from 'react';
const Navbar = () => (
  <nav className="bg-gray-900 text-gray-200 shadow-xl p-6 fixed top-0 w-full z-50 rounded-b-2xl">
    <div className="container mx-auto flex justify-between items-center">
      <a href="#" className="flex items-center space-x-3">
        <img
          src="/favicon.ico"
          alt="Logo"
          className="h-10 w-10 rounded-full border-2 border-red-500 shadow-lg"
        />
        <span className="text-2xl font-bold text-red-500">
          Ian Dalton
        </span>
      </a>
      <div className="space-x-6">
        <a href="#about" className="hover:text-red-400 transition duration-300 font-semibold">
          About Me
        </a>
        <a href="#blog" className="hover:text-red-400 transition duration-300 font-semibold">
          Blog
        </a>
        <a href="#solutions" className="hover:text-red-400 transition duration-300 font-semibold">
          Solutions
        </a>
      </div>
    </div>
  </nav>
);

export default Navbar;
