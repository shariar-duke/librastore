import { ShoppingCartIcon } from "@heroicons/react/24/solid";

export default function AddtoCart({ book }) {
  return (
    <div className="flex justify-between w-full mb-4 gap-2">
      {/* Buy Button */}
      <button className="w-1/2 flex items-center justify-center gap-2 bg-green-600 text-white py-2 rounded-lg shadow-md hover:bg-green-700 transition duration-300">
        <ShoppingCartIcon className="w-5 h-5" />
        Buy for {book.sellPrice} Tk
      </button>

      {/* Rent Button */}
      <button className="w-1/2 flex items-center justify-center gap-2 bg-yellow-600 text-white py-2 rounded-lg shadow-md hover:bg-yellow-700 transition duration-300">
        <ShoppingCartIcon className="w-5 h-5" />
        Rent for {book.rentPrice} Tk
      </button>
    </div>
  );
}
