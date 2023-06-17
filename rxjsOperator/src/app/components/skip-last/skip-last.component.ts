import { interval, skipLast, of } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skip-last',
  templateUrl: './skip-last.component.html',
  styleUrls: ['./skip-last.component.css']
})
export class SkipLastComponent implements OnInit {

  ngOnInit(): void {
    const source$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    source$.pipe(skipLast(5)).subscribe(value => {
      console.log(value)
    })
  }
}
