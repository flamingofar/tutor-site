/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",

		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				"primary-list": "#AA81EE",
				"list-1": "#FFD302",
				"list-2": "#7487ED",
				"list-3": "#A3ED68",
				"list-4": "#E68CED",
			},
		},
	},
	plugins: [],
};
