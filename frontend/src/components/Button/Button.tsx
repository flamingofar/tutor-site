import React from "react";
import clsx from "clsx";

const Button = (props) => {
	const { children, className } = props;
	return (
		<button className={clsx("bg-neutral-400 rounded-sm px-2 py-0.5", className)}>{children}</button>
	);
};

export default Button;
