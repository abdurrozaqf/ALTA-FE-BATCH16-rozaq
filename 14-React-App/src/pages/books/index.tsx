import { getBooks, Book } from "@/utils/apis/books";
import { useState, useEffect } from "react";

import { useToast } from "@/components/ui/use-toast";
import BookCard from "@/components/book-card";
import Layout from "@/components/layout";

const ListOfBook = () => {
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
    <Layout title="List Of Books">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 justify-items-center">
        {books.map((book) => (
          <BookCard key={book.id} data={book} />
        ))}
      </div>
    </Layout>
  );
};

export default ListOfBook;
