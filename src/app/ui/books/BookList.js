import BookCard from "./BookCard";

export default function BookList({ books }) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {books.map((book) => {
        return <BookCard key={book.id} book={book} />;
      })}
    </div>
  );
}
