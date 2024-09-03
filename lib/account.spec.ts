import { describe, test, expect, beforeAll } from 'vitest';

import { Account } from './account';
import { banks } from './common/banks';

describe('Account', () => {
  let account: Account;

  beforeAll(() => {
    account = new Account();
  });

  describe('banks', () => {
    test('should return a bank from the banks array', () => {
      const result = account.banks();
      expect(banks).toContain(result);
    });
  });

  describe('accountNumber', () => {
    test('should generate an account number with default length of 10', () => {
      const result = account.accountNumber();
      expect(result).toMatch(/^\d{10}$/);
    });

    test('should generate an account number with specified length', () => {
      const result = account.accountNumber(15);
      expect(result).toMatch(/^\d{15}$/);
    });

    test('should generate different account numbers on subsequent calls', () => {
      const result1 = account.accountNumber();
      const result2 = account.accountNumber();
      expect(result1).not.toBe(result2);
    });
  });
});
