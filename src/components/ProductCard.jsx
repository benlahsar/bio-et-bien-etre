// src/components/ProductCard.js
import React from 'react';

const ProductCard = ({ title, description, image, date }) => {
  return (
    <div className="bg-yellow-100 p-4 rounded-lg shadow-md">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-48 object-cover rounded-md" 
      />
      <h3 className="text-lg font-bold mt-2">{title}</h3>
      <p className="text-sm text-gray-700">{description}</p>
      <p className="text-xs text-gray-500 mt-1">{date}</p>
    </div>
  );
};

export default ProductCard;
