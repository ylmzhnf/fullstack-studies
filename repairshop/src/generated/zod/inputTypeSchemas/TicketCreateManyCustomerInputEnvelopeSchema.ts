import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { TicketCreateManyCustomerInputSchema } from './TicketCreateManyCustomerInputSchema';

export const TicketCreateManyCustomerInputEnvelopeSchema: z.ZodType<Prisma.TicketCreateManyCustomerInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => TicketCreateManyCustomerInputSchema), z.lazy(() => TicketCreateManyCustomerInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default TicketCreateManyCustomerInputEnvelopeSchema;
