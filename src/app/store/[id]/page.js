import { getBookById } from "@/app/lib/fake-data";
import {
  ArchiveBoxIcon,
  ArchiveBoxXMarkIcon,
  CurrencyRupeeIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";

export default async function BookDetailsPage({ params }) {
  const { id } = await params;
  const book = getBookById(id);

  if (!book) {
    return <div className="text-center text-red-500">Book not found!</div>;
  }

  return (
    <div className="container mx-auto p-4 md:p-6">
      <div className="flex flex-col lg:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Book Cover */}
        <div className="w-full lg:w-1/3 flex justify-center items-center bg-gray-100 p-4">
          <div className="relative w-full max-w-xs h-64 sm:h-80 md:h-96">
            <Image
              className="object-cover rounded-md"
              src={book.cover}
              alt={book.title}
              layout="fill"
              priority
            />
          </div>
        </div>

        {/* Book Details */}
        <div className="w-full lg:w-2/3 p-6">
          <h1 className="text-2xl font-bold mb-2">{book.title}</h1>
          <h2 className="text-lg text-gray-700 mb-4">by {book.author}</h2>
          <p className="text-gray-600 mb-4">{book.description}</p>

          {/* Additional Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div>
              <strong>Genre:</strong> {book.genre}
            </div>
            <div>
              <strong>Pages:</strong> {book.pages}
            </div>
            <div>
              <strong>ISBN:</strong> {book.ISBN}
            </div>
            <div>
              <strong>Sold:</strong> {book.sold} copies
            </div>
          </div>

          {/* Stock and Pricing */}
          <div className="flex flex-col sm:flex-row justify-between items-center mt-6">
            <div className="flex items-center gap-2">
              {book.stock > 0 ? (
                <>
                  <ArchiveBoxIcon className="w-6 text-green-500" />
                  <span>{book.stock} in stock</span>
                </>
              ) : (
                <>
                  <ArchiveBoxXMarkIcon className="w-6 text-red-500" />
                  <span>Out of stock</span>
                </>
              )}
            </div>

            <div className="flex items-center gap-2 mt-2 sm:mt-0">
              <CurrencyRupeeIcon className="w-6 text-yellow-500" />
              <span>Buy for {book.sellPrice} INR</span>
            </div>
          </div>

          {/* Rental Information */}
          <p className="text-sm text-gray-500 mt-4">
            {book.isRented
              ? `Currently rented by customers`
              : `Available for rent at ${book.rentPrice} INR/month`}
          </p>

          {/* Action Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <button className="w-full sm:w-1/2 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
              Rent Now
            </button>
            <button className="w-full sm:w-1/2 bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
