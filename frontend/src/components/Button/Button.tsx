import React from "react";
import clsx from "clsx";
import { ButtonViewmodel } from "./ButtonViewmodel";

const Button = ({ children, className }: ButtonViewmodel) => {
	return (
		<button className={clsx("bg-neutral-400 rounded-sm px-2 py-0.5", className)}>{children}</button>
	);
};

export default Button;
