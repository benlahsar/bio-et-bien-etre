import { X } from "lucide-react";
import React, { useState } from "react";
import {
  FaShoppingCart,
  FaHeart,
  FaPhone,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const NavbarWithCart = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showProductDetails, setShowProductDetails] = useState(false); // État pour afficher/masquer les détails du produit
  const [quantity, setQuantity] = useState(1); // État pour gérer la quantité

  // Fonction pour augmenter la quantité
  const handleAdd = () => setQuantity(quantity + 1);

  // Fonction pour diminuer la quantité (minimum = 1)
  const handleRemove = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  // Fonction pour valider l'ajout (par exemple, ajouter au panier)
  const handleValidate = () => {
    alert("Produit validé !"); // Remplacer par la logique réelle
    setShowProductDetails(false);
  };

  return (
    <>
      {/* Barre de navigation */}

      <nav className="p-4 flex justify-between items-center z-50 fixed top-0 left-0 right-0 bg-primary text-white shadow-md">
        <img
          src="src/assets/images/logo.png"
          alt="Mon Logo"
          className="h-12 w-auto rounded-lg shadow-sm"
        />

        <ul className="hidden md:flex space-x-6 font-['Raleway'] text-xl">
          <li>
            <a className="hover:text-third" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="hover:text-third" href="#about">
              Nos Huiles
            </a>
          </li>
          <li>
            <a className="hover:text-third" href="#blog">
              Blog
            </a>
          </li>
          <li>
            <a className="hover:text-third" href="#contact">
              Contact
            </a>
          </li>
          <li>
            <a className="hover:text-third" href="#aboutus">
              About Us
            </a>
          </li>
        </ul>
        <div className="hidden md:flex space-x-4 items-center">
          <button
            onClick={() => setShowProductDetails(!showProductDetails)}
            aria-label="Acheter"
          >
            <FaShoppingCart
              className="text-white hover:text-third cursor-pointer"
              size={20}
            />
          </button>
          <a href="#like" aria-label="Like">
            <FaHeart
              className="text-white hover:text-third cursor-pointer"
              size={20}
            />
          </a>
          <a href="#contact" aria-label="Contact">
            <FaPhone
              className="text-white hover:text-third cursor-pointer"
              size={20}
            />
          </a>
        </div>
        <div className="md:hidden">
          <button
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white hover:text-third"
          >
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </nav>

      {/* Section des détails du produit */}
      <div
        className={`fixed top-20 right-4 w-80 h-[87%] rounded-xl bg-white shadow-lg z-50 p-6 transition-transform duration-300 ${
          showProductDetails ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="bg-white p-6 shadow-lg rounded-lg h-[40%] flex flex-col">
          <div className="flex justify-between">
            <h2 className="text-lg font-bold mb-4">Détails du produit</h2>
            <span
              className="cursor-pointer"
              onClick={() => setShowProductDetails(false)}
            >
              <X color="red" />
            </span>
          </div>
          <div className="flex items-center space-x-4">
            {/* <img
              src={img20}
              alt="Produit"
              className="w-16 h-16 object-cover rounded-md"
            /> */}
            <div>
              <p className="font-bold">Nom du produit</p>
              <p>Prix : 100 MAD</p>
              <p>Quantité : {quantity}</p>
            </div>
          </div>
          <button
            onClick={handleRemove}
            className="bg-red-500 text-white w-full py-2 rounded mt-5 hover:bg-red-600"
          >
            Supprimer
          </button>
        </div>
      </div>
    </>
  );
};

export default NavbarWithCart;
