import { Component, OnInit } from '@angular/core';
import { of, takeWhile } from 'rxjs';

@Component({
  selector: 'app-take-while',
  templateUrl: './take-while.component.html',
  styleUrls: ['./take-while.component.css']
})
export class TakeWhileComponent implements OnInit {
  constructor() {

  }

  ngOnInit(): void {
    const source$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    source$.pipe(takeWhile(val => val < 5, true)).subscribe(value => {
      console.log(value)
    })
  }
}
