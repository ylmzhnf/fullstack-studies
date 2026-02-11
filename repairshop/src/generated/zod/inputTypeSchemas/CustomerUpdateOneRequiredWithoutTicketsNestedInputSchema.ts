import type { Prisma } from '../../prisma/client';

import { z } from 'zod';
import { CustomerCreateWithoutTicketsInputSchema } from './CustomerCreateWithoutTicketsInputSchema';
import { CustomerUncheckedCreateWithoutTicketsInputSchema } from './CustomerUncheckedCreateWithoutTicketsInputSchema';
import { CustomerCreateOrConnectWithoutTicketsInputSchema } from './CustomerCreateOrConnectWithoutTicketsInputSchema';
import { CustomerUpsertWithoutTicketsInputSchema } from './CustomerUpsertWithoutTicketsInputSchema';
import { CustomerWhereUniqueInputSchema } from './CustomerWhereUniqueInputSchema';
import { CustomerUpdateToOneWithWhereWithoutTicketsInputSchema } from './CustomerUpdateToOneWithWhereWithoutTicketsInputSchema';
import { CustomerUpdateWithoutTicketsInputSchema } from './CustomerUpdateWithoutTicketsInputSchema';
import { CustomerUncheckedUpdateWithoutTicketsInputSchema } from './CustomerUncheckedUpdateWithoutTicketsInputSchema';

export const CustomerUpdateOneRequiredWithoutTicketsNestedInputSchema: z.ZodType<Prisma.CustomerUpdateOneRequiredWithoutTicketsNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => CustomerCreateWithoutTicketsInputSchema), z.lazy(() => CustomerUncheckedCreateWithoutTicketsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CustomerCreateOrConnectWithoutTicketsInputSchema).optional(),
  upsert: z.lazy(() => CustomerUpsertWithoutTicketsInputSchema).optional(),
  connect: z.lazy(() => CustomerWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => CustomerUpdateToOneWithWhereWithoutTicketsInputSchema), z.lazy(() => CustomerUpdateWithoutTicketsInputSchema), z.lazy(() => CustomerUncheckedUpdateWithoutTicketsInputSchema) ]).optional(),
});

export default CustomerUpdateOneRequiredWithoutTicketsNestedInputSchema;
