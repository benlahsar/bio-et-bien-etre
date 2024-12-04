import React from 'react';
import home2 from '../assets/home2.jpg'; 
import home3 from '../assets/home3.jpg';
import home from '../assets/home.jpg';
import { useNavigate } from 'react-router-dom';

const Offers = () => {

  const navigate = useNavigate();

  return (
    <div className="bg-gray-400 min-h-screen flex justify-center items-center py-16 px-8 md:px-16">
      <div className="flex flex-col md:flex-row gap-0 w-full max-w-6xl">
        
        
        <div className="flex justify-center items-center w-full md:w-1/2 p-2">
          <div className="relative bg-white rounded-lg shadow-lg p-6 flex flex-row items-center h-full gap-4">
            
            <div className="w-1/2 h-64 md:h-80 overflow-hidden rounded-[100px] relative">
              <img
                src={home2}
                alt="Aides à la vente"
                className="object-cover w-full h-full"
              />
            </div>
            
            <div className="text-left">
              <h3 className="text-amber-900 text-xl font-bold">
                DÉCOUVREZ NOS AIDES À LA VENTE
              </h3>
              <p className="mt-2 text-third text-lg">
                Les packs d'implantation, les PLV, formations...
              </p>
              <button className="mt-4 px-4 py-2 bg-emerald-500 text-white rounded-md hover:bg-secondary-dark hover:scale-105 transition-transform duration-200" onClick={() => navigate('/produits')}>
                Découvrir nos produits
              </button>
            </div>
          </div>
        </div>

        
        <div className="flex flex-col gap-4 justify-center items-center w-full md:w-1/2 p-2">
          
          <div className="relative bg-white rounded-lg shadow-lg p-6 flex flex-row items-center h-full gap-4">
            
            <div className="w-1/2 h-64 overflow-hidden rounded-[100px] relative">
              <img
                src={home3}
                alt="Huiles essentielles"
                className="object-cover w-full h-full"
              />
              
            </div>
            
            <div className="text-left">
              <h3 className="text-amber-900 text-xl font-bold">
                DES PRIX PRÉFÉRENTIELS SUR NOS HUILES ESSENTIELLES
              </h3>
              <button className="mt-4 px-4 py-2 bg-emerald-500 text-white rounded-md hover:bg-secondary-dark hover:scale-105 transition-transform duration-200" onClick={() => navigate('/produits')}>
                Découvrir nos produits
              </button>
            </div>
          </div>

          
          <div className="relative bg-white rounded-lg shadow-lg p-6 flex flex-row items-center h-full gap-4">
            
            <div className="w-1/2 h-64 overflow-hidden rounded-[100px] relative">
              <img
                src={home}
                alt="Huiles végétales"
                className="object-cover w-full h-full"
              />
              
            </div>
            
            <div className="text-left">
              <h3 className="text-amber-900 text-xl font-bold">
                DES PRIX DÉGRESSIFS SUR NOS HUILES VÉGÉTALES
              </h3>
              <button className="mt-4 px-4 py-2 bg-emerald-500 text-white rounded-md hover:bg-secondary-dark hover:scale-105 transition-transform duration-200" onClick={() => navigate('/produits')}>
                Découvrir nos produits
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
