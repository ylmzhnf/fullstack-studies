import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { TicketCreateWithoutCustomerInputSchema } from './TicketCreateWithoutCustomerInputSchema';
import { TicketUncheckedCreateWithoutCustomerInputSchema } from './TicketUncheckedCreateWithoutCustomerInputSchema';
import { TicketCreateOrConnectWithoutCustomerInputSchema } from './TicketCreateOrConnectWithoutCustomerInputSchema';
import { TicketCreateManyCustomerInputEnvelopeSchema } from './TicketCreateManyCustomerInputEnvelopeSchema';
import { TicketWhereUniqueInputSchema } from './TicketWhereUniqueInputSchema';

export const TicketUncheckedCreateNestedManyWithoutCustomerInputSchema: z.ZodType<Prisma.TicketUncheckedCreateNestedManyWithoutCustomerInput> = z.strictObject({
  create: z.union([ z.lazy(() => TicketCreateWithoutCustomerInputSchema), z.lazy(() => TicketCreateWithoutCustomerInputSchema).array(), z.lazy(() => TicketUncheckedCreateWithoutCustomerInputSchema), z.lazy(() => TicketUncheckedCreateWithoutCustomerInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TicketCreateOrConnectWithoutCustomerInputSchema), z.lazy(() => TicketCreateOrConnectWithoutCustomerInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TicketCreateManyCustomerInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TicketWhereUniqueInputSchema), z.lazy(() => TicketWhereUniqueInputSchema).array() ]).optional(),
});

export default TicketUncheckedCreateNestedManyWithoutCustomerInputSchema;
