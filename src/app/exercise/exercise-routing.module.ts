import { ExerciseRouteUrlParams } from './constants/exercise-route-url.enum';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExercisesBrowserComponent, ExerciseOverviewComponent } from './containers';
import { ExerciseOverviewResolverService } from './resolvers';

const routes: Routes = [
  {
    path: '',
    component: ExercisesBrowserComponent,
  },
  {
    path: `:${ExerciseRouteUrlParams.ExerciseId}`,
    component: ExerciseOverviewComponent,
    resolve: {
      exercise: ExerciseOverviewResolverService,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExerciseRoutingModule {}
