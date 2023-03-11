import React from 'react';
import TitleAndDescription from './TitleAndDescription';
import { titleAndDescriptionMock } from './titleAndDescription.mock';

export default {
  component: TitleAndDescription,
  render: (args) => (
    <div className="w-full h-screen bg-slate-200">
      <div className="w-2/3 p-5 ">
        <TitleAndDescription {...args} />
      </div>
    </div>
  ),
};

export const Default = {
  args: titleAndDescriptionMock,
};
