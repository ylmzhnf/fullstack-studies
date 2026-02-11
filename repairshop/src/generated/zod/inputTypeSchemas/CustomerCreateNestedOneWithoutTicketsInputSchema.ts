import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { CustomerCreateWithoutTicketsInputSchema } from './CustomerCreateWithoutTicketsInputSchema';
import { CustomerUncheckedCreateWithoutTicketsInputSchema } from './CustomerUncheckedCreateWithoutTicketsInputSchema';
import { CustomerCreateOrConnectWithoutTicketsInputSchema } from './CustomerCreateOrConnectWithoutTicketsInputSchema';
import { CustomerWhereUniqueInputSchema } from './CustomerWhereUniqueInputSchema';

export const CustomerCreateNestedOneWithoutTicketsInputSchema: z.ZodType<Prisma.CustomerCreateNestedOneWithoutTicketsInput> = z.strictObject({
  create: z.union([ z.lazy(() => CustomerCreateWithoutTicketsInputSchema), z.lazy(() => CustomerUncheckedCreateWithoutTicketsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CustomerCreateOrConnectWithoutTicketsInputSchema).optional(),
  connect: z.lazy(() => CustomerWhereUniqueInputSchema).optional(),
});

export default CustomerCreateNestedOneWithoutTicketsInputSchema;
