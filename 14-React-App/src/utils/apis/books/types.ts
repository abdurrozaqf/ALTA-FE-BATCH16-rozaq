import * as z from "zod";

export interface Book {
  id: number;
  title: string;
  featured: boolean;
  author: string;
  isbn: string;
  category: string;
  description: string;
  cover_image: string;
}

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"];

export const bookPayloadSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }).max(50),
  author: z.string().min(1, { message: "Author is required" }),
  isbn: z
    .string()
    .regex(/^(978|979)/u, "The ISBN format is invalid")
    .min(13, { message: "ISBN is required" }),
  category: z.string().min(1, { message: "Category is required" }),
  description: z
    .string()
    .min(1, { message: "Description is required" })
    .min(10, { message: "Description to short" }),
  cover_image: z
    .any()
    .refine((files) => files?.length == 1, "Image is required.")
    .refine(
      (files) => files?.[0]?.size <= MAX_FILE_SIZE,
      `Max file size is 5MB.`
    )
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      ".jpg, .jpeg, and .png files are accepted."
    )
    .optional()
    .or(z.literal("")),
});

export type BookPayloadSchema = z.infer<typeof bookPayloadSchema>;
