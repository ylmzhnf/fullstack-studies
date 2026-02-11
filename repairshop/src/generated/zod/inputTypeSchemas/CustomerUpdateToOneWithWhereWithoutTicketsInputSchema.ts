import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { CustomerWhereInputSchema } from './CustomerWhereInputSchema';
import { CustomerUpdateWithoutTicketsInputSchema } from './CustomerUpdateWithoutTicketsInputSchema';
import { CustomerUncheckedUpdateWithoutTicketsInputSchema } from './CustomerUncheckedUpdateWithoutTicketsInputSchema';

export const CustomerUpdateToOneWithWhereWithoutTicketsInputSchema: z.ZodType<Prisma.CustomerUpdateToOneWithWhereWithoutTicketsInput> = z.strictObject({
  where: z.lazy(() => CustomerWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => CustomerUpdateWithoutTicketsInputSchema), z.lazy(() => CustomerUncheckedUpdateWithoutTicketsInputSchema) ]),
});

export default CustomerUpdateToOneWithWhereWithoutTicketsInputSchema;
