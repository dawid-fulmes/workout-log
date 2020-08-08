import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-exercise-overview-content',
  templateUrl: './exercise-overview-content.component.html',
  styleUrls: ['./exercise-overview-content.component.scss'],
})
export class ExerciseOverviewContentComponent {
  @Input() imageUrl$: Observable<string>;
  @Input() description$: Observable<string>;
}
