import { css } from '@microsoft/fast-element';
import { display } from '@microsoft/fast-foundation';
import {
  borderRadiusMedium,
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
  shadow4,
  shadow8,
  spacingHorizontalL,
  spacingVerticalL,
  strokeWidthThin,
} from '../theme/design-tokens.js';

/** Divider styles
 * @public
 */
export const styles = css`
  ${display('flex')}

  :host {
    flex-direction: column;
    font-family: ${fontFamilyBase};
    background: ${colorNeutralBackground1};
    border: ${strokeWidthThin} solid ${colorTransparentStroke};
    border-radius: ${borderRadiusMedium};
    position: relative;
    row-gap: ${spacingVerticalL};
    column-gap: ${spacingHorizontalL};
    max-width: 100%;
    margin: auto;
    overflow: hidden;
    box-shadow: ${shadow4};
    row-gap: var(--card--size, 12px);
    column-gap: var(--card--size, 12px);
    padding: var(--card--size, 12px);
    box-sizing: border-box;
  }

  :host([orientation='horizontal']) .actions {
    grid-row-start: span 2;
  }

  :host([orientation='horizontal']) {
    flex-direction: row;
    height: fit-content;
    align-items: center;
  }

  :host([orientation='horizontal'])::slotted([slot='end']) {
    display: none;
  }

  :host([aria-disabled='true']) {
    background: ${colorNeutralBackgroundDisabled};
    border: ${strokeWidthThin} solid ${colorTransparentStrokeDisabled};
    shadow: ${shadow4};
    cursor: not-allowed;
    pointer-events: none;
  }
  :host([interactive]) {
    cursor: pointer;
  }
  :host([aria-selected='true']) {
    background: ${colorNeutralBackground1Selected};
    border: ${strokeWidthThin} solid ${colorTransparentStrokeInteractive};
    cursor: pointer;
  }
  :host([interactive]:active) {
    background: ${colorNeutralBackground1Pressed};
    border: ${strokeWidthThin} solid ${colorTransparentStrokeInteractive};
  }
  :host([interactive]:hover:not([appearance='subtle'])) {
    background: ${colorNeutralBackground1Hover};
    border: ${strokeWidthThin} solid ${colorTransparentStrokeInteractive};
    box-shadow: ${shadow8};
  }

  /** filled alternative appearance */
  :host([appearance='filled-alternative']) {
    background: ${colorNeutralBackground2};
  }

  /** filled alternative appearance - interactive */

  :host([appearance='filled-alternative'][aria-selected='true']) {
    background: ${colorNeutralBackground2Selected};
    border: ${strokeWidthThin} solid ${colorTransparentStrokeInteractive};
  }

  :host([interactive][appearance='filled-alternative']:hover) {
    background: ${colorNeutralBackground2Hover};
    border: ${strokeWidthThin} solid ${colorTransparentStrokeInteractive};
  }

  :host([interactive][appearance='filled-alternative']:active) {
    background: ${colorNeutralBackground2Pressed};
    border: ${strokeWidthThin} solid ${colorTransparentStrokeInteractive};
  }

  /** outline appearance */

  :host([appearance='outline']) {
    background: ${colorTransparentBackground};
    border: ${strokeWidthThin} solid ${colorNeutralStroke1};
  }

  /** outline appearance - interactive */

  :host([appearance='outline'][aria-selected='true']) {
    background: ${colorTransparentBackgroundSelected};
    border: ${strokeWidthThin} solid ${colorNeutralStroke1Selected};
  }

  :host([interactive][appearance='outline']:hover) {
    background: ${colorTransparentBackgroundHover};
    border: ${strokeWidthThin} solid ${colorNeutralStroke1Hover};
  }

  :host([interactive][appearance='outline']:active) {
    background: ${colorTransparentBackgroundPressed};
    border: ${strokeWidthThin} solid ${colorNeutralStroke1Pressed};
  }

  /** subtle appearance */
  :host([appearance='subtle']) {
    background: ${colorSubtleBackground};
    border: ${strokeWidthThin} solid ${colorTransparentStroke};
    box-shadow: none;
  }

  /** subtle  appearance - interactive */

  :host([appearance='subtle'][aria-selected='true']) {
    background: ${colorSubtleBackgroundSelected};
    border: ${strokeWidthThin} solid ${colorNeutralStroke1Selected};
  }

  :host([interactive][appearance='subtle']:hover) {
    background: ${colorSubtleBackgroundHover};
    border: ${strokeWidthThin} solid ${colorTransparentStroke};
  }

  :host([interactive][appearance='subtle']:active) {
    background: ${colorSubtleBackgroundPressed};
    border: ${strokeWidthThin} solid ${colorTransparentStroke};
  }

  :host([orientation='horizontal']) {
    flex-direction: row;
  }
  :host([orientation='horizontal']) .footer {
    display: none;
  }
`;
