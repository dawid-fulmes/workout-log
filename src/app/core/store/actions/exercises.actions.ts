import { createAction, props } from '@ngrx/store';

import { Exercise } from '@app/core/models';

export const loadExercisesSuccess = createAction('[Exercises] Load Exercises Success', props<{ exercise: Exercise }>());
