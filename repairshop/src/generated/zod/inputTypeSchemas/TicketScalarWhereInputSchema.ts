import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const TicketScalarWhereInputSchema: z.ZodType<Prisma.TicketScalarWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => TicketScalarWhereInputSchema), z.lazy(() => TicketScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TicketScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TicketScalarWhereInputSchema), z.lazy(() => TicketScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  customerId: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  completed: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  tech: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
});

export default TicketScalarWhereInputSchema;
