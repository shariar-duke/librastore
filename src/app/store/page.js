import { getAllBooks } from "../lib/fake-data";
import BookList from "../ui/books/BookList";
export default function BookListPage() {
  const books = getAllBooks();
  return (
    <div>
      <BookList books={books} />
    </div>
  );
}
