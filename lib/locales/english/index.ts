import type { Localizer } from '..';
import type { Random } from '../../random';
import { Gender } from '../../types';
import { maleFirstNames, femaleFirstNames, lastNames, prefix } from './names';
import { phrases, words } from './words';

class EnglishLocale implements Localizer {
  private random: Random;

  constructor(random: Random) {
    this.random = random;
  }

  public firstName(gender: Gender): string {
    return this.random.arrayElement(
      gender === Gender.MALE ? maleFirstNames : femaleFirstNames,
    ) as string;
  }

  public lastName(): string {
    return this.random.arrayElement(lastNames) as string;
  }

  public prefix(): string {
    return this.random.arrayElement(prefix) as string;
  }

  public word(): string {
    return this.random.arrayElement(words) as string;
  }

  public phrase(): string {
    return this.random.arrayElement(phrases) as string;
  }
}

export { EnglishLocale };
