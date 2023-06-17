import { Component, OnInit } from '@angular/core';
import { delay, of } from 'rxjs';

@Component({
  selector: 'app-delay',
  templateUrl: './delay.component.html',
  styleUrls: ['./delay.component.css']
})
export class DelayComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
    const source$ = of(1, 2, 3, 4, 5);
    source$.pipe(delay(2000)).subscribe(count => {
      console.log(count)
    })
  }
}
