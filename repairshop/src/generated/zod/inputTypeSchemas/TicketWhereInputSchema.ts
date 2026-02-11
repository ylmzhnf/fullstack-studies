import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { CustomerScalarRelationFilterSchema } from './CustomerScalarRelationFilterSchema';
import { CustomerWhereInputSchema } from './CustomerWhereInputSchema';

export const TicketWhereInputSchema: z.ZodType<Prisma.TicketWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => TicketWhereInputSchema), z.lazy(() => TicketWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TicketWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TicketWhereInputSchema), z.lazy(() => TicketWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  customerId: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  completed: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  tech: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  customer: z.union([ z.lazy(() => CustomerScalarRelationFilterSchema), z.lazy(() => CustomerWhereInputSchema) ]).optional(),
});

export default TicketWhereInputSchema;
