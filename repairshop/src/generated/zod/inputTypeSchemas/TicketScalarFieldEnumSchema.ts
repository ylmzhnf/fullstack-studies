import { z } from 'zod';

export const TicketScalarFieldEnumSchema = z.enum(['id','customerId','title','description','completed','tech','createdAt','updatedAt']);

export default TicketScalarFieldEnumSchema;
