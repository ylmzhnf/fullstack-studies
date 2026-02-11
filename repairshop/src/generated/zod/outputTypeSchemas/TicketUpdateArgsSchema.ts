import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { TicketIncludeSchema } from '../inputTypeSchemas/TicketIncludeSchema'
import { TicketUpdateInputSchema } from '../inputTypeSchemas/TicketUpdateInputSchema'
import { TicketUncheckedUpdateInputSchema } from '../inputTypeSchemas/TicketUncheckedUpdateInputSchema'
import { TicketWhereUniqueInputSchema } from '../inputTypeSchemas/TicketWhereUniqueInputSchema'
import { CustomerArgsSchema } from "../outputTypeSchemas/CustomerArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TicketSelectSchema: z.ZodType<Prisma.TicketSelect> = z.object({
  id: z.boolean().optional(),
  customerId: z.boolean().optional(),
  title: z.boolean().optional(),
  description: z.boolean().optional(),
  completed: z.boolean().optional(),
  tech: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  customer: z.union([z.boolean(),z.lazy(() => CustomerArgsSchema)]).optional(),
}).strict()

export const TicketUpdateArgsSchema: z.ZodType<Prisma.TicketUpdateArgs> = z.object({
  select: TicketSelectSchema.optional(),
  include: z.lazy(() => TicketIncludeSchema).optional(),
  data: z.union([ TicketUpdateInputSchema, TicketUncheckedUpdateInputSchema ]),
  where: TicketWhereUniqueInputSchema, 
}).strict();

export default TicketUpdateArgsSchema;
