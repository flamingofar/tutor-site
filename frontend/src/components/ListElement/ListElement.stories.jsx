// Button.stories.js|jsx

import React from "react";

import ListElement from "./ListElement";

export default {
	component: ListElement,
	render: (args) => (
		<div className="w-full h-screen bg-slate-200">
			<div className="p-5 w-1/2 ">
				<ListElement {...args} />
			</div>
		</div>
	),
};

export const Default = {
	args: {
		name: "Malte Skjoldager",
		time: "11.11.11",
		theme: "HTML",
		description:
			"Bacon ipsum dolor amet meatball ham pork belly, brisket sirloin picanha cupim. Pork loin strip steak drumstick ham hock chicken sausage ground",
	},
};
