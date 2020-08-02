import { TestBed } from '@angular/core/testing';

import { ExerciseOverviewResolverService } from './exercise-overview-resolver.service';

describe('ExerciseOverviewResolverService', () => {
  let service: ExerciseOverviewResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExerciseOverviewResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
