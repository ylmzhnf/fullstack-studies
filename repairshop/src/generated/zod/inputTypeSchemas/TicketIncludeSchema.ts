import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { CustomerArgsSchema } from "../outputTypeSchemas/CustomerArgsSchema"

export const TicketIncludeSchema: z.ZodType<Prisma.TicketInclude> = z.object({
  customer: z.union([z.boolean(),z.lazy(() => CustomerArgsSchema)]).optional(),
}).strict();

export default TicketIncludeSchema;
