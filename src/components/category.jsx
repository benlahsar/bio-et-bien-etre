import React from "react";
import { useNavigate } from "react-router-dom";

const categories = [
  {
    name: "Huiles Bio",
    img: "https://res.cloudinary.com/du9af99hf/image/upload/v1733744411/assets/images/pic/mihvtmysdulcvy21rfpa.jpg", // Remplacez par le bon chemin des images
    link: "/huile-bio", // Utilisez un chemin valide
  },
  {
    name: "Huiles Cosmétique",
    img: "https://res.cloudinary.com/du9af99hf/image/upload/v1733744420/assets/images/pic/funpdrysh9zij5ujcfkh.jpg", // Remplacez par le bon chemin des images
    link: "/huile-cosmetique", // Utilisez un chemin valide
  },
  {
    name: " Huiles Cheveux",
    img: "https://res.cloudinary.com/du9af99hf/image/upload/v1733744426/assets/images/pic/ecf5hyhgjmjkkl2gfehu.jpg", // Remplacez par le bon chemin des images
    link: "/huiles-cheveux", // Utilisez un chemin valide
  },
];

const CategoryCard = ({ name, img }) => {
  const navigate = useNavigate();
  return (
    <div className="text-center p-4">
      <div className="relative">
        <img
          src={img}
          alt={name}
          className="w-60 h-60 object-cover rounded-full mx-auto border-4 border-primary"
        />
        <div className="absolute inset-0 bg-secondary opacity-20 rounded-full"></div>
      </div>
      <p className="font-semibold text-lg mt-4 text-primary">{name}</p>
      <button
        onClick={() => navigate("/produits")}
        className="inline-block mt-4 px-4 py-2 border border-emerald rounded text-emerald hover:bg-yellow hover:text-secondary transition-all"
      >
        Découvrir nos produits
      </button>
    </div>
  );
};

const Categorie = () => {
  return (
    <>
      <section className="py-12 bg-gray-500">
        <h2 className="text-center text-3xl font-bold text-primary mb-12">
          NOS CATÉGORIES PRODUITS
        </h2>
        <div className="flex flex-wrap justify-center gap-12">
          {categories.map((category, index) => (
            <CategoryCard key={index} name={category.name} img={category.img} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Categorie;
