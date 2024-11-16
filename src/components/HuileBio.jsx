import React from 'react';

import amande from '../assets/img/amande.webp';

const HuileBio = () => (
  <div className="p-8 bg-secondary text-primary">
    <h1 className="text-3xl font-bold mb-4">Huile Bio</h1>
    <div className="flex flex-wrap justify-center gap-6">
      {/* Card 1 */}
      <div className="w-1/4 bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 p-4">
        <img src={amande} alt="Huile Bio" className="w-full h-auto rounded-lg mb-2" />
        <p className="text-center font-semibold mb-2">Huile d'Amande</p>
        <button className="w-full px-4 py-2 bg-primary text-secondary rounded hover:bg-emerald transition-colors duration-200">
          Ajouter au panier
        </button>
      </div>

      {/* Card 2 */}
      <div className="w-1/4 bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 p-4">
        <img src={amande} alt="Huile Bio" className="w-full h-auto rounded-lg mb-2" />
        <p className="text-center font-semibold mb-2">Huile d'Amande</p>
        <button className="w-full px-4 py-2 bg-primary text-secondary rounded hover:bg-emerald transition-colors duration-200">
          Ajouter au panier
        </button>
      </div>

      {/* Card 3 */}
      <div className="w-1/4 bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 p-4">
        <img src={amande} alt="Huile Bio" className="w-full h-auto rounded-lg mb-2" />
        <p className="text-center font-semibold mb-2">Huile d'Amande</p>
        <button className="w-full px-4 py-2 bg-primary text-secondary rounded hover:bg-emerald transition-colors duration-200">
          Ajouter au panier
        </button>
      </div>
    </div>
    <p className="text-lg mt-6">
      Nos huiles biologiques certifiées, pour une expérience beauté pure et écologique. Contribuez à un monde plus vert avec des produits 100% bio.
    </p>
  </div>
);

export default HuileBio;
