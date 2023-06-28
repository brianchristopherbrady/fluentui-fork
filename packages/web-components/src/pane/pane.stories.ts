import { html } from '@microsoft/fast-element';
import type { Args, Meta } from '@storybook/html';
import { renderComponent } from '../helpers.stories.js';
import type { Pane as FluentPane } from './pane.js';
import './define.js';
import '../text/define.js';
import { PanePosition, PaneSize } from './pane.options.js';

type PaneStoryArgs = Args & FluentPane;
type PaneStoryMeta = Meta<PaneStoryArgs>;

const storyTemplate = html<PaneStoryArgs>`
  <div>
    <style>
      .sbdocs-content {
        max-width: 1200px;
      }
      .toolbar-button {
        background: transparent;
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 2px;
      }
    </style>
    <div style="height: 38em; transform: scale(1); overflow-y: hidden; overflow-x: hidden;">
      <div>
        <fluent-pane
          id="pane-playground"
          position="${x => x.position}"
          trap-focus="${x => x.trapFocus}"
          control-size="${x => x.controlSize}"
          modal="${x => x.modal}"
          open
        >
          Content
        </fluent-pane>
      </div>
    </div>
  </div>
`;

export default {
  title: 'Components/Pane',
  args: {
    disabled: false,
    position: PanePosition.right,
    open: false,
    trapFocus: false,
    modal: false,
    controlSize: PaneSize.medium,
  },
  argTypes: {
    open: {
      control: {
        type: 'boolean',
      },
      table: {
        type: {
          summary: 'Sets the open state of pane',
        },
        defaultValue: {
          summary: false,
        },
      },
    },
    modal: {
      control: {
        type: 'boolean',
      },
      table: {
        type: {
          summary: 'Determines if pane is a modal or not',
        },
        defaultValue: {
          summary: false,
        },
      },
    },
    trapFocus: {
      control: {
        type: 'boolean',
      },
      table: {
        type: {
          summary: 'Sets whether the pane traps focus or not',
        },
        defaultValue: {
          summary: false,
        },
      },
    },
    position: {
      options: Object.values(PanePosition),
      control: {
        type: 'select',
      },
      table: {
        type: {
          summary: 'Sets the position of pane',
        },
        defaultValue: {
          summary: PanePosition.right,
        },
      },
    },
    controlSize: {
      options: Object.values(PaneSize),
      control: {
        type: 'select',
      },
      table: {
        type: {
          summary: 'Sets the width of pane',
        },
        defaultValue: {
          summary: PaneSize.medium,
        },
      },
    },
  },
} as PaneStoryMeta;

export const Pane = renderComponent(storyTemplate).bind({});

export const PositionLeft = renderComponent(html<PaneStoryArgs>`
  <div>
    <style>
      div.docs-story > div:first-child {
        height: 38em;
        padding: 0;
      }
      .toolbar-button {
        background: transparent;
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 2px;
      }
    </style>
    <div style="height: 38em; transform: scale(1); overflow-y: hidden; overflow-x: hidden;">
      <div>
        <fluent-pane id="pane-left" position="left" open> Content 1 </fluent-pane>
      </div>
    </div>
  </div>
`);

export const PaneControlSizeSmall = renderComponent(html<PaneStoryArgs>`
  <div style="height: 38em; transform: scale(1); overflow-y: hidden; overflow-x: hidden;">
    <fluent-pane id="pane-small" control-size="small" open> Content Small </fluent-pane>
  </div>
`);

export const PaneControlSizeMedium = renderComponent(html<PaneStoryArgs>`
  <div style="height: 38em; transform: scale(1); overflow-y: hidden; overflow-x: hidden;">
    <fluent-pane id="pane-medium" open> Content Medium </fluent-pane>
  </div>
`);

export const PaneControlSizeLarge = renderComponent(html<PaneStoryArgs>`
  <div style="height: 38em; transform: scale(1); overflow-y: hidden; overflow-x: hidden;">
    <fluent-pane id="pane-large" control-size="large" open> Content Large </fluent-pane>
  </div>
`);
