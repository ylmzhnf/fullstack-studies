import { z } from 'zod';
import type { Prisma } from '../../prisma/client';

export const CustomerCountOutputTypeSelectSchema: z.ZodType<Prisma.CustomerCountOutputTypeSelect> = z.object({
  tickets: z.boolean().optional(),
}).strict();

export default CustomerCountOutputTypeSelectSchema;
