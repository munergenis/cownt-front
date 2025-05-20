import type { Breed } from './breeds';

export interface Cow {
  id: string;
  longCode: string;
  breed: Breed;
  sex: string;
  origin: string;
}
