import { Observable } from 'rxjs';
import { Component, Input } from '@angular/core';

import { ExerciseSuggestion } from '@app/core/models';

@Component({
  selector: 'app-exercise-suggestion-list',
  templateUrl: './exercise-suggestion-list.component.html',
  styleUrls: ['./exercise-suggestion-list.component.scss'],
})
export class ExerciseSuggestionListComponent {
  @Input() suggestions$: Observable<ExerciseSuggestion[]>;
}
