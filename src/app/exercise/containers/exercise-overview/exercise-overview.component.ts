import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { pluck, switchMap, shareReplay } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { AppState } from '@app/core/store/reducers';
import { selectExerciseById } from '@app/core/store/selectors';
import { ExerciseRouteUrlParams } from '@app/exercise/constants';

@Component({
  selector: 'app-exercise-overview',
  templateUrl: './exercise-overview.component.html',
})
export class ExerciseOverviewComponent {
  exercise$ = this.route.params.pipe(
    pluck(ExerciseRouteUrlParams.ExerciseId),
    switchMap((id) => this.store.select(selectExerciseById, id)),
    shareReplay(1)
  );

  exerciseName$ = this.exercise$.pipe(pluck('name'));
  imageUrl$ = this.exercise$.pipe(pluck('image'));
  description$ = this.exercise$.pipe(pluck('description'));

  constructor(private route: ActivatedRoute, private store: Store<AppState>, private location: Location) {}

  onBackClick(): void {
    this.location.back();
  }
}
