import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { Book, getDetailBook } from "@/utils/apis/books";
import { createBorrow } from "@/utils/apis/borrow";

import { Separator } from "@/components/ui/separator";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/layout";

const Detail = () => {
  const params = useParams();
  const { toast } = useToast();

  const [book, setBook] = useState<Book>();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const result = await getDetailBook(params.id_book!);
      setBook(result.payload);
    } catch (error: any) {
      toast({
        title: "Oops! Something went wrong.",
        description: error.toString(),
        variant: "destructive",
      });
    }
  }

  async function handleBorrowBook() {
    let today = new Date();
    let isoDateString = today.toISOString();

    try {
      const body = {
        bookId: [book?.id!],
        borrow_date: isoDateString,
      };

      const result = await createBorrow(body);
      toast({
        description: result.message,
      });
    } catch (error: any) {
      toast({
        title: "Oops! Something went wrong.",
        description: error.toString(),
        variant: "destructive",
      });
    }
  }

  return (
    <Layout title="Detail Book">
      <div className="bg-white flex flex-col md:flex-row w-full h-full py-6 px-8 gap-5 items-center justify-center rounded-md shadow-md">
        <img
          className="object-contain aspect-[3/4] w-52 md:w-64 lg:w-96"
          src={book?.cover_image}
          alt={book?.title}
        />
        <div className="flex flex-col gap-4 w-full justify-center">
          <div>
            <p className="font-bold text-2xl mb-1">{book?.title}</p>
            <p className="text-muted-foreground text-sm mb-3">
              by {book?.author}
            </p>
            <Badge variant="outline">{book?.category}</Badge>
          </div>
          <Separator />
          <p className="text-muted-foreground text-sm text-justify">
            {book?.description}
          </p>
          <Button onClick={handleBorrowBook}>Borrow</Button>
        </div>
      </div>
    </Layout>
  );
};

export default Detail;
