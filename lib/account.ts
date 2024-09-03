import { banks } from './common/banks'
import { Random } from './random'

export class Account {
  private random: Random;

  constructor() {
    this.random = new Random();
  }

  banks(): string | undefined {
    return this.random.arrayElement(banks);
  }

  accountNumber(count: number = 10): string {
    let accountNumber: string = '';

    for (let i = 0; i < count; i++) {
      accountNumber += this.random.number(0, 9);
    }

    return accountNumber;
  }
}
