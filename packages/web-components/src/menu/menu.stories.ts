import { html } from '@microsoft/fast-element';
import type { Args, Meta } from '@storybook/html';
import { renderComponent } from '../helpers.stories.js';
import type { Menu as FluentMenu } from './menu.js';
import './define.js';
import '../menu-item/define.js';
import '../divider/define.js';

type MenuStoryArgs = Args & FluentMenu;
type MenuStoryMeta = Meta<MenuStoryArgs>;

const storyTemplate = html<MenuStoryArgs>`
  <fluent-menu ?open-on-hover="${x => x.openOnHover}">
    <fluent-menu-button appearance="primary" slot="trigger">Button!</fluent-menu-button>
    <fluent-menu-list>
      <fluent-menu-item>Menu item 1</fluent-menu-item>
      <fluent-menu-item>Menu item 2</fluent-menu-item>
      <fluent-menu-item>Menu item 3</fluent-menu-item>
      <fluent-menu-item>Menu item 4</fluent-menu-item>
    </fluent-menu-list>
  </fluent-menu>
`;

export default {
  title: 'Components/Menu',
  args: {
    openOnHover: false,
  },
  argTypes: {
    openOnHover: {
      description: 'Sets whether menu opens on hover',
      table: {
        defaultValue: { summary: false },
      },
      control: 'boolean',
      defaultValue: false,
    },
  },
} as MenuStoryMeta;

export const Menu = renderComponent(storyTemplate).bind({});

export const MenuOpenOnHover = renderComponent(html<MenuStoryArgs>`
  <fluent-menu open-on-hover>
    <fluent-menu-button appearance="primary" slot="trigger">Button!</fluent-menu-button>
    <fluent-menu-list>
      <fluent-menu-item>Menu item 1</fluent-menu-item>
      <fluent-menu-item>Menu item 2</fluent-menu-item>
      <fluent-menu-item>Menu item 3</fluent-menu-item>
      <fluent-menu-item>Menu item 4</fluent-menu-item>
    </fluent-menu-list>
  </fluent-menu>
`);
