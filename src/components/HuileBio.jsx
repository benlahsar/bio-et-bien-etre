import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';

import amande from '../assets/img/amande.webp';
import argan from '../assets/img/argan.webp';
import coco from '../assets/img/coco.webp';
import olive from '../assets/img/olive.webp';
import noix from '../assets/img/noix.webp';
import citron from '../assets/img/citron.webp';

const HuileBio = () => (
  <>
    <Navbar />
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="w-3/4 p-8 bg-secondary text-primary">
        <h1 className="text-3xl font-bold mb-4">Huile Bio</h1>
        <div className="flex flex-wrap justify-center gap-6">
          {/* Card 1 */}
          <div className="w-1/4 bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 p-4">
            <img src={amande} alt="Huile Bio" className="w-full h-auto rounded-lg mb-2" />
            <p className="text-center font-semibold mb-2">Huile d'Amande</p>
            <p className="text-yellow font-semibold text-center">Rs. 180.00</p>
            <button className="w-full px-4 py-2 bg-primary text-secondary rounded hover:bg-yellow transition-colors duration-200">
              Ajouter au panier
            </button>
          </div>

          {/* Card 2 */}
          <div className="w-1/4 bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 p-4">
            <img src={argan} alt="Huile Bio" className="w-full h-auto rounded-lg mb-2" />
            <p className="text-center font-semibold mb-2">Huile d'Argan</p>
            <p className="text-yellow font-semibold text-center">Rs. 180.00</p>
            <button className="w-full px-4 py-2 bg-primary text-secondary rounded hover:bg-yellow transition-colors duration-200">
              Ajouter au panier
            </button>
          </div>

          {/* Card 3 */}
          <div className="w-1/4 bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 p-4">
            <img src={coco} alt="Huile Bio" className="w-full h-auto rounded-lg mb-2" />
            <p className="text-center font-semibold mb-2">Huile de Coco</p>
            <p className="text-yellow font-semibold text-center">Rs. 180.00</p>            <button className="w-full px-4 py-2 bg-primary text-secondary rounded hover:bg-yellow transition-colors duration-200">
              Ajouter au panier
            </button>
          </div>

          {/* Card 4 */}
          <div className="w-1/4 bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 p-4">
            <img src={olive} alt="Huile Bio" className="w-full h-auto rounded-lg mb-2" />
            <p className="text-center font-semibold mb-2">Huile d'Olive</p>
            <p className="text-yellow font-semibold text-center">Rs. 180.00</p>            <button className="w-full px-4 py-2 bg-primary text-secondary rounded hover:bg-yellow transition-colors duration-200">
              Ajouter au panier
            </button>
          </div>

          {/* Card 5 */}
          <div className="w-1/4 bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 p-4">
            <img src={noix} alt="Huile Bio" className="w-full h-auto rounded-lg mb-2" />
            <p className="text-center font-semibold mb-2">Huile de Noix</p>
 <p className="text-yellow font-semibold text-center">Rs. 180.00</p>            <button className="w-full px-4 py-2 bg-primary text-secondary rounded hover:bg-yellow transition-colors duration-200">
              Ajouter au panier
            </button>
          </div>
           {/* Card 5 */}
           <div className="w-1/4 bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 p-4">
            <img src={citron} alt="Huile Bio" className="w-full h-auto rounded-lg mb-2" />
            <p className="text-center font-semibold mb-2">Huile de Citron</p>
 <p className="text-yellow font-semibold text-center">Rs. 180.00</p>            <button className="w-full px-4 py-2 bg-primary text-secondary rounded hover:bg-yellow transition-colors duration-200">
              Ajouter au panier
            </button>
          </div>
        </div>
        <p className="text-lg mt-6">
          Nos huiles biologiques certifiées, pour une expérience beauté pure et écologique. Contribuez à un monde plus vert avec des produits 100% bio.
        </p>
      </div>
    </div>

    {/* Footer */}
    <Footer />
  </>
);

export default HuileBio;
