import * as z from "zod";

export interface Borrow {
  id: number;
  borrow_date: Date;
  due_date: Date;
  return_date: Date;
  book: {
    id: number;
    title: string;
    cover_image: string;
  };
  user: {
    id: number;
    full_name: string;
  };
}

export interface BorrowPayload {
  bookId: number[];
  borrow_date: Date;
}

export const borrowSchema = z.object({
  bookId: z.number({ required_error: "Book ID is required" }).array(),
  borrow_date: z.date({
    required_error: "Borrow date is required",
  }),
});

export type BorrowSchema = z.infer<typeof borrowSchema>;

export const updateBorrowSchema = z.object({
  borrow_date: z.date({
    required_error: "Borrow date is required",
  }),
  due_date: z.date({
    required_error: "Due date is required",
  }),
  return_date: z.date().optional(),
});

export type UpdateBorrowSchema = z.infer<typeof updateBorrowSchema>;
