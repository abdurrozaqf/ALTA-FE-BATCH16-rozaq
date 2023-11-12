import { useState, useEffect } from "react";

import { getBooks, Book } from "@/utils/apis/books";
import BookCard from "@/components/book-card";
import Layout from "@/components/layout";

const ListOfBook = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const result = await getBooks();
      setBooks(result.payload.datas);
    } catch (error: any) {
      alert(error.toString());
    }
  }
  return (
    <Layout title="List Of Books">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 justify-items-center">
        {books.map((book) => (
          <BookCard key={book.id} data={book} />
        ))}
      </div>
    </Layout>
  );
};

export default ListOfBook;
