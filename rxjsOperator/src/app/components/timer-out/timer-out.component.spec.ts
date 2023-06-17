import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerOutComponent } from './timer-out.component';

describe('TimerOutComponent', () => {
  let component: TimerOutComponent;
  let fixture: ComponentFixture<TimerOutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TimerOutComponent]
    });
    fixture = TestBed.createComponent(TimerOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
