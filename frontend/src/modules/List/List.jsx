import React from "react";
import ListElement from "../../components/ListElement/ListElement";

const List = (props) => {
	const { entries } = props;

	return (
		<ul>
			{entries.map((entry, idx) => {
				return <ListElement key={idx} {...entry} />;
			})}
		</ul>
	);
};

export default List;
