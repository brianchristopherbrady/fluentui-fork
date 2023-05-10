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
  <div style="width: 200px; height: 13em;">
    <fluent-menu></fluent-menu>
  </div>
`;

export default {
  title: 'Components/Menu',
  args: {},
  argTypes: {},
} as MenuStoryMeta;

export const Menu = renderComponent(storyTemplate).bind({});
