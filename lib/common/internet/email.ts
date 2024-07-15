import { z } from 'zod';

export const domainSuffixSchema = z.enum(['com', 'ng', 'com.ng', 'org', 'net']);

export type DomainSuffix = z.infer<typeof domainSuffixSchema>;
