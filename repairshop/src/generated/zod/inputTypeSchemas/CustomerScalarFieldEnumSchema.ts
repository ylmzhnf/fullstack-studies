import { z } from 'zod';

export const CustomerScalarFieldEnumSchema = z.enum(['id','firstName','lastName','email','phone','address1','address2','city','state','zip','notes','active','createdAt','updatedAt']);

export default CustomerScalarFieldEnumSchema;
