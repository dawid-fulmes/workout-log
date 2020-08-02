import { Action, createReducer, on } from '@ngrx/store';

import { Exercise } from '@app/core/models';
import { ExercisesActions } from '../actions';

export const exercisesFeatureKey = 'exercises';

export interface ExercisesState {
  [key: number]: Exercise;
}

export const initialState: ExercisesState = {};

export const exercisesReducer = createReducer(
  initialState,
  on(ExercisesActions.loadExercisesSuccess, (state, { exercise }) => ({ ...state, [exercise.id]: exercise }))
);
