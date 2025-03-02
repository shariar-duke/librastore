import BookCard from "./BookCard";

export default function BookList({ books }) {
  return (
    <div className="grid md:grid-col-3 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {books.map((book) => {
        return <BookCard key={book.id} book={book} />;
      })}
    </div>
  );
}
