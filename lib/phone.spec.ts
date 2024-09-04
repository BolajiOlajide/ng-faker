import { describe, test, expect, beforeEach } from 'vitest';

import { Phone } from './phone';
import { serviceProviders } from './common/phone';
import { Random } from './random';

describe('Phone', () => {
  let phone: Phone;

  beforeEach(() => {
    const random = new Random();
    phone = new Phone(random);
  });

  describe('serviceProvider', () => {
    test('should return a service provider from the serviceProviders array', () => {
      const result = phone.serviceProvider();

      expect(serviceProviders).toContain(result);
    });
  });

  describe('number', () => {
    test('should generate a local phone number starting with 0', () => {
      const result = phone.number();

      expect(result).toHaveLength(11);
      expect(result.startsWith('0')).toEqual(true);
      expect(result).toMatch(/^0\d+$/);
    });

    test('should generate an international phone number starting with +234', () => {
      const result = phone.number(true);

      expect(result).toHaveLength(14);
      expect(result.startsWith('+234')).toEqual(true);
      expect(result).toMatch(/^\+234\d+$/);
    });
  });
});
