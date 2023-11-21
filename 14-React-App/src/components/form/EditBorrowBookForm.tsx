import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

import { CustomFormField } from "@/components/form/CustomForm";
import { Form, FormControl } from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout";

import {
  Borrow,
  UpdateBorrowSchema,
  getDetailBorrow,
  updateBorrow,
  updateBorrowSchema,
} from "@/utils/apis/borrow";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { cn } from "@/utils/utils";
import { format } from "date-fns";

import { Calendar as CalendarIcon, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

const EditBorrowBookForm = () => {
  const { toast } = useToast();
  const params = useParams();

  const [borrow, setBorrow] = useState<Borrow>();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const result = await getDetailBorrow(params.id_borrow!);
      setBorrow(result.payload);
    } catch (error: any) {
      toast({
        title: "Oops! Something went wrong.",
        description: error.toString(),
        variant: "destructive",
      });
    }
  }

  const form = useForm<UpdateBorrowSchema>({
    resolver: zodResolver(updateBorrowSchema),
    defaultValues: {
      borrow_date: new Date(),
      due_date: new Date(),
      return_date: new Date(),
    },
    // values: {
    //   borrow_date: new Date(borrow?.borrow_date!),
    //   due_date: new Date(borrow?.due_date!),
    //   return_date: new Date(),
    // },
  });

  async function onSubmit(data: UpdateBorrowSchema) {
    try {
      const result = await updateBorrow(params.id_borrow!, data);
      toast({
        description: result.message,
      });
    } catch (error: any) {
      toast({
        title: "Oops! Something went wrong.",
        description: error.toString(),
        variant: "destructive",
      });
    }
  }

  return (
    <Layout title="Edit Borrow">
      <div className="h-[40rem] flex items-center justify-center">
        <Form {...form}>
          <form
            className="w-1/2 flex flex-col gap-4"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <CustomFormField
              control={form.control}
              name="borrow_date"
              label="Borrow Date"
            >
              {(field) => (
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-auto pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              )}
            </CustomFormField>
            <CustomFormField
              control={form.control}
              name="due_date"
              label="Due date"
            >
              {(field) => (
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-auto pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date > new Date() || date < new Date("1900-01-01")
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              )}
            </CustomFormField>
            <CustomFormField
              control={form.control}
              name="return_date"
              label="Return Date"
            >
              {(field) => (
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-auto pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date > new Date() || date < new Date("1900-01-01")
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              )}
            </CustomFormField>

            <Button
              className="mt-4"
              type="submit"
              disabled={form.formState.isSubmitting}
              aria-disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait
                </>
              ) : (
                "Update Borrow"
              )}
            </Button>
            <Link to="/admin-list-borrow">
              <Button className="w-full">Cencel</Button>
            </Link>
          </form>
        </Form>
      </div>
    </Layout>
  );
};

export default EditBorrowBookForm;
