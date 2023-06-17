import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastComponent } from './last.component';

describe('LastComponent', () => {
  let component: LastComponent;
  let fixture: ComponentFixture<LastComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LastComponent]
    });
    fixture = TestBed.createComponent(LastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
