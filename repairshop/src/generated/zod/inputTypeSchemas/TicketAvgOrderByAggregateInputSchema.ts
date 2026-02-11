import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TicketAvgOrderByAggregateInputSchema: z.ZodType<Prisma.TicketAvgOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  customerId: z.lazy(() => SortOrderSchema).optional(),
});

export default TicketAvgOrderByAggregateInputSchema;
