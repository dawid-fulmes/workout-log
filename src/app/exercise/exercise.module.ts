import { NgModule } from '@angular/core';

import { ExerciseRoutingModule } from './exercise-routing.module';
import { containers } from './containers';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [...containers],
  imports: [SharedModule, ExerciseRoutingModule],
})
export class ExerciseModule {}
