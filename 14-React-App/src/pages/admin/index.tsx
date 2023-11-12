import { useState, useEffect } from "react";

import { getBooks, Book, deleteBook } from "@/utils/apis/books";
import { FilePlus2, Pencil, Trash2 } from "lucide-react";

import EditBookForm from "@/components/form/EditBookForm";
import AddBookForm from "@/components/form/AddBookForm";
import Layout from "@/components/layout";
import Alert from "@/components/alert";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Admin = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const result = await getBooks();
      setBooks(result.payload.datas);
    } catch (error: any) {
      alert(error.toString());
    }
  }

  async function handleDeleteBook() {
    try {
      const result = await deleteBook("1");
      alert(result.message);
    } catch (error: any) {
      alert(error.toString());
    }
  }

  return (
    <>
      <Layout title="List of Books">
        <AlertDialog>
          <AlertDialogTrigger>
            <div className="px-10 py-3 bg-white text-gray-600 rounded-full shadow-md border hover:text-white hover:bg-indigo-400 bottom-24 z-50 absolute">
              <FilePlus2 size={"3rem"} />
            </div>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Add Books</AlertDialogTitle>
              <AlertDialogDescription>
                <AddBookForm />
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
        <Table>
          <TableCaption>A list of books.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px] text-center">Cover</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Category</TableHead>
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
                  <p>{book.author}</p>
                </TableCell>
                <TableCell>
                  <p>{book.category}</p>
                  <p>{book.isbn}</p>
                </TableCell>
                <TableCell className="flex justify-end gap-3 mt-5">
                  <AlertDialog>
                    <AlertDialogTrigger>
                      <div className="p-3 bg-white rounded-md shadow-md hover:bg-indigo-100">
                        <Pencil />
                      </div>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Edit Books</AlertDialogTitle>
                        <AlertDialogDescription>
                          <EditBookForm />
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>

                  <Alert
                    title="Are you absolutely sure deleted this book?"
                    description="This action cannot be undone. This will permanently
                          delete your book and remove your data from our
                          servers."
                    onAction={handleDeleteBook}
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

export default Admin;
