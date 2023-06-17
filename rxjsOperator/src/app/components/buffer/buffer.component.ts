import { interval, buffer, Subject, map } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buffer',
  templateUrl: './buffer.component.html',
  styleUrls: ['./buffer.component.css']
})
export class BufferComponent implements OnInit {
  switch$: Subject<any> = new Subject();
  constructor() {

  }
  ngOnInit(): void {

    const source$ = interval(1000);
    source$.pipe(
      buffer(this.switch$),
      map(val => {
        return val.reduce((itr, sum) => itr + sum, 0)
      })
    ).subscribe(value => {
      console.log(value)
    })
  }

  release() {
    this.switch$.next('');
  }



}
