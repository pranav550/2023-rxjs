import { interval, Subject, takeUntil } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-take-until-use-case-component',
  templateUrl: './take-until-use-case-component.component.html',
  styleUrls: ['./take-until-use-case-component.component.css']
})
export class TakeUntilUseCaseComponentComponent implements OnInit, OnDestroy {
  constructor(private router: Router) {

  }
  OnDestroy$: Subject<any> = new Subject<any>();
  ngOnInit(): void {
    const source1$ = interval(500);
    const source2$ = interval(1000);
    const source3$ = interval(1500);
    const source4$ = interval(2000);

    source1$.pipe(takeUntil(this.OnDestroy$)).subscribe(count => {
      console.log(count)
    })
    source2$.pipe(takeUntil(this.OnDestroy$)).subscribe(count => {
      console.log(count)
    })
    source3$.pipe(takeUntil(this.OnDestroy$)).subscribe(count => {
      console.log(count)
    })
    source4$.pipe(takeUntil(this.OnDestroy$)).subscribe(count => {
      console.log(count)
    })
  }

  ngOnDestroy(): void {
    this.OnDestroy$.next('');
    this.OnDestroy$.complete();
  }

}
