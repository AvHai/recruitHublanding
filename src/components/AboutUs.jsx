import React from 'react';

const AboutUs = () => {
  return (
    <div className="w-full md:w-5/6 mx-auto mt-20 px-4 sm:px-6 py-10">
      <div className="w-full flex flex-col lg:flex-row justify-between items-center p-2 md:p-10 gap-10 h-1/2">
        {/* Text Section */}
        <div className="lg:w-1/2 text-white">
          <h1 className="text-4xl font-bold mb-6">About Us</h1>
          <p className="text-lg leading-relaxed">
            Welcome to the IEM-UEM Careers Hub, your direct link to exciting
            opportunities within the acclaimed IEM-UEM Group. Since 1989, we've been
            a pioneering force in education, establishing West Bengal's first
            self-financed engineering college and consistently setting high
            standards in technical and managerial training. We're renowned for our
            robust foundation in teaching and R&D across diverse fields, fostering
            an environment that encourages free inquiry and imagination.
            <br />
            <br />
            Our commitment to unparalleled excellence has led us to cultivate a vast
            network of highly skilled professionals. Now, we invite you to become a
            part of our dynamic team. If you're looking for a challenging and
            rewarding career, where you can grow alongside the "torchbearers of a
            better tomorrow" and contribute to our mission of self-sufficiency and
            unmatchable excellence, you've come to the right place.
            <br />
            <br />
            Ready to shape your future with us? Explore the possibilities at
            IEM-UEM.
          </p>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 max-w-xl">
          <img
            src="/Group 513820.png"
            alt="IEM-UEM Building"
            className="w-full rounded-2xl shadow-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
