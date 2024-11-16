import React from 'react';
import ProductCard from './ProductCard';
import amande from '../assets/img/amande.webp';
import jojoba from '../assets/img/jojoba.webp';
import coco from '../assets/img/coco.webp';
import gerogier from '../assets/img/gerogier.webp';
import avocado from '../assets/img/avocado.webp';
import romarin from '../assets/img/romarin.webp';


const ProductGrid = ({ minPrice, maxPrice }) => {
  // List of products
  const products = [
    { name: "Huile d'Amande", price: 180.00, img: amande },
    { name: "Huile de jojoba", price: 210.00, img: jojoba },
    { name: "Huile de Coco", price: 160.00, img: coco },
    { name: "Huile de Gerogier", price: 175.00, img: gerogier },
    { name: "Huile d'Avocado", price: 190.00, img: avocado },
    { name: "Huile de Romarin", price: 200.00, img: romarin },
     { name: "Huile de Romarin", price: 200.00, img: romarin },
     { name: "Huile de Romarin", price: 200.00, img: romarin },
     { name: "Huile de Romarin", price: 200.00, img: romarin },
     { name: "Huile de Romarin", price: 200.00, img: romarin },
     { name: "Huile de Romarin", price: 200.00, img: romarin },
     { name: "Huile de Romarin", price: 200.00, img: romarin },
    // More products can be added here
  ];

  // Filter products based on the price range passed from Sidebar
  const filteredProducts = products.filter(product => {
    const productPrice = product.price;
    const min = parseFloat(minPrice) || 0;
    const max = parseFloat(maxPrice) || Infinity;

    return productPrice >= min && productPrice <= max;
  });

  return (
    <main className="w-3/4 p-4 bg-secondary">
      <div className="grid grid-cols-3 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <ProductCard key={index} name={product.name} price={`Rs. ${product.price.toFixed(2)}`} img={product.img} />
          ))
        ) : (
          <p>Aucun produit trouvé pour cette plage de prix.</p>
        )}
      </div>
    </main>
  );
};

export default ProductGrid;
