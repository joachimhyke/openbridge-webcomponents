import type { Meta, StoryObj } from '@storybook/web-components';
import { AlertMenu, Alert } from './alert-menu';
import './alert-menu';

function getTime(secondsAgo: number) {
  return new Date('2020-11-19T13:56:00.414000Z');
}

const alerts: Array<Alert> = [
  {
    acknowledgeble: true,
    acknowledged: false,
    icon: '14-alarm-unack',
    id: '1',
    message: 'Alert message with more than one line of text',
    time: getTime(12*60 + 12),
    type: 'alarm',
    timeSince: '12m 12s',
  },
  {
    acknowledgeble: true,
    acknowledged: false,
    icon: '14-alarm-unack',
    id: '2',
    message: 'Alert message with more than one line of text',
    time: getTime(12*60 + 12),
    type: 'alarm',
    timeSince: '12m 12s',
  },
  {
    acknowledgeble: true,
    acknowledged: false,
    icon: '14-alarm-unack',
    id: '3',
    message: 'Alert message with more than one line of text',
    time: getTime(12*60 + 12),
    type: 'alarm',
    timeSince: '12m 12s',
  },
  {
    acknowledgeble: true,
    acknowledged: false,
    icon: '14-warning-unacknowledged',
    id: '4',
    message: 'Alert message with more than one line of text',
    time: getTime(12*60 + 12),
    type: 'warning',
    timeSince: '12m 12s',
  },
  {
    acknowledgeble: true,
    acknowledged: false,
    icon: '14-warning-unacknowledged',
    id: '5',
    message: 'Alert message with more than one line of text',
    time: getTime(12*60 + 12),
    type: 'warning',
    timeSince: '12m 12s',
  },
  {
    acknowledgeble: false,
    icon: '14-caution-color',
    id: '6',
    message: 'Alert message with more than one line of text',
    time: getTime(12*60 + 12),
    type: 'caution',
    timeSince: '12m 12s',
  },
];

const meta: Meta<typeof AlertMenu> = {
  title: 'Application/Alert menu',
  tags: ['autodocs'],
  component: "obc-alert-menu",
  args: {
    alerts: alerts,
    narrow: false,
  },
  argTypes: {
    narrow: {
      control: { type: 'boolean' },
    },
    alerts: {
      control: { type: 'object' },

    }
  },
} satisfies Meta<AlertMenu>;

export default meta;
type Story = StoryObj<AlertMenu>;

export const Regular: Story = {
  args: {
  },
};

export const Narrow: Story = {
  args: {
    narrow: true
  },
};