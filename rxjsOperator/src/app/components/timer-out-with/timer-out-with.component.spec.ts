import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerOutWithComponent } from './timer-out-with.component';

describe('TimerOutWithComponent', () => {
  let component: TimerOutWithComponent;
  let fixture: ComponentFixture<TimerOutWithComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TimerOutWithComponent]
    });
    fixture = TestBed.createComponent(TimerOutWithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
