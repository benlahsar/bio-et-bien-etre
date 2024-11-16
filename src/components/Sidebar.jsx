import React from 'react';
import avocado from'../assets/img/avocado.webp';
import { useNavigate } from 'react-router-dom';

const Sidebar = ({ minPrice, maxPrice, setMinPrice, setMaxPrice }) => {
  const handleSearch = () => {
  };

  const navigate = useNavigate()

  return (
    <aside className="w-1/4 p-4 bg-primary text-secondary">
      <h2 className="text-xl font-semibold mb-4 ">Catégorie</h2>
      <ul className="mb-8">
        <li>
          <button onClick={() => navigate("/huiles_naturelles")} className="block py-2 hover:text-yellow transition-colors duration-200">Huile Naturelle</button>
        </li>
        <li>
        <button onClick={() => navigate("/huiles_bio")} className="block py-2 hover:text-yellow transition-colors duration-200">Huile Bio</button>
        </li>
      </ul>
      <h2 className="text-xl font-semibold mb-4">Meilleures Ventes</h2>
      <div className="mb-8 text-center bg-emerald p-2 rounded-lg shadow-lg">
        <img src={avocado} alt="Huile d'Avocat" className="w-full mb-2 rounded" />
        <p className="text-secondary">Huile d'Avocat</p>
        <p className="text-yellow font-semibold">Rs. 180.00</p>
      </div>
     
      

      

      <h2 className="text-xl font-semibold mb-4">Prix</h2>
      <div className="flex items-center mb-4 space-x-2">
        <label>
          De
          <input
            type="number"
            className="ml-2 w-16 p-1 rounded bg-secondary text-primary border border-gray-300 focus:outline-none focus:border-yellow"
            placeholder="dh"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
        </label>
        <label>
          À
          <input
            type="number"
            className="ml-2 w-16 p-1 rounded bg-secondary text-primary border border-gray-300 focus:outline-none focus:border-yellow"
            placeholder="dh"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </label>
      </div>
      <button
        onClick={handleSearch}
        className="w-full p-2 bg-emerald text-secondary rounded hover:bg-yellow transition-colors duration-200 font-semibold"
      >
        Chercher
      </button>
    </aside>
  );
};

export default Sidebar;































// import React, { useState } from 'react';
// import avocado from '../assets/img/avocado.png';

// const Sidebar = () => {
//   const [minPrice, setMinPrice] = useState('');
//   const [maxPrice, setMaxPrice] = useState('');

//   const products = [
//     {name: "hair oil", price: 120},
//     {name: "hair oil", price: 130},
//     {name: "hair oil", price: 140},
//     {name: "hair oil", price: 150},
//   ]

//   const handleSearch = () => {
//     console.log("Recherche de produits avec le prix de", minPrice, "à", maxPrice);
//     alert(`Recherche de produits entre Rs. ${minPrice} et Rs. ${maxPrice}`);
//   };

//   return (
//     <aside className="w-1/4 p-4 bg-primary text-secondary">
//       <h2 className="text-xl font-semibold mb-4">Catégorie</h2>
//       <ul className="mb-8">
//         <li>
//           <a href="#" className="block py-2 hover:text-yellow transition-colors duration-200">Huile Naturelle</a>
//         </li>
//         <li>
//           <a href="#" className="block py-2 hover:text-yellow transition-colors duration-200">Huile Bio</a>
//         </li>
//         <li>
//           <a href="#" className="block py-2 hover:text-yellow transition-colors duration-200">Huile Synthétique</a>
//         </li>
//       </ul>

      // <h2 className="text-xl font-semibold mb-4">Meilleures Ventes</h2>
      // <div className="mb-8 text-center bg-emerald p-2 rounded-lg shadow-lg">
      //   <img src={avocado} alt="Huile d'Avocat" className="w-full mb-2 rounded" />
      //   <p className="text-secondary">Huile d'Avocat</p>
      //   <p className="text-yellow font-semibold">Rs. 180.00</p>
      // </div>

//       <h2 className="text-xl font-semibold mb-4">Disponibilité</h2>
//       <label className="block mb-2">
//         <input type="radio" name="availability" className="mr-2 accent-emerald" /> En stock
//       </label>
//       <label className="block mb-8">
//         <input type="radio" name="availability" className="mr-2 accent-emerald" /> En rupture de stock
//       </label>

//       <h2 className="text-xl font-semibold mb-4">Prix</h2>
//       <div className="flex items-center mb-4 space-x-2">
//         <label>
//           De
//           <input
//             type="number"
//             className="ml-2 w-16 p-1 rounded bg-secondary text-primary border border-gray-300 focus:outline-none focus:border-yellow"
//             placeholder="dh"
//             value={minPrice}
//             onChange={(e) => setMinPrice(e.target.value)}<
//           />
//         </label>
//         <label>
//           À
//           <input
//             type="number"
//             className="ml-2 w-16 p-1 rounded bg-secondary text-primary border border-gray-300 focus:outline-none focus:border-yellow"
//             placeholder="dh"
//             value={maxPrice}
//             onChange={(e) => setMaxPrice(e.target.value)}
//           />
//         </label>
//       </div>
//       <button
//         onClick={handleSearch}
//         className="w-full p-2 bg-emerald text-secondary rounded hover:bg-yellow transition-colors duration-200 font-semibold"
//       >
//         Chercher
//       </button>
//     </aside>
//   );
// };

// export default Sidebar;
