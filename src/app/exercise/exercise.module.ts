import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExerciseRoutingModule } from './exercise-routing.module';
import { containers } from './containers';

@NgModule({
  declarations: [...containers],
  imports: [CommonModule, ExerciseRoutingModule],
})
export class ExerciseModule {}
