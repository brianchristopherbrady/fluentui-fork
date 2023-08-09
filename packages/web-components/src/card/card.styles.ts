import { css } from '@microsoft/fast-element';
import { display } from '@microsoft/fast-foundation';
import {
  colorNeutralBackground1,
  colorNeutralBackground1Hover,
  colorNeutralBackground1Pressed,
  colorNeutralBackground1Selected,
  colorNeutralBackground2,
  colorNeutralBackground2Hover,
  colorNeutralBackground2Pressed,
  colorNeutralBackground2Selected,
  colorNeutralBackgroundDisabled,
  colorNeutralStroke1,
  colorNeutralStroke1Hover,
  colorNeutralStroke1Pressed,
  colorNeutralStroke1Selected,
  colorSubtleBackground,
  colorSubtleBackgroundHover,
  colorSubtleBackgroundPressed,
  colorSubtleBackgroundSelected,
  colorTransparentBackground,
  colorTransparentBackgroundHover,
  colorTransparentBackgroundPressed,
  colorTransparentBackgroundSelected,
  colorTransparentStroke,
  colorTransparentStrokeDisabled,
  colorTransparentStrokeInteractive,
  fontFamilyBase,
  spacingHorizontalL,
  spacingHorizontalM,
  spacingHorizontalS,
  spacingVerticalL,
  spacingVerticalM,
  spacingVerticalS,
  strokeWidthThin,
} from '../theme/design-tokens.js';

/** Divider styles
 * @public
 */
export const styles = css`
  ${display('flex')}

  :host {
    padding: ${spacingVerticalM} ${spacingHorizontalM};
    flex-direction: column;
    font-family: ${fontFamilyBase};
    background: ${colorNeutralBackground1};
    border: ${strokeWidthThin} solid ${colorTransparentStroke};
  }
  :host([aria-checked='true']) {
    background: ${colorNeutralBackground1Selected};
    border: ${strokeWidthThin} solid ${colorTransparentStrokeInteractive};
    cursor: pointer;
  }
  :host([aria-disabled='true']) {
    background: ${colorNeutralBackgroundDisabled};
    border: ${strokeWidthThin} solid ${colorTransparentStrokeDisabled};
    cursor: not-allowed;
  }
  :host(:focus-visible) {
    background: ${colorNeutralBackground1};
    cursor: pointer;
  }
  :host([interactive]):hover {
    background: ${colorNeutralBackground1Hover};
    border: ${strokeWidthThin} solid ${colorTransparentStrokeInteractive};
    cursor: pointer;
  }
  :host([interactive]):active {
    background: ${colorNeutralBackground1Pressed};
    border: ${strokeWidthThin} solid ${colorTransparentStrokeInteractive};
    cursor: pointer;
  }

  /** filled alternative appearance */
  :host([appearance='filled-alternative']) {
    background: ${colorNeutralBackground2};
  }
  :host([appearance='filled-alternative']):focus-visible {
    cursor: pointer;
  }
  :host([appearance='filled-alternative'][aria-checked='true']) {
    background: ${colorNeutralBackground2Selected};
    border: ${strokeWidthThin} solid ${colorTransparentStrokeInteractive};
    cursor: pointer;
  }

  /** filled alternative appearance - interactive */
  :host([interactive][appearance='filled-alternative']):hover {
    background: ${colorNeutralBackground2Hover};
    border: ${strokeWidthThin} solid ${colorTransparentStrokeInteractive};
    cursor: pointer;
  }

  :host([interactive][appearance='filled-alternative']):active {
    background: ${colorNeutralBackground2Pressed};
    border: ${strokeWidthThin} solid ${colorTransparentStrokeInteractive};
    cursor: pointer;
  }

  /** outline appearance */

  :host([appearance='outline']) {
    background: ${colorNeutralBackground2};
  }
  :host([appearance='outline']):focus-visible {
    cursor: pointer;
  }
  :host([appearance='outline'][aria-checked='true']) {
    background: ${colorTransparentBackgroundSelected};
    border: ${strokeWidthThin} solid ${colorNeutralStroke1};
    cursor: pointer;
  }

  /** outline appearance - interactive */

  :host([interactive][appearance='outline']) {
    background: ${colorTransparentBackground};
    border: ${strokeWidthThin} solid ${colorNeutralStroke1};
    cursor: pointer;
  }

  :host([interactive][appearance='outline']):hover {
    background: ${colorTransparentBackgroundHover};
    border: ${strokeWidthThin} solid ${colorNeutralStroke1Hover};
    cursor: pointer;
  }

  :host([interactive][appearance='outline']):active {
    background: ${colorTransparentBackgroundPressed};
    border: ${strokeWidthThin} solid ${colorNeutralStroke1Pressed};
    cursor: pointer;
  }

  /** subtle appearance */
  :host([appearance='subtle']) {
    background: ${colorSubtleBackground};
    border: ${strokeWidthThin} solid ${colorTransparentStroke};
  }

  :host([appearance='subtle'][aria-checked='true']) {
    background: ${colorSubtleBackgroundSelected};
    border: ${strokeWidthThin} solid ${colorNeutralStroke1Selected};
  }

  /** subtle  appearance - interactive */

  :host([interactive][appearance='subtle']):hover {
    background: ${colorSubtleBackgroundHover};
    border: ${strokeWidthThin} solid ${colorNeutralStroke1Hover};
    cursor: pointer;
  }

  :host([interactive][appearance='subtle']):active {
    background: ${colorSubtleBackgroundPressed};
    border: ${strokeWidthThin} solid ${colorNeutralStroke1Pressed};
    cursor: pointer;
  }

  :host([orientation='horizontal']) {
    flex-direction: row;
  }
  :host([control-size='small']) {
    padding: ${spacingVerticalS} ${spacingHorizontalS};
  }
  :host([control-size='large']) {
    padding: ${spacingVerticalL} ${spacingHorizontalL};
  }

  :host([appearance='outline']) {
  }
  :host([appearance='subtle']) {
  }
`;
