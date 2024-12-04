// import React from 'react';

// const ProductCard = ({ name, price, img }) => (
//   <div className="text-center p-4 bg-secondary shadow-lg rounded-lg transform hover:scale-105 transition-transform duration-200">
//     <img src={img} alt={name} className="w-full h-48 object-cover mb-2 rounded"/>
//     <p className="font-semibold text-primary">{name}</p>
//     <p className="text-yellow font-semibold">{price}</p>
//     <button className="mt-4 px-4 py-2 bg-emerald text-secondary rounded hover:bg-yellow transition-colors duration-200 font-semibold">
//       Ajouter au panier
//     </button>
//   </div>
// );

// export default ProductCard;

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
