import { ListElementViewmodel } from '../../components/ListElement/ListElementViewmodel';
import { TitleAndDescriptionViewmodel } from '../../components/TitleAndDescription/TitleAndDescriptionViewmodel';

export interface ListViewmodel {
  titleAndDescription?: TitleAndDescriptionViewmodel;
  entries?: ListElementViewmodel[];
}
