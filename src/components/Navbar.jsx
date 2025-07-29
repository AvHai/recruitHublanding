import React from 'react'
import { FaUserPlus } from 'react-icons/fa'
import pic from "/iem logo 1.png"

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-40 border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <img src={pic} alt="Logo" className="h-16 w-auto" />
          </div>

          {/* Navigation Links + Sign Up */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#home" className="text-gray-800 hover:text-blue-700 font-medium">Home</a>
            <a href="#about" className="text-gray-800 hover:text-blue-700 font-medium">About Us</a>
            <a href="#jobs" className="text-gray-800 hover:text-blue-700 font-medium">Jobs</a>
            <a href="#contact" className="text-gray-800 hover:text-blue-700 font-medium">Contact Us</a>
            <button className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
              <FaUserPlus size={16} />
              Sign Up Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
