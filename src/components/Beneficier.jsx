import React from 'react';
import img7 from '../assets/img7.jpg';
import img8 from '../assets/img8.jpg';
import img9 from '../assets/img9.jpeg';
import img11 from '../assets/img11.jpg';
import img10 from '../assets/img10.jpg';

const Beneficier = () => {
  return (
    <section className="text-center py-16 bg-fourth text-primary relative">
      <h2 className="text-4xl font-bold mb-12 text-third">Benefits</h2>

      <div className="relative flex flex-wrap justify-center items-center gap-16 md:gap-8 lg:gap-0">
        {/* Main Center Image */}
        <div className="relative z-10">
          <img
            src={img7}
            alt="Main Benefit"
            className="w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 object-cover rounded-full mx-auto shadow-lg border-4 border-third"
          />
        </div>

        {/* Top-Left Benefit */}
        <div className="absolute top-4 left-4 md:top-8 md:left-[10%] lg:top-8 lg:left-[15%] transform -translate-y-1/2 text-center">
          <div className="bg-white p-2 sm:p-4 rounded-full shadow-lg border-4 border-fourth">
            <img
              src={img8}
              alt="Benefit 1"
              className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full mx-auto"
            />
          </div>
          <p className="mt-4 sm:mt-6 font-semibold text-fourth underline text-sm sm:text-base">
            Improve Hair Growth
          </p>
        </div>

        {/* Top-Right Benefit */}
        <div className="absolute top-4 right-4 md:top-8 md:right-[10%] lg:top-8 lg:right-[15%] transform -translate-y-1/2 text-center">
          <div className="bg-white p-2 sm:p-4 rounded-full shadow-lg border-4 border-fourth">
            <img
              src={img9}
              alt="Benefit 2"
              className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full mx-auto"
            />
          </div>
          <p className="mt-4 sm:mt-6 font-semibold text-fourth underline text-sm sm:text-base">
            100% Organic Oil
          </p>
        </div>

        {/* Bottom-Left Benefit */}
        <div className="absolute bottom-4 left-4 md:bottom-8 md:left-[10%] lg:bottom-8 lg:left-[15%] transform translate-y-1/2 text-center">
          <div className="bg-white p-2 sm:p-4 rounded-full shadow-lg border-4 border-fourth">
            <img
              src={img11}
              alt="Benefit 3"
              className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full mx-auto"
            />
          </div>
          <p className="mt-4 sm:mt-6 font-semibold text-fourth underline text-sm sm:text-base">
            Soft & Longer
          </p>
        </div>

        {/* Bottom-Right Benefit */}
        <div className="absolute bottom-4 right-4 md:bottom-8 md:right-[10%] lg:bottom-8 lg:right-[15%] transform translate-y-1/2 text-center">
          <div className="bg-white p-2 sm:p-4 rounded-full shadow-lg border-4 border-fourth">
            <img
              src={img10}
              alt="Benefit 4"
              className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full mx-auto"
            />
          </div>
          <p className="mt-4 sm:mt-6 font-semibold text-fourth underline text-sm sm:text-base">
            Hair Colouring
          </p>
        </div>
      </div>
    </section>
  );
};

export default Beneficier;
