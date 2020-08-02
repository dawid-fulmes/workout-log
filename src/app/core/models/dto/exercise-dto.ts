export interface ExerciseDto {
  id: number;
  license_author: string;
  status: string;
  description: string;
  name: string;
  name_original: string;
  creation_date: string;
  uuid: string;
  license: number;
  category: number;
  language: number;
  muscles: number[];
  muscles_secondary: number[];
  equipment: number[][];
}
