import type { Localizer } from './locales';
import { BeninLocale } from './locales/benin';
import { EfikLocale } from './locales/efik';
import { EnglishLocale } from './locales/english';
import { HausaLocale } from './locales/hausa';
import { IgboLocale } from './locales/igbo';
import { UrhoboLocale } from './locales/urhobo';
import { YorubaLocale } from './locales/yoruba';
import type { Random } from './random';
import { Gender, Locale } from './types';

export class Name {
  private locale: Locale;
  private random: Random;
  private localizer: Localizer;

  constructor(locale: Locale, random: Random) {
    this.locale = locale;
    this.random = random;
    this.localizer = this.setLocalizer();
  }

  private setLocalizer(): Localizer {
    switch (this.locale) {
      case Locale.BENIN:
        return new BeninLocale(this.random);
      case Locale.YORUBA:
        return new YorubaLocale(this.random);
      case Locale.IGBO:
        return new IgboLocale(this.random);
      case Locale.HAUSA:
        return new HausaLocale(this.random);
      case Locale.EFIK:
        return new EfikLocale(this.random);
      case Locale.URHOBO:
        return new UrhoboLocale(this.random);
      case Locale.ENGLISH:
        return new EnglishLocale(this.random);
      default:
        throw new Error(`Locale "${this.locale}" not supported`);
    }
  }

  private selectRandomGender(): Gender {
    return this.random.boolean() ? Gender.FEMALE : Gender.MALE;
  }

  /**
   * returns a single random first name based on the locale set
   *
   * @method firstName
   * @param {Enum} gender: Gender
   */
  firstName(gender?: Gender): string {
    const chosenGender = gender ?? this.selectRandomGender();
    return this.localizer.firstName(chosenGender);
  }

  /**
   * returns a single random last name based on the locale set
   *
   * @method lastName
   */
  lastName(): string {
    return this.localizer.lastName();
  }

  /**
   * returns a name prefix depending on the locale set
   *
   * @method prefix
   */
  prefix(): string {
    return this.localizer.prefix();
  }

   /**
   * returns a random full name
   *
   * @method fullName
   */
  fullName(): string {
    return `${this.prefix()} ${this.firstName()} ${this.lastName()}`;
  }
}
