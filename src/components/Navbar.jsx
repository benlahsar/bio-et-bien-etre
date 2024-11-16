import React from 'react';
import { FaSearch, FaShoppingCart, FaHeart, FaPhone  } from 'react-icons/fa'
// import logo from '../assets/logo.jpg'; 


const Navbar = () => {
    return (
        <nav className='bg-primary text-secondary p-4 flex justify-between items-center z-50 fixed top-0 left-0 right-0'>
             {/* <img src={logo} alt="Mon Logo" className="h-10" /> */}
            <ul className='flex space-x-6 *:font-["Raleway"] *:text-2xl'>
                <li><a className='hover:text-third' href="#home">Home</a></li>
                <li><a className='hover:text-third' href="#about">Nos Huiles</a></li>
                <li><a className='hover:text-third' href="#blog">Blog</a></li>
                <li><a className='hover:text-third' href="#contact">Contact</a></li>
            </ul>
            <div className='flex space-x-4 items-center'>
                <a href="#search" aria-label="Chercher">
                    <FaSearch className="text-secondary hover:text-third cursor-pointer" size={20} />
                </a>
                <a href="#cart" aria-label="Acheter">
                    <FaShoppingCart className="text-secondary hover:text-third cursor-pointer" size={20} />
                </a>
                <a href="#like" aria-label="Like">
                    <FaHeart className="text-secondary hover:text-third cursor-pointer" size={20} />
                </a>
                <a href="#contact" aria-label="Contact">
                    <FaPhone  className="text-secondary hover:text-third cursor-pointer" size={20} />
                </a>
            </div>
            </nav>
    );
};
export default Navbar ;