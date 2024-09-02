import { ZodError } from 'zod';

import { Locale } from './types';
import { ngFakerOptsSchema, type NgFakerOpts } from './schema';
import { Random } from './random';

const definitions = {
  name: ['male_first_name', 'last_name', 'female_first_name', 'prefix'],
  address: ['state', 'local_government'],
  internet: ['domain_suffix', 'example_email', 'email_suffix', 'free_email'],
} as const;

class NgFaker {
  private locale: Locale;

  public random: Random;

  constructor(opts: NgFakerOpts) {
    try {
      ngFakerOptsSchema.parse(opts);
      if (!opts.locale) {
        opts.locale = Locale.ENGLISH;
      }
      this.locale = opts.locale;

      this.random = new Random();
    } catch (err: unknown) {
      if (err instanceof ZodError) {
        // We want to display Zod errors one at a time, so we stick
        // to a similar format for returning errors.
        const [firstError] = err.errors;
        throw new Error(firstError?.message);
      }
      throw err;
    }
  }

  setLocale(locale: Locale) {
    this.locale = locale;
  }
}

const ngf = new NgFaker({ locale: Locale.ENGLISH });
ngf.random.number(1, 10);

// const LocaleData: Record<Locale, unknown> = {
//   [Locale.ENGLISH]: null,
//   [Locale.YORUBA]: null,
//   [Locale.HAUSA]: null,
//   [Locale.IGBO]: null,
// } as const;

export { NgFaker, Locale };
