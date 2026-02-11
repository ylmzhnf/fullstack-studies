import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { CustomerWhereUniqueInputSchema } from './CustomerWhereUniqueInputSchema';
import { CustomerCreateWithoutTicketsInputSchema } from './CustomerCreateWithoutTicketsInputSchema';
import { CustomerUncheckedCreateWithoutTicketsInputSchema } from './CustomerUncheckedCreateWithoutTicketsInputSchema';

export const CustomerCreateOrConnectWithoutTicketsInputSchema: z.ZodType<Prisma.CustomerCreateOrConnectWithoutTicketsInput> = z.strictObject({
  where: z.lazy(() => CustomerWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CustomerCreateWithoutTicketsInputSchema), z.lazy(() => CustomerUncheckedCreateWithoutTicketsInputSchema) ]),
});

export default CustomerCreateOrConnectWithoutTicketsInputSchema;
