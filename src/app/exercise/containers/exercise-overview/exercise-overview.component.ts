import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { pluck, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { AppState } from '@app/core/store/reducers';
import { selectExerciseById } from '@app/core/store/selectors';
import { Exercise } from '@app/core/models';
import { ExerciseRouteUrlParams } from '@app/exercise/constants';

@Component({
  selector: 'app-exercise-overview',
  templateUrl: './exercise-overview.component.html',
})
export class ExerciseOverviewComponent {
  exercise$: Observable<Exercise> = this.route.params.pipe(
    pluck(ExerciseRouteUrlParams.ExerciseId),
    switchMap((id) => this.store.select(selectExerciseById, id))
  );

  constructor(private route: ActivatedRoute, private store: Store<AppState>, private location: Location) {}

  onBackClick(): void {
    this.location.back();
  }
}
