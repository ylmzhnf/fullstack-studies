import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { TicketWhereInputSchema } from '../inputTypeSchemas/TicketWhereInputSchema'
import { TicketOrderByWithAggregationInputSchema } from '../inputTypeSchemas/TicketOrderByWithAggregationInputSchema'
import { TicketScalarFieldEnumSchema } from '../inputTypeSchemas/TicketScalarFieldEnumSchema'
import { TicketScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/TicketScalarWhereWithAggregatesInputSchema'

export const TicketGroupByArgsSchema: z.ZodType<Prisma.TicketGroupByArgs> = z.object({
  where: TicketWhereInputSchema.optional(), 
  orderBy: z.union([ TicketOrderByWithAggregationInputSchema.array(), TicketOrderByWithAggregationInputSchema ]).optional(),
  by: TicketScalarFieldEnumSchema.array(), 
  having: TicketScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default TicketGroupByArgsSchema;
