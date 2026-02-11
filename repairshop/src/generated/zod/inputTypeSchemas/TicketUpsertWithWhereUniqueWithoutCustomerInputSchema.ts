import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { TicketWhereUniqueInputSchema } from './TicketWhereUniqueInputSchema';
import { TicketUpdateWithoutCustomerInputSchema } from './TicketUpdateWithoutCustomerInputSchema';
import { TicketUncheckedUpdateWithoutCustomerInputSchema } from './TicketUncheckedUpdateWithoutCustomerInputSchema';
import { TicketCreateWithoutCustomerInputSchema } from './TicketCreateWithoutCustomerInputSchema';
import { TicketUncheckedCreateWithoutCustomerInputSchema } from './TicketUncheckedCreateWithoutCustomerInputSchema';

export const TicketUpsertWithWhereUniqueWithoutCustomerInputSchema: z.ZodType<Prisma.TicketUpsertWithWhereUniqueWithoutCustomerInput> = z.strictObject({
  where: z.lazy(() => TicketWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TicketUpdateWithoutCustomerInputSchema), z.lazy(() => TicketUncheckedUpdateWithoutCustomerInputSchema) ]),
  create: z.union([ z.lazy(() => TicketCreateWithoutCustomerInputSchema), z.lazy(() => TicketUncheckedCreateWithoutCustomerInputSchema) ]),
});

export default TicketUpsertWithWhereUniqueWithoutCustomerInputSchema;
