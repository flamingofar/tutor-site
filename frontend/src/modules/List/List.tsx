import React from "react";
import ListElement from "../../components/ListElement/ListElement";
import { ListElementViewmodel } from "../../components/ListElement/ListElementViewmodel";
import { ListViewmodel } from "./ListViewmodel";

const List = ({ entries, description, title }: ListViewmodel) => {
	return (
		<section className="px-20 space-y-4 ">
			<div className="text-gray-800 ">
				<h1 className="h1">{title}</h1>
				<p>{description}</p>
			</div>
			<ul className="flex flex-col gap-4 ">
				{entries &&
					entries.map((entry, idx) => {
						return <ListElement key={idx} {...entry} />;
					})}
			</ul>
		</section>
	);
};

export default List;
