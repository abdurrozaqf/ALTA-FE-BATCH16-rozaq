import * as z from "zod";

export interface User {
  id: number;
  full_name: string;
  email: string;
  role: string;
  address: string;
  phone_number: string;
  password: string;
  profile_picture: string;
}
const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"];

export const updateProfileSchema = z.object({
  full_name: z.string().min(1, { message: "Full name is required" }).max(50),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email("Invalid email"),
  password: z
    .string()
    .min(1, { message: "Password is required" })
    .min(8, { message: "Password must have than 8 characters" }),
  address: z.string().min(1, { message: "Address is required" }),
  phone_number: z
    .string()
    .min(7, { message: "Phone number minimum length is 7" }),
  profile_picture: z
    .any()
    .refine(
      (files) => files?.[0]?.size <= MAX_FILE_SIZE,
      "Max image size is 5MB"
    )
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      "Only .jpg, .jpeg, .png formats are supported"
    )
    .optional()
    .or(z.literal("")),
});

export type UpdateProfileSchema = z.infer<typeof updateProfileSchema>;
