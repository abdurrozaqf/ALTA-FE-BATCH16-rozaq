import { FormEvent, useState } from "react";

import { Book, updateBook } from "@/utils/apis/books";

import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const EditBookForm = () => {
  const { toast } = useToast();

  const [book, setBook] = useState<Partial<Book>>({
    title: "",
    author: "",
    isbn: "",
    category: "",
    description: "",
  });

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const body = {
      title: book.title ?? "",
      author: book.author ?? "",
      isbn: book.isbn ?? "",
      category: book.category ?? "",
      description: book.description ?? "",
    };

    try {
      const result = await updateBook(`1`, body);
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
    <form className="w-full flex flex-col gap-3" onSubmit={(e) => onSubmit(e)}>
      <div className="">
        <p className="font-semibold">Title</p>
        <Input
          type="text"
          value={book?.title}
          onChange={(e) =>
            setBook((prevState) => {
              return { ...prevState, title: e.target.value };
            })
          }
        />
      </div>
      <div className="">
        <p className="font-semibold">Author</p>
        <Input
          type="text"
          value={book?.author}
          onChange={(e) =>
            setBook((prevState) => {
              return { ...prevState, author: e.target.value };
            })
          }
        />
      </div>
      <div className="">
        <p className="font-semibold">ISBN</p>
        <Input
          type="text"
          value={book?.isbn}
          onChange={(e) =>
            setBook((prevState) => {
              return { ...prevState, isbn: e.target.value };
            })
          }
        />
      </div>
      <div className="">
        <p className="font-semibold">Category</p>
        <Input
          type="text"
          value={book?.category}
          onChange={(e) =>
            setBook((prevState) => {
              return { ...prevState, category: e.target.value };
            })
          }
        />
      </div>
      <div className="">
        <p className="font-semibold">Description</p>
        <Input
          type="text"
          value={book?.description}
          onChange={(e) =>
            setBook((prevState) => {
              return { ...prevState, description: e.target.value };
            })
          }
        />
      </div>
      <Button type="submit" className="w-full">
        Save
      </Button>
    </form>
  );
};

export default EditBookForm;
