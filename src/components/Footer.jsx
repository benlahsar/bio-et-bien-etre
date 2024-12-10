import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="bg-gradient-to-r from-emerald-200 via-amber-100 to-yellow-50 text-gray-800 py-8 sm:py-12">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                
                {/* Contact Section */}
                <div className="space-y-4 text-center md:text-left">
                    <h2 className="font-semibold text-xl text-emerald-800">CONTACT</h2>
                    <p className="text-green-900">No: 58 A, East Madison Street, Baltimore, MD, USA 4508</p>
                    <p className="text-green-900">0000 - 123 - 456789</p>
                    <p className="text-green-900">info@example.com</p>
                </div>

                {/* Center Text Section */}
                <div className="text-center space-y-4">
                    <p className="text-green-900 max-w-sm mx-auto">
                        Our products are crafted with care to provide you with the best natural beauty experience. Discover our luxurious essential oils and beauty solutions.
                    </p>
                    <div className="flex justify-center space-x-6">
                        <a className="text-emerald-700 hover:text-amber-600 transition duration-200">
                            <FaTwitter size={24} />
                        </a>
                        <a className="text-emerald-700 hover:text-amber-600 transition duration-200">
                            <FaFacebook size={24} />
                        </a>
                        <a className="text-emerald-700 hover:text-amber-600 transition duration-200">
                            <FaInstagram size={24} />
                        </a>
                        <a className="text-emerald-700 hover:text-amber-600 transition duration-200">
                            <FaYoutube size={24} />
                        </a>
                    </div>
                    <form className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-2 mt-4">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="bg-transparent border-b-2 border-green-900 text-green-900 p-2 w-full sm:w-2/3 placeholder-green-900 focus:outline-none"
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
                <div className="text-center md:text-right space-y-4">
                    <h2 className="font-semibold text-xl text-emerald-800">SUPPORT</h2>
                    <ul className="space-y-2">
                        <li><a className="hover:underline text-green-900">Gallery</a></li>
                        <li><a className="hover:underline text-green-900">Settings</a></li>
                        <li><a className="hover:underline text-green-900">Portfolio</a></li>
                    </ul>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="text-center py-4 mt-8 border-t border-emerald-700">
                <p className="text-green-900 text-sm">
                    &copy; 2024 Bio et Bien-être. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
