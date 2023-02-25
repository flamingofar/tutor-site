import React from "react";
import Balanced from "react-wrap-balancer";
import Button from "../Button/Button";
import { ListElementViewmodel } from "./ListElementViewmodel";

const ListElement = ({
  name,
  description,
  theme,
  timeEpoch,
  semester,
  isOnline,
}: ListElementViewmodel) => {
  const convertEpoch = (createdAt: number) => {
    const month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "Juli",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const date = new Date(0);
    date.setUTCSeconds(createdAt);
    const ss = date.getSeconds();
    const mm = date.getMinutes();
    const hh = date.getHours();
    const dd = date.getDate();
    const MM = month[date.getMonth()];
    return `${dd}. ${MM} kl: ${hh}:${
      mm.toString().length == 1 ? "0" + mm : mm
    }`;
  };

  convertEpoch(+timeEpoch);

  return (
    <aside className="flex flex-col p-4 rounded-md shadow-md bg-zinc-200 text-neutral-800">
      <div className="col-start-1 col-end-9">
        <div className="flex justify-between gap-2 text-sm">
          <div className="flex justify-between gap-2 ">
            <span>{theme} </span>
            &#x2022;
            <span>{semester} </span>
            &#x2022;
            {isOnline ? <span>Online</span> : <span>Fysisk</span>}
          </div>
          <span className="">{convertEpoch(+timeEpoch)}</span>
        </div>
      </div>
      <div className="flex justify-between ">
        <div className="flex flex-col justify-between ">
          <span className="font-bold h2 "> {name}</span>
          <Balanced>{description}</Balanced>
        </div>
        <div className="flex flex-col justify-end col-span-1 col-start-12 gap-2 justify-self-end">
          <Button className="self-start">Fjern</Button>
          <Button className="self-start">Done</Button>
        </div>
      </div>
    </aside>
  );
};

export default ListElement;
