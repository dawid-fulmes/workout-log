import { selectExerciseById } from '.';

describe('Exercises Selectors', () => {
  describe('selectExerciseById', () => {
    it('should return exercise by id', () => {
      const exercises = {
        1: { id: 1, description: '', name: '', image: '' },
        2: { id: 2, description: '', name: '', image: '' },
      };
      const result = selectExerciseById.projector(exercises, 1);
      expect(result).toBe(exercises[1]);
    });
  });
});
