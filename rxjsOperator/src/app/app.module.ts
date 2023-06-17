import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TakeComponent } from './components/take/take.component';
import { TakeUntilComponent } from './components/take-until/take-until.component';
import { TakeUntilUseCaseComponentComponent } from './components/take-until-use-case-component/take-until-use-case-component.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { TakeLastComponent } from './components/take-last/take-last.component';
import { TakeWhileComponent } from './components/take-while/take-while.component';
import { SkipComponent } from './components/skip/skip.component';
import { SkipLastComponent } from './components/skip-last/skip-last.component';
import { SkipUntilComponent } from './components/skip-until/skip-until.component';
import { SkipWhileComponent } from './components/skip-while/skip-while.component';
import { BufferComponent } from './components/buffer/buffer.component';
import { EndWithComponent } from './components/end-with/end-with.component';
import { StartWithComponent } from './components/start-with/start-with.component';
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
import { IntervalComponent } from './components/interval/interval.component';

@NgModule({
  declarations: [
    AppComponent,
    TakeComponent,
    TakeUntilComponent,
    TakeUntilUseCaseComponentComponent,
    HomeComponentComponent,
    TakeLastComponent,
    TakeWhileComponent,
    SkipComponent,
    SkipLastComponent,
    SkipUntilComponent,
    SkipWhileComponent,
    BufferComponent,
    EndWithComponent,
    StartWithComponent,
    DefaultIfEmptyComponent,
    FirstComponent,
    MapComponent,
    MapToComponent,
    LastComponent,
    FromComponent,
    OfComponent,
    DelayComponent,
    TimerComponent,
    TimerOutComponent,
    TimerOutWithComponent,
    TimeStampComponent,
    IntervalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
