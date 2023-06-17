import { Component, OnInit } from '@angular/core';
import { interval, take } from 'rxjs';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.css']
})
export class TakeComponent implements OnInit {

  ngOnInit(): void {
    const source$ = interval(1000);
    source$.pipe(take(4)).subscribe(count => {
      console.log(count)
    })
  }



}
