import * as z from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email("Invalid email"),
  password: z
    .string()
    .min(1, { message: "Password is required, please enter your password" }),
});

export const registerSchema = z
  .object({
    full_name: z.string().min(1, { message: "Full name is required" }).max(50),
    email: z
      .string()
      .min(1, { message: "Email is required" })
      .email("Invalid email"),
    password: z
      .string()
      .min(1, { message: "Password is required" })
      .min(8, { message: "Password must have than 8 characters" }),

    repassword: z.string().min(8, { message: "Retype password is required" }),
    role: z.string().default("user"),
    address: z.string().min(1, { message: "Address is required" }),
    phone_number: z
      .string()
      .min(7, { message: "Phone number minimum length is 7" }),
  })
  .refine((data) => data.password === data.repassword, {
    path: ["repassword"],
    message: "Password don't match",
  });

export type LoginSchema = z.infer<typeof loginSchema>;
export type RegisterSchema = z.infer<typeof registerSchema>;
