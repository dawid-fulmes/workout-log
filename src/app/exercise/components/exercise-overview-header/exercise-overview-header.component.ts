import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-exercise-overview-header',
  templateUrl: './exercise-overview-header.component.html',
  styleUrls: ['./exercise-overview-header.component.scss'],
})
export class ExerciseOverviewHeaderComponent {
  @Input() name$: Observable<string>;

  @Output() backButtonClicked = new EventEmitter<void>();

  onButtonClick(): void {
    this.backButtonClicked.emit();
  }
}
