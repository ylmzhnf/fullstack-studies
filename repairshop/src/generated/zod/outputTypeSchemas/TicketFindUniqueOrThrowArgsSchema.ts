import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { TicketIncludeSchema } from '../inputTypeSchemas/TicketIncludeSchema'
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

export const TicketFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.TicketFindUniqueOrThrowArgs> = z.object({
  select: TicketSelectSchema.optional(),
  include: z.lazy(() => TicketIncludeSchema).optional(),
  where: TicketWhereUniqueInputSchema, 
}).strict();

export default TicketFindUniqueOrThrowArgsSchema;
