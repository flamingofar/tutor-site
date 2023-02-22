import React from "react";
import Balanced from "react-wrap-balancer";
import Button from "../Button/Button";

const ListElement = (props) => {
	const { name, description, theme, time } = props;
	return (
		<aside className=" text-neutral-900 flex justify-between p-4 gap-4">
			<div>
				<div className="text-sm">{theme}</div>
				<div className="h2 font-bold flex justify-between">
					{name} <span className="text-sm font-normal">kl: {time}</span>
				</div>
				<Balanced>{description}</Balanced>
			</div>
			<Button className="self-start" variant="">
				Fjern
			</Button>
		</aside>
	);
};

export default ListElement;
