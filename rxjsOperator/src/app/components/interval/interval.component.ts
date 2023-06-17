import { Component, OnInit } from '@angular/core';
import { take, interval } from 'rxjs';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css']
})
export class IntervalComponent implements OnInit {

  ngOnInit(): void {
    const source$ = interval(1000);
    source$.pipe(take(10)).subscribe(count => {
      console.log(count)
    })
  }
}
