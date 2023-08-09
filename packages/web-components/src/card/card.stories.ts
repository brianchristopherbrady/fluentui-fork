import { html } from '@microsoft/fast-element';
import type { Args, Meta } from '@storybook/html';
import { renderComponent } from '../helpers.stories.js';
import type { Card as FluentCard } from './card.js';
import './define.js';
import { CardAppearance, CardControlSize, CardOrientation } from './card.options.js';

type CardStoryArgs = Args & FluentCard;
type CardStoryMeta = Meta<CardStoryArgs>;

const cardTemplate = html<CardStoryArgs>`
  <div>
    <fluent-card
      appearance="${x => x.appearance}"
      orientation="${x => x.orientation}"
      control-size="${x => x.controlSize}"
      ?interactive="${x => x.interactive}"
    >
      Card Component
    </fluent-card>
  </div>
`;

export default {
  title: 'Components/Card',
  args: {
    appearance: CardAppearance.filled,
    orientation: CardOrientation.vertical,
    controlSize: CardControlSize.medium,
    interactive: false,
  },
  argTypes: {
    appearance: {
      options: Object.values(CardAppearance),
      control: {
        type: 'select',
      },
    },
    orientation: {
      options: Object.values(CardOrientation),
      control: {
        type: 'select',
      },
    },
    controlSize: {
      options: Object.values(CardControlSize),
      control: {
        type: 'select',
      },
    },
    interactive: {
      control: 'boolean',
      table: {
        type: {
          summary: 'Sets whether card is interactive or not',
        },
        defaultValue: {
          summary: 'false',
        },
      },
    },
    checked: {
      control: 'boolean',
      table: {
        type: {
          summary: 'Sets the checked state of the card',
        },
        defaultValue: {
          summary: 'false',
        },
      },
    },
  },
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
