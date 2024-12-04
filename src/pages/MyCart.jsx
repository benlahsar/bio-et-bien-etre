import React, { useState } from "react";
import DashBoardSideBar from "../components/DashBoardSideBar";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function MyCart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Product 1",
      price: 29.99,
      imageUrl: "https://via.placeholder.com/150",
      quantity: 1,
    },
    {
      id: 2,
      name: "Product 2",
      price: 49.99,
      imageUrl: "https://via.placeholder.com/150",
      quantity: 2,
    },
    {
      id: 3,
      name: "Product 3",
      price: 19.99,
      imageUrl: "https://via.placeholder.com/150",
      quantity: 1,
    },
  ]);

  const handleQuantityChange = (id, amount) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(item.quantity + amount, 1) }
          : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <>
      <Navbar />
      <div className="flex flex-col lg:flex-row min-h-screen bg-gray-50">
        <DashBoardSideBar />
        <main className="w-full lg:w-4/5 p-8 mt-16">
          <h1 className="text-3xl font-bold mb-8 text-gray-800">My Cart</h1>

          {/* Cart Items */}
          <div className="space-y-8">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center bg-white shadow-lg rounded-lg p-6"
              >
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-lg mr-6"
                />
                <div className="flex-1">
                  <h2 className="text-lg font-medium text-gray-800">{item.name}</h2>
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>
                  <div className="flex items-center mt-4 space-x-3">
                    <button
                      onClick={() => handleQuantityChange(item.id, -1)}
                      className="px-3 py-1 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100"
                    >
                      -
                    </button>
                    <span className="text-gray-800">{item.quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(item.id, 1)}
                      className="px-3 py-1 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="text-red-600 hover:text-red-800 ml-4"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="mt-10 bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Order Summary</h2>
            <div className="flex justify-between text-gray-600 mb-2">
              <span>Subtotal</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-600 mb-2">
              <span>Tax (10%)</span>
              <span>${(totalPrice * 0.1).toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-800 font-bold">
              <span>Total</span>
              <span>${(totalPrice * 1.1).toFixed(2)}</span>
            </div>
            <button className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300">
              Proceed to Checkout
            </button>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
