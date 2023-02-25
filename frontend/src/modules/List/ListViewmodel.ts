import { ListElementViewmodel } from "../../components/ListElement/ListElementViewmodel";

export interface ListViewmodel {
	title?: String;
	description?: String;
	entries?: ListElementViewmodel[];
}
