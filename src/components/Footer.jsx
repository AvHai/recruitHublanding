import React from 'react';
import { FaFacebook, FaLinkedin, FaYoutube, FaGoogle, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#3D8BFF] text-white">
      
      {/* Top Section */}
      <div className="w-full bg-blue-500 text-white py-10">
        <div className="w-11/12 mx-auto flex flex-col md:flex-row justify-between gap-6">
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">IEM Recruit Hub</h3>
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">How to apply</a>
            <a href="#" className="hover:underline">About Us</a>
            <a href="#" className="hover:underline">Jobs</a>
            <a href="#" className="hover:underline">Contact Us</a>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Our Campuses</h3>
            <a href="#" className="hover:underline">UEM Kolkata</a>
            <a href="#" className="hover:underline">UEM Jaipur</a>
            <a href="#" className="hover:underline">IEM Gurukul Campus</a>
            <a href="#" className="hover:underline">IEM Management Campus</a>
          </div>
          <div className="w-full md:w-1/2">
            <iframe
              src="https://www.google.com/maps?q=Godrej+Genesis,+Salt+Lake,+Kolkata,+West+Bengal&output=embed"
              className="w-full h-48 rounded-lg border"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Middle Section - Social & Contact */}
      <div className="w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-6 py-6 border-t border-white/30">
        
        {/* Social Links */}
        <div className="flex items-center gap-4">
          <span className="font-semibold">Social Links</span>
          <FaGoogle className="text-white text-2xl hover:text-gray-200 cursor-pointer" />
          <FaYoutube className="text-white text-2xl hover:text-gray-200 cursor-pointer" />
          <FaFacebook className="text-white text-2xl hover:text-gray-200 cursor-pointer" />
          <FaLinkedin className="text-white text-2xl hover:text-gray-200 cursor-pointer" />
        </div>

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row gap-6 items-start md:items-center text-sm">
          <span className="flex items-center gap-2">
            <FaMapMarkerAlt /> Godrej Genesis, Sec V Kolkata, 700001
          </span>
          <span className="flex items-center gap-2">
            <FaEnvelope /> development@iemlabs.com
          </span>
          <span className="flex items-center gap-2">
            <FaPhone /> +91-9123491234
          </span>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center py-4 border-t border-white/30 text-sm">
        <span>Copyright ©2024 Designed by IEMA R & D</span> &nbsp; | &nbsp;
        <a href="#" className="hover:underline">Terms of Use</a> &nbsp; | &nbsp;
        <a href="#" className="hover:underline">Privacy Policy</a>
      </div>
    </footer>
  );
};

export default Footer;
