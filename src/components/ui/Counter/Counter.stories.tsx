import { Meta, StoryObj } from '@storybook/react';
import Counter from './Counter';
import ComponentProps from '../../interfaces';

const meta: Meta<typeof Counter> = {
  title: 'Components/Counter',
  component: Counter,
  argTypes: {
    size: {
      control: { type: 'select', options: ['small', 'big'] },
    },
  },
};

export default meta;

type Story = StoryObj<ComponentProps>;

export const Small: Story = {
  args: {
    size: 'small',
  },
};

export const Big: Story = {
  args: {
    size: 'big',
  },
};
