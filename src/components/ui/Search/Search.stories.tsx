import { Meta, StoryObj } from '@storybook/react';
import Search, { SearchProps } from './Search';

const meta: Meta<typeof Search> = {
  title: 'Components/Search',
  component: Search,
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the search input field',
      defaultValue: 'Search...',
    },
    text: {
      control: 'text',
      description: 'Button text',
      defaultValue: 'Search',
    },
  },
};

export default meta;

type Story = StoryObj<SearchProps>;

export const Default: Story = {
  args: {
    placeholder: 'Search...',
    text: 'Search',
  },
};
