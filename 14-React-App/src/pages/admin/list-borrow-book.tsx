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
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const AdminListBorrow = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

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
                  {format(new Date(borrow.borrow_date), "eee, dd MMM Y")}
                </TableCell>
                <TableCell>
                  {format(new Date(borrow.due_date), "eee, dd MMM Y")}
                </TableCell>
                <TableCell>
                  {/* {format(new Date(borrow.return_date!), "eee, dd MMM Y")} */}
                </TableCell>
                <TableCell className="flex items-center justify-center gap-2">
                  <Pencil
                    className="w-12 h-12 p-3 bg-white rounded-md shadow-md hover:bg-indigo-100 cursor-pointer"
                    onClick={() => navigate(`/edit-borrow-form/${borrow.id}`)}
                  />

                  <Alert
                    title="Are you absolutely sure deleted this book?"
                    description="This action cannot be undone. This will permanently
                          delete your book and remove your data from our
                          servers."
                    onAction={() => handleDeleteBorrow(borrow.id)}
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
