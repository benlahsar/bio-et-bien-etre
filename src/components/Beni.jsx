import React, { useState } from 'react';
import img5 from "../assets/img5.jpg"; 
import img6 from "../assets/img6.jpg";
import img7 from "../assets/img7.jpg";
const products = [
  {
    id: 1,
    title: "Strengthening Hair",
    description: "Htse libero tempore, cum soluta nobis est eligendi optio cumque.",
    image: img5,
    label: "ROSE SEED COCONUT OIL",
  },
  {
    id: 2,
    title: "Soft & Shiny Hair",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: img6,
    label: "NEEM SEED COCONUT OIL",
  },
  {
    id: 3,
    title: "Deep Nourishment",
    description: "Providing intense moisture and care for your hair.",
    image: img7,
    label: "ARGAN OIL WITH ESSENCE",
  },
];

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };

  const currentProduct = products[currentIndex];

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center text-secondary">
      <h2 className="text-5xl font-bold mb-6 font-serif">Benefits</h2>

      {/* Section du produit */}
      <div className="flex items-center justify-center space-x-8">
        <img
          src={currentProduct.image}
          alt={currentProduct.label}
          className="w-64 h-64 object-contain drop-shadow-lg"
        />

        <div className="text-center">
          <h3 className="text-4xl font-bold mb-2">{currentProduct.title}</h3>
          <p className="text-lg text-emerald mb-4">{currentProduct.description}</p>
          <span className="block text-yellow font-semibold text-sm mt-2">{currentProduct.label}</span>
        </div>
      </div>

      {/* Boutons Previous et Next */}
      <div className="flex items-center justify-center mt-8 space-x-4">
        <button
          onClick={handlePrevious}
          className="flex items-center space-x-2 px-4 py-2 bg-primary text-secondary rounded-full hover:bg-emerald transition"
        >
          <span className="text-lg">Previous</span>
        </button>
        <button
          onClick={handleNext}
          className="flex items-center space-x-2 px-4 py-2 bg-primary text-secondary rounded-full hover:bg-emerald transition"
        >
          <span className="text-lg">Next</span>
        </button>
      </div>
    </div>
  );
};

export default App;