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
    expect().toB;
  });
});
