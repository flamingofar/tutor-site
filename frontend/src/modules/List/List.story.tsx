import List from './List';
import { StoryObj, Meta } from '@storybook/react';
import { listMock } from './list.mock';

type Story = StoryObj<typeof List>;

export default {
  component: List,
  render: (args) => (
    <div className="w-full h-fit bg-primary-list">
      <div className="py-5 ">
        <List {...args} />
      </div>
    </div>
  ),
} as Meta<typeof List>;

export const Default: Story = {
  args: listMock,
};
