import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { TicketWhereInputSchema } from '../inputTypeSchemas/TicketWhereInputSchema'
import { TicketOrderByWithRelationInputSchema } from '../inputTypeSchemas/TicketOrderByWithRelationInputSchema'
import { TicketWhereUniqueInputSchema } from '../inputTypeSchemas/TicketWhereUniqueInputSchema'

export const TicketAggregateArgsSchema: z.ZodType<Prisma.TicketAggregateArgs> = z.object({
  where: TicketWhereInputSchema.optional(), 
  orderBy: z.union([ TicketOrderByWithRelationInputSchema.array(), TicketOrderByWithRelationInputSchema ]).optional(),
  cursor: TicketWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default TicketAggregateArgsSchema;
