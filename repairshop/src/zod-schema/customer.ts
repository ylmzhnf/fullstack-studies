import { CustomerSchema } from "@/generated/zod";
import { z } from "zod";

export const CustomerCreateFormSchema = CustomerSchema.extend({
  email: z.string().email("Please enter a valid corporate email address."),
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required."),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  state: z.string().length(2, "State must be exactly 2 characters"),
  zip: z.string().max(10, "Zip code is too long"),
}).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export type CustomerCreateInput = z.infer<typeof CustomerCreateFormSchema>;
