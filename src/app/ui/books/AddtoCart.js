"use client";
import { StoreContext } from "@/app/context";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { toast } from "react-toastify";
// Ensure toast styles are loaded

export default function AddtoCart({ book }) {
  const { cartData, setCartData } = useContext(StoreContext);
  const handleCart = (e, reason) => {
    e.preventDefault();
    const newData = { ...book, type: reason };

    setCartData((prevCart) => {
      const updatedCart = [...prevCart, newData];
      toast.success(`Added ${newData.title} to the cart`, {
        autoClose: 1000,
        position: "top-right",
      });

      return updatedCart;
    });
  };

  return (
    <div className="flex justify-between w-full mb-4 gap-2">
      {/* Buy Button */}
      <button
        onClick={(event) => handleCart(event, "Buy")}
        className="w-1/2 flex items-center justify-center gap-2 bg-green-600 text-white py-2 rounded-lg shadow-md hover:bg-green-700 transition duration-300"
      >
        <ShoppingCartIcon className="w-5 h-5" />
        Buy for {book.sellPrice} Tk
      </button>

      {/* Rent Button */}
      <button
        onClick={(event) => handleCart(event, "Rent")}
        className="w-1/2 flex items-center justify-center gap-2 bg-yellow-600 text-white py-2 rounded-lg shadow-md hover:bg-yellow-700 transition duration-300"
      >
        <ShoppingCartIcon className="w-5 h-5" />
        Rent for {book.rentPrice} Tk
      </button>
    </div>
  );
}
