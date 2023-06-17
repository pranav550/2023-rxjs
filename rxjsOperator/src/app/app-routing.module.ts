import { startWith } from 'rxjs';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { TakeComponent } from './components/take/take.component';
import { TakeUntilUseCaseComponentComponent } from './components/take-until-use-case-component/take-until-use-case-component.component';
import { TakeUntilComponent } from './components/take-until/take-until.component';
import { TakeLastComponent } from './components/take-last/take-last.component';
import { TakeWhileComponent } from './components/take-while/take-while.component';
import { SkipComponent } from './components/skip/skip.component';
import { SkipLastComponent } from './components/skip-last/skip-last.component';
import { SkipUntilComponent } from './components/skip-until/skip-until.component';
import { SkipWhileComponent } from './components/skip-while/skip-while.component';
import { BufferComponent } from './components/buffer/buffer.component';
import { StartWithComponent } from './components/start-with/start-with.component';
import { EndWithComponent } from './components/end-with/end-with.component';
import { DefaultIfEmptyComponent } from './components/default-if-empty/default-if-empty.component';
import { FirstComponent } from './components/first/first.component';
import { MapComponent } from './components/map/map.component';
import { MapToComponent } from './components/map-to/map-to.component';
import { LastComponent } from './components/last/last.component';
import { FromComponent } from './components/from/from.component';
import { OfComponent } from './components/of/of.component';
import { DelayComponent } from './components/delay/delay.component';
import { TimerComponent } from './components/timer/timer.component';
import { TimerOutComponent } from './components/timer-out/timer-out.component';
import { TimerOutWithComponent } from './components/timer-out-with/timer-out-with.component';
import { TimeStampComponent } from './components/time-stamp/time-stamp.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponentComponent },
  { path: 'take', component: TakeComponent },
  { path: 'takeUntil', component: TakeUntilComponent },
  { path: 'takeUntilUseCase', component: TakeUntilUseCaseComponentComponent },
  { path: 'takeLast', component: TakeLastComponent },
  { path: 'takeWhile', component: TakeWhileComponent },
  { path: 'skip', component: SkipComponent },
  { path: 'skipLast', component: SkipLastComponent },
  { path: 'skipUntil', component: SkipUntilComponent },
  { path: 'skipWhile', component: SkipWhileComponent },
  { path: 'buffer', component: BufferComponent },
  { path: 'startWith', component: StartWithComponent },
  { path: 'endWith', component: EndWithComponent },
  { path: 'defaultIfEmpty', component: DefaultIfEmptyComponent },
  { path: 'first', component: FirstComponent },
  { path: 'map', component: MapComponent },
  { path: 'mapTo', component: MapToComponent },
  { path: 'last', component: LastComponent },
  { path: 'from', component: FromComponent },
  { path: 'of', component: OfComponent },
  { path: 'delay', component: DelayComponent },
  { path: 'timer', component: TimerComponent },
  { path: 'timeOut', component: TimerOutComponent },
  { path: 'timeOutWith', component: TimerOutWithComponent },
  { path: 'timestamp', component: TimeStampComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
