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
	return (
		<aside className="grid grid-cols-12 gap-4 p-4 rounded-md shadow-md bg-zinc-200 text-neutral-800">
			<div className="col-span-8">
				<div className="flex gap-2 text-sm">
					<span>{theme} </span>
					&#x2022;
					<span>{semester} </span>
					&#x2022;
					{isOnline ? <span>Online</span> : <span>Fysisk</span>}
				</div>
				<div className="flex justify-between font-bold h2">{name}</div>
				<Balanced>{description}</Balanced>
			</div>
			<span className="col-span-2 col-start-9 text-sm font-normal truncate">
				kl: {timeEpoch.toString()}
			</span>

			<div className="flex flex-col col-span-2 col-start-11 gap-2 justify-self-end">
				<Button className="self-start" variant="">
					Fjern
				</Button>
				<Button className="self-start" variant="">
					Done
				</Button>
			</div>
		</aside>
	);
};

export default ListElement;
