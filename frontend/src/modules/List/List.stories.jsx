import List from './List';
import { listMock } from './list.mock';

export default {
  component: List,
  render: (args) => (
    <div className="w-full h-screen bg-slate-200">
      <div className="py-5 bg-white">
        <List {...args} />
      </div>
    </div>
  ),
};

export const Primary = {
  args: listMock,
};
