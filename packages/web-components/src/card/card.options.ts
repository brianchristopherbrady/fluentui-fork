import { ValuesOf } from '@microsoft/fast-foundation';

/**
 *
 * @public
 */
export const CardAppearance = {
  strong: 'strong',
  brand: 'brand',
  subtle: 'subtle',
  default: 'default',
} as const;

/**
 * The types for..
 * @public
 */
export type CardAppearance = ValuesOf<typeof CardAppearance>;
