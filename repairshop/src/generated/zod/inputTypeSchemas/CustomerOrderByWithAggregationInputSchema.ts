import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { CustomerCountOrderByAggregateInputSchema } from './CustomerCountOrderByAggregateInputSchema';
import { CustomerAvgOrderByAggregateInputSchema } from './CustomerAvgOrderByAggregateInputSchema';
import { CustomerMaxOrderByAggregateInputSchema } from './CustomerMaxOrderByAggregateInputSchema';
import { CustomerMinOrderByAggregateInputSchema } from './CustomerMinOrderByAggregateInputSchema';
import { CustomerSumOrderByAggregateInputSchema } from './CustomerSumOrderByAggregateInputSchema';

export const CustomerOrderByWithAggregationInputSchema: z.ZodType<Prisma.CustomerOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  firstName: z.lazy(() => SortOrderSchema).optional(),
  lastName: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  phone: z.lazy(() => SortOrderSchema).optional(),
  address1: z.lazy(() => SortOrderSchema).optional(),
  address2: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  city: z.lazy(() => SortOrderSchema).optional(),
  state: z.lazy(() => SortOrderSchema).optional(),
  zip: z.lazy(() => SortOrderSchema).optional(),
  notes: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  active: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => CustomerCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => CustomerAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => CustomerMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => CustomerMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => CustomerSumOrderByAggregateInputSchema).optional(),
});

export default CustomerOrderByWithAggregationInputSchema;
