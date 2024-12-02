import React from 'react';
import ProductCard from './ProductCard'; // Assure-toi que le chemin est correct
import img7 from '../assets/img7.jpg';
import img8 from '../assets/img8.jpg';
import img9 from '../assets/img9.jpg';
import img10 from '../assets/img10.jpg';

// Exemple de données pour les produits
const products = [
  {
    id: 1,
    title: 'Breezy Oil',
    description: 'Natural oil for hair care.',
    image: img7, // Utilisation de l'image importée
    date: '11 Oct 2023',
  },
  {
    id: 2,
    title: 'Herbal Shampoo',
    description: 'Shampoo with herbal extracts.',
    image: img8, // Utilisation de l'image importée
    date: '12 Oct 2023',
  },
  {
    id: 3,
    title: 'Silky Conditioner',
    description: 'Conditioner for smooth and shiny hair.',
    image: img9, // Utilisation de l'image importée
    date: '13 Oct 2023',
  },
  {
    id: 3,
    title: 'Silky Conditioner',
    description: 'Conditioner for smooth and shiny hair.',
    image: img10, // Utilisation de l'image importée
    date: '13 Oct 2023',
  },
];

const ProductCards = () => {
  return (
    <div className="bg-gray-100 py-10">
      <h2 className="text-2xl font-bold text-center mb-6">Our Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            description={product.description}
            image={product.image}
            date={product.date}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCards;
