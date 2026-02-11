import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { TicketCreateManyInputSchema } from '../inputTypeSchemas/TicketCreateManyInputSchema'

export const TicketCreateManyAndReturnArgsSchema: z.ZodType<Prisma.TicketCreateManyAndReturnArgs> = z.object({
  data: z.union([ TicketCreateManyInputSchema, TicketCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default TicketCreateManyAndReturnArgsSchema;
