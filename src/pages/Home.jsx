// src/pages/Home.js
import React from "react";
import CustomerFeedback from "../components/CustomerFeedback";
import ProductCard from "../components/ProductCard.jsx";

import SoftSilkyHairSection from '../components/SoftSilkyHairSection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <CustomerFeedback />
      <div className="flex justify-evenly">
        <ProductCard
          date="11 July 2022"
          title="Breezy Oil"
          description="Kilhs aenean ut eros et nisl sagittis vestibulum. Nullam ..."
          image="/images/img3.jpg"
        />
        <ProductCard
          image="/images/img4.jpg"
          title="Herbal Shampoo"
          description="Made with a blend of herbs for your hair."
          date="Available since February 2024"
        />
      </div>
      <SoftSilkyHairSection />
      <Footer />
    </>
  );
};

export default Home;
