import { TicketSchema } from "@/generated/zod";
import { z } from "zod";

export const TicketCreateFormSchema = TicketSchema.extend({
  title: z.string().min(5, "Title should be at least 5 characters long"),
  description: z.string().min(1, "Please provide a description").optional(),
}).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export type TicketCreateInput = z.infer<typeof TicketCreateFormSchema>;
