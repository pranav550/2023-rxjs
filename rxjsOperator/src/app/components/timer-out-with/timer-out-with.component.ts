import { interval, timeoutWith, of } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer-out-with',
  templateUrl: './timer-out-with.component.html',
  styleUrls: ['./timer-out-with.component.css']
})
export class TimerOutWithComponent implements OnInit {

  ngOnInit(): void {
    const source$ = interval(1000);
    const source1$ = of('Hello World');
    source$.pipe(timeoutWith(900, source1$)).subscribe(value => {
      console.log(value)
    })
  }

}
