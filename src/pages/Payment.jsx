import React, { useState } from "react";
import {
  CreditCard,
  User,
  Lock,
  ShoppingCart,
  ChevronRight,
} from "lucide-react";

const PaymentPage = () => {
  const [paymentMethod, setPaymentMethod] = useState("credit");
  const [formData, setFormData] = useState({
    fullName: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
    email: "",
    address: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form data
    console.log("Processing payment", formData);
    // Implement payment processing logic here
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl overflow-hidden">
        <div className="bg-blue-600 text-white p-6 flex items-center">
          <ShoppingCart className="mr-3" />
          <h2 className="text-xl font-bold">Complete Your Purchase</h2>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {/* Payment Method Selection */}
          <div className="flex justify-center space-x-4 mb-6">
            <button
              type="button"
              className={`flex items-center px-4 py-2 rounded-lg ${
                paymentMethod === "credit"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => setPaymentMethod("credit")}
            >
              <CreditCard className="mr-2" size={20} />
              Credit Card
            </button>
            <button
              type="button"
              className={`flex items-center px-4 py-2 rounded-lg ${
                paymentMethod === "paypal"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => setPaymentMethod("paypal")}
            >
              PayPal
            </button>
          </div>

          {/* Personal Information */}
          <div className="space-y-4">
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="relative">
              <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                name="cardNumber"
                placeholder="Card Number"
                value={formData.cardNumber}
                onChange={handleInputChange}
                className="w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="flex space-x-4">
              <div className="relative flex-1">
                <input
                  type="text"
                  name="expiry"
                  placeholder="MM/YY"
                  value={formData.expiry}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="relative flex-1">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  name="cvv"
                  placeholder="CVV"
                  value={formData.cvv}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            <div className="relative">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="relative">
              <input
                type="text"
                name="address"
                placeholder="Billing Address"
                value={formData.address}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-gray-100 p-4 rounded-lg">
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>199.99 DH</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Tax</span>
              <span>15.99 DH</span>
            </div>
            <div className="flex justify-between font-bold text-lg border-t pt-2">
              <span>Total</span>
              <span>215.98 DH</span>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300 flex items-center justify-center"
          >
            Complete Payment
            <ChevronRight className="ml-2" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentPage;
