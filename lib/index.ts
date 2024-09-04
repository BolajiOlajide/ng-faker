import { ZodError } from 'zod';

import { Locale } from './types';
import { ngFakerOptsSchema, type NgFakerOpts } from './schema';
import { Random } from './random';
import { Account } from './account';
import { Phone } from './phone';
import { Name } from './name';

class NgFaker {
  private locale: Locale;

  public random: Random;
  public account: Account;
  public phone: Phone;
  public name: Name;

  constructor(opts: NgFakerOpts) {
    try {
      ngFakerOptsSchema.parse(opts);
      this.locale = opts.locale ?? Locale.ENGLISH;

      this.random = new Random();
      this.account = new Account(this.random);
      this.phone = new Phone(this.random);
      this.name = new Name(this.locale, this.random);
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

export { NgFaker, Locale };
