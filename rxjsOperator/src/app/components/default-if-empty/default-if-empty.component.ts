import { of, defaultIfEmpty } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-if-empty',
  templateUrl: './default-if-empty.component.html',
  styleUrls: ['./default-if-empty.component.css']
})
export class DefaultIfEmptyComponent implements OnInit {

  ngOnInit(): void {
    const source$ = of();
    source$.pipe(defaultIfEmpty(99)).subscribe(count => {
      console.log(count)
    })
  }
}

