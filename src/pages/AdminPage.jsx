// Import necessary dependencies
import React, { useState } from "react";

const Admin = () => {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({ name: "", description: "", image: "", price: "" });
  const [editingIndex, setEditingIndex] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingIndex !== null) {
      // Update product
      const updatedProducts = products.map((product, index) =>
        index === editingIndex ? formData : product
      );
      setProducts(updatedProducts);
      setEditingIndex(null);
    } else {
      // Add new product
      setProducts([...products, formData]);
    }
    setFormData({ name: "", description: "", image: "", price: "" });
  };

  const handleEdit = (index) => {
    setFormData(products[index]);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts);
  };

  return (
    <div className="Admin">
      <h1>Product Management</h1>

      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleInputChange}
          required
        ></textarea>
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleInputChange}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleInputChange}
          required
        />
        <button type="submit">{editingIndex !== null ? "Update" : "Add"} Product</button>
      </form>

      <div className="product-list">
        {products.map((product, index) => (
          <div key={index} className="product-item">
            <img src={product.image} alt={product.name} className="product-image" />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admin;
