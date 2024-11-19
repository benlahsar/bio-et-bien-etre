import React, { useEffect, useRef, useState } from 'react';
import { FaShoppingCart, FaHeart } from 'react-icons/fa';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import img6 from '../assets/img6.jpg';
import bgcolor from '../assets/bgcolor.jpg';
import bgcolor2 from '../assets/bgcolor2.jpg'; 

const products = [
  {
    id: 1,
    image: img1,
    title: "Huile essentielle de Néroli / Fleur d'oranger",
    description: 'Un mélange naturel pour la peau et les cheveux.',
  },
  {
    id: 2,
    image: img2,
    title: 'Huile essentielle de Lavande',
    description: "Elle s'emploie pour ses vertus relaxantes.",
  },
  {
    id: 3,
    image: img3,
    title: 'Huile essentielle de Romarin à Cinéole',
    description: 'Enrichi pour une hydratation intense.',
  },
  {
    id: 4,
    image: img4,
    title: 'Huile de Jojoba',
    description: 'Hydrate et adoucit la peau sans obstruer les pores.',
  },
  {
    id: 5,
    image: img6,
    title: 'Huile carnnelle',
    description: 'Riche en vitamine E, idéale pour revitaliser la peau.',
  },
];

const Home = () => {
  const carouselRef = useRef(null);
  const [currentBg, setCurrentBg] = useState(bgcolor); 

  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prevBg) => (prevBg === bgcolor ? bgcolor2 : bgcolor)); 
    }, 2000); 

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (products.length > 3) {
      const interval = setInterval(() => {
        if (carouselRef.current) {
          const maxScrollLeft = carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
          if (carouselRef.current.scrollLeft >= maxScrollLeft) {
            carouselRef.current.scrollLeft = 0;
          } else {
            carouselRef.current.scrollLeft += 300;
          }
        }
      }, 2000);

      return () => clearInterval(interval);
    }
  }, []);

  return (
    <div className="min-h-screen bg-primary text-secondary flex flex-col items-center mt-[72px]">
      
      {/* Section de l'image principale  */}
      <div
        className="relative w-full h-screen bg-cover bg-center flex items-center justify-center text-center"
        style={{ backgroundImage: `url(${currentBg})` }} 
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 text-white p-6">
          <h1 className="text-4xl md:text-6xl font-bold font-['Raleway'] mb-4">Découvrez la beauté authentique</h1>
          <p className="text-lg md:text-2xl font-['Raleway']">avec nos produits naturels</p>
        </div>
      </div>

      {/* Section des produits */}
      <div 
        ref={carouselRef}
        className="flex overflow-x-auto gap-8 p-8 max-w-6xl w-full scroll-smooth hide-scrollbar"
      >
        {products.map((product) => (
          <article key={product.id} className="relative min-w-[300px] text-center group bg-white rounded-lg shadow-lg p-4">
            <img
              src={product.image}
              alt={product.title}
              className="h-64 w-full object-cover rounded-lg mb-4 transition-transform duration-300 transform group-hover:scale-105"
            />
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">{product.title}</h2>
            <p className="text-lg mb-4 text-gray-600">{product.description}</p>
            
            <button className="bg-third text-primary px-4 py-2 rounded-lg text-lg font-semibold hover:bg-fourth">
              Ajouter au panier
            </button>

            <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button aria-label="Ajouter aux favoris" className="bg-white p-3 rounded-full text-primary hover:text-third">
                <FaHeart size={20} />
              </button>
              <button aria-label="Ajouter au panier" className="bg-white p-3 rounded-full text-primary hover:text-third">
                <FaShoppingCart size={20} />
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Home;
