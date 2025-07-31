import React, { useState } from 'react';
import { FaUserPlus, FaBars, FaTimes } from 'react-icons/fa';
import pic from '/iem logo 1.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-40 border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <img src={pic} alt="Logo" className="h-24 w-auto" />
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#home" className="text-gray-800 hover:text-blue-700 font-medium">
              Home
            </a>
            <a href="#about" className="text-gray-800 hover:text-blue-700 font-medium">
              About Us
            </a>
            <a href="#jobs" className="text-gray-800 hover:text-blue-700 font-medium">
              Jobs
            </a>
            <a href="#contact" className="text-gray-800 hover:text-blue-700 font-medium">
              Contact Us
            </a>
            <button className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
              <FaUserPlus size={16} />
              Sign Up Now
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-blue-700 focus:outline-none"
            >
              {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pt-2 pb-4 space-y-3 bg-white shadow-sm border-t border-blue-100">
          <a href="#home" className="block text-gray-800 hover:text-blue-700 font-medium">
            Home
          </a>
          <a href="#about" className="block text-gray-800 hover:text-blue-700 font-medium">
            About Us
          </a>
          <a href="#jobs" className="block text-gray-800 hover:text-blue-700 font-medium">
            Jobs
          </a>
          <a href="#contact" className="block text-gray-800 hover:text-blue-700 font-medium">
            Contact Us
          </a>
          <button className="w-full flex items-center justify-center gap-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-500 transition">
            <FaUserPlus size={16} />
            Sign Up Now
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
