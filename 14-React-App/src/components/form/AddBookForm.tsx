import { FormEvent, useState } from "react";

import { createBook } from "@/utils/apis/books";

import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const AddBookForm = () => {
  const { toast } = useToast();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      const body = {
        title: title,
        author,
        isbn,
        category,
        description,
      };

      const result = await createBook(body);
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
          placeholder="The King of SEA"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="">
        <p className="font-semibold">Author</p>
        <Input
          placeholder="inYourdreaM"
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
      <div className="">
        <p className="font-semibold">ISBN</p>
        <Input
          placeholder="ISBN"
          type="text"
          value={isbn}
          onChange={(e) => setIsbn(e.target.value)}
        />
      </div>
      <div className="">
        <p className="font-semibold">Category</p>
        <Input
          placeholder="Category"
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </div>
      <div className="">
        <p className="font-semibold">Description</p>
        <Input
          placeholder="Description"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <Button type="submit">Add Book</Button>
    </form>
  );
};

export default AddBookForm;
