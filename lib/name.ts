import type { Random } from './random';
import { Gender, type Locale } from './types';

export class Name {
  private locale: Locale;
  private random: Random;

  constructor(locale: Locale, random: Random) {
    this.locale = locale;
    this.random = random;
  }

  private selectRandomGender(): Gender {
    return this.random.boolean() ? Gender.FEMALE : Gender.MALE;
  }

  firstName(gender?: Gender): string {
    const chosenGender = gender ?? this.selectRandomGender();
    return '';

    // if (gender === 0) {
    //   return ngFaker.random.arrayElement(ngFaker.definitions.name.male_first_name);
    // }
    // return ngFaker.random.arrayElement(ngFaker.definitions.name.female_first_name);
  }
}
