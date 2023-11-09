import { useState, useEffect } from "react";

import { getBooks, Book } from "@/utils/apis/books";
import { Pencil, Trash2 } from "lucide-react";

import Layout from "@/components/layout";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import AddBookForm from "@/components/form/AddBookForm";

const AdminListBorrow = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const result = await getBooks();
      setBooks(result.payload.datas);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <Layout title="List of Borrows">
        <Table>
          <TableCaption>List of Borrows.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px] text-center">Cover</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Category</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {books
              .map((book, index) =>
                index < 3 ? (
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
                    <TableCell className="flex items-center justify-end gap-3">
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
                              <AddBookForm />
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                      <AlertDialog>
                        <AlertDialogTrigger>
                          <div className="p-3 bg-white rounded-md shadow-md hover:bg-indigo-400 hover:text-white">
                            <Trash2 />
                          </div>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>
                              Are you absolutely sure deleted this book?
                            </AlertDialogTitle>
                            <AlertDialogDescription>
                              This action cannot be undone. This will
                              permanently delete your book and remove your data
                              from our servers.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction>Continue</AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </TableCell>
                  </TableRow>
                ) : undefined
              )
              .filter((book) => book !== undefined)}
          </TableBody>
        </Table>
      </Layout>
    </>
  );
};

export default AdminListBorrow;
