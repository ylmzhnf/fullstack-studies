import type { Prisma } from '../../prisma/client';

import { z } from 'zod';

export const TicketUncheckedCreateInputSchema: z.ZodType<Prisma.TicketUncheckedCreateInput> = z.strictObject({
  id: z.number().int().optional(),
  customerId: z.number().int(),
  title: z.string(),
  description: z.string().optional().nullable(),
  completed: z.boolean().optional(),
  tech: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
});

export default TicketUncheckedCreateInputSchema;
