import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { tap, switchMap, first } from 'rxjs/operators';

import { Exercise } from '@app/core/models';
import { ExerciseService } from '@app/exercise/services';
import { AppState } from '@app/core/store/reducers';
import { selectExerciseById } from '@app/core/store/selectors';
import { ExercisesActions } from '@app/core/store/actions';
import { ExerciseRouteUrlParams } from '../constants';

@Injectable({ providedIn: 'root' })
export class ExerciseOverviewResolverService implements Resolve<Exercise> {
  constructor(private exerciseService: ExerciseService, private store: Store<AppState>) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Exercise> {
    const exerciseId = +route.params[ExerciseRouteUrlParams.ExerciseId];
    return this.store.select(selectExerciseById, exerciseId).pipe(
      first(),
      switchMap((selectedExercise) =>
        selectedExercise
          ? of(selectedExercise)
          : this.exerciseService.getExerciseById$(exerciseId).pipe(
              tap((exercise) => {
                this.store.dispatch(ExercisesActions.loadExercisesSuccess({ exercise }));
              })
            )
      )
    );
  }
}
