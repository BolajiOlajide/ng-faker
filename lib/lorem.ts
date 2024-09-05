import type { Localizer } from "./locales";
import { BeninLocale } from './locales/benin';
import { EfikLocale } from './locales/efik';
import { EnglishLocale } from './locales/english';
import { HausaLocale } from './locales/hausa';
import { IgboLocale } from './locales/igbo';
import { UrhoboLocale } from './locales/urhobo';
import { YorubaLocale } from './locales/yoruba';
import type { Random } from "./random";
import { Locale } from "./types";

export class Lorem {
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

  word(): string {
    return this.localizer.word();
  }

  phrase(): string {
    return this.localizer.phrase();
  }
}
