// src/Footer.jsx
import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="bg-primary text-secondary py-8">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                
                {/* Contact Section */}
                <div>
                    <h2 className="font-semibold text-lg">CONTACT</h2>
                    <p className="mt-4 text-secondary">No: 58 A, East Madison Street, Baltimore, MD, USA 4508</p>
                    <p className="text-secondary">0000 - 123 - 456789</p>
                    <p className="text-secondary">info@example.com</p>
                </div>

                {/* Center Text Section */}
                <div className="text-center">
                    <p className="mt-4 text-secondary">
                        Ehyes dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
                    </p>
                    <div className="flex justify-center space-x-4 mt-4">
                        <a href="#" className="text-emerald"><FaTwitter size={20} /></a>
                        <a href="#" className="text-emerald"><FaFacebook size={20} /></a>
                        <a href="#" className="text-emerald"><FaInstagram size={20} /></a>
                        <a href="#" className="text-emerald"><FaYoutube size={20} /></a>
                    </div>
                    <form className="mt-4 flex justify-center">
                        <input
                            type="email"
                            placeholder="Your Email Here"
                            className="bg-transparent border-b border-secondary text-secondary p-2 w-2/3 placeholder-secondary"
                        />
                        <button className="bg-transparent text-secondary font-semibold ml-2">Send</button>
                    </form>
                    <p className="mt-4 text-yellow">SIGN UP: Like & Subscribe our Product to Get Latest Updates</p>
                </div>

                {/* Support Section */}
                <div className="text-right">
                    <h2 className="font-semibold text-lg text-secondary">SUPPORT</h2>
                    <ul className="mt-4 space-y-2">
                        <li><a href="#" className="hover:underline text-secondary">Gallery</a></li>
                        <li><a href="#" className="hover:underline text-secondary">Settings</a></li>
                        <li><a href="#" className="hover:underline text-secondary">Portfolio</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
