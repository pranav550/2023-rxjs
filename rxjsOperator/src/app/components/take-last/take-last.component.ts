import { Component, OnInit } from '@angular/core';
import { of, takeLast } from 'rxjs';
@Component({
  selector: 'app-take-last',
  templateUrl: './take-last.component.html',
  styleUrls: ['./take-last.component.css']
})
export class TakeLastComponent implements OnInit {
  ngOnInit(): void {
    const source$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    source$.pipe(takeLast(2)).subscribe(count => {
      console.log(count)
    })
  }
}
