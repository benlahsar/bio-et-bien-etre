import React, { useState } from "react";
import oilImg from "../assets/secondimg.jpg";

const OilProductCard = () => {
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");

  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg w-11/12 max-w-6xl mx-auto mt-10">
      <div className="flex flex-col lg:flex-row items-start">
        
        <div className="flex-shrink-0">
          <img
            src={oilImg}
            alt="Oil Product"
            className="w-64 h-64 object-cover rounded-lg"
          />
        </div>

        
        <div className="flex flex-col items-start lg:ml-6 mt-4 lg:mt-0 w-full">
          <h1 className="text-2xl font-bold mb-2">Huile Essentielle d'Argan</h1>
          <p className="text-lg text-gray-600 mb-1">
            Prix : <span className="text-teal-600 font-semibold">Rs. 250.00</span>
          </p>
          <p className="text-gray-500 mb-1">Quantité : 500 millilitres</p>
          <p className="text-gray-500 mb-1">
            Fournisseur : <span className="font-semibold">Bio Et Bien Etre</span>
          </p>
          <p className="text-gray-500 mb-1">Type : Huile Essentielle</p>
          <p className="text-teal-600 font-bold">Disponibilité : En stock !</p>

          
          <div className="flex items-center mt-4">
            <button
              onClick={decrementQuantity}
              className="px-3 py-1 bg-gray-100 text-gray-600 rounded-l hover:bg-gray-200"
            >
              -
            </button>
            <span className="px-4 py-1 border-t border-b border-gray-100 text-gray-600">
              {quantity}
            </span>
            <button
              onClick={incrementQuantity}
              className="px-3 py-1 bg-gray-100 text-gray-600 rounded-r hover:bg-gray-200"
            >
              +
            </button>
          </div>

          
          <div className="flex justify-start gap-2 mt-6">
            <button className="px-4 py-2 bg-pink-100 text-pink-600 text-sm rounded hover:bg-pink-200">
              Acheter Maintenant
            </button>
            <button className="px-4 py-2 bg-green-100 text-green-600 text-sm rounded hover:bg-green-200">
              Ajouter au Panier
            </button>
            <button className="px-4 py-2 bg-blue-100 text-blue-600 text-sm rounded hover:bg-blue-200">
              Ajouter à la Liste
            </button>
          </div>

          
          <div className="flex gap-4 justify-start mt-6">
            <button
              className={`px-4 py-2 rounded ${
                activeTab === "description"
                  ? "bg-green-100 text-green-600"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
              onClick={() => setActiveTab("description")}
            >
              Description
            </button>
            <button
              className={`px-4 py-2 rounded ${
                activeTab === "shipping"
                  ? "bg-green-100 text-green-600"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
              onClick={() => setActiveTab("shipping")}
            >
              Informations d'expédition
            </button>
            <button
              className={`px-4 py-2 rounded ${
                activeTab === "reviews"
                  ? "bg-green-100 text-green-600"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
              onClick={() => setActiveTab("reviews")}
            >
              Avis
            </button>
          </div>

          
          <div className="mt-4">
            {activeTab === "description" && (
              <p>
                Cette huile essentielle d'argan est connue pour ses propriétés
                hydratantes et nourrissantes. Idéale pour les soins de la peau et
                des cheveux, elle est extraite de manière naturelle pour garantir
                la meilleure qualité.
              </p>
            )}
            {activeTab === "shipping" && (
              <p>
                Livraison disponible dans tout le Maroc. Délais estimés : 3 à 5
                jours ouvrables. Expédition gratuite pour les commandes
                supérieures à Rs. 500.
              </p>
            )}
            {activeTab === "reviews" && (
              <div>
                <p>
                  <strong>Sana :</strong> Excellent produit, je l'utilise
                  depuis des mois !
                </p>
                <p>
                  <strong>Salma :</strong> Livraison rapide et huile de
                  très bonne qualité.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OilProductCard;
