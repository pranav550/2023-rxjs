import { Component, OnInit } from '@angular/core';
import { Subject, interval, skipUntil } from 'rxjs';

@Component({
  selector: 'app-skip-until',
  templateUrl: './skip-until.component.html',
  styleUrls: ['./skip-until.component.css']
})
export class SkipUntilComponent implements OnInit {
  switchOn$: Subject<any> = new Subject<any>();
  count = 0;
  ngOnInit(): void {
    const source$ = interval(1000);
    source$.pipe(skipUntil(this.switchOn$)).subscribe(val => {
      this.count = val
    })
  }

  on() {
    this.switchOn$.next('');
  }
}
