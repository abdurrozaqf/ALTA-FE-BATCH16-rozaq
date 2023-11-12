import { Borrow, getBorrows } from "@/utils/apis/borrow";
import { Pencil, Trash2 } from "lucide-react";
import { useState, useEffect } from "react";

import EditBookForm from "@/components/form/EditBookForm";
import { deleteBook } from "@/utils/apis/books";
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

const AdminListBorrow = () => {
  const [borrow, setBorrow] = useState<Borrow[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const result = await getBorrows();
      setBorrow(result.payload.datas);
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
      <Layout title="List of Borrows">
        <Table>
          <TableCaption>List of Borrows.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px] text-center">Cover</TableHead>
              <TableHead>Title</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {borrow.map((borrow) => (
              <TableRow key={borrow.id}>
                <TableCell>
                  <img
                    src={borrow.book.cover_image}
                    alt={borrow.book.title}
                    className="h-24 w-20 object-fit"
                  />
                </TableCell>
                <TableCell>
                  <p>{borrow.book.title}</p>
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

export default AdminListBorrow;
