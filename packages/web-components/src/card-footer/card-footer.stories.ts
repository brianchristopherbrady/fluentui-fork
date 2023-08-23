import { html } from '@microsoft/fast-element';
import type { Args, Meta } from '@storybook/html';
import { renderComponent } from '../helpers.stories.js';
import type { CardFooter as FluentCardFooter } from './card-footer.js';
import './define.js';

type CardFooterStoryArgs = Args & FluentCardFooter;
type CardFooterStoryMeta = Meta<CardFooterStoryArgs>;

const cardFooterTemplate = html<CardFooterStoryArgs>``;

export default {
  title: 'Components/Card/CardFooter',
  args: {},
} as CardFooterStoryMeta;

export const CardFooter = renderComponent(cardFooterTemplate).bind({});
