// Button.stories.js|jsx

import React from 'react';
import Balancer from 'react-wrap-balancer';

import Input from './Input';

export default {
  component: Input,
  render: (args) => (
    <div className=" p-5">
      <Input {...args} />
    </div>
  ),
};

export const Default = {
  args: {},
};
