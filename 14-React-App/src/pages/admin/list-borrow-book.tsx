import { Borrow, deleteBorrow, getBorrows } from "@/utils/apis/borrow";
import { Pencil, Trash2 } from "lucide-react";
import { useState, useEffect } from "react";

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
import EditBorrowBookForm from "@/components/form/EditBorrowBookForm";

const AdminListBorrow = () => {
  const { toast } = useToast();

  const [borrow, setBorrow] = useState<Borrow[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const result = await getBorrows();
      setBorrow(result.payload.datas);
    } catch (error: any) {
      toast({
        title: "Oops! Something went wrong.",
        description: error.toString(),
        variant: "destructive",
      });
    }
  }

  async function handleDeleteBorrow() {
    try {
      const result = await deleteBorrow(`1`);
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
      <Layout title="List of Borrows">
        <Table>
          <TableCaption>List of Borrows.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>User</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Borrow Date</TableHead>
              <TableHead>Due Date</TableHead>
              <TableHead>Return Date</TableHead>
              <TableHead className="w-[100px] text-center">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {borrow.map((borrow) => (
              <TableRow key={borrow.id}>
                <TableCell>
                  <p>{borrow.user.full_name}</p>
                </TableCell>

                <TableCell>
                  <p>{borrow.book.title}</p>
                </TableCell>
                <TableCell>
                  <p>{borrow.borrow_date}</p>
                </TableCell>
                <TableCell>
                  <p>{borrow.due_date}</p>
                </TableCell>
                <TableCell>
                  <p>{borrow.return_date}</p>
                </TableCell>
                <TableCell className="flex items-center justify-center gap-2">
                  <Alert title="Edit Book" description={<EditBorrowBookForm />}>
                    <div className="p-3 bg-white rounded-md shadow-md hover:bg-indigo-100">
                      <Pencil />
                    </div>
                  </Alert>

                  <Alert
                    title="Are you absolutely sure deleted this book?"
                    description="This action cannot be undone. This will permanently
                          delete your book and remove your data from our
                          servers."
                    onAction={handleDeleteBorrow}
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
