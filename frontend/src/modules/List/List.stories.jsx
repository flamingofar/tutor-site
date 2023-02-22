import List from "./List";
const entries = [
	{
		name: "Malte Skjoldager",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quos incidunt vel quod minus voluptatum soluta ea ullam praesentium maxime?",
		theme: "CSS",
		time: "11.11.11",
	},
	{
		name: "Mikkel Skjoldager",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quos incidunt vel quod minus voluptatum soluta ea ullam praesentium maxime?",
		theme: "HTML",
		time: "11.11.11",
	},
];

export default {
	component: List,
	render: (args) => (
		<div className="w-full h-screen bg-slate-200">
			<div className="p-5 w-1/2 ">
				<List {...args} />
			</div>
		</div>
	),
};

export const Primary = {
	args: { entries: entries },
};
