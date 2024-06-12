import { Meta, StoryObj } from '@storybook/react';
import Button, { ButtonProps } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['default', 'plus', 'minus', 'cart'],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['big', 'small'],
      },
    },
    children: {
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<ButtonProps>;

export const Default: Story = {
  args: {
    variant: 'default',
    size: 'small',
    children: 'Default Button',
  },
};

export const Plus: Story = {
  args: {
    variant: 'plus',
    size: 'small',
    children: 'Plus Button',
  },
};

export const Minus: Story = {
  args: {
    variant: 'minus',
    size: 'small',
    children: 'Minus Button',
  },
};

export const Cart: Story = {
  args: {
    variant: 'cart',
    size: 'small',
  },
};
