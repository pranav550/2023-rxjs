import { Component, OnInit } from '@angular/core';
import { interval, endWith, of } from 'rxjs';

@Component({
  selector: 'app-end-with',
  templateUrl: './end-with.component.html',
  styleUrls: ['./end-with.component.css']
})
export class EndWithComponent implements OnInit {


  ngOnInit(): void {
    const source$ = of(1, 2, 3, 4, 5);
    source$.pipe(endWith(99)).subscribe(count => {
      console.log(count)
    })
  }
}
