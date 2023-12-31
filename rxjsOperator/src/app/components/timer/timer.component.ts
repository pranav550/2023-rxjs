import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  ngOnInit(): void {
    const source$ = timer(5000, 250);
    source$.subscribe(count => {
      console.log(count)
    })
  }
}
