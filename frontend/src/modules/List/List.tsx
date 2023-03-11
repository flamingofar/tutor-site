import ListElement from '../../components/ListElement/ListElement';
import TitleAndDescription from '../../components/TitleAndDescription/TitleAndDescription';
import { ListViewmodel } from './ListViewmodel';

const List = ({ entries, titleAndDescription }: ListViewmodel) => {
  return (
    <section className="px-5 space-y-4 md:px-20 ">
      <TitleAndDescription {...titleAndDescription} />
      <ul className="flex flex-col gap-6 ">
        {entries &&
          entries.map((entry, idx) => {
            return <ListElement key={idx} index={idx} {...entry} />;
          })}
      </ul>
    </section>
  );
};

export default List;
