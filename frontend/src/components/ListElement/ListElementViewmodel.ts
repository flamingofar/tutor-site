import { SemesterViewmodel } from "../../viewmodels/SemesterViewmodel";
import { ThemeViewmodel } from "../../viewmodels/ThemeViewmodel";

export interface ListElementViewmodel {
	id?: String;
	name?: String;
	description?: String;
	isOnline?: Boolean;
	theme: ThemeViewmodel;
	timeEpoch: Number;
	semester: SemesterViewmodel;
}
