import { attr } from '@microsoft/fast-element';
import { FASTCard } from '@microsoft/fast-foundation';

/**
 * @class Card component
 *
 * @remarks
 * This class extends the FASTCard. a flexible content container
 */
export class Card extends FASTCard {
  /**
   * @property alignContent
   * @default center
   * @remarks
   * Determines the
   */
  @attr({ attribute: 'control-size' })
  public controlSizse?: cardSizes;
}
