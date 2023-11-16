import { FormEvent, useState } from "react";

import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Borrow, updateBorrow } from "@/utils/apis/borrow";

const EditBorrowBookForm = () => {
  const { toast } = useToast();

  const [borrow, setBorrow] = useState<Partial<Borrow>>({
    borrow_date: "",
    due_date: "",
    return_date: "",
  });

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const body = {
        borrow_date: borrow?.borrow_date ?? "",
        due_date: borrow?.due_date ?? "",
        return_date: borrow?.return_date ?? "",
      };

      const result = await updateBorrow("1", body);
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
    <form className="w-full flex flex-col gap-3" onSubmit={(e) => onSubmit(e)}>
      <div>
        <p className="font-semibold">Borrow Date</p>
        <Input
          type="text"
          value={borrow.borrow_date}
          onChange={(e) =>
            setBorrow((prevState) => {
              return { ...prevState, borrow_date: e.target.value };
            })
          }
        />
      </div>
      <div>
        <p className="font-semibold">Due Date</p>
        <Input
          type="text"
          value={borrow.due_date}
          onChange={(e) =>
            setBorrow((prevState) => {
              return { ...prevState, due_date: e.target.value };
            })
          }
        />
      </div>
      <div>
        <p className="font-semibold">Return Date</p>
        <Input
          type="text"
          value={borrow.return_date}
          onChange={(e) =>
            setBorrow((prevState) => {
              return { ...prevState, return_date: e.target.value };
            })
          }
        />
      </div>
      <Button type="submit" className="w-full">
        Save
      </Button>
    </form>
  );
};

export default EditBorrowBookForm;
