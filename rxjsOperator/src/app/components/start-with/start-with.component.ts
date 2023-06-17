import { interval, startWith } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-with',
  templateUrl: './start-with.component.html',
  styleUrls: ['./start-with.component.css']
})
export class StartWithComponent implements OnInit {
  constructor() {

  }

  ngOnInit(): void {
    const source$ = interval(1000);
    source$.pipe(startWith(99)).subscribe(count => {
      console.log(count)
    })
  }


}
