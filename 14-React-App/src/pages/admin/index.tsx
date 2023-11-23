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
        <div>
          <Alert title="Add a Book" description={<AddBookForm />}>
            <div
              className="px-6 py-3 bg-white dark:bg-black/90 hover:bg-indigo-400 dark:hover:bg-indigo-950 text-gray-600 dark:text-white/80 rounded-full shadow-md border dark:border-2 dark:border-white/40 hover:text-white dark:hover:text-white 
            absolute bottom-0 md:bottom-10 lg:bottom-20 z-40"
            >
              <FilePlus2 size={"2rem"} />
            </div>
          </Alert>
          <Table className="overflow-auto">
            <TableCaption>A list of books.</TableCaption>
            <TableHeader>
              <TableRow className="dark:hover:bg-black/25">
                <TableHead>No</TableHead>
                <TableHead className="text-center">Cover</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Author</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>ISBN</TableHead>
                <TableHead>Featured</TableHead>
                <TableHead className="text-center">Action</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {books.map((book, index) => (
                <TableRow key={book.id} className="dark:hover:bg-black/25">
                  <TableCell>
                    <p>{index + 1}</p>
                  </TableCell>
                  <TableCell className="flex justify-center">
                    <img
                      src={book.cover_image}
                      alt={book.title}
                      className="h-auto lg:h-24 w-auto lg:w-20 object-cover aspect-[3/4]"
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
                      <div className="p-3 bg-white hover:bg-indigo-200 dark:bg-black/30 dark:hover:bg-indigo-950 dark:border dark:border-white/10  dark:text-white/50 dark:hover:text-white rounded-lg shadow-md">
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
                      <div className="p-3 bg-white dark:bg-black/30 rounded-md shadow-md hover:bg-red-500 dark:hover:bg-red-500 dark:border dark:border-white/10 hover:text-white">
                        <Trash2 />
                      </div>
                    </Alert>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Layout>
    </>
  );
};

export default AdminDashboard;
