import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { TicketWhereInputSchema } from '../inputTypeSchemas/TicketWhereInputSchema'

export const TicketDeleteManyArgsSchema: z.ZodType<Prisma.TicketDeleteManyArgs> = z.object({
  where: TicketWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default TicketDeleteManyArgsSchema;
