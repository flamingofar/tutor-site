import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import Footer from './Footer';

type Story = StoryObj<typeof Footer>;

export default {
  component: Footer,
  render: (args) => (
    <div className="w-full h-screen bg-slate-200">
      <div className="w-2/3 p-5 ">
        <Footer {...args} />
      </div>
    </div>
  ),
} as Meta<typeof Footer>;

export const Example: Story = {
  args: {},
};
