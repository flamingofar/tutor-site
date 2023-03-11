import { SemesterViewmodel } from '../../viewmodels/SemesterViewmodel';
import { ThemeViewmodel } from '../../viewmodels/ThemeViewmodel';

export interface ListElementViewmodel {
  id?: string;
  name?: string;
  description?: string;
  isOnline?: boolean;
  theme: ThemeViewmodel;
  timeEpoch: number;
  semester: SemesterViewmodel;
  index?: number;
}
