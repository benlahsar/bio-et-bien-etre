import React, { useState } from "react";
import { Button } from "@/components/ui/button"
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

  // Function to handle quantity changes
  const handleQuantityChange = (id, amount) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(item.quantity + amount, 1) }
          : item
      )
    );
  };

  // Function to remove an item from the cart
  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <>
    <Navbar />
    <div className="flex">
      <DashBoardSideBar />
        <div className="w-full p-8 h-screen mt-16">
          <h1 className="text-3xl font-bold mb-6">My Cart</h1>
          {/* Cart Items */}
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center bg-white shadow rounded-lg p-4"
              >
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded mr-4"
                />
                <div className="flex-1">
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-gray-500">${item.price.toFixed(2)}</p>
                  <div className="flex items-center mt-2">
                    <button
                      onClick={() => handleQuantityChange(item.id, -1)}
                      className="bg-gray-200 text-gray-700 px-2 rounded hover:bg-gray-300"
                    >
                      -
                    </button>
                    <span className="mx-3">{item.quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(item.id, 1)}
                      className="bg-gray-200 text-gray-700 px-2 rounded hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="ml-4 text-red-500 hover:underline"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          {/* Cart Summary */}
          <div className="mt-8 p-4 bg-white shadow rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="flex justify-between text-gray-700 mb-2">
              <span>Subtotal</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-700 mb-2">
              <span>Tax (10%)</span>
              <span>${(totalPrice * 0.1).toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-700 font-bold">
              <span>Total</span>
              <span>${(totalPrice * 1.1).toFixed(2)}</span>
            </div>
            <button className="mt-6 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
              Proceed to Checkout
            </button>
          </div>
          <Button className="bg-third text-white py-2 rounded hover:bg-blue-600">Click me</Button>
        </div>
    </div>
      <Footer />
    </>
  );
}
