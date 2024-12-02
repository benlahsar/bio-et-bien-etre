import React, { useState, useEffect } from 'react';
import { FaSearch, FaShoppingCart, FaHeart, FaPhone, FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo.jpg';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`p-4 flex justify-between items-center z-50 fixed top-0 left-0 right-0 transition-all duration-300 ${
                isScrolled ? 'bg-primary bg-opacity-90 shadow-md' : 'bg-primary'
            }`}
        >
           
            <img src={logo} alt="Mon Logo" className="h-10" />

            <ul className="hidden md:flex space-x-6 font-['Raleway'] text-xl">
                <li>
                    <a className="hover:text-white" href="#home">
                        Home
                    </a>
                </li>
                <li>
                    <a className="hover:text-white" href="#about">
                        Nos Huiles
                    </a>
                </li>
                <li>
                    <a className="hover:text-white" href="#blog">
                        Blog
                    </a>
                </li>
                <li>
                    <a className="hover:text-white" href="#contact">
                        Contact
                    </a>
                </li>
                <li>
                    <a className="hover:text-white" href="#contact">
                        About Us
                    </a>
                </li>
            </ul>

            <div className="hidden md:flex space-x-4 items-center">
                <a href="#cart" aria-label="Acheter">
                    <FaShoppingCart className="text-black hover:text-third cursor-pointer" size={20} />
                </a>
                <a href="#like" aria-label="Like">
                    <FaHeart className="text-black hover:text-third cursor-pointer" size={20} />
                </a>
                <a href="#contact" aria-label="Contact">
                    <FaPhone className="text-black hover:text-third cursor-pointer" size={20} />
                </a>
            </div>

            <div className="md:hidden">
                <button
                    aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="text-black hover:text-third z-50"
                >
                    {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>

            <div
                className={`fixed top-0 left-0 w-full h-screen bg-primary bg-opacity-95 flex flex-col items-center justify-center space-y-6 text-xl font-['Raleway'] transform transition-transform duration-300 ${
                    menuOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                <button
                    aria-label="Fermer le menu"
                    onClick={() => setMenuOpen(false)}
                    className="absolute top-6 right-6 text-black hover:text-third"
                >
                    <FaTimes size={24} />
                </button>

                <a href="#home" className="hover:text-third" onClick={() => setMenuOpen(false)}>
                    Home
                </a>
                <a href="#about" className="hover:text-third" onClick={() => setMenuOpen(false)}>
                    Nos Huiles
                </a>
                <a href="#blog" className="hover:text-third" onClick={() => setMenuOpen(false)}>
                    Blog
                </a>
                <a href="#contact" className="hover:text-third" onClick={() => setMenuOpen(false)}>
                    Contact
                </a>
                <a href="#contact" className="hover:text-third" onClick={() => setMenuOpen(false)}>
                    About Us
                </a>
                <div className="flex space-x-4">
                    <a href="#cart" aria-label="Acheter">
                        <FaShoppingCart className="text-black hover:text-third cursor-pointer" size={20} />
                    </a>
                    <a href="#like" aria-label="Like">
                        <FaHeart className="text-black hover:text-third cursor-pointer" size={20} />
                    </a>
                    <a href="#contact" aria-label="Contact">
                        <FaPhone className="text-black hover:text-third cursor-pointer" size={20} />
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
