import { test, describe, beforeAll, beforeEach, expect } from 'vitest';

import { Random } from './random.js';

describe('Random', () => {
  let rand: Random;

  beforeEach(() => {
    rand = new Random();
  });

  describe('number', () => {
    test('random number is never less than the min specified', () => {
      const num = rand.number(3);
      expect(num).toBeGreaterThanOrEqual(3);
    });

    test('random number is never greater than the max specified', () => {
      const num = rand.number(3, 5);
      expect(num).toBeLessThanOrEqual(5);
    });

    test('default argument should be between 0 and 9', () => {
      const num = rand.number();
      expect(num).toBeLessThanOrEqual(9);
      expect(num).toBeGreaterThanOrEqual(0);
    });
  });

  describe('arrayElement', () => {
    const items = ['a', 'b', 'c', 'd'];

    test('should return undefined when an empty array is passed', () => {
      const it = rand.arrayElement([]);
      expect(it).toBeUndefined();
    });

    test('should return a random element from the array passed', () => {
      const it = rand.arrayElement(items);
      expect(items).toContain(it);
    });
  });

  describe('objectElement', () => {
    const itemsObj = {
      firstName: 'Jane',
      lastName: 'Doe',
      age: 292
    };

    test('returns undefined when an empty object is passed', () => {
      const it = rand.objectElement({})
      expect(it).toBeUndefined();
    });

    test('returns a random key in the object', () => {
      const it = rand.objectElement(itemsObj);
      expect(Object.keys(itemsObj)).toContain(it);
    });
  });

  test('alphanumeric', () => {
    const randId = rand.alphanumeric(6);

    expect(randId).toHaveLength(6);
  });
});
