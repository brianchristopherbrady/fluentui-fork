import { html } from '@microsoft/fast-element';
import type { Args, Meta } from '@storybook/html';
import { renderComponent } from '../helpers.stories.js';
import type { Card as FluentCard } from './card.js';
import './define.js';

type CardStoryArgs = Args & FluentCard;
type CardStoryMeta = Meta<CardStoryArgs>;

const cardTemplate = html<CardStoryArgs>`
  <div>
    <fluent-card> Card Component </fluent-card>
  </div>
`;

export default {
  title: 'Components/Card',
  args: {},
  argTypes: {},
} as CardStoryMeta;

export const Card = renderComponent(cardTemplate).bind({});

//
// Attribute Stories
//

export const Content = renderComponent(html<CardStoryArgs>`
  <fluent-card>
    <h2>Card</h2>
  </fluent-card>
`);
