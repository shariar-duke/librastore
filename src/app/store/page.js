import { getAllBooks } from "@/db/queries";
import BookList from "../ui/books/BookList";
export default async function BookListPage() {
  const books = await getAllBooks();

  return (
    <div>
      <BookList books={books} />
    </div>
  );
}
