import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { TicketIncludeSchema } from '../inputTypeSchemas/TicketIncludeSchema'
import { TicketWhereInputSchema } from '../inputTypeSchemas/TicketWhereInputSchema'
import { TicketOrderByWithRelationInputSchema } from '../inputTypeSchemas/TicketOrderByWithRelationInputSchema'
import { TicketWhereUniqueInputSchema } from '../inputTypeSchemas/TicketWhereUniqueInputSchema'
import { TicketScalarFieldEnumSchema } from '../inputTypeSchemas/TicketScalarFieldEnumSchema'
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

export const TicketFindFirstArgsSchema: z.ZodType<Prisma.TicketFindFirstArgs> = z.object({
  select: TicketSelectSchema.optional(),
  include: z.lazy(() => TicketIncludeSchema).optional(),
  where: TicketWhereInputSchema.optional(), 
  orderBy: z.union([ TicketOrderByWithRelationInputSchema.array(), TicketOrderByWithRelationInputSchema ]).optional(),
  cursor: TicketWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TicketScalarFieldEnumSchema, TicketScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export default TicketFindFirstArgsSchema;
