import { Component, OnInit } from '@angular/core';
import { of, map, from } from 'rxjs';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  ngOnInit(): void {
    // const source$ = of(1, 2, 3, 4, 5);
    // source$.pipe(map(x => x * 10)).subscribe(count => {
    //   console.log(count)
    // })

    const users = [
      { id: 1, firstName: 'John', lastName: 'Doe' },
      { id: 2, firstName: 'Jane', lastName: 'White' },
      { id: 3, firstName: 'Foo', lastName: 'Bar' },
      { id: 4, firstName: 'Mike', lastName: 'Moon' },
    ];

    const source$ = from(users);
    source$.pipe(map(value => {
      return {
        id: value.id,
        fullName: `${value.firstName} ${value.lastName}`
      }
    })
    ).subscribe(count => {
      console.log(count)
    })
  }
}
