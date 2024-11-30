import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="bg-gradient-to-r from-emerald-200 via-amber-100 to-yellow-50 text-gray-800 py-12 mt-16">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                
                {/* Contact Section */}
                <div className="space-y-4">
                    <h2 className="font-semibold text-xl text-emerald-800">CONTACT</h2>
                    <p className="text-secondary">No: 58 A, East Madison Street, Baltimore, MD, USA 4508</p>
                    <p className="text-secondary">0000 - 123 - 456789</p>
                    <p className="text-secondary">info@example.com</p>
                </div>

                {/* Center Text Section */}
                <div className="text-center space-y-4">
                    <p className="text-secondary max-w-sm mx-auto">
                        Our products are crafted with care to provide you with the best natural beauty experience. Discover our luxurious essential oils and beauty solutions.
                    </p>
                    <div className="flex justify-center space-x-6">
                        <a href="#" className="text-emerald-700 hover:text-amber-600 transition duration-200">
                            <FaTwitter size={24} />
                        </a>
                        <a href="#" className="text-emerald-700 hover:text-amber-600 transition duration-200">
                            <FaFacebook size={24} />
                        </a>
                        <a href="#" className="text-emerald-700 hover:text-amber-600 transition duration-200">
                            <FaInstagram size={24} />
                        </a>
                        <a href="#" className="text-emerald-700 hover:text-amber-600 transition duration-200">
                            <FaYoutube size={24} />
                        </a>
                    </div>
                    <form className="flex justify-center space-x-2 mt-4">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="bg-transparent border-b-2 border-secondary text-secondary p-2 w-2/3 placeholder-secondary focus:outline-none"
                        />
                        <button className="bg-emerald-700 text-white px-4 py-2 rounded-md hover:bg-emerald-800 transition duration-200">
                            Subscribe
                        </button>
                    </form>
                    <p className="mt-4 text-amber-600 font-semibold">
                        SIGN UP: Like & Subscribe to Get the Latest Updates on New Products & Offers!
                    </p>
                </div>

                {/* Support Section */}
                <div className="text-right space-y-4">
                    <h2 className="font-semibold text-xl text-emerald-800">SUPPORT</h2>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:underline text-secondary">Gallery</a></li>
                        <li><a href="#" className="hover:underline text-secondary">Settings</a></li>
                        <li><a href="#" className="hover:underline text-secondary">Portfolio</a></li>
                    </ul>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="text-center py-4 mt-8 border-t border-secondary">
                <p className="text-secondary text-sm">
                    &copy; 2024 Bio et Bien-être. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
