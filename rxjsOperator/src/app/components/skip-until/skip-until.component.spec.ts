import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkipUntilComponent } from './skip-until.component';

describe('SkipUntilComponent', () => {
  let component: SkipUntilComponent;
  let fixture: ComponentFixture<SkipUntilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkipUntilComponent]
    });
    fixture = TestBed.createComponent(SkipUntilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
