import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { TicketWhereUniqueInputSchema } from './TicketWhereUniqueInputSchema';
import { TicketUpdateWithoutCustomerInputSchema } from './TicketUpdateWithoutCustomerInputSchema';
import { TicketUncheckedUpdateWithoutCustomerInputSchema } from './TicketUncheckedUpdateWithoutCustomerInputSchema';

export const TicketUpdateWithWhereUniqueWithoutCustomerInputSchema: z.ZodType<Prisma.TicketUpdateWithWhereUniqueWithoutCustomerInput> = z.strictObject({
  where: z.lazy(() => TicketWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TicketUpdateWithoutCustomerInputSchema), z.lazy(() => TicketUncheckedUpdateWithoutCustomerInputSchema) ]),
});

export default TicketUpdateWithWhereUniqueWithoutCustomerInputSchema;
