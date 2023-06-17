import { Component, OnInit } from '@angular/core';
import { of, skipWhile } from 'rxjs';
@Component({
  selector: 'app-skip-while',
  templateUrl: './skip-while.component.html',
  styleUrls: ['./skip-while.component.css']
})
export class SkipWhileComponent implements OnInit {

  ngOnInit(): void {
    const source$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    source$.pipe(skipWhile(val => val <= 5)).subscribe(value => {
      console.log(value)
    })
  }
}
