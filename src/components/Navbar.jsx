import React from 'react';
const Navbar = () => (
  <nav className="bg-red-800 text-white dark:bg-gray-800 dark:text-gray-200 shadow-md p-4 fixed top-0 w-full z-50">
    <div className="container mx-auto flex justify-between items-center">
      <a href="#" className="flex items-center space-x-2">
        <img
          src="/favicon.ico"
          alt="Logo"
          className="h-8 w-8 rounded-full"
        />
        <span className="text-xl font-bold text-red-200 dark:text-red-400">
          Ian Dalton
        </span>
      </a>
      <div className="space-x-4">
        <a href="#about" className="hover:text-red-200 dark:hover:text-red-400 transition duration-300 scroll">
          About Me
        </a>
        <a href="#blog" className="hover:text-red-200 dark:hover:text-red-400 transition duration-300 scroll">
          Blog
        </a>
        <a href="#solutions" className="hover:text-red-200 dark:hover:text-red-400 transition duration-300 scroll">
          Solutions
        </a>
      </div>
    </div>
  </nav>
);

export default Navbar;
