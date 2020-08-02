import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, zip } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { environment } from '@environments/environment';
import { ExerciseSuggestionDto, ExerciseDto, ExerciseImageDto, Exercise, ExerciseSuggestion } from '@app/core/models';

@Injectable({ providedIn: 'root' })
export class ExerciseService {
  baseUrl = environment.exerciseApi;
  language = '2';

  constructor(private http: HttpClient) {}

  searchExercise$(term: string): Observable<ExerciseSuggestion[]> {
    return this.http
      .get<ExerciseSuggestionDto>(`${this.baseUrl}/exercise/search`, {
        params: { term, language: this.language },
      })
      .pipe(
        catchError(() => of({ suggestions: [] })),
        map(this.parseExerciseSuggestions)
      );
  }

  getExerciseById$(id: number): Observable<Exercise> {
    return zip(
      this.http.get<ExerciseDto>(`${this.baseUrl}/exercise/${id}`, {}),
      this.http.get<ExerciseImageDto[]>(`${this.baseUrl}/exerciseimage`, {
        params: { exercise: id.toString() },
      })
    ).pipe(map(this.parseExercise));
  }

  private parseExerciseSuggestions(exerciseSuggestionDto: ExerciseSuggestionDto): ExerciseSuggestion[] {
    return exerciseSuggestionDto.suggestions.map(({ value, data }) => ({ value, url: `/exercise/${data.id}` }));
  }

  private parseExercise([exerciseDto, [exerciseImageDto]]: [ExerciseDto, ExerciseImageDto[]]): Exercise {
    const { id, description, name } = exerciseDto;
    const image = (exerciseImageDto && exerciseImageDto.image) || '';
    return { id, description, image, name: name || 'Unnamed exercise' };
  }
}
