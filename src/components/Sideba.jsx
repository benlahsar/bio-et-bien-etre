import { XIcon } from "lucide-react";
import React from "react";

const Sidebar = ({ isVisible, toggleSidebar }) => {
  return (
    <aside
      className={`fixed overflow-y-auto md:relative top-0 left-0 h-full md:h-auto md:w-1/4 bg-card p-6 border border-border shadow-lg mt-20 z-50 transform transition-transform ${
        isVisible ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0`}
    >
      <button
        onClick={toggleSidebar}
        className="absolute top-4 right-4 md:hidden bg-primary text-white p-2 rounded"
      >
        <XIcon />
      </button>
      <h2 className="text-2xl font-bold mb-6 text-primary">Category</h2>
      <ul className="mb-8">
        <li>
          <button
            onClick={() => navigate("/huiles_cosmetique")}
            className="block py-2 hover:text-yellow transition-colors duration-200"
          >
            Huile Cosmétique
          </button>
        </li>
        <li>
          <button
            onClick={() => navigate("/huiles_bio")}
            className="block py-2 hover:text-yellow transition-colors duration-200"
          >
            Huile Bio
          </button>
        </li>
        <li>
          <button
            onClick={() => navigate("/huiles_cheveux")}
            className="block py-2 hover:text-yellow transition-colors duration-200"
          >
            Huile cheveux
          </button>
        </li>
      </ul>

      {/* Best Sellers Section */}
      <h2 className="text-2xl font-bold mb-6 text-primary">Best Sellers</h2>
      <div className="flex flex-col items-center mb-8 bg-secondary p-4 rounded-lg shadow-sm">
        <img
          src="https://res.cloudinary.com/du9af99hf/image/upload/v1733744474/assets/kuvydeypshgpiigvcfkt.jpg"
          alt="Mare Perfume"
          className="w-24 h-24 rounded-md mb-3"
        />
        <p className="font-semibold text-primary text-lg">Mare Perfume</p>
        <p className="text-muted text-sm">DH. 126.00</p>
      </div>

      {/* Availability Section */}
      <h2 className="text-2xl font-bold mb-6 text-primary">Availability</h2>
      <div className="mb-6">
        <label className="flex items-center mb-3">
          <input
            type="radio"
            name="availability"
            className="w-4 h-4 text-emerald border-border focus:ring focus:ring-emerald"
          />
          <span className="ml-2 text-muted-foreground">In stock</span>
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            name="availability"
            className="w-4 h-4 text-destructive border-border focus:ring focus:ring-destructive"
          />
          <span className="ml-2 text-muted-foreground">Out of stock</span>
        </label>
      </div>

      {/* Price Section */}
      <h2 className="text-2xl font-bold mb-6 text-primary">Price</h2>
      <div>
        <p className="text-sm text-yellow mb-4">
          The highest price is DH. 150.00
        </p>
        <div className="flex items-center gap-4">
          <input
            type="number"
            placeholder="From DH"
            className="border border-input rounded-md px-3 py-2 text-sm w-full focus:ring focus:ring-muted"
          />
          <input
            type="number"
            placeholder="To DH"
            className="border border-input rounded-md px-3 py-2 text-sm w-full focus:ring focus:ring-muted"
          />
        </div>
      </div>
      <button className="mt-6 w-full bg-primary text-primary-foreground py-2 rounded-md hover:bg-yellow">
        Clear All
      </button>
      {/* Other sidebar content */}
    </aside>
  );
};

export default Sidebar;
