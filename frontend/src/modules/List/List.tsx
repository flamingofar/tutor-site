import React from "react";
import ListElement from "../../components/ListElement/ListElement";
import TitleAndDescription from "../../components/TitleAndDescription/TitleAndDescription";
import { ListViewmodel } from "./ListViewmodel";

const List = ({ entries, titleAndDescription }: ListViewmodel) => {
  return (
    <section className="px-20 space-y-4 ">
      <TitleAndDescription {...titleAndDescription} />
      <ul className="flex flex-col gap-4 ">
        {entries &&
          entries.map((entry, idx) => {
            return <ListElement key={idx} {...entry} />;
          })}
      </ul>
    </section>
  );
};

export default List;
