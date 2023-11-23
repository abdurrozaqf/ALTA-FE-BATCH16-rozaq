import { useState, useEffect } from "react";

import { getBorrows, Borrow } from "@/utils/apis/borrows";

import BookCardHistory from "@/components/book-card-history";
import { useToast } from "@/components/ui/use-toast";
import Layout from "@/components/layout";

const HistoryBorrow = () => {
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

  return (
    <>
      <Layout title="History Borrow">
        <p className="text-[#4D4D4D] dark:text-white text-md font-semibold mb-6">
          History borrow your Books
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 justify-items-center">
          {borrow.map((borrow) => (
            <BookCardHistory key={borrow.id} data={borrow} />
          ))}
        </div>
      </Layout>
    </>
  );
};

export default HistoryBorrow;
