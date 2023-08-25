import { ElementViewTemplate, html } from '@microsoft/fast-element';
import type { Card } from './card.js';

/**
 * The template for the Fluent Card web-component.
 * @public
 */
export function cardTemplate<T extends Card>(): ElementViewTemplate<T> {
  return html<T>`
    <template
      role="group"
      orientation="${x => x.orientation}"
      disabled="${x => x.disabled}"
      appearance="${x => x.appearance}"
      control-size="${x => x.controlSize}"
      ?interactive="${x => x.interactive}"
      ?selected="${x => x.selected}"
      aria-selected="${x => x.selected}"
      aria-disabled="${x => x.disabled}"
      @click="${(x, c) => x.clickHandler(c.event as MouseEvent)}"
      @keydown="${(x, c) => x.keydownHandler(c.event as KeyboardEvent)}"
    >
      <slot name="start"></slot>
      <slot></slot>
      <slot name="end"></slot>
    </template>
  `;
}

export const template: ElementViewTemplate<Card> = cardTemplate();
