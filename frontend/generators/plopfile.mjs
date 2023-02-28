import { plopComponentConfig } from "./component/index.mjs";

/** @type {import('node-plop').NodePlopAPI} */
function plopfile(plop) {
	// plop generator code
	plop.setGenerator("component", plopComponentConfig);

	plop.addHelper("curly", (object, open) => (open ? "{" : "}"));
}

export default plopfile;
