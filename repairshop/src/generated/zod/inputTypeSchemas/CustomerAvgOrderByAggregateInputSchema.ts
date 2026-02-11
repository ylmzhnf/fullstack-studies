import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const CustomerAvgOrderByAggregateInputSchema: z.ZodType<Prisma.CustomerAvgOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
});

export default CustomerAvgOrderByAggregateInputSchema;
