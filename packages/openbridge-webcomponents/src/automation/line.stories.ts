import type {Meta, StoryObj} from '@storybook/web-components';
import {ObcVerticalLine} from './vertical-line';
import './vertical-line/vertical-line';
import './horizontal-line/horizontal-line';
import './corner-line/corner-line';
import {LineMedium, LineType} from './index';
import {html} from 'lit';

const meta: Meta = {
  title: 'Line/Example',
  tags: ['autodocs'],
  argTypes: {
    medium: {
      options: ['normal', 'empty', 'water', 'air'],
      control: {type: 'radio'},
    },
    lineType: {
      options: ['fluid', 'electric', 'air', 'connector'],
      control: {type: 'radio'},
    },
  },
  render: (args) => {
    return html`
      <style>
        .canvas {
          position: relative;
          width: 400px;
          height: 400px;
        }

        #line1 {
          position: absolute;
          top: calc(24px * 1);
          left: calc(24px * 0);
        }

        #corner-1-2 {
          position: absolute;
          top: calc(24px * 0);
          left: calc(24px * 0);
        }

        #line2 {
          position: absolute;
          top: calc(24px * 0);
          left: calc(24px * 1);
        }
        #corner-2-3 {
          position: absolute;
          top: calc(24px * 0);
          left: calc(24px * 6);
        }

        #line3 {
          position: absolute;
          top: calc(24px * 1);
          left: calc(24px * 6);
        }
      </style>
      <div class="canvas">
        <obc-vertical-line
          medium=${args.medium}
          line-type=${args.lineType}
          length="5"
          id="line1"
        ></obc-vertical-line>
        <obc-corner-line
          medium=${args.medium}
          line-type=${args.lineType}
          direction="bottom-right"
          id="corner-1-2"
        ></obc-corner-line>
        <obc-horizontal-line
          medium=${args.medium}
          line-type=${args.lineType}
          length="5"
          id="line2"
        ></obc-horizontal-line>
        <obc-corner-line
          medium=${args.medium}
          line-type=${args.lineType}
          direction="bottom-left"
          id="corner-2-3"
        ></obc-corner-line>
        <obc-vertical-line
          medium=${args.medium}
          line-type=${args.lineType}
          length="2"
          id="line3"
        ></obc-vertical-line>
      </div>
    `;
  },
} satisfies Meta<ObcVerticalLine>;

export default meta;
type Story = StoryObj<ObcVerticalLine>;

export const Fluid: Story = {
  args: {
    medium: LineMedium.water,
    lineType: LineType.fluid,
  },
  argTypes: {
    medium: {
      options: ['normal', 'empty', 'water'],
      control: {type: 'radio'},
    },
  },
};

export const Electric: Story = {
  args: {
    medium: LineMedium.normal,
    lineType: LineType.electric,
  },
  medium: {
    options: ['normal', 'empty'],
    control: {type: 'radio'},
  },
};

export const Air: Story = {
  args: {
    medium: LineMedium.air,
    lineType: LineType.air,
  },
  argTypes: {
    medium: {
      options: ['normal', 'empty', 'air'],
      control: {type: 'radio'},
    },
  },
};

export const Connector: Story = {
  args: {
    medium: LineMedium.normal,
    lineType: LineType.connector,
  },
  argTypes: {},
};