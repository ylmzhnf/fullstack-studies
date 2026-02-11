import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { TicketCountOrderByAggregateInputSchema } from './TicketCountOrderByAggregateInputSchema';
import { TicketAvgOrderByAggregateInputSchema } from './TicketAvgOrderByAggregateInputSchema';
import { TicketMaxOrderByAggregateInputSchema } from './TicketMaxOrderByAggregateInputSchema';
import { TicketMinOrderByAggregateInputSchema } from './TicketMinOrderByAggregateInputSchema';
import { TicketSumOrderByAggregateInputSchema } from './TicketSumOrderByAggregateInputSchema';

export const TicketOrderByWithAggregationInputSchema: z.ZodType<Prisma.TicketOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  customerId: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  completed: z.lazy(() => SortOrderSchema).optional(),
  tech: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => TicketCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => TicketAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => TicketMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => TicketMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => TicketSumOrderByAggregateInputSchema).optional(),
});

export default TicketOrderByWithAggregationInputSchema;
