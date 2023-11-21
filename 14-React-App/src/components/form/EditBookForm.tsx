import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { CustomFormField } from "@/components/form/CustomForm";
import { Form, FormControl } from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Layout from "@/components/layout";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Book,
  BookPayloadSchema,
  bookPayloadSchema,
  getDetailBook,
  updateBook,
} from "@/utils/apis/books";

import { Loader2 } from "lucide-react";

const EditBookForm = () => {
  const { toast } = useToast();
  const params = useParams();

  const [book, setBook] = useState<Book>();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const result = await getDetailBook(params.id_book!);
      setBook(result.payload);
    } catch (error: any) {
      toast({
        title: "Oops! Something went wrong.",
        description: error.toString(),
        variant: "destructive",
      });
    }
  }

  const form = useForm<BookPayloadSchema>({
    resolver: zodResolver(bookPayloadSchema),
    defaultValues: {
      title: book?.title!,
      author: book?.author!,
      isbn: book?.isbn!,
      category: book?.category!,
      description: book?.description!,
      cover_image: book?.cover_image!,
    },
    values: {
      title: book?.title!,
      author: book?.author!,
      isbn: book?.isbn!,
      category: book?.category!,
      description: book?.description!,
    },
  });

  async function onSubmit(data: BookPayloadSchema) {
    try {
      const result = await updateBook(params.id_book!, data);
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
    <Layout title={`Edit Book: ${book?.title} `}>
      <div className="mt-10 flex items-center justify-center">
        <Form {...form}>
          <form
            className="w-1/2 flex flex-col gap-4"
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
                  type="file"
                  disabled={form.formState.isSubmitting}
                  aria-disabled={form.formState.isSubmitting}
                />
              )}
            </CustomFormField>
            <CustomFormField
              control={form.control}
              name="author"
              label="Author"
            >
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
                  onValueChange={field.onChange}
                  value={field.value}
                  defaultValue={field.value}
                  disabled={form.formState.isSubmitting}
                  aria-disabled={form.formState.isSubmitting}
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
                  placeholder="Tell a little bit about the book"
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
                "Update Book"
              )}
            </Button>
            <Link to="/admin-dashboard">
              <Button className="w-full">Cencel</Button>
            </Link>
          </form>
        </Form>
      </div>
    </Layout>
  );
};

export default EditBookForm;
