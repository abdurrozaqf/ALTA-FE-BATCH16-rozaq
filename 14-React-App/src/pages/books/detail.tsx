import { useState, useEffect } from "react";

import Layout from "@/components/layout";
import DetailBookCard from "@/components/detail-book-card";
import { getBooks, Book } from "@/utils/apis/books";

const Detail = () => {
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
    <Layout title="Detail Book">
      <div className="grid grid-cols-1">
        {books
          .map((book, index) =>
            index < 1 ? <DetailBookCard key={book.id} data={book} /> : undefined
          )
          .filter((book) => book !== undefined)}
      </div>
    </Layout>
  );
};

export default Detail;
