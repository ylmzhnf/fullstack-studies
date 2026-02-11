import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { TicketCreateWithoutCustomerInputSchema } from './TicketCreateWithoutCustomerInputSchema';
import { TicketUncheckedCreateWithoutCustomerInputSchema } from './TicketUncheckedCreateWithoutCustomerInputSchema';
import { TicketCreateOrConnectWithoutCustomerInputSchema } from './TicketCreateOrConnectWithoutCustomerInputSchema';
import { TicketUpsertWithWhereUniqueWithoutCustomerInputSchema } from './TicketUpsertWithWhereUniqueWithoutCustomerInputSchema';
import { TicketCreateManyCustomerInputEnvelopeSchema } from './TicketCreateManyCustomerInputEnvelopeSchema';
import { TicketWhereUniqueInputSchema } from './TicketWhereUniqueInputSchema';
import { TicketUpdateWithWhereUniqueWithoutCustomerInputSchema } from './TicketUpdateWithWhereUniqueWithoutCustomerInputSchema';
import { TicketUpdateManyWithWhereWithoutCustomerInputSchema } from './TicketUpdateManyWithWhereWithoutCustomerInputSchema';
import { TicketScalarWhereInputSchema } from './TicketScalarWhereInputSchema';

export const TicketUpdateManyWithoutCustomerNestedInputSchema: z.ZodType<Prisma.TicketUpdateManyWithoutCustomerNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => TicketCreateWithoutCustomerInputSchema), z.lazy(() => TicketCreateWithoutCustomerInputSchema).array(), z.lazy(() => TicketUncheckedCreateWithoutCustomerInputSchema), z.lazy(() => TicketUncheckedCreateWithoutCustomerInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TicketCreateOrConnectWithoutCustomerInputSchema), z.lazy(() => TicketCreateOrConnectWithoutCustomerInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TicketUpsertWithWhereUniqueWithoutCustomerInputSchema), z.lazy(() => TicketUpsertWithWhereUniqueWithoutCustomerInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TicketCreateManyCustomerInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TicketWhereUniqueInputSchema), z.lazy(() => TicketWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TicketWhereUniqueInputSchema), z.lazy(() => TicketWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TicketWhereUniqueInputSchema), z.lazy(() => TicketWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TicketWhereUniqueInputSchema), z.lazy(() => TicketWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TicketUpdateWithWhereUniqueWithoutCustomerInputSchema), z.lazy(() => TicketUpdateWithWhereUniqueWithoutCustomerInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TicketUpdateManyWithWhereWithoutCustomerInputSchema), z.lazy(() => TicketUpdateManyWithWhereWithoutCustomerInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TicketScalarWhereInputSchema), z.lazy(() => TicketScalarWhereInputSchema).array() ]).optional(),
});

export default TicketUpdateManyWithoutCustomerNestedInputSchema;
