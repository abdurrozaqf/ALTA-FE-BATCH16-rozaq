import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Book, getBooks } from "@/utils/apis/books";

import { useToast } from "@/components/ui/use-toast";
import BookCard from "@/components/book-card";
import Layout from "@/components/layout";

const Home = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const result = await getBooks();
      setBooks(result.payload.datas);
    } catch (error: any) {
      toast({
        title: "Oops! Something went wrong.",
        description: error.toString(),
        variant: "destructive",
      });
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
            to="/list-book"
            className="text-[#4D4D4D] text-sm font-normal hover:text-black mb-3"
          >
            View All
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 justify-items-center">
          {books
            .map((book, index) =>
              index < 4 ? <BookCard key={book.id} data={book} /> : undefined
            )
            .filter((book) => book !== undefined)}
        </div>
      </Layout>
    </>
  );
};

export default Home;
