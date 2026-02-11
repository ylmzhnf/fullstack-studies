import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { TicketScalarWhereInputSchema } from './TicketScalarWhereInputSchema';
import { TicketUpdateManyMutationInputSchema } from './TicketUpdateManyMutationInputSchema';
import { TicketUncheckedUpdateManyWithoutCustomerInputSchema } from './TicketUncheckedUpdateManyWithoutCustomerInputSchema';

export const TicketUpdateManyWithWhereWithoutCustomerInputSchema: z.ZodType<Prisma.TicketUpdateManyWithWhereWithoutCustomerInput> = z.strictObject({
  where: z.lazy(() => TicketScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TicketUpdateManyMutationInputSchema), z.lazy(() => TicketUncheckedUpdateManyWithoutCustomerInputSchema) ]),
});

export default TicketUpdateManyWithWhereWithoutCustomerInputSchema;
