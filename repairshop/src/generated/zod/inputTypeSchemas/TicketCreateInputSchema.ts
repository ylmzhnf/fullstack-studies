import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { CustomerCreateNestedOneWithoutTicketsInputSchema } from './CustomerCreateNestedOneWithoutTicketsInputSchema';

export const TicketCreateInputSchema: z.ZodType<Prisma.TicketCreateInput> = z.strictObject({
  title: z.string(),
  description: z.string().optional().nullable(),
  completed: z.boolean().optional(),
  tech: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  customer: z.lazy(() => CustomerCreateNestedOneWithoutTicketsInputSchema),
});

export default TicketCreateInputSchema;
