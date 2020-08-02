export interface ExerciseSuggestionDto {
  suggestions: {
    value: string;
    data: {
      id: number;
      name: string;
      category: string;
      image: string;
      image_thumbnail: string;
    };
  }[];
}
