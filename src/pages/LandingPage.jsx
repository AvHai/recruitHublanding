import React from 'react'
import Navbar from '../components/Navbar'
import Support from '../components/Support'
import AboutUs from '../components/AboutUs'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import JobProfile from '../components/JobProfile'
const LandingPage = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="w-full h-screen relative  text-white">
        {/* Background Image */}
        <img
          src="/landing.jpg"
          alt="Recruit Hub Banner"
          className="absolute inset-0 w-full h-screen object-cover bg-gradient-to-r from-black via-blue-700 to-gray-50"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-blue-400 opacity-48  "></div>
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
          <h1 className="text-4xl sm:text-5xl lg:text-[100px] font-semibold text-blue-600 font-sans text-center lg:text-left">
            IEM Recruit Hub
          </h1>
          <p className="mt-4 text-lg sm:text-xl lg:text-[40px] font-semibold text-white text-center lg:text-left">
            Become part of an acclaimed educational and <br className="hidden lg:block" /> innovation powerhouse committed to excellence.
          </p>
          <div className="mt-6 flex justify-center lg:justify-start">
            <a
              href="#"
              className="inline-block bg-white text-gray-900 font-semibold px-6 py-3 rounded-md shadow hover:bg-gray-100 transition"
            >
              Discover Your Role 
            </a>
          </div>
        </div>
      </div>
      <Hero />
      <div className='bg-blue-500'>
      <AboutUs />
      </div>
      <JobProfile />
      <Support />
      <Footer />
    </div>
  )
}

export default LandingPage