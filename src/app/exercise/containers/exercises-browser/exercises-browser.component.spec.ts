import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercisesBrowserComponent } from './exercises-browser.component';

describe('ExerciseBrowserComponent', () => {
  let component: ExercisesBrowserComponent;
  let fixture: ComponentFixture<ExercisesBrowserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExercisesBrowserComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercisesBrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
