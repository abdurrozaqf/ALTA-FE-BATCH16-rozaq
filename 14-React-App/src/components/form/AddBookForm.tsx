import {
  BookPayloadSchema,
  bookPayloadSchema,
  createBook,
} from "@/utils/apis/books";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { CustomFormField } from "@/components/form/CustomForm";
import { Form, FormControl } from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Loader2 } from "lucide-react";

const AddBookForm = () => {
  const { toast } = useToast();

  const form = useForm<BookPayloadSchema>({
    resolver: zodResolver(bookPayloadSchema),
    defaultValues: {
      title: "",
      author: "",
      isbn: "",
      category: "",
      description: "",
    },
  });

  const fileRef = form.register("cover_image", { required: true });

  async function onSubmit(data: BookPayloadSchema) {
    data.cover_image = data.cover_image[0].name;
    try {
      const result = await createBook(data);
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
        <CustomFormField control={form.control} name="title" label="Title">
          {(field) => (
            <Input
              {...field}
              placeholder="Title"
              type="text"
              disabled={form.formState.isSubmitting}
              aria-disabled={form.formState.isSubmitting}
            />
          )}
        </CustomFormField>
        <CustomFormField
          control={form.control}
          name="cover_image"
          label="Cover Image"
        >
          {() => (
            <Input
              {...fileRef}
              type="file"
              disabled={form.formState.isSubmitting}
              aria-disabled={form.formState.isSubmitting}
            />
          )}
        </CustomFormField>
        <CustomFormField control={form.control} name="author" label="Author">
          {(field) => (
            <Input
              {...field}
              placeholder="Author"
              type="text"
              disabled={form.formState.isSubmitting}
              aria-disabled={form.formState.isSubmitting}
            />
          )}
        </CustomFormField>
        <CustomFormField control={form.control} name="isbn" label="ISBN">
          {(field) => (
            <Input
              {...field}
              placeholder="ISBN"
              type="tel"
              disabled={form.formState.isSubmitting}
              aria-disabled={form.formState.isSubmitting}
            />
          )}
        </CustomFormField>
        <CustomFormField
          control={form.control}
          name="category"
          label="Category"
        >
          {(field) => (
            <Select
              {...field}
              onValueChange={field.onChange}
              defaultValue={field.value}
            >
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select a Category" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="Fiction">Fiction</SelectItem>
                <SelectItem value="Fantasy">Fantasy</SelectItem>
                <SelectItem value="Mystery">Mystery</SelectItem>
                <SelectItem value="Romance">Romance</SelectItem>
                <SelectItem value="Science">Science</SelectItem>
                <SelectItem value="History">History</SelectItem>
                <SelectItem value="Business">Business</SelectItem>
                <SelectItem value="Children">Children</SelectItem>
                <SelectItem value="Thriller">Thriller</SelectItem>
                <SelectItem value="Biography">Biography</SelectItem>
                <SelectItem value="Religion">Religion</SelectItem>
                <SelectItem value="Cookbooks">Cookbooks</SelectItem>
                <SelectItem value="Horror">Horror</SelectItem>
                <SelectItem value="Psychology">Psychology</SelectItem>
              </SelectContent>
            </Select>
          )}
        </CustomFormField>

        <CustomFormField
          control={form.control}
          name="description"
          label="Description"
        >
          {(field) => (
            <Textarea
              {...field}
              placeholder="Tell us a little bit about yourself"
              className="resize-none"
              disabled={form.formState.isSubmitting}
              aria-disabled={form.formState.isSubmitting}
            />
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
            "Add Book"
          )}
        </Button>
      </form>
    </Form>
  );
};

export default AddBookForm;
