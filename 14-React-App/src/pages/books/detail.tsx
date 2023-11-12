import { Book, getDetailBook } from "@/utils/apis/books";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";
import Layout from "@/components/layout";

const Detail = () => {
  const [book, setBook] = useState<Book>();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const result = await getDetailBook("1");
      setBook(result.payload);
    } catch (error: any) {
      alert(error.toString());
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
          <Button>Borrow</Button>
        </div>
      </div>
    </Layout>
  );
};

export default Detail;
