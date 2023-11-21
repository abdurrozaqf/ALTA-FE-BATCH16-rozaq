import { useState, useEffect } from "react";

import { getBooks, Book, deleteBook } from "@/utils/apis/books";
import { FilePlus2, Pencil, Trash2 } from "lucide-react";

import EditBookForm from "@/components/form/EditBookForm";
import AddBookForm from "@/components/form/AddBookForm";
import { useToast } from "@/components/ui/use-toast";
import Layout from "@/components/layout";
import Alert from "@/components/alert";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const AdminDashboard = () => {
  const { toast } = useToast();
  const [books, setBooks] = useState<Book[]>([]);

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

  async function handleDeleteBook(id_book: number) {
    try {
      const result = await deleteBook(`${id_book}`);
      toast({ description: result.message });
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
      <Layout title="Dashboard List of Books">
        <Alert title="Add a Book" description={<AddBookForm />}>
          <div className="px-10 py-3 bg-white text-gray-600 rounded-full shadow-md border hover:text-white hover:bg-indigo-400 bottom-24 z-40 absolute">
            <FilePlus2 size={"3rem"} />
          </div>
        </Alert>

        <Table>
          <TableCaption>A list of books.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px] text-center">Cover</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Author</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>ISBN</TableHead>
              <TableHead>Featured</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {books.map((book) => (
              <TableRow key={book.id}>
                <TableCell>
                  <img
                    src={book.cover_image}
                    alt={book.title}
                    className="h-24 w-20 object-fit"
                  />
                </TableCell>
                <TableCell>
                  <p>{book.title}</p>
                </TableCell>
                <TableCell>
                  <p>{book.author}</p>
                </TableCell>
                <TableCell>
                  <p>{book.category}</p>
                </TableCell>
                <TableCell>
                  <p>{book.isbn}</p>
                </TableCell>
                <TableCell>
                  <p>{book.featured.toString()}</p>
                </TableCell>
                <TableCell className="flex justify-end gap-3 mt-5">
                  <Alert
                    title="Edit Book"
                    description={<EditBookForm id_book={`${book.id}`} />}
                  >
                    <div className="p-3 bg-white rounded-md shadow-md hover:bg-indigo-400 hover:text-white">
                      <Pencil />
                    </div>
                  </Alert>
                  <Alert
                    title="Are you absolutely sure deleted this book?"
                    description="This action cannot be undone. This will permanently
                          delete your book and remove your data from our
                          servers."
                    onAction={() => handleDeleteBook(book.id)}
                  >
                    <div className="p-3 bg-white rounded-md shadow-md hover:bg-indigo-400 hover:text-white">
                      <Trash2 />
                    </div>
                  </Alert>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Layout>
    </>
  );
};

export default AdminDashboard;
