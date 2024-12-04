import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
import romarin from '../assets/img/romarin.webp';
import amande from '../assets/img/amande.webp';
import argan from '../assets/img/argan.webp';
import coco from '../assets/img/coco.webp';
import olive from '../assets/img/olive.webp';
import noix from '../assets/img/noix.webp';
import thym from '../assets/img/thym.webp';
import aille from '../assets/img/aille.webp';
import aloe from '../assets/img/aloe.webp';
import lavande from '../assets/img/lavande.webp';
import palm from '../assets/img/palm.webp';

const HuileCheveux = () => {
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar minPrice={minPrice} maxPrice={maxPrice} setMinPrice={setMinPrice} setMaxPrice={setMaxPrice} />
        <div className="p-8 bg-secondary text-primary flex-1">
          <h1 className="text-3xl font-bold mb-4">Huile Bio</h1>
          <div className="flex flex-wrap justify-center gap-6">
            {/* Card 1 */}
            <div className="w-1/4 bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 p-4">
              <img src={romarin} alt="Huile Bio" className="w-full h-auto rounded-lg mb-2" />
              <p className="text-center font-semibold mb-2">Huile de Romarin</p>
              <p className="text-yellow font-semibold text-center">Rs. 180.00</p>               <button className="w-full px-4 py-2 bg-primary text-secondary rounded hover:bg-yellow transition-colors duration-200">
                Ajouter au panier
              </button>
            </div>

            {/* Card 2 */}
            <div className="w-1/4 bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 p-4">
              <img src={argan} alt="Huile Bio" className="w-full h-auto rounded-lg mb-2" />
              <p className="text-center font-semibold mb-2">Huile d'Argan</p>
              <p className="text-yellow font-semibold text-center">Rs. 180.00</p>               <button className="w-full px-4 py-2 bg-primary text-secondary rounded hover:bg-yellow transition-colors duration-200">
                Ajouter au panier
              </button>
            </div>

            {/* Card 3 */}
            <div className="w-1/4 bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 p-4">
              <img src={coco} alt="Huile Bio" className="w-full h-auto rounded-lg mb-2" />
              <p className="text-center font-semibold mb-2">Huile de Coco</p>
              <p className="text-yellow font-semibold text-center">Rs. 180.00</p>               <button className="w-full px-4 py-2 bg-primary text-secondary rounded hover:bg-yellow transition-colors duration-200">
                Ajouter au panier
              </button>
            </div>

            {/* Card 4 */}
            <div className="w-1/4 bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 p-4">
              <img src={olive} alt="Huile Bio" className="w-full h-auto rounded-lg mb-2" />
              <p className="text-center font-semibold mb-2">Huile d'Olive</p>
              <p className="text-yellow font-semibold text-center">Rs. 180.00</p>               <button className="w-full px-4 py-2 bg-primary text-secondary rounded hover:bg-yellow transition-colors duration-200">
                Ajouter au panier
              </button>
            </div>

            {/* Card 5 */}
            <div className="w-1/4 bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 p-4">
              <img src={noix} alt="Huile Bio" className="w-full h-auto rounded-lg mb-2" />
              <p className="text-center font-semibold mb-2">Huile de Noix</p>
              <p className="text-yellow font-semibold text-center">Rs. 180.00</p>               <button className="w-full px-4 py-2 bg-primary text-secondary rounded hover:bg-yellow transition-colors duration-200">
                Ajouter au panier
              </button>
            </div>

            {/* Card 6 */}
            <div className="w-1/4 bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 p-4">
              <img src={coco} alt="Huile Bio" className="w-full h-auto rounded-lg mb-2" />
              <p className="text-center font-semibold mb-2">Huile de Coco</p>
              <p className="text-yellow font-semibold text-center">Rs. 180.00</p>               <button className="w-full px-4 py-2 bg-primary text-secondary rounded hover:bg-yellow transition-colors duration-200">
                Ajouter au panier
              </button>
            </div>
             {/* Card 7 */}
             <div className="w-1/4 bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 p-4">
              <img src={amande} alt="Huile Bio" className="w-full h-auto rounded-lg mb-2" />
              <p className="text-center font-semibold mb-2">Huile de Coco</p>
              <p className="text-yellow font-semibold text-center">Rs. 180.00</p>               <button className="w-full px-4 py-2 bg-primary text-secondary rounded hover:bg-yellow transition-colors duration-200">
                Ajouter au panier
              </button>
            </div>
             {/* Card 6 */}
             <div className="w-1/4 bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 p-4">
              <img src={aille} alt="Huile Bio" className="w-full h-auto rounded-lg mb-2" />
              <p className="text-center font-semibold mb-2">Huile d Aille</p>
              <p className="text-yellow font-semibold text-center">Rs. 180.00</p>               <button className="w-full px-4 py-2 bg-primary text-secondary rounded hover:bg-yellow transition-colors duration-200">
                Ajouter au panier
              </button>
            </div>
             {/* Card 6 */}
             <div className="w-1/4 bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 p-4">
              <img src={palm} alt="Huile Bio" className="w-full h-auto rounded-lg mb-2" />
              <p className="text-center font-semibold mb-2">Huile de Palm</p>
              <p className="text-yellow font-semibold text-center">Rs. 180.00</p>               <button className="w-full px-4 py-2 bg-primary text-secondary rounded hover:bg-yellow transition-colors duration-200">
                Ajouter au panier
              </button>
            </div>
             {/* Card 6 */}
             <div className="w-1/4 bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 p-4">
              <img src={lavande} alt="Huile Bio" className="w-full h-auto rounded-lg mb-2" />
              <p className="text-center font-semibold mb-2">Huile de Lavande</p>
              <p className="text-yellow font-semibold text-center">Rs. 180.00</p>               <button className="w-full px-4 py-2 bg-primary text-secondary rounded hover:bg-yellow transition-colors duration-200">
                Ajouter au panier
              </button>
            </div>
             {/* Card 6 */}
             <div className="w-1/4 bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 p-4">
              <img src={aloe} alt="Huile Bio" className="w-full h-auto rounded-lg mb-2" />
              <p className="text-center font-semibold mb-2">Huile d'Aloe Vera</p>
              <p className="text-yellow font-semibold text-center">Rs. 180.00</p>               <button className="w-full px-4 py-2 bg-primary text-secondary rounded hover:bg-yellow transition-colors duration-200">
                Ajouter au panier
              </button>
            </div>
             {/* Card 6 */}
             <div className="w-1/4 bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 p-4">
              <img src={thym} alt="Huile Bio" className="w-full h-auto rounded-lg mb-2" />
              <p className="text-center font-semibold mb-2">Huile de Thym</p>
              <p className="text-yellow font-semibold text-center">Rs. 180.00</p>               <button className="w-full px-4 py-2 bg-primary text-secondary rounded hover:bg-yellow transition-colors duration-200">
                Ajouter au panier
              </button>
            </div>
          </div>
          <p className="text-lg mt-6">
            Nos huiles biologiques certifiées, pour une expérience beauté pure et écologique. Contribuez à un monde plus vert avec des produits 100% bio.
          </p>
        </div>
      </div>
      {/* Section vidéo */}
    <div className="p-8 bg-white text-emerald">
      <h2 className="text-2xl font-bold mb-4">Pourquoi choisir nos huiles cosmétiques ?</h2>
      <p className="mb-4">
        Nos huiles sont soigneusement sélectionnées et pressées à froid pour garantir une qualité exceptionnelle.
        Elles conviennent parfaitement aux soins de la peau, des cheveux, et même aux massages. Riches en nutriments
        et en vitamines, elles offrent des bienfaits remarquables pour une beauté naturelle.
      </p>
      <div className="flex justify-center">
        <iframe
          className="w-full md:w-2/3 h-64 md:h-96 rounded-lg shadow-lg"
          src="https://www.youtube.com/embed/md7RCmwZUQw?si=TJFME22F3D5xjIHQ"
          title="Vidéo explicative sur les huiles cosmétiques"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
      <Footer />
    </>
  );
};

export default HuileCheveux;
