import React from "react";
import ListElement from "./ListElement";

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
	args: {
		name: "Malte Skjoldager",
		timeEpoch: "1677340937",
		theme: "HTML",
		semester: "2.",
		description:
			"Bacon ipsum dolor amet meatball ham pork belly, brisket sirloin picanha cupim. Pork loin strip steak drumstick ham hock chicken sausage ground",
	},
};
