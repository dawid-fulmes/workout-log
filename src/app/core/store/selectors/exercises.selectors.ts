import { createFeatureSelector, createSelector } from '@ngrx/store';

import { exercisesFeatureKey, ExercisesState } from './../reducers/exercises.reducer';
import { Exercise } from '@app/core/models';
import { AppState } from '@app/core/store/reducers';

export const selectExercises = createFeatureSelector<ExercisesState>(exercisesFeatureKey);

export const selectExerciseById = createSelector<AppState, number, ExercisesState, Exercise>(
  selectExercises,
  (exercises, id) => exercises[id]
);
