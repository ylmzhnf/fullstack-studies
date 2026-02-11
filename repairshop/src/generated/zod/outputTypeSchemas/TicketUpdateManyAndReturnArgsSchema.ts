import { z } from 'zod';
import type { Prisma } from '../../prisma/client';
import { TicketUpdateManyMutationInputSchema } from '../inputTypeSchemas/TicketUpdateManyMutationInputSchema'
import { TicketUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/TicketUncheckedUpdateManyInputSchema'
import { TicketWhereInputSchema } from '../inputTypeSchemas/TicketWhereInputSchema'

export const TicketUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.TicketUpdateManyAndReturnArgs> = z.object({
  data: z.union([ TicketUpdateManyMutationInputSchema, TicketUncheckedUpdateManyInputSchema ]),
  where: TicketWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default TicketUpdateManyAndReturnArgsSchema;
