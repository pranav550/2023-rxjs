import { interval, timestamp } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-stamp',
  templateUrl: './time-stamp.component.html',
  styleUrls: ['./time-stamp.component.css']
})
export class TimeStampComponent implements OnInit {

  ngOnInit(): void {
    const source$ = interval(1000);
    source$.pipe(timestamp()).subscribe(count => {
      console.log(count)
    })
  }
}
