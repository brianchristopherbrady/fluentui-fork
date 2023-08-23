import { ElementViewTemplate, html } from '@microsoft/fast-element';
import type { CardFooter } from './card-footer.js';

/**
 * The template for the Fluent Card footer web-component.
 * @public
 */
export function cardFooterTemplate<T extends CardFooter>(): ElementViewTemplate<T> {
  return html<T>`
    <template>
      <div class="root">
        <slot></slot>
        <slot name="actions"></slot>
      </div>
    </template>
  `;
}

export const template: ElementViewTemplate<CardFooter> = cardFooterTemplate();
