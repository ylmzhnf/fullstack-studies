import type { Prisma } from '../../prisma/client';

import { z } from 'zod';

export const CustomerUncheckedCreateWithoutTicketsInputSchema: z.ZodType<Prisma.CustomerUncheckedCreateWithoutTicketsInput> = z.strictObject({
  id: z.number().int().optional(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  phone: z.string(),
  address1: z.string(),
  address2: z.string().optional().nullable(),
  city: z.string(),
  state: z.string(),
  zip: z.string(),
  notes: z.string().optional().nullable(),
  active: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
});

export default CustomerUncheckedCreateWithoutTicketsInputSchema;
