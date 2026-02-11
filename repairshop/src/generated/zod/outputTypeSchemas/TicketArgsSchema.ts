import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { TicketSelectSchema } from '../inputTypeSchemas/TicketSelectSchema';
import { TicketIncludeSchema } from '../inputTypeSchemas/TicketIncludeSchema';

export const TicketArgsSchema: z.ZodType<Prisma.TicketDefaultArgs> = z.object({
  select: z.lazy(() => TicketSelectSchema).optional(),
  include: z.lazy(() => TicketIncludeSchema).optional(),
}).strict();

export default TicketArgsSchema;
