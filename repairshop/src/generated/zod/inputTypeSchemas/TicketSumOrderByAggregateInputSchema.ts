import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TicketSumOrderByAggregateInputSchema: z.ZodType<Prisma.TicketSumOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  customerId: z.lazy(() => SortOrderSchema).optional(),
});

export default TicketSumOrderByAggregateInputSchema;
