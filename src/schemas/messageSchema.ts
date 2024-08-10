import { z } from "zod";

export const MessageSchema = z.object({
  content: z
    .string()
    .min(10, "Message must contain at least 10 character")
    .max(500, "Message must contain at most 500 characters"),
});
