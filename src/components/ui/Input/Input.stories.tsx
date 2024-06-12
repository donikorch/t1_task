import { Meta, StoryObj } from '@storybook/react';
import Input, { InputProps } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the input field',
      defaultValue: 'Type something...',
    },
    id: {
      control: 'text',
      description: 'ID for the input field',
      defaultValue: 'input-id',
    },
  },
};

export default meta;

type Story = StoryObj<InputProps>;

export const Default: Story = {
  args: {
    placeholder: 'Type something...',
    id: 'input-id',
  },
};
