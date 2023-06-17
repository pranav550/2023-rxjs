import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-of',
  templateUrl: './of.component.html',
  styleUrls: ['./of.component.css']
})
export class OfComponent implements OnInit {

  ngOnInit(): void {
    const source$ = of({ name: "ravi" }, [1, 2, 3, 4], "pranav");
    source$.subscribe(count => {
      console.log(count)
    })
  }
}
