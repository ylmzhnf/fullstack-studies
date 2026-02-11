import { z } from 'zod';

/////////////////////////////////////////
// TICKET SCHEMA
/////////////////////////////////////////

export const TicketSchema = z.object({
  id: z.number().int(),
  customerId: z.number().int(),
  title: z.string(),
  description: z.string().nullable(),
  completed: z.boolean(),
  tech: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Ticket = z.infer<typeof TicketSchema>

export default TicketSchema;
