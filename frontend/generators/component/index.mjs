import { pascalCase } from "pascal-case";
import path from "path";
import fs from "fs";

/** @type {import('node-plop').PlopGeneratorConfig} */
export const plopComponentConfig = {
	description: "Add a reusable component",
	prompts: [
		{
			type: "input",
			name: "name",
			message: "What should the component be called?",
		},
	],
	actions: (data) => {
		const properCaseName = pascalCase(data.name);
		const destPath = path.join("frontend/src/components", properCaseName);
		if (fs.existsSync(destPath)) {
			throw new Error(`${destPath} already exists.`);
		}

		const relativePath = path.join("../../", destPath);
		const relativeToRoot = path.relative(destPath, ".");
		const sharedData = {
			relative: relativeToRoot.replace(path.delimiter, "/"),
		};

		const actions = [
			{
				type: "add",
				path: path.join(relativePath, `${properCaseName}.tsx`),
				templateFile: "./component/component.tsx.hbs",
				abortOnFail: true,
				data: sharedData,
			},
		];
		actions.push({
			type: "add",
			path: path.join(relativePath, `${properCaseName}.story.tsx`),
			templateFile: "./component/story.tsx.hbs",
			abortOnFail: true,
			data: sharedData,
		});
		actions.push({
			type: "add",
			path: path.join(relativePath, `${properCaseName}.mock.ts`),
			templateFile: "./component/mock.tsx.hbs",
			abortOnFail: true,
			data: sharedData,
		});
		actions.push({
			type: "add",
			path: path.join(relativePath, `${properCaseName}ViewModel.ts`),
			templateFile: "./component/model.tsx.hbs",
			abortOnFail: true,
			data: sharedData,
		});
		return actions;
	},
};
