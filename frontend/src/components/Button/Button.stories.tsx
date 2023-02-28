import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import Button from './Button';

type Story = StoryObj<typeof Button>;

export default {
  component: Button,
  render: (args) => (
    <div className="w-full h-screen bg-slate-200">
      <div className="w-2/3 p-5 ">
        <Button {...args} />
      </div>
    </div>
  ),
} as Meta<typeof Button>;

export const Example: Story = {
  args: {},
};
