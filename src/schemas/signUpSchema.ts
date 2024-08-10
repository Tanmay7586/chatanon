import { z } from "zod";

export const userNameVlaidation = z
  .string()
  .min(2, "Username must be at least 2 characters long")
  .max(20, "Username must be at most 20 characters long")
  .regex(
    new RegExp(/^[a-zA-Z0-9]+$/),
    "Username must contain only letters and numbers"
  );

export const signUpSchema = z.object({
    username: userNameVlaidation,
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters long"),
});
