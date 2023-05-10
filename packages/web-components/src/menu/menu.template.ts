import { ElementViewTemplate, html, slotted } from '@microsoft/fast-element';
import type { Menu } from './menu.js';

export function menuTemplate<T extends Menu>(): ElementViewTemplate<T> {
  return html<T>`
    <template>
      <slot></slot>
    </template>
  `;
}

export const template: ElementViewTemplate<Menu> = menuTemplate();
