import { css } from '@microsoft/fast-element';
import { display } from '@microsoft/fast-foundation';

/** CardFooter styles
 * @public
 */
export const styles = css`
  ${display('flex')}

  .root {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
`;
