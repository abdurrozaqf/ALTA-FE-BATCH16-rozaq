import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { CustomFormField } from "@/components/form/CustomForm";
import { Form, FormControl } from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";

import {
  UpdateBorrowSchema,
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

interface Props {
  id_borrow: string;
  borrow_date: Date;
  due_date: Date;
}

const EditBorrowBookForm = (props: Props) => {
  const { id_borrow, borrow_date, due_date } = props;

  const { toast } = useToast();

  const form = useForm<UpdateBorrowSchema>({
    resolver: zodResolver(updateBorrowSchema),
    defaultValues: {
      borrow_date: new Date(borrow_date),
      due_date: new Date(due_date),
      return_date: new Date(),
    },
  });

  async function onSubmit(data: UpdateBorrowSchema) {
    try {
      const result = await updateBorrow(id_borrow, data);
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
    <Form {...form}>
      <form
        className="w-full flex flex-col gap-4"
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
      </form>
    </Form>
  );
};

export default EditBorrowBookForm;
