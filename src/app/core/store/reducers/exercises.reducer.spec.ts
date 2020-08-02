import { exercisesReducer, initialState } from './exercises.reducer';

describe('Exercises Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = exercisesReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
