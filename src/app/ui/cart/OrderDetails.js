"use client";
import { StoreContext } from "@/app/context";
import { useContext } from "react";

export default function OrderDetails() {
  const { cartData } = useContext(StoreContext);
  const booksToBuy = cartData.filter((book) => book.type === "Buy");
  const booksToRent = cartData.filter((book) => book.type === "Rent");

  const priceToBuy = booksToBuy.reduce((acc, book) => acc + book.sellPrice, 0);
  const priceToRent = booksToRent.reduce(
    (acc, book) => acc + book.rentPrice,
    0
  );

  return (
    <div className="w-full bg-white rounded-md px-8 py-6 mb-4 shadow-lg">
      <h2 className="text-3xl font-semibold text-gray-800 pb-4">
        Order Details
      </h2>

      {/* Display Book Details for Buying */}
      {booksToBuy.length > 0 && (
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-700">Books to Buy</h3>
          <ul className="space-y-4">
            {booksToBuy.map((book) => (
              <li
                key={book.id}
                className="flex space-x-4 p-4 bg-gray-100 rounded-lg shadow-sm hover:shadow-md"
              >
                <img
                  src={book.cover}
                  alt={book.title}
                  className="w-20 h-30 object-cover rounded-md"
                />
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-gray-800">
                    {book.title}
                  </h4>
                  <p className="text-sm text-gray-600">by {book.author}</p>
                  <p className="text-sm text-gray-500">{book.description}</p>
                  <p className="text-sm font-semibold text-gray-700">
                    Pages: {book.pages}
                  </p>
                  <p className="text-sm font-semibold text-gray-700">
                    Price: {book.sellPrice} Tk
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-lg font-semibold text-gray-800">
            Buying {booksToBuy.length} books for {priceToBuy} Tk
          </p>
        </div>
      )}

      {/* Display Book Details for Renting */}
      {booksToRent.length > 0 && (
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-700">Books to Rent</h3>
          <ul className="space-y-4">
            {booksToRent.map((book) => (
              <li
                key={book.id}
                className="flex space-x-4 p-4 bg-gray-100 rounded-lg shadow-sm hover:shadow-md"
              >
                <img
                  src={book.cover}
                  alt={book.title}
                  className="w-20 h-30 object-cover rounded-md"
                />
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-gray-800">
                    {book.title}
                  </h4>
                  <p className="text-sm text-gray-600">by {book.author}</p>
                  <p className="text-sm text-gray-500">{book.description}</p>
                  <p className="text-sm font-semibold text-gray-700">
                    Pages: {book.pages}
                  </p>
                  <p className="text-sm font-semibold text-gray-700">
                    Rent Price: {book.rentPrice} Tk
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-lg font-semibold text-gray-800">
            Renting {booksToRent.length} books for {priceToRent} Tk
          </p>
        </div>
      )}

      {/* Summary */}
      <div className="mt-6 flex justify-between items-center">
        <p className="text-xl font-semibold text-gray-800">Total to Pay:</p>
        <p className="text-xl font-bold text-gray-900">
          {priceToBuy + priceToRent} Tk
        </p>
      </div>
    </div>
  );
}
