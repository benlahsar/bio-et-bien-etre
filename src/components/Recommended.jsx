import React from "react";
import amande from "../assets/amande.webp"; 
import romarin from "../assets/romarin.webp"; 
import logo from "../assets/logo.png"; 
import thirdimg from "../assets/thirdimg.jpg"; 
import { FaShoppingCart, FaHeart } from "react-icons/fa"; 

const RecommendedProducts = () => {
  return (
    <div className="mt-16">
      <h2 className="text-3xl font-semibold text-center mb-8">Recommended Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <div className="relative text-center group">
          <img
            src={amande}
            alt="Huile d'Amande"
            className="w-full h-64 object-cover rounded-lg transition-all duration-300 group-hover:opacity-80"
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <button className=" text-white p-3 rounded-full mx-2 hover:bg-gray-600">
              <FaShoppingCart />
            </button>
            <button className=" text-white p-3 rounded-full mx-2 hover:bg-gray-600">
              <FaHeart />
            </button>
          </div>
          <h3 className="mt-4 text-xl font-medium">Huile d'Amande</h3>
          <p className="text-gray-500">Rs. 121.00</p>
        </div>

        
        <div className="relative text-center group">
          <img
            src={romarin}
            alt="Huile de Romarin"
            className="w-full h-64 object-cover rounded-lg transition-all duration-300 group-hover:opacity-80"
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <button className=" text-white p-3 rounded-full mx-2 hover:bg-gray-600">
              <FaShoppingCart />
            </button>
            <button className=" text-white p-3 rounded-full mx-2 hover:bg-gray-600">
              <FaHeart />
            </button>
          </div>
          <h3 className="mt-4 text-xl font-medium">Huile de Romarin</h3>
          <p className="text-gray-500">Rs. 138.00</p>
        </div>

       
        <div className="relative text-center group">
          <img
            src={logo}
            alt="Huile de Lavande"
            className="w-full h-64 object-cover rounded-lg transition-all duration-300 group-hover:opacity-80"
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <button className=" text-white p-3 rounded-full mx-2 hover:bg-gray-600">
              <FaShoppingCart />
            </button>
            <button className=" text-white p-3 rounded-full mx-2 hover:bg-gray-600">
              <FaHeart />
            </button>
          </div>
          <h3 className="mt-4 text-xl font-medium">Huile de Lavande</h3>
          <p className="text-gray-500">Rs. 130.00</p>
        </div>

        
        <div className="relative text-center group">
          <img
            src={thirdimg}
            alt="Huile de Coco"
            className="w-full h-64 object-cover rounded-lg transition-all duration-300 group-hover:opacity-80"
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <button className=" text-white p-3 rounded-full mx-2 hover:bg-gray-600">
              <FaShoppingCart />
            </button>
            <button className=" text-white p-3 rounded-full mx-2 hover:bg-gray-600">
              <FaHeart />
            </button>
          </div>
          <h3 className="mt-4 text-xl font-medium">Huile de Coco</h3>
          <p className="text-gray-500">Rs. 118.00</p>
        </div>
      </div>
    </div>
  );
};

export default RecommendedProducts;
