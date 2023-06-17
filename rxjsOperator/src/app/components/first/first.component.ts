import { Component, OnInit } from '@angular/core';
import { of, first } from 'rxjs';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  ngOnInit(): void {
    const source$ = of(1, 2, 3, 4, 5);
    source$.pipe(first()).subscribe(count => {
      console.log(count)
    })
  }
}
