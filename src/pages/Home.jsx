import Categorie from "../components/category";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Offers from "../components/Offerts";
import Section_1 from "../components/Section_1";
import Section_2 from "../components/Section_2";
import WaterSection from "./TestimonialSection";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [headerImageIndex, setHeaderImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeaderImageIndex((prevIndex) => (prevIndex + 1) % 2); // Cycle through 3 images
    }, 5000); // Change every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const headerImages = [
    "https://res.cloudinary.com/du9af99hf/image/upload/v1733744490/assets/onwpvxhqw23uglinl114.jpg",
    "https://res.cloudinary.com/du9af99hf/image/upload/v1733744382/assets/uwmpmvqiwpgbeuhhvqta.jpg",
  ];

  return (
    <>
      <Navbar />
      <header className="relative h-[30rem] mt-20 flex items-center justify-center bg-green-900 text-yellow-400 text-center">
        <div className="absolute inset-0 w-full h-full">
          {headerImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt="Company value"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out ${
                index === headerImageIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
        <div className="relative z-10 p-6">
          <h1 className="text-5xl font-bold">About BIO ET BIEN ETRE</h1>
          <p className="mt-2 text-xl">Innovating for a better tomorrow</p>
        </div>
      </header>

      <Section_1 />
      <Section_2 />
      <Categorie />
      <WaterSection />
      <Offers />
      <Footer />
    </>
  );
}
