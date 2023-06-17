import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.css']
})
export class FromComponent implements OnInit {
  ngOnInit(): void {
    // const source$ = from([10, 20, 30, 40, 50]);
    // source$.subscribe(count => {
    //   console.log(count)
    // })
    ///////////////////////////////////////////////////

    // const source$ = from("Hello World");
    // source$.subscribe(count => {
    //   console.log(count)
    // })

    ////////////////////////////////////////////////////

    const countries = new Map();
    countries.set('in', 'India');
    countries.set('np', 'Nepal');
    countries.set('jp', 'Japan');
    countries.set('br', 'Brazil');
    const source$ = from(countries);
    source$.subscribe(count => {
      console.log(count)
    })

  }
}
