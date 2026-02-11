import type { Prisma } from '../../prisma/client';

import { z } from 'zod';

export const TicketCreateWithoutCustomerInputSchema: z.ZodType<Prisma.TicketCreateWithoutCustomerInput> = z.strictObject({
  title: z.string(),
  description: z.string().optional().nullable(),
  completed: z.boolean().optional(),
  tech: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
});

export default TicketCreateWithoutCustomerInputSchema;
