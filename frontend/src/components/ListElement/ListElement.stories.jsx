import React from 'react';
import ListElement from './ListElement';
import { listElementMock } from './listElement.mock';

export default {
  component: ListElement,
  render: (args) => (
    <div className="w-full h-screen bg-slate-200">
      <div className="w-2/3 p-5 ">
        <ListElement {...args} />
      </div>
    </div>
  ),
};

export const Default = {
  args: listElementMock,
};
