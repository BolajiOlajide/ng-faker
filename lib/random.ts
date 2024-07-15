export class Random {
  /**
   * Generate a random number between min and max
   *
   * @param min (optional, default: 0)
   * @param max  (optional, default: 9)
   * @returns number
   */
  number(min: number = 0, max: number = 9): number {
    if (min > max) {
      [min, max] = [max, min]
    }

    // Calculate the range
    const range = max - min + 1;

    // Generate random number and scale it to the range
    const randomInRange = Math.floor(Math.random() * range);

    // Shift the random number to start from the minimum value
    return randomInRange + min;
  }
}
