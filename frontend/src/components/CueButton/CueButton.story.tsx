import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import CueButton from './CueButton';
import { cueButtonMock } from './CueButton.mock';

type Story = StoryObj<typeof CueButton>;

export default {
  component: CueButton,
  render: (args) => (
    <div className="w-full h-screen bg-slate-200">
      <div className="w-2/3 p-5 ">
        <CueButton {...args} />
      </div>
    </div>
  ),
} as Meta<typeof CueButton>;

export const Example: Story = {
  args: cueButtonMock,
};
