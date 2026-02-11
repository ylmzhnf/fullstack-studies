import type { Prisma } from '../../prisma/client';

import { z } from 'zod';

export const TicketUncheckedCreateWithoutCustomerInputSchema: z.ZodType<Prisma.TicketUncheckedCreateWithoutCustomerInput> = z.strictObject({
  id: z.number().int().optional(),
  title: z.string(),
  description: z.string().optional().nullable(),
  completed: z.boolean().optional(),
  tech: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
});

export default TicketUncheckedCreateWithoutCustomerInputSchema;
