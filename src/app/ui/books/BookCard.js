import {
  ArchiveBoxIcon,
  ArchiveBoxXMarkIcon,
  CurrencyRupeeIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

const BookCard = ({ book }) => {
  return (
    <Link href={`/store/${book.id}`}>
      <div className="flex flex-col items-center rounded-xl bg-white p-4 m-2 shadow-lg hover:shadow-xl transition-shadow duration-300">
        {/* Book Cover */}
        <div className="relative w-full h-56 mb-4">
          <Image
            className="rounded-md object-cover"
            src={book.cover}
            alt={book.title}
            layout="fill"
            priority={true}
          />
        </div>

        {/* Book Title */}
        <h3 className="text-lg font-semibold mb-2 text-center truncate w-full">
          {book.title}
        </h3>

        {/* Rent Price */}
        <div className="text-sm text-center mb-2">
          Rent for <span className="font-medium">{book.rentPrice} INR</span> per
          month
        </div>

        {/* Rental Status */}
        <p className="text-xs text-gray-500 mb-4">
          {book.isRented
            ? `Currently rented by ${book?.renterIds?.length} customer(s)`
            : `Currently no one has rented this book`}
        </p>
        {/* Stock and Price */}
        <div className="flex justify-between items-center w-full text-sm mb-4">
          <div className="flex items-center gap-1">
            {book.stock ? (
              <>
                <ArchiveBoxIcon className="w-5 text-green-500" />
                <span>{book.stock} in stock</span>
              </>
            ) : (
              <>
                <ArchiveBoxXMarkIcon className="w-5 text-red-500" />
                <span>No Stock</span>
              </>
            )}
          </div>

          <div className="flex items-center gap-1">
            <CurrencyRupeeIcon className="w-5 text-yellow-500" />
            <span>{book.sellPrice} to buy</span>
          </div>
        </div>
        {/* Action Button */}
        <button className="w-full rounded-md bg-purple-600 text-white py-2 px-4 hover:bg-purple-700 transition-colors duration-300">
          View Details
        </button>
      </div>
    </Link>
  );
};

export default BookCard;
