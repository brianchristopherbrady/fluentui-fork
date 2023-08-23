import { ElementStyles, attr, css } from '@microsoft/fast-element';
import { FASTCard, StartEndOptions } from '@microsoft/fast-foundation';
import { keyEnter, keySpace } from '@microsoft/fast-web-utilities';
import { CardAppearance, CardControlSize, CardOrientation } from './card.options.js';

/**
 * Card configuration options
 * @public
 */
export type CardOptions = StartEndOptions<Card>;

/**
 * @class Card component
 *
 * @remarks
 * This class extends the FASTCard. a flexible content container
 */
export class Card extends FASTCard {
  public connectedCallback(): void {
    super.connectedCallback();
    this.updateComputedStylesheet();
  }

  private computedStylesheet?: ElementStyles;

  public sizeChanged(prev: boolean | undefined, next: boolean): void {
    this.updateComputedStylesheet();
  }

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
   * @property selected
   * @default false
   * @remarks
   * Determines selected state of card
   */
  @attr({ mode: 'boolean' })
  public selected: boolean = false;

  /**
   * @property disabled
   * @default false
   * @remarks
   * Determines disabled state of card
   */
  @attr({ mode: 'boolean' })
  public disabled: boolean = false;

  /**
   * Updates an internal stylesheet with calculated CSS custom properties.
   *
   * @internal
   */
  protected updateComputedStylesheet(): void {
    // Determine the pixel value based on the controlSize attribute
    let sizeValue;
    switch (this.controlSize) {
      case CardControlSize.small:
        sizeValue = '8px';
        break;
      case CardControlSize.medium:
        sizeValue = '12px';
        break;
      case CardControlSize.large:
        sizeValue = '16px';
        break;
      default:
        sizeValue = '12px';
        break;
    }

    this.$fastController.removeStyles(this.computedStylesheet);
    this.computedStylesheet = css`
      :host {
        --card--size: ${sizeValue};
      }
    `;

    this.$fastController.addStyles(this.computedStylesheet);
  }

  /**
   * Handle the checked state of the Card when interactive
   *
   * @param e - the mouse event
   * @internal
   */
  public clickHandler(e: MouseEvent): boolean | void {
    if (!this.disabled && this.interactive) {
      console.log(this.interactive);
      this.selected = !this.selected;
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
        if (!this.disabled && this.interactive) {
          this.selected = !this.selected;
        }
        break;
      }
      default:
        return true;
    }
  }
}
