import Balanced from 'react-wrap-balancer';
import { ListElementViewmodel } from './ListElementViewmodel';
import clsx from 'clsx';

const ListElement = ({
  name,
  description,
  theme,
  timeEpoch,
  semester,
  isOnline,
  index,
}: ListElementViewmodel) => {
  const convertEpoch = (createdAt: number) => {
    const month = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'Juli',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const date = new Date(0);
    date.setUTCSeconds(createdAt);
    const mm = date.getMinutes();
    const hh = date.getHours();
    const dd = date.getDate();
    const MM = month[date.getMonth()];
    return `${dd}. ${MM} kl: ${hh}:${
      mm.toString().length == 1 ? '0' + mm : mm
    }`;
  };

  const bgColor =
    index === 1
      ? 'bg-list-1'
      : index === 2
      ? 'bg-list-2'
      : index === 3
      ? 'bg-list-3'
      : 'bg-list-4';

  return (
    <aside
      className={clsx(
        'flex flex-col p-4 shadow-md  text-neutral-800 border-theme',
        bgColor
      )}
    >
      <div className="">
        <div className="flex justify-between gap-2 text-sm">
          <div className="flex justify-between gap-2 ">
            <span>{theme} </span>
            &#x2022;
            <span>{semester} </span>
            &#x2022;
            {isOnline ? <span>Online</span> : <span>Fysisk</span>}
          </div>
          <span className="hidden lg:flex">{convertEpoch(+timeEpoch)}</span>
        </div>
      </div>
      <div className="flex flex-col justify-between gap-10 lg:flex-row ">
        <div className="flex flex-col justify-between flex-[2] ">
          <span className="font-bold h2 "> {name}</span>
          <Balanced>{description}</Balanced>
        </div>
        <div className="flex justify-between lg:justify-end items-end flex-[1] col-span-1 col-start-12 gap-2 ">
          <span className="lg:hidden">{convertEpoch(+timeEpoch)}</span>
          <button className="px-2 border-theme">Fjern</button>
          {/* <Button className="self-start">Fjern</Button>
          <Button className="self-start">Done</Button> */}
        </div>
      </div>
    </aside>
  );
};

export default ListElement;
