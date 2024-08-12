import { Random } from "./random";

export const slugify = (str: string): string => str.replace(/ /g, '-').replace(/[^\w.-]+/g, '');

export const pastYear = (years: number, refDate: string): number => {
  /**
   * If we ever decide to generate dates we
   * can move this function into a date class.
   * For now, this can remain as a helper
   */
  const ds = Date.parse(refDate)

  const date = (!ds || isNaN(ds)) ? new Date() : new Date(ds);
  const range = {
    min: 1000,
    max: (years || 1) * 365 * 24 * 3600 * 1000
  };

  let currTime = date.getTime()
  const random = new Random();
  // some time from now to N years ago, in milliseconds
  currTime -= random.number(range.min, range.max);
  date.setTime(currTime);
  return date.getFullYear();
}
