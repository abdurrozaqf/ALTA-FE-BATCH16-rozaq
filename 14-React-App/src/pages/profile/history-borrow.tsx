import { useState, useEffect } from "react";

import Layout from "@/components/layout";
import BookCard from "@/components/book-card";
import { getBooks, Book } from "@/utils/apis/books";
import { Link } from "react-router-dom";

const HistoryBorrow = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const result = await getBooks();
      setBooks(result.payload.datas);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Layout title="History Borrow">
        <p className="text-[#4D4D4D] text-md font-semibold mb-6">
          History Borrow your book
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 justify-items-center">
          {books
            .map((book, index) =>
              index < 2 ? (
                <Link to={"/detail-book"}>
                  <BookCard key={book.id} data={book} />
                </Link>
              ) : undefined
            )
            .filter((book) => book !== undefined)}
        </div>
      </Layout>
    </>
  );
};

export default HistoryBorrow;
