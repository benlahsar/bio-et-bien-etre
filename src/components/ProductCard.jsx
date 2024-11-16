import React from "react";
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';

const ProductCard = ({ date, title, description, image }) => {
  return (
    <div className="h-screen w-full bg-primary flex items-center justify-center">
      <div className="bg-[#C8BB5B]-100 rounded-lg shadow-md p-6 max-w-xs">
        <img
          src={img3}   
          alt={title}  
          className="w-full h-48 object-cover mb-4 rounded"
        />
        <p className="text-sm text-gray-600">{date}</p>
        <h3 className="text-2xl font-semibold text-secondary -800 mb-3">{title}</h3>
        <p className="text-gray-700 text-sm mb-4">{description}</p>
        <a href="#" className="text-fourth -600 hover:text-green-800 font-medium">
          Read more &rarr;
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
