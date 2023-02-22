// Button.stories.js|jsx

import React from "react";

import Button from "./Button";

export default {
	component: Button,
	render: (args) => (
		<div className=" p-5 bg-white">
			<Button {...args} />
		</div>
	),
};

export const Primary = {
	args: {
		variant: "primary",
	},
};
