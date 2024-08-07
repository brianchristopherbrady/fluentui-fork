import { css } from '@microsoft/fast-element';
import { disabledState } from '../styles/states/index.js';
import {
  borderRadiusMedium,
  colorNeutralForeground1,
  colorStrokeFocus2,
  fontFamilyBase,
  fontSizeBase200,
  fontSizeBase300,
  fontSizeBase400,
  fontWeightRegular,
  fontWeightSemibold,
  lineHeightBase200,
  lineHeightBase300,
  lineHeightBase400,
  spacingHorizontalM,
  spacingHorizontalS,
  spacingVerticalM,
  spacingVerticalS,
  spacingVerticalXXS,
  strokeWidthThick,
} from '../theme/design-tokens.js';
import { display } from '../utils/display.js';
import { ValidationFlags } from './field.options.js';

/**
 * Selector for the `focus-visible` state.
 * @public
 */
const focusVisibleState = css.partial`:is([state--focus-visible], :state(focus-visible))`;

/**
 * Selector for the `bad-input` state.
 * @public
 */
const badInputState = css.partial`:is([state--${ValidationFlags.badInput}], :state(${ValidationFlags.badInput}))`;

/**
 * Selector for the `custom-error` state.
 * @public
 */
const customErrorState = css.partial`:is([state--${ValidationFlags.customError}], :state(${ValidationFlags.customError}))`;

/**
 * Selector for the `pattern-mismatch` state.
 * @public
 */
const patternMismatchState = css.partial`:is([state--${ValidationFlags.patternMismatch}], :state(${ValidationFlags.patternMismatch}))`;

/**
 * Selector for the `range-overflow` state.
 * @public
 */
const rangeOverflowState = css.partial`:is([state--${ValidationFlags.rangeOverflow}], :state(${ValidationFlags.rangeOverflow}))`;

/**
 * Selector for the `range-underflow` state.
 * @public
 */
const rangeUnderflowState = css.partial`:is([state--${ValidationFlags.rangeUnderflow}], :state(${ValidationFlags.rangeUnderflow}))`;

/**
 * Selector for the `step-mismatch` state.
 * @public
 */
const stepMismatchState = css.partial`:is([state--${ValidationFlags.stepMismatch}], :state(${ValidationFlags.stepMismatch}))`;

/**
 * Selector for the `too-long` state.
 * @public
 */
const tooLongState = css.partial`:is([state--${ValidationFlags.tooLong}], :state(${ValidationFlags.tooLong}))`;

/**
 * Selector for the `too-short` state.
 * @public
 */
const tooShortState = css.partial`:is([state--${ValidationFlags.tooShort}], :state(${ValidationFlags.tooShort}))`;

/**
 * Selector for the `type-mismatch` state.
 * @public
 */
const typeMismatchState = css.partial`:is([state--${ValidationFlags.typeMismatch}], :state(${ValidationFlags.typeMismatch}))`;

/**
 * Selector for the `valid` state.
 * @public
 */
const validState = css.partial`:is([state-${ValidationFlags.valid}], :state(${ValidationFlags.valid}))`;

/**
 * Selector for the `value-missing` state.
 * @public
 */
const valueMissingState = css.partial`:is([state--${ValidationFlags.valueMissing}], :state(${ValidationFlags.valueMissing}))`;

/**
 * Selector for the `has-message` state.
 * @public
 */
const hasMessageState = css.partial`:is([state--has-message], :state(has-message))`;

/**
 * The styles for the {@link Field} component.
 *
 * @public
 */
export const styles = css`
  ${display('inline-grid')}

  :host {
    color: ${colorNeutralForeground1};
    align-items: center;
    gap: 0 ${spacingHorizontalM};
    justify-items: start;
    padding: ${spacingVerticalS} ${spacingHorizontalS};
    position: relative;
  }

  :has([slot='message']) {
    color: ${colorNeutralForeground1};
    row-gap: ${spacingVerticalS};
  }

  :not(::slotted([slot='label'])) {
    gap: 0;
  }

  :host([label-position='before']) {
    grid-template-areas: 'label input' 'label message';
  }

  :host([label-position='after']) {
    gap: 0;
    grid-template-areas: 'input label' 'message message';
    grid-template-columns: auto 1fr;
  }

  :host([label-position='after']) ::slotted([slot='input']) {
    margin-inline-end: ${spacingHorizontalM};
  }

  :host([label-position='above']) {
    grid-template-areas: 'label' 'input' 'message';
    row-gap: ${spacingVerticalXXS};
  }

  :host([label-position='below']) {
    grid-template-areas: 'input' 'label' 'message';
    justify-items: center;
  }

  :host([label-position='below']) ::slotted([slot='label']) {
    margin-block-start: ${spacingVerticalM};
  }

  :host([label-position='below']:not(${hasMessageState})) {
    grid-template-areas: 'input' 'label';
  }

  ::slotted([slot='label'])::after {
    content: '';
    display: block;
    position: absolute;
    inset: 0;
  }

  ::slotted([slot='input']) {
    grid-area: input;
    position: relative;
    z-index: 1;
  }

  ::slotted([slot='message']) {
    margin-block-start: ${spacingVerticalXXS};
    grid-area: message;
  }

  :host(${focusVisibleState}:focus-within) {
    border-radius: ${borderRadiusMedium};
    outline: ${strokeWidthThick} solid ${colorStrokeFocus2};
  }

  ::slotted(label),
  ::slotted([slot='label']) {
    cursor: inherit;
    display: inline-flex;
    font-family: ${fontFamilyBase};
    font-size: ${fontSizeBase300};
    font-weight: ${fontWeightRegular};
    grid-area: label;
    line-height: ${lineHeightBase300};
    user-select: none;
  }

  :host([size='small']) ::slotted(label) {
    font-size: ${fontSizeBase200};
    line-height: ${lineHeightBase200};
  }

  :host([size='large']) ::slotted(label) {
    font-size: ${fontSizeBase400};
    line-height: ${lineHeightBase400};
  }

  :host([size='large']) ::slotted(label),
  :host([weight='semibold']) ::slotted(label) {
    font-weight: ${fontWeightSemibold};
  }

  :host(${disabledState}) {
    cursor: default;
  }

  ::slotted([flag]) {
    display: none;
  }

  :host(${badInputState}) ::slotted([flag='${ValidationFlags.badInput}']),
  :host(${customErrorState}) ::slotted([flag='${ValidationFlags.customError}']),
  :host(${patternMismatchState}) ::slotted([flag='${ValidationFlags.patternMismatch}']),
  :host(${rangeOverflowState}) ::slotted([flag='${ValidationFlags.rangeOverflow}']),
  :host(${rangeUnderflowState}) ::slotted([flag='${ValidationFlags.rangeUnderflow}']),
  :host(${stepMismatchState}) ::slotted([flag='${ValidationFlags.stepMismatch}']),
  :host(${tooLongState}) ::slotted([flag='${ValidationFlags.tooLong}']),
  :host(${tooShortState}) ::slotted([flag='${ValidationFlags.tooShort}']),
  :host(${typeMismatchState}) ::slotted([flag='${ValidationFlags.typeMismatch}']),
  :host(${valueMissingState}) ::slotted([flag='${ValidationFlags.valueMissing}']),
  :host(${validState}) ::slotted([flag='${ValidationFlags.valid}']) {
    display: block;
  }
`;
