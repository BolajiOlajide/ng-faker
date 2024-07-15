import { z } from 'zod';

import { Locale } from './types';

export const ngFakerOptsSchema = z.object({
  locale: z.nativeEnum(Locale).optional(),
});

export type NgFakerOpts = z.infer<typeof ngFakerOptsSchema>;
