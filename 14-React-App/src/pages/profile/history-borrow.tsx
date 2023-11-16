import { useState, useEffect } from "react";

import { getBorrows, Borrow } from "@/utils/apis/borrow";

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
      <Layout title="History Borrow of">
        <p className="text-[#4D4D4D] text-md font-semibold mb-6">
          History Borrow your book
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 justify-items-center">
          {borrow.map((borrow) => (
            <BookCardHistory key={borrow.id} data={borrow} />
          ))}
        </div>
      </Layout>
    </>
  );
};

export default HistoryBorrow;
