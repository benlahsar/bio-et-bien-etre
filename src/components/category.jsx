import React from 'react';

const categories = [
  {
    name: 'Huiles Bio',
    img: 'src/assets/images/pic/bio.jpg', // Remplacez par le bon chemin des images
    link: '/huile-bio', // Utilisez un chemin valide
  },
  {
    name: 'Huiles Cosmétique',
    img: 'src/assets/images/pic/cosmetique.jpg', // Remplacez par le bon chemin des images
    link: '/huile-cosmetique', // Utilisez un chemin valide
  },
  {
    name: ' Huiles Cheveux',
    img: 'src/assets/images/pic/hair.jpg', // Remplacez par le bon chemin des images
    link: '/huiles-cheveux', // Utilisez un chemin valide
  },
];

const CategoryCard = ({ name, img, link }) => (
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
    <a
      href={link}
      className="inline-block mt-4 px-4 py-2 border border-emerald rounded text-emerald hover:bg-yellow hover:text-secondary transition-all"
    >
      Découvrir nos produits
    </a>
  </div>
);

const Categorie = () => {
  return (
    <>
      <section className="py-12 bg-gray-500">
        <h2 className="text-center text-3xl font-bold text-primary mb-12">
          NOS CATÉGORIES PRODUITS
        </h2>
        <div className="flex flex-wrap justify-center gap-12">
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              name={category.name}
              img={category.img}
              link={category.link}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Categorie;
