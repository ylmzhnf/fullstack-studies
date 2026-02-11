import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { TicketWhereInputSchema } from './TicketWhereInputSchema';

export const TicketListRelationFilterSchema: z.ZodType<Prisma.TicketListRelationFilter> = z.strictObject({
  every: z.lazy(() => TicketWhereInputSchema).optional(),
  some: z.lazy(() => TicketWhereInputSchema).optional(),
  none: z.lazy(() => TicketWhereInputSchema).optional(),
});

export default TicketListRelationFilterSchema;
