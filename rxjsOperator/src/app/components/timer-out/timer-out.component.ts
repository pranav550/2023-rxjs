import { interval, timeout } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer-out',
  templateUrl: './timer-out.component.html',
  styleUrls: ['./timer-out.component.css']
})
export class TimerOutComponent implements OnInit {

  ngOnInit(): void {
    const source$ = interval(1000);
    source$.pipe(timeout(900)).subscribe(count => {
      console.log(count)
    })
  }

}
