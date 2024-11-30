import React, { useState } from "react";
import { ShoppingCart, Heart, CircleUserRound, ArrowDown  } from 'lucide-react';
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  // State for dropdowns
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [oilsDropdownOpen, setOilsDropdownOpen] = useState(false);

  const navigate = useNavigate();

  // Toggle user dropdown
  const toggleUserDropdown = () => setUserDropdownOpen(!userDropdownOpen);

  // Toggle oils dropdown
  const toggleOilsDropdown = () => setOilsDropdownOpen(!oilsDropdownOpen);

  return (
    <nav className="bg-gradient-to-r from-emerald-300 via-amber-200 to-yellow-100 text-gray-800 p-4 flex justify-between items-center shadow-lg fixed top-0 left-0 right-0 z-50">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="src/assets/images/logo.png"
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
            href="#home"
            className="relative hover:text-emerald-700 transition duration-200"
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
                href="#huile-naturelles"
                className="block px-4 py-2 text-gray-800 hover:bg-emerald-100"
              >
                Huile Naturelles
              </a>
              <a
                href="#huile-essentielles"
                className="block px-4 py-2 text-gray-800 hover:bg-emerald-100"
              >
                Huile Essentielles
              </a>
              <a
                href="#huiles-de-cheveux"
                className="block px-4 py-2 text-gray-800 hover:bg-emerald-100"
              >
                Huiles de Cheveux
              </a>
            </div>
          )}
        </li>

        <li>
          <a
            href="#blog"
            className="relative hover:text-emerald-700 transition duration-200"
          >
            Blog
            <span className="absolute left-0 bottom-0 w-0 h-1 bg-emerald-700 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="relative hover:text-emerald-700 transition duration-200"
          >
            Contact
            <span className="absolute left-0 bottom-0 w-0 h-1 bg-emerald-700 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </li>
      </ul>

      {/* Icons */}
      <div className="flex space-x-4 items-center">
        <a
          href="#cart"
          aria-label="Cart"
          className="hover:text-amber-600 transition duration-200"
        >
          <ShoppingCart />
        </a>
        <a
          href="#like"
          aria-label="Favorites"
          className="hover:text-amber-600 transition duration-200"
        >
          <Heart />
        </a>

        {/* User Icon with Dropdown */}
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
      </div>
    </nav>
  );
};

export default Navbar;
