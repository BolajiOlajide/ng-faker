import type { Gender } from '../types';

export interface Localizer {
  firstName(gender: Gender): string;
  lastName(): string;
  prefix(): string;
}
