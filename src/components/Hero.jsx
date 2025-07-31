import React from 'react';

const steps = [
  {
    id: '01',
    imgbg: '/1.png',
    title: 'Create Your Applicant Account',
    subtitle: 'GET STARTED',
    description:
      'Getting started is simple. Quickly sign up and build your comprehensive applicant profile. This foundational step ensures you’re immediately being exposed to opportunities and preparing for your next career move.',
    linkText: 'Create Account',
    link: '#',
    image: '/createaccount.png',
  },
  {
    id: '02',
    imgbg: '/2.png',
    title: 'Upload All Your Essential Documents',
    subtitle: 'UPLOAD YOUR DOCUMENTS',
    description:
      'Ensure your profile is complete by easily uploading all necessary documents. This includes your resume, government ID, educational certificates, and special requirements documents, creating a robust profile for potential employers.',
    linkText: 'Sign Up Now',
    link: '#',
    image: '/uploaddoc.png',
  },
  {
    id: '03',
    imgbg: '/3.png',
    title: 'Explore Your Matching Job Openings',
    subtitle: 'FIND SUITABLE JOBS',
    description:
      'Discover opportunities perfectly matched to you. Our platform intelligently helps you find job openings that are specifically tailored to your professional interests and associated fields of study, streamlining your search for the ideal role.',
    linkText: 'Get Started',
    link: '#',
    image: '/explorejob.png',
  },
  {
    id: '04',
    imgbg: '/4.png',
    title: 'Apply and Track Your Job Applications',
    subtitle: 'APPLY FOR JOBS',
    description:
      'Seamlessly submit your applications and stay informed. After finding your desired positions, you can quickly apply. Our portal then allows you to effortlessly track your application status and receive timely updates directly, keeping you in the loop every step of the way.',
    linkText: 'Explore Now',
    link: '#',
    image: '/apply.png',
  },
];

const Hero = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-8 lg:px-20">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-500 mb-16">
        How to Apply?
      </h2>

      <div className="space-y-24">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex flex-col-reverse lg:flex-row ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            } items-center gap-10`}
          >
            {/* Text Section */}
            <div className="lg:w-1/2 relative px-4 sm:px-8 lg:px-16 ">
              <img
                src={step.imgbg}
                alt=""
                className="absolute md:top-[-50px] top-[-70px] lg:top-[-100px] left-0"
              />
              <div className="absolute w-[72px] h-[2px] bg-blue-500 mt-3 ml-20"></div>
              <p className="text-sm sm:text-base lg:text-lg font-semibold text-blue-500 uppercase tracking-wide mb-2 ml-42">
                {step.subtitle}
              </p>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 ml-20">
                {step.title}
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-4 ml-20">
                {step.description}
              </p>
              <a
                href={step.link}
                className="text-blue-600 font-bold text-sm sm:text-base lg:text-lg hover:underline ml-20"
              >
                {step.linkText} 
              </a>
            </div>

            {/* Image Section */}
            <div className="lg:w-1/2 flex justify-center">
              <img
                src={step.image}
                alt={step.title}
                className="shadow-md w-[300px] sm:w-[400px] lg:w-[565px] h-[400px] sm:h-[500px] lg:h-[720px] object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
