import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import { environment } from '@environments/environment';
import { exercisesFeatureKey, ExercisesState, exercisesReducer } from './exercises.reducer';

export interface AppState {
  [exercisesFeatureKey]: ExercisesState;
}

export const reducers: ActionReducerMap<AppState> = {
  [exercisesFeatureKey]: exercisesReducer,
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
