import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { TicketWhereUniqueInputSchema } from './TicketWhereUniqueInputSchema';
import { TicketCreateWithoutCustomerInputSchema } from './TicketCreateWithoutCustomerInputSchema';
import { TicketUncheckedCreateWithoutCustomerInputSchema } from './TicketUncheckedCreateWithoutCustomerInputSchema';

export const TicketCreateOrConnectWithoutCustomerInputSchema: z.ZodType<Prisma.TicketCreateOrConnectWithoutCustomerInput> = z.strictObject({
  where: z.lazy(() => TicketWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TicketCreateWithoutCustomerInputSchema), z.lazy(() => TicketUncheckedCreateWithoutCustomerInputSchema) ]),
});

export default TicketCreateOrConnectWithoutCustomerInputSchema;
