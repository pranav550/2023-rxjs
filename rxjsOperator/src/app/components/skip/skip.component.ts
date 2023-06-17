import { interval, skip, take } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skip',
  templateUrl: './skip.component.html',
  styleUrls: ['./skip.component.css']
})
export class SkipComponent implements OnInit {
  ngOnInit(): void {
    const source$ = interval(1000);
    source$.pipe(skip(5), take(6)).subscribe(value => {
      console.log(value)
    })
  }
}
