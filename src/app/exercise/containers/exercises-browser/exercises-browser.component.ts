import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { switchMap, debounceTime, distinctUntilChanged, tap, filter } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

import { ExerciseService } from '@app/exercise/services';
import { ExerciseRouteUrlQueryParams } from '@app/exercise/constants';
import { ExerciseSuggestion } from '@app/core/models';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercises-browser.component.html',
})
export class ExercisesBrowserComponent implements OnInit, AfterViewInit {
  search: FormControl;
  suggestions$: Observable<ExerciseSuggestion[]>;

  constructor(private exerciseService: ExerciseService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const initialValue = this.route.snapshot.queryParams[ExerciseRouteUrlQueryParams.Query] || '';
    this.search = new FormControl(initialValue);

    this.suggestions$ = this.search.valueChanges.pipe(
      filter((value) => value.length > 0),
      tap((value) => this.handleQueryParams(value)),
      distinctUntilChanged(),
      debounceTime(300),
      switchMap((value) => this.exerciseService.searchExercise$(value))
    );
  }

  ngAfterViewInit(): void {
    this.search.enable({ emitEvent: true });
  }

  private handleQueryParams(value: string): void {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { [ExerciseRouteUrlQueryParams.Query]: value },
    });
  }
}
