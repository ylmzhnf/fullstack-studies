import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { TicketWhereInputSchema } from './TicketWhereInputSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { CustomerScalarRelationFilterSchema } from './CustomerScalarRelationFilterSchema';
import { CustomerWhereInputSchema } from './CustomerWhereInputSchema';

export const TicketWhereUniqueInputSchema: z.ZodType<Prisma.TicketWhereUniqueInput> = z.object({
  id: z.number().int(),
})
.and(z.strictObject({
  id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => TicketWhereInputSchema), z.lazy(() => TicketWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TicketWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TicketWhereInputSchema), z.lazy(() => TicketWhereInputSchema).array() ]).optional(),
  customerId: z.union([ z.lazy(() => IntFilterSchema), z.number().int() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  completed: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  tech: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  customer: z.union([ z.lazy(() => CustomerScalarRelationFilterSchema), z.lazy(() => CustomerWhereInputSchema) ]).optional(),
}));

export default TicketWhereUniqueInputSchema;
