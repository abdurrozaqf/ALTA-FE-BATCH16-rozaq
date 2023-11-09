import { useState, useEffect } from "react";

import Layout from "@/components/layout";
import BookCard from "@/components/book-card";
import { getBooks, Book } from "@/utils/apis/books";
import { Link } from "react-router-dom";

const Home = () => {
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
      <Layout title="Home">
        <div className=" flex items-center justify-between">
          <p className="text-[#4D4D4D] text-md font-semibold mb-6">
            Recommended for You
          </p>
          <Link
            to={"/list-book"}
            className="text-[#4D4D4D] text-sm font-normal hover:text-black mb-3"
          >
            View All
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 justify-items-center">
          {books
            .map((book, index) =>
              index < 4 ? (
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

export default Home;
