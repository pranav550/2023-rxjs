import { Component, OnInit } from '@angular/core';
import { last, of } from 'rxjs';
@Component({
  selector: 'app-last',
  templateUrl: './last.component.html',
  styleUrls: ['./last.component.css']
})
export class LastComponent implements OnInit {
  constructor() {

  }

  ngOnInit(): void {
    const source$ = of(1, 3, 5);
    source$.pipe(last(count => {
      return count % 2 === 0;
    }, 'No Result found')).subscribe(count => {
      console.log(count)
    })
  }
}
