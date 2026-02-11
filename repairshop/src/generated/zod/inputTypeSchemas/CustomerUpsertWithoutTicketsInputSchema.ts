import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { CustomerUpdateWithoutTicketsInputSchema } from './CustomerUpdateWithoutTicketsInputSchema';
import { CustomerUncheckedUpdateWithoutTicketsInputSchema } from './CustomerUncheckedUpdateWithoutTicketsInputSchema';
import { CustomerCreateWithoutTicketsInputSchema } from './CustomerCreateWithoutTicketsInputSchema';
import { CustomerUncheckedCreateWithoutTicketsInputSchema } from './CustomerUncheckedCreateWithoutTicketsInputSchema';
import { CustomerWhereInputSchema } from './CustomerWhereInputSchema';

export const CustomerUpsertWithoutTicketsInputSchema: z.ZodType<Prisma.CustomerUpsertWithoutTicketsInput> = z.strictObject({
  update: z.union([ z.lazy(() => CustomerUpdateWithoutTicketsInputSchema), z.lazy(() => CustomerUncheckedUpdateWithoutTicketsInputSchema) ]),
  create: z.union([ z.lazy(() => CustomerCreateWithoutTicketsInputSchema), z.lazy(() => CustomerUncheckedCreateWithoutTicketsInputSchema) ]),
  where: z.lazy(() => CustomerWhereInputSchema).optional(),
});

export default CustomerUpsertWithoutTicketsInputSchema;
