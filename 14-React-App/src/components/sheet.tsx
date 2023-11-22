import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { createBorrow } from "@/utils/apis/borrow";
import { ReactNode } from "react";
import { useToast } from "./ui/use-toast";
import useCartStore from "@/utils/state";
import { Trash2 } from "lucide-react";

interface Props {
  title?: string;
  children: ReactNode;
}

export function SheetCart(props: Props) {
  const { cart, deleteBook, removeCart } = useCartStore();
  const { title, children } = props;
  const { toast } = useToast();

  async function handleBorrowBook() {
    try {
      const body = {
        bookId: cart.map((item) => item.id),
        borrow_date: new Date(),
      };

      const result = await createBorrow(body);
      toast({
        description: result.message,
      });

      removeCart();
    } catch (error: any) {
      toast({
        title: "Oops! Something went wrong.",
        description: error.toString(),
        variant: "destructive",
      });
    }
  }

  return (
    <Sheet>
      <SheetTrigger>{children}</SheetTrigger>
      <SheetContent className="overflow-auto">
        <SheetHeader className="sticky top-[-1.5rem] py-4 bg-white">
          <SheetTitle>{title}</SheetTitle>
          <SheetDescription>
            This is your crat for borrow books
          </SheetDescription>
          <hr className="my-4" />
        </SheetHeader>
        <div className="flex flex-col gap-4 mt-4 ">
          {cart.map((book) => (
            <>
              <div className="flex gap-4 items-center" key={book.id}>
                <img
                  className="object-contain w-10"
                  src={book.cover_image}
                  alt={book.title}
                />
                <p className="flex-grow font-light text-sm">{book.title}</p>
                <Trash2
                  onClick={() => deleteBook(book)}
                  className="cursor-pointer"
                />
              </div>
              <hr />
            </>
          ))}
        </div>
        <SheetFooter className="mt-5">
          <SheetClose asChild>
            <div
              className={`w-full flex ${
                cart.length >= 2 ? "justify-around" : "justify-end"
              }`}
            >
              {cart.length > 1 && (
                <Button onClick={removeCart}>Remove all cart</Button>
              )}
              <Button disabled={cart.length < 1} onClick={handleBorrowBook}>
                Borrow Book
              </Button>
            </div>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
