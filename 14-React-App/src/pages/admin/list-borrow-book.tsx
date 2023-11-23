import { Borrow, deleteBorrow, getBorrows } from "@/utils/apis/borrows";
import { Pencil, Trash2 } from "lucide-react";
import { useState, useEffect } from "react";

import EditBorrowBookForm from "@/components/form/EditBorrowBookForm";
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
import { format } from "date-fns";

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

  async function handleDeleteBorrow(id_borrow: number) {
    try {
      const result = await deleteBorrow(`${id_borrow}`);
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
    <Layout title="Dashboard List of Borrows">
      <div>
        <Table className="overflow-auto">
          <TableCaption>List of Borrows.</TableCaption>
          <TableHeader>
            <TableRow className="dark:hover:bg-black/25">
              <TableHead>No</TableHead>
              <TableHead>User</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Borrow Date</TableHead>
              <TableHead>Due Date</TableHead>
              <TableHead>Return Date</TableHead>
              <TableHead className="text-center">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {borrow.map((borrow, index) => (
              <TableRow key={borrow.id} className="dark:hover:bg-black/25">
                <TableCell>
                  <p>{index + 1}</p>
                </TableCell>
                <TableCell>
                  <p>{borrow.user.full_name}</p>
                </TableCell>

                <TableCell>
                  <p>{borrow.book.title}</p>
                </TableCell>
                <TableCell>
                  {format(new Date(borrow.borrow_date), "eee, dd MMM Y")}
                </TableCell>
                <TableCell>
                  {format(new Date(borrow.due_date), "eee, dd MMM Y")}
                </TableCell>
                <TableCell></TableCell>
                <TableCell className="flex items-center justify-center gap-2">
                  <Alert
                    title="Edit Book"
                    description={
                      <EditBorrowBookForm
                        id_borrow={`${borrow.id}`}
                        borrow_date={borrow.borrow_date}
                        due_date={borrow.due_date}
                      />
                    }
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
                    onAction={() => handleDeleteBorrow(borrow.id)}
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
  );
};

export default AdminListBorrow;
