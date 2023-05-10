import { css } from '@microsoft/fast-element';
import { display } from '@microsoft/fast-foundation';

/** MenuList styles
 * @public
 */
export const styles = css`
  ${display('flex')}

  :host {
    width: fit-content;
    height: fit-content;
  }
`;
