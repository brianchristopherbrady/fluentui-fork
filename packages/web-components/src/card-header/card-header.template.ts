import { ElementViewTemplate, html } from '@microsoft/fast-element';
import type { CardHeader } from './card-header.js';

/**
 * The template for the Fluent Card Header web-component.
 * @public
 */
export function cardHeaderTemplate<T extends CardHeader>(): ElementViewTemplate<T> {
  return html<T>`
    <template>
      <div class="root">
        <slot name="start"></slot>
        <div class="image" part="image">
          <slot name="image"></slot>
        </div>
        <slot></slot>
        <div class="header" part="header">
          <slot name="header"></slot>
        </div>
        <div class="description" part="description">
          <slot name="description"></slot>
        </div>
        <div class="actions">
          <slot name="actions"></slot>
        </div>
        <slot name="end"></slot>
      </div>
    </template>
  `;
}

export const template: ElementViewTemplate<CardHeader> = cardHeaderTemplate();
