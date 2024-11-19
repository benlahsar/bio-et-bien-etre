import React from 'react';
import logo from '../assets/logo.png'; 
import secondimg from '../assets/secondimg.jpg';
import thirdimg from '../assets/thirdimg.jpg';
import avocado from '../assets/avocado.png';
import coco from '../assets/coco.png';

const Beneficier = () => {
  return (
    <section className="text-center py-16 bg-fourth text-primary relative">
      <h2 className="text-4xl font-bold mb-12 text-third">Benefits</h2>
      
      <div className="relative flex items-center justify-center mb-16">
        {/* Main Center Image */}
        <div className="relative z-10">
          <img src={logo} alt="Main Benefit" className="w-80 h-80 object-cover rounded-full mx-auto shadow-lg border-4 border-third" />
        </div>

        {/* Top-Left Benefit */}
        <div className="absolute top-8 left-[15%] transform -translate-y-1/2 text-center">
          <div className="bg-white p-4 rounded-full shadow-lg border-4 border-fourth">
            <img src={secondimg} alt="Benefit 1" className="w-24 h-24 rounded-full mx-auto" />
          </div>
          <p className="mt-6 font-semibold text-fourth underline">Improve Hair Growth</p>
        </div>

        {/* Top-Right Benefit */}
        <div className="absolute top-8 right-[15%] transform -translate-y-1/2 text-center">
          <div className="bg-white p-4 rounded-full shadow-lg border-4 border-fourth">
            <img src={thirdimg} alt="Benefit 2" className="w-24 h-24 rounded-full mx-auto" />
          </div>
          <p className="mt-6 font-semibold text-fourth underline">100% Organic Oil</p>
        </div>

        {/* Bottom-Left Benefit */}
        <div className="absolute bottom-8 left-[15%] transform translate-y-1/2 text-center">
          <div className="bg-white p-4 rounded-full shadow-lg border-4 border-fourth">
            <img src={avocado} alt="Benefit 3" className="w-24 h-24 rounded-full mx-auto" />
          </div>
          <p className="mt-6 font-semibold text-fourth underline">Soft & Longer</p>
        </div>

        {/* Bottom-Right Benefit */}
        <div className="absolute bottom-8 right-[15%] transform translate-y-1/2 text-center">
          <div className="bg-white p-4 rounded-full shadow-lg border-4 border-fourth">
            <img src={coco} alt="Benefit 4" className="w-24 h-24 rounded-full mx-auto" />
          </div>
          <p className="mt-6 font-semibold text-fourth underline">Hair Colouring</p>
        </div>
      </div>
    </section>
  );
};

export default Beneficier;
