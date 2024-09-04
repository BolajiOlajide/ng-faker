import { serviceProviders } from './common/phone';
import type { Random } from './random';

export class Phone {
  private random: Random;

  constructor(random: Random) {
    this.random = random;
  }

  serviceProvider(): string {
    return this.random.arrayElement(serviceProviders)!;
  }

  number(intl: boolean = false): string {
    let phoneNumber: string;
    if (intl) {
      phoneNumber = '+234';
    } else {
      phoneNumber = '0';
    }

    for (var i = 0; i < 10; i++) {
      phoneNumber += this.random.number(0, 9);
    }
    return phoneNumber;
  }
}
