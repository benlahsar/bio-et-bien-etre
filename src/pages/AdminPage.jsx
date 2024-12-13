import React, { useState, useEffect } from "react";
import api from "../api/auth";

const Admin = () => {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image: "",
    price: "",
    quantity: "",
  });
  const [editingIndex, setEditingIndex] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch all products on component mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get("/api/products");
        setProducts(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editingIndex !== null) {
        // Update product
        const productId = products[editingIndex].id;
        const response = await api.put(`/api/products/${productId}`, formData);
        const updatedProducts = products.map((product, index) =>
          index === editingIndex ? response.data.product : product
        );
        setProducts(updatedProducts);
        setEditingIndex(null);
      } else {
        // Add new product
        const response = await api.post("/api/products", formData);
        setProducts([...products, response.data.product]);
      }

      setFormData({
        name: "",
        description: "",
        image: "",
        price: "",
        quantity: "",
      });
    } catch (error) {
      console.error("Error submitting product:", error);
    }
  };

  const handleEdit = (index) => {
    setFormData(products[index]);
    setEditingIndex(index);
  };

  const handleDelete = async (index) => {
    try {
      const productId = products[index].id;
      await api.delete(`/api/products/${productId}`);
      const updatedProducts = products.filter((_, i) => i !== index);
      setProducts(updatedProducts);
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div className="p-8 bg-gradient-to-r from-gray-100 to-gray-300 min-h-screen">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
        Gestion Produit
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-lg max-w-xl mx-auto mb-10"
      >
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Nom Produit
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enterer Nom Produit"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Description
          </label>
          <textarea
            name="description"
            placeholder="Enter product description"
            value={formData.description}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Image URL
          </label>
          <input
            type="text"
            name="image"
            placeholder="Enterer image URL"
            value={formData.image}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Prix
          </label>
          <input
            type="number"
            name="price"
            placeholder="Enterer prix"
            value={formData.price}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Quantite
          </label>
          <input
            type="number"
            name="quantity"
            placeholder="Enterer quantite"
            value={formData.quantity}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
        >
          {editingIndex !== null ? "Update Product" : "Add Product"}
        </button>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          products &&
          products.map((product, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center transition-transform transform hover:scale-105"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-40 h-40 object-cover rounded-lg mb-4"
              />
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {product.name}
              </h2>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <p className="text-lg font-semibold text-green-600 mb-6">
                {product.price} DH
              </p>
              <p className="text-lg font-semibold text-green-600 mb-6">
                {product.quantity} unités
              </p>
              <div className="flex space-x-4">
                <button
                  onClick={() => handleEdit(index)}
                  className="bg-yellow-400 text-white py-2 px-4 rounded-lg font-medium hover:bg-yellow-500 transition-colors"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  className="bg-red-500 text-white py-2 px-4 rounded-lg font-medium hover:bg-red-600 transition-colors"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Admin;
