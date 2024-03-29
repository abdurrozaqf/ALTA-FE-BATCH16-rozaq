import { useEffect, useState, useMemo } from "react";
import { useParams } from "react-router-dom";

import { Book, getDetailBook } from "@/utils/apis/books";
import { useToken } from "@/utils/context/token";
import useCartStore from "@/utils/state";

import { Separator } from "@/components/ui/separator";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/layout";

const Detail = () => {
  const { cart, addBook } = useCartStore();
  const { toast } = useToast();
  const { user } = useToken();
  const params = useParams();

  const [book, setBook] = useState<Book>();

  const isInCart = useMemo(() => {
    const checkCart = cart.find((item) => item.id === +params.id_book!);

    if (checkCart) return true;

    return false;
  }, [cart]);

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

  function onClickBorrow() {
    toast({
      description: "Book has been added to cart.",
    });
    addBook(book!);
  }

  return (
    <Layout title="Detail Book">
      <div className="w-auto h-auto bg-white dark:bg-black/30 flex flex-col lg:flex-row py-6 px-8 gap-5 items-center justify-center rounded-md shadow-md">
        <img
          className="object-contain aspect-[3/4] w-32 md:w-48 lg:w-96"
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
          {user.role === "user" && (
            <Button
              onClick={() => onClickBorrow()}
              disabled={isInCart}
              aria-disabled={isInCart}
            >
              {isInCart ? "In Cart" : "Borrow"}
            </Button>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Detail;
