import { css } from '@microsoft/fast-element';
import { display } from '@microsoft/fast-foundation';
import { fontFamilyBase, fontSizeBase200, fontWeightRegular, lineHeightBase200 } from '../theme/design-tokens.js';

/** Card Header styles
 * @public
 */
export const styles = css`
  ${display('flex')}
  :host {
    font-family: ${fontFamilyBase};
    width: 100%;
  }
  .root {
    width: 100%;
    flex-shrink: 0;
    display: grid;
    grid-auto-rows: 1fr min-content;
    grid-template-columns: min-content 1fr min-content min-content;
    align-items: center;
  }
  .image {
    grid-row-start: span 2;
    grid-column-start: 1;
    width: 32px;
    height: 32px;
    margin-right: var(--card--size, 12px);
    display: inline-flex;
  }
  .header {
    grid-row-start: 1;
    grid-column-start: 2;
  }
  .description {
    font-size: ${fontSizeBase200};
    line-height: ${lineHeightBase200};
    font-weight: ${fontWeightRegular};
    grid-row-start: 2;
    grid-column-start: 2;
  }
  .actions {
    grid-row-start: span 2;
    grid-column-start: 4;
    display: inline-flex;
  }
`;
