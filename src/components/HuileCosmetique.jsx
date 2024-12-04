import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
import amande from '../assets/img/amande.webp';
import jojoba from '../assets/img/jojoba.webp';
import argan from '../assets/img/argan.webp';
import coco from '../assets/img/coco.webp';
import olive from '../assets/img/olive.webp';
import noix from '../assets/img/noix.webp';
import sesame from '../assets/img/sesame.webp';

const HuileCosmetique = () => (
  <>
    <Navbar />
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="w-3/4 p-8 bg-secondary text-primary">
        <h1 className="text-3xl font-bold mb-4">Huile Cosmétique</h1>

        <div className="flex flex-wrap justify-center gap-4 mb-4">
          {/* Cards */}
          <div className="w-1/4 p-4 bg-white rounded-lg shadow-lg hover:scale-105 transition-shadow duration-300">
            <img src={argan} alt="Huile d'argan" className="w-full h-auto rounded-lg mb-2" />
            <p className="text-center font-semibold">Huile d'Argan</p>
            <p className="text-yellow font-semibold text-center">Rs. 180.00</p> 
            <button className="mt-2 px-4 py-2 bg-primary text-secondary rounded hover:bg-yellow transition-colors duration-200">
              Ajouter au panier
            </button>
          </div>

        {/* Other Cards */}
        <div className="w-1/4 p-4 bg-white rounded-lg shadow-lg hover:scale-105 transition-shadow duration-300">
            <img src={coco} alt="Huile Coco" className="w-full h-auto rounded-lg mb-2" />
            <p className="text-center font-semibold">Huile de Coco</p>
            <p className="text-yellow font-semibold text-center">Rs. 180.00</p>             <button className="mt-2 px-4 py-2 bg-primary text-secondary rounded hover:bg-yellow transition-colors duration-200">
              Ajouter au panier
            </button>
          </div>
{/* Other Cards */}
<div className="w-1/4 p-4 bg-white rounded-lg shadow-lg hover:scale-105 transition-shadow duration-300">
            <img src={coco} alt="Huile Coco" className="w-full h-auto rounded-lg mb-2" />
            <p className="text-center font-semibold">Huile de Coco</p>
            <p className="text-yellow font-semibold text-center">Rs. 180.00</p>             <button className="mt-2 px-4 py-2 bg-primary text-secondary rounded hover:bg-yellow transition-colors duration-200">
              Ajouter au panier
            </button>
          </div>
{/* Other Cards */}
<div className="w-1/4 p-4 bg-white rounded-lg shadow-lg hover:scale-105 transition-shadow duration-300">
            <img src={coco} alt="Huile Coco" className="w-full h-auto rounded-lg mb-2" />
            <p className="text-center font-semibold">Huile de Coco</p>
            <p className="text-yellow font-semibold text-center">Rs. 180.00</p>             <button className="mt-2 px-4 py-2 bg-primary text-secondary rounded hover:bg-yellow transition-colors duration-200">
              Ajouter au panier
            </button>
          </div>
{/* Other Cards */}
<div className="w-1/4 p-4 bg-white rounded-lg shadow-lg hover:scale-105 transition-shadow duration-300">
            <img src={coco} alt="Huile Coco" className="w-full h-auto rounded-lg mb-2" />
            <p className="text-center font-semibold">Huile de Coco</p>
            <p className="text-yellow font-semibold text-center">Rs. 180.00</p>             <button className="mt-2 px-4 py-2 bg-primary text-secondary rounded hover:bg-yellow transition-colors duration-200">
              Ajouter au panier
            </button>
          </div>
{/* Other Cards */}
<div className="w-1/4 p-4 bg-white rounded-lg shadow-lg hover:scale-105 transition-shadow duration-300">
            <img src={coco} alt="Huile Coco" className="w-full h-auto rounded-lg mb-2" />
            <p className="text-center font-semibold">Huile de Coco</p>
            <p className="text-yellow font-semibold text-center">Rs. 180.00</p>             <button className="mt-2 px-4 py-2 bg-primary text-secondary rounded hover:bg-yellow transition-colors duration-200">
              Ajouter au panier
            </button>
          </div>
{/* Other Cards */}
<div className="w-1/4 p-4 bg-white rounded-lg shadow-lg hover:scale-105 transition-shadow duration-300">
            <img src={coco} alt="Huile Coco" className="w-full h-auto rounded-lg mb-2" />
            <p className="text-center font-semibold">Huile de Coco</p>
            <p className="text-yellow font-semibold text-center">Rs. 180.00</p>             <button className="mt-2 px-4 py-2 bg-primary text-secondary rounded hover:bg-yellow transition-colors duration-200">
              Ajouter au panier
            </button>
          </div>
{/* Other Cards */}
<div className="w-1/4 p-4 bg-white rounded-lg shadow-lg hover:scale-105 transition-shadow duration-300">
            <img src={coco} alt="Huile Coco" className="w-full h-auto rounded-lg mb-2" />
            <p className="text-yellow font-semibold text-center">Rs. 180.00</p>             <p className="text-center-yellow ">Rs. 180.00</p>
            <button className="mt-2 px-4 py-2 bg-primary text-secondary rounded hover:bg-yellow transition-colors duration-200">
              Ajouter au panier
            </button>
          </div>

          
        </div>

        <p className="text-lg mb-4">
          Découvrez nos huiles naturelles, extraites à froid pour conserver toutes leurs vertus bienfaisantes. Parfaites pour des soins de beauté 100% naturels.
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
          src="https://www.youtube.com/embed/X_tsnuph1ag?si=jHYedaln4uXespwB"
          title="Vidéo explicative sur les huiles cosmétiques"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>

    {/* Footer */}
    <Footer />
  </>
);

export default HuileCosmetique;
