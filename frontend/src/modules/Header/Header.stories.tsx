import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import Header from './Header';

type Story = StoryObj<typeof Header>;

export default {
  component: Header,
  render: (args) => (
    <div className="w-full h-screen bg-slate-200">
      <div className="w-2/3 p-5 ">
        <Header {...args} />
      </div>
    </div>
  ),
} as Meta<typeof Header>;

export const Default: Story = {};
