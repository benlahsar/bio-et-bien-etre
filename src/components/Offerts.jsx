import React from 'react';
import home2 from '../assets/home2.jpg'; 
import home3 from '../assets/home3.jpg';
import home from '../assets/home.jpg';

const Offers = () => {
  return (
    <div className="bg-primary min-h-screen flex justify-center items-center py-16 px-8 md:px-16">
      <div className="flex flex-col md:flex-row gap-0 w-full max-w-6xl">
        
        
        <div className="flex justify-center items-center w-full md:w-1/2 p-2">
          <div className="relative bg-white rounded-lg shadow-lg p-6 flex flex-row items-center h-full gap-4">
            
            <div className="w-1/2 h-64 md:h-80 overflow-hidden rounded-[100px] relative">
              <img
                src={home2}
                alt="Aides à la vente"
                className="object-cover w-full h-full"
              />
             
              <div
                className="absolute right-[-30px] top-1/2 transform -translate-y-1/2 w-16 h-16"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='80.917'%20height='126.241'%20viewBox='0%200%2080.917%20126.241'%3E%3Cpath%20d='M40.452-20.629c19.412,46.276,40.3,60.39,40.539,85.72S60.68,105.837,40.452,105.61.322,88.481.077,64.184,21.985,26.773,40.452-20.629Z'%20transform='translate(-0.075%2020.629)'%20fill='%231f9d63'/%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'contain',  
                  opacity: 0.7,
                }}
              ></div>
            </div>
            
            <div className="text-left">
              <h3 className="text-secondary text-xl font-bold">
                DÉCOUVREZ NOS AIDES À LA VENTE
              </h3>
              <p className="mt-2 text-third">
                Les packs d'implantation, les PLV, formations...
              </p>
              <button className="mt-4 px-4 py-2 bg-secondary text-white rounded-md hover:bg-secondary-dark hover:scale-105 transition-transform duration-200">
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
              
              <div
                className="absolute right-[-30px] top-1/2 transform -translate-y-1/2 w-16 h-16"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='80.917'%20height='126.241'%20viewBox='0%200%2080.917%20126.241'%3E%3Cpath%20d='M40.452-20.629c19.412,46.276,40.3,60.39,40.539,85.72S60.68,105.837,40.452,105.61.322,88.481.077,64.184,21.985,26.773,40.452-20.629Z'%20transform='translate(-0.075%2020.629)'%20fill='%231f9d63'/%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'contain',
                  opacity: 0.7,
                }}
              ></div>
            </div>
            
            <div className="text-left">
              <h3 className="text-secondary text-xl font-bold">
                DES PRIX PRÉFÉRENTIELS SUR NOS HUILES ESSENTIELLES
              </h3>
              <button className="mt-4 px-4 py-2 bg-secondary text-white rounded-md hover:bg-secondary-dark hover:scale-105 transition-transform duration-200">
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
              
              <div
                className="absolute right-[-30px] top-1/2 transform -translate-y-1/2 w-16 h-16"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='80.917'%20height='126.241'%20viewBox='0%200%2080.917%20126.241'%3E%3Cpath%20d='M40.452-20.629c19.412,46.276,40.3,60.39,40.539,85.72S60.68,105.837,40.452,105.61.322,88.481.077,64.184,21.985,26.773,40.452-20.629Z'%20transform='translate(-0.075%2020.629)'%20fill='%231f9d63'/%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'contain',
                  opacity: 0.7,
                }}
              ></div>
            </div>
            
            <div className="text-left">
              <h3 className="text-third text-xl font-bold">
                DES PRIX DÉGRESSIFS SUR NOS HUILES VÉGÉTALES
              </h3>
              <button className="mt-4 px-4 py-2 bg-secondary text-white rounded-md hover:bg-secondary-dark hover:scale-105 transition-transform duration-200">
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
