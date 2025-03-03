"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Payment() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
  });

  const makePayment = () => {
    router.push("/store/track-order");
  };

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "number" ? value.replace(/\D/, "") : value, // Prevent non-numeric input
    }));
  };

  const handleReset = () => {
    setFormData({
      cardNumber: "",
      cardName: "",
      expiryDate: "",
      cvv: "",
    });
  };

  return (
    <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-semibold text-center text-gray-700 mb-4">
        Payment Details
      </h2>
      <form className="space-y-4">
        {/* Card Number */}
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-1">
            Card Number
          </label>
          <input
            type="text" // Changed from type="number" to type="text" to prevent React issues
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            placeholder="Enter Card Number"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Name on Card */}
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-1">
            Name on Card
          </label>
          <input
            type="text"
            name="cardName"
            value={formData.cardName}
            onChange={handleChange}
            placeholder="Enter Name on Card"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Card Expiry */}
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-1">
            Card Expiry
          </label>
          <input
            type="date"
            name="expiryDate"
            value={formData.expiryDate}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* CVV/PIN */}
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-1">
            CVV / PIN
          </label>
          <input
            type="password"
            name="cvv"
            value={formData.cvv}
            onChange={handleChange}
            placeholder="***"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Buttons Section */}
        <div className="flex justify-between items-center mt-4">
          <button
            type="button"
            onClick={makePayment}
            className="w-2/5 bg-purple-600 text-white font-semibold py-2 rounded-lg hover:bg-purple-700 transition duration-300"
          >
            Make Payment
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="text-blue-800 font-semibold underline cursor-pointer"
          >
            Reset Values
          </button>
        </div>
      </form>
    </div>
  );
}
