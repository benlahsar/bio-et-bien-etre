import React, { useState, useEffect } from "react";
import { ShoppingCart, Heart, CircleUserRound } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";
import api from "../api/auth";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  // State for dropdowns
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [oilsDropdownOpen, setOilsDropdownOpen] = useState(false);
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  // Toggle user dropdown
  const toggleUserDropdown = () => setUserDropdownOpen(!userDropdownOpen);

  // Toggle oils dropdown
  const toggleOilsDropdown = () => setOilsDropdownOpen(!oilsDropdownOpen);

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

  const logout = () => {
    try {
      const response = api.post("/logout");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  const { cart, removeFromCart } = useCart();

  const getUser = async () => {
    const { data } = await api.get("/api/user");
    setUser(data);
  };

  useEffect(() => {
    if (!user) {
      getUser();
    }
  }, [user, getUser]);

  return (
    <nav className="bg-gradient-to-r from-emerald-400 via-amber-300 to-yellow-200 text-gray-800 p-4 flex justify-between items-center shadow-lg fixed top-0 left-0 right-0 z-[100]">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="https://res.cloudinary.com/du9af99hf/image/upload/v1733744428/assets/images/z744tij7w97c6ss9xoyd.png"
          loading="lazy"
          alt="Mon Logo"
          className="h-12 w-auto rounded-lg shadow-sm"
        />
        <span className="ml-3 text-xl font-semibold text-emerald-800">
          Bio et Bien-être
        </span>
      </div>

      {/* Navigation Links */}
      <ul className="hidden md:flex space-x-8 text-lg font-medium">
        <li>
          <a
            className="relative cursor-pointer hover:text-emerald-700 transition duration-200"
            onClick={() => navigate("/")}
          >
            Home
            <span className="absolute left-0 bottom-0 w-0 h-1 bg-emerald-700 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </li>

        {/* Nos Huiles Dropdown */}
        <li className="relative">
          <button
            onClick={toggleOilsDropdown}
            className="relative hover:text-emerald-700 transition duration-200"
          >
            Nos Huiles
            <span className="absolute left-0 bottom-0 w-0 h-1 bg-emerald-700 transition-all duration-300 group-hover:w-full"></span>
          </button>

          {/* Dropdown Menu for Nos Huiles */}
          {oilsDropdownOpen && (
            <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 z-10">
              <a
                className="block px-4 py-2 text-gray-800 hover:bg-emerald-100"
                onClick={() => navigate("/produits")}
              >
                Huile Naturelles
              </a>
              <a
                className="block px-4 py-2 text-gray-800 hover:bg-emerald-100"
                onClick={() => navigate("/produits")}
              >
                Huile Essentielles
              </a>
              <a
                className="block px-4 py-2 text-gray-800 hover:bg-emerald-100"
                onClick={() => navigate("/produits")}
              >
                Huiles de Cheveux
              </a>
            </div>
          )}
        </li>

        <li>
          <a
            className="relative cursor-pointer hover:text-emerald-700 transition duration-200"
            onClick={() => navigate("/blog")}
          >
            Blog
            <span className="absolute left-0 bottom-0 w-0 h-1 bg-emerald-700 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </li>
        <li>
          <a
            className="relative cursor-pointer hover:text-emerald-700 transition duration-200"
            onClick={() => navigate("/about")}
          >
            About Us
            <span className="absolute left-0 bottom-0 w-0 h-1 bg-emerald-700 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </li>
      </ul>

      {/* Icons */}
      <div className="flex space-x-4 items-center">
        <a
          aria-label="Cart"
          className="hover:text-amber-600 transition duration-200"
          onClick={() => setShowProductDetails(!showProductDetails)}
        >
          <ShoppingCart />
          <span>({cart.length})</span>
        </a>
        {/* <a
          aria-label="Favorites"
          className="hover:text-amber-600 transition duration-200"
        >
          <Heart />
        </a> */}

        {/* User Icon with Dropdown */}
        {user ? (
          <div className="relative">
            <button
              onClick={toggleUserDropdown}
              className="hover:text-amber-600 transition duration-200"
            >
              <CircleUserRound size={24} />
            </button>

            {/* User Dropdown Menu */}
            {userDropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg py-2 z-10">
                <a
                  className="cursor-pointer block px-4 py-2 text-gray-800 hover:bg-emerald-100"
                  onClick={() => navigate("/account")}
                >
                  Profile
                </a>
                <a
                  className="cursor-pointer block px-4 py-2 text-gray-800 hover:bg-emerald-100"
                  onClick={() => logout()}
                >
                  Logout
                </a>
              </div>
            )}
          </div>
        ) : (
          <div className="relative">
            <button
              onClick={toggleUserDropdown}
              className="hover:text-amber-600 transition duration-200"
            >
              <CircleUserRound size={24} />
            </button>

            {/* User Dropdown Menu */}
            {userDropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg py-2 z-10">
                <a
                  className="block px-4 py-2 text-gray-800 hover:bg-emerald-100"
                  onClick={() => navigate("/login")}
                >
                  Login
                </a>
                <a
                  className="block px-4 py-2 text-gray-800 hover:bg-emerald-100"
                  onClick={() => navigate("/register")}
                >
                  Register
                </a>
              </div>
            )}
          </div>
        )}
      </div>
      <div
        className={`fixed top-24 right-0 w-80 h-[87%] rounded-xl bg-white shadow-lg shadow-gray-400 z-50 p-6 transition-transform duration-300 ${
          showProductDetails ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="bg-white p-6 shadow-lg rounded-lg h-full flex flex-col overflow-y-scroll">
        {cart.map((item) => (
          <div key={item.id} className="my-4">
            <img  src={item.image} alt={item.name} />
            <div>
              <p className="font-bold">{item.name}</p>
              <p className="text-gray-500 ">Price: {item.price} DH</p>
              <p className="text-gray-500 ">Quantity: {item.quantity}</p>
              <button className="bg-red-500 text-white w-full py-2 rounded mt-5 hover:bg-red-600" onClick={() => removeFromCart(item.id)}>Remove</button>
              <hr />
            </div>
          </div>
        ))}
        {cart.length === 0 && <p>Your cart is empty.</p>}
          {/* <div className="flex justify-between">
            <h2 className="text-lg font-bold mb-4">Détails du produit</h2>
            <span
              className="cursor-pointer"
              onClick={() => setShowProductDetails(false)}
            >
              <X color="red" />
            </span>
          </div>
          <div className="flex items-center space-x-4">
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
          </button> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
