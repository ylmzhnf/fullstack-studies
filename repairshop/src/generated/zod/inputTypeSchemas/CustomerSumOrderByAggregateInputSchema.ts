import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const CustomerSumOrderByAggregateInputSchema: z.ZodType<Prisma.CustomerSumOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
});

export default CustomerSumOrderByAggregateInputSchema;
