import { Component, OnInit } from '@angular/core';
import { of, mapTo } from 'rxjs';

@Component({
  selector: 'app-map-to',
  templateUrl: './map-to.component.html',
  styleUrls: ['./map-to.component.css']
})
export class MapToComponent implements OnInit {
  ngOnInit(): void {
    const source$ = of(1, 2, 3, 4, 5);
    source$.pipe(mapTo('P')).subscribe(count => {
      console.log(count)
    })
  }
}
