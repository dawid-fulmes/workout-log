import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'exercise',
    pathMatch: 'full',
  },
  {
    path: 'exercise',
    loadChildren: () => import('./exercise/exercise.module').then((m) => m.ExerciseModule),
  },
  {
    path: '**',
    redirectTo: '/',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
