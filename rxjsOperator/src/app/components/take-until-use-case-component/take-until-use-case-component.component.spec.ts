import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeUntilUseCaseComponentComponent } from './take-until-use-case-component.component';

describe('TakeUntilUseCaseComponentComponent', () => {
  let component: TakeUntilUseCaseComponentComponent;
  let fixture: ComponentFixture<TakeUntilUseCaseComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TakeUntilUseCaseComponentComponent]
    });
    fixture = TestBed.createComponent(TakeUntilUseCaseComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
