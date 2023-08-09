import { attr } from '@microsoft/fast-element';
import { FASTCard } from '@microsoft/fast-foundation';
import { keyEnter, keySpace } from '@microsoft/fast-web-utilities';
import { CardAppearance, CardControlSize, CardOrientation } from './card.options.js';

/**
 * @class Card component
 *
 * @remarks
 * This class extends the FASTCard. a flexible content container
 */
export class Card extends FASTCard {
  /**
   * @property orientation;
   * @default filled
   * @remarks
   * Determines the orientation of the card
   */
  @attr
  public appearance?: CardAppearance;

  /**
   * @property orientation;
   * @default vertical
   * @remarks
   * Determines the orientation of the card
   */
  @attr
  public orientation?: CardOrientation;

  /**
   * @property controlSize
   * @default medium
   * @remarks
   * Determines the size of the card
   */
  @attr({ attribute: 'control-size' })
  public controlSize?: CardControlSize;

  /**
   * @property selectable
   * @default false
   * @remarks
   * Determines whether card is interactable
   */
  @attr({ mode: 'boolean' })
  public interactive: boolean = false;

  /**
   * @property checked
   * @default false
   * @remarks
   * Determines checked state of card
   */
  @attr({ mode: 'boolean' })
  public checked: boolean = false;

  /**
   * @property disabled
   * @default false
   * @remarks
   * Determines disabled state of card
   */
  @attr({ mode: 'boolean' })
  public disabled: boolean = false;

  /**
   * Handle the checked state of the Card when interactive
   *
   * @param e - the mouse event
   * @internal
   */
  public clickHandler(e: MouseEvent): boolean | void {
    if (!this.disabled || this.interactive) {
      this.checked = !this.checked;
    }
  }

  /**
   * Handle keyboard interaction for the select.
   *
   * @param e - the keyboard event
   * @internal
   */
  public keydownHandler(e: KeyboardEvent): boolean | void {
    const key = e.key || e.key.charCodeAt(0);

    switch (key) {
      case keyEnter:
      case keySpace: {
        e.preventDefault();
        if (!this.disabled || this.interactive) {
          this.checked = !this.checked;
        }
        break;
      }
      default:
        return true;
    }
  }
}
