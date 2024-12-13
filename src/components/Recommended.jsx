import React, { useState } from "react";
import { ShoppingCart, Heart, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Product data can be moved to a separate file or fetched from an API
const recommendedProductsData = [
  {
    id: 1,
    name: "Huile d'Amande",
    price: 121.00,
    image: "https://res.cloudinary.com/du9af99hf/image/upload/v1733744462/assets/images/product_images/f8pyny7bqj973xngigwy.webp",
    description: "Huile naturelle pure, idéale pour la peau et les cheveux"
  },
  {
    id: 2,
    name: "Huile de Romarin",
    price: 138.00,
    image: "https://res.cloudinary.com/du9af99hf/image/upload/v1733744461/assets/images/product_images/hul6yle5moz7yvvcrzbt.jpg",
    description: "Stimule la circulation et renforce les cheveux"
  },
  {
    id: 3,
    name: "Huile de Lavande",
    price: 130.00,
    image: "https://res.cloudinary.com/du9af99hf/image/upload/v1733744459/assets/images/product_images/p55bmlsike85zowwzdkf.webp",
    description: "Détente et relaxation, parfaite pour l'aromathérapie"
  },
  {
    id: 4,
    name: "Huile de Coco",
    price: 118.00,
    image: "https://res.cloudinary.com/du9af99hf/image/upload/v1733744458/assets/images/product_images/lapevbpigrqqemy6uss7.webp",
    description: "Hydratation profonde pour la peau et les chevaux"
  }
];

const ProductCard = ({ product, onAddToCart, onAddToFavorites }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <div 
      className="relative bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        
        {/* Hover Overlay */}
        <div className={`absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center space-x-4 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <button 
            onClick={() => onAddToCart(product)}
            className="bg-white p-3 rounded-full hover:bg-gray-100 transition"
            aria-label="Add to Cart"
          >
            <ShoppingCart className="text-gray-700" />
          </button>
          <button 
            onClick={() => onAddToFavorites(product)}
            className="bg-white p-3 rounded-full hover:bg-gray-100 transition"
            aria-label="Add to Favorites"
          >
            <Heart className="text-gray-700" />
          </button>
        </div>
      </div>

      {/* Product Details */}
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-2 text-sm line-clamp-2">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-teal-600 font-bold text-lg">{product.price.toFixed(2)} Dhs</span>
          <button 
            className="flex items-center text-sm text-blue-600 hover:text-blue-800 transition"
            onClick={() => {navigate("/huile-produit")}}
          >
            Détails <ArrowRight size={16} className="ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

const RecommendedProducts = () => {
  const handleAddToCart = (product) => {
    // Implement add to cart logic
    console.log(`Added ${product.name} to cart`);
  };

  const handleAddToFavorites = (product) => {
    // Implement add to favorites logic
    console.log(`Added ${product.name} to favorites`);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Produits Recommandés
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Découvrez notre sélection d'huiles essentielles soigneusement choisies pour votre bien-être
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {recommendedProductsData.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
              onAddToFavorites={handleAddToFavorites}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecommendedProducts;