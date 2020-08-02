import { ExercisesActions } from '@app/core/store/actions';
import { exercisesReducer, initialState } from './exercises.reducer';
import { Exercise } from '@app/core/models';

describe('Exercises Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;
      const result = exercisesReducer(initialState, action);
      expect(result).toBe(initialState);
    });
  });

  describe('ExercisesActions.loadExercisesSuccess', () => {
    it('should append new exercise to state', () => {
      const exercise: Exercise = { id: 1, description: '', name: '', image: '' };
      const action = ExercisesActions.loadExercisesSuccess({ exercise });
      const result = exercisesReducer(initialState, action);
      expect(result).toEqual({ ...initialState, [exercise.id]: exercise });
    });
  });
});
