import { Book, getPageBook } from "@/utils/apis/books";
import { useState, useEffect } from "react";

import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import BookCard from "@/components/book-card";
import Layout from "@/components/layout";

import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

const ListOfBook = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [page, setPage] = useState<number>(1);
  const { toast } = useToast();

  const scrollTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  const handlePageNext = () => {
    setPage((prevState) => prevState + 1);
    scrollTop();
  };

  const handlePagePrev = () => {
    setPage((prevState) => prevState - 1);
    scrollTop();
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  async function fetchData() {
    try {
      const result = await getPageBook(page!);
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
      <div className="felx flex-col justify-center">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 justify-items-center">
          {books.map((book) => (
            <BookCard key={book.id} data={book} />
          ))}
        </div>
        <div className="flex items-center justify-center gap-5 mt-10">
          <Button
            disabled={page === 1}
            onClick={() => handlePagePrev()}
            className="bg-white dark:bg-black/25 hover:bg-indigo-200 dark:hover:bg-slate-800 border border-white dark:border dark:border-white/20 shadow text-black hover:text-black dark:text-white rounded-xl px-1"
          >
            <ChevronLeftIcon size={"2rem"} />
          </Button>
          <Button
            disabled={page === 1}
            onClick={() => handlePagePrev()}
            className="bg-white dark:bg-black/25 hover:bg-indigo-200 dark:hover:bg-slate-800 border border-white dark:border dark:border-white/20 shadow text-black hover:text-black dark:text-white rounded-xl"
          >
            1
          </Button>
          <Button
            disabled={page === 2}
            onClick={() => handlePageNext()}
            className="bg-white dark:bg-black/25 hover:bg-indigo-200 dark:hover:bg-slate-800 border border-white dark:border dark:border-white/20 shadow text-black hover:text-black dark:text-white rounded-xl"
          >
            2
          </Button>
          <Button
            disabled={page === 2}
            onClick={() => handlePageNext()}
            className="bg-white dark:bg-black/25 hover:bg-indigo-200 dark:hover:bg-slate-800 border border-white dark:border dark:border-white/20 shadow text-black hover:text-black dark:text-white rounded-xl px-1"
          >
            <ChevronRightIcon size={"2rem"} />
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default ListOfBook;
