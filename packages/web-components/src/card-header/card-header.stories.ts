import { html } from '@microsoft/fast-element';
import type { Args, Meta } from '@storybook/html';
import { renderComponent } from '../helpers.stories.js';
import type { CardHeader as FluentCardHeader } from './card-header.js';
import './define.js';

type CardHeaderStoryArgs = Args & FluentCardHeader;
type CardHeaderStoryMeta = Meta<CardHeaderStoryArgs>;

const cardHeaderTemplate = html<CardHeaderStoryArgs>``;

export default {
  title: 'Components/Card/CardHeader',
  args: {},
} as CardHeaderStoryMeta;

export const CardHeader = renderComponent(cardHeaderTemplate).bind({});
