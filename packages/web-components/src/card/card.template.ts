import { ElementViewTemplate, html } from '@microsoft/fast-element';
import type { Card } from './card.js';

/**
 * The template for the Fluent label web-component.
 * @public
 */
export function cardTemplate<T extends Card>(): ElementViewTemplate<T> {
  return html<T>`
    <template
      orientation="${x => x.orientation}"
      aria-checked="${x => x.checked}"
      aria-disabled="${x => x.disabled}"
      disabled="${x => x.disabled}"
      appearance="${x => x.appearance}"
      control-size="${x => x.controlSize}"
      ?interactive="${x => x.interactive}"
      @click="${(x, c) => x.clickHandler(c.event as MouseEvent)}"
      @keydown="${(x, c) => x.keydownHandler(c.event as KeyboardEvent)}"
      tabindex="${x => (x.interactive ? 0 : -1)}}"
      role="group"
    >
      <slot name="header"></slot>
      <slot></slot>
      <slot name="footer"></slot>
    </template>
  `;
}

export const template: ElementViewTemplate<Card> = cardTemplate();
